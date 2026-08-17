const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

const projectRoot = process.cwd();
const publicRoot = path.join(projectRoot, "public");
const productsFile = path.join(projectRoot, "src", "data", "products.ts");
const lithiumRoot = path.join(publicRoot, "images", "cat-01-lithium-images");

const clamp = (value, min = 0, max = 255) =>
  Math.max(min, Math.min(max, value));

function smoothstep(edge0, edge1, value) {
  const x = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return x * x * (3 - 2 * x);
}

function mix(a, b, amount) {
  return a + (b - a) * amount;
}

function outputPath(input) {
  return input.replace(/\.webp$/i, "-reference-tone.webp");
}

async function walk(directory) {
  const output = [];
  const entries = await fs.readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...(await walk(fullPath)));
    else output.push(fullPath);
  }
  return output;
}

async function collectInputs(productsSource) {
  const urls = new Set();
  const matches = productsSource.matchAll(/"(\/images\/cat-[^"?]+-images\/[^"?]+\.webp)"/g);
  for (const match of matches) {
    if (!match[1].endsWith("-reference-tone.webp")) urls.add(match[1]);
  }

  const inputs = [...urls].map((url) =>
    path.join(publicRoot, ...decodeURIComponent(url).replace(/^\//, "").split("/")),
  );

  const lithiumFiles = await walk(lithiumRoot);
  for (const file of lithiumFiles) {
    if (
      file.toLowerCase().endsWith(".webp") &&
      file.toLowerCase().includes(`${path.sep}curated${path.sep}`) &&
      !file.toLowerCase().endsWith("-reference-tone.webp")
    ) {
      inputs.push(file);
    }
  }

  return [...new Set(inputs)];
}

async function normalize(input) {
  const output = outputPath(input);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const pixels = Buffer.from(data);

  for (let index = 0; index < pixels.length; index += 4) {
    if (pixels[index + 3] === 0) continue;
    const r = pixels[index];
    const g = pixels[index + 1];
    const b = pixels[index + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const redDominance = r - Math.max(g, b);
    const redMask =
      smoothstep(10, 42, redDominance) *
      smoothstep(0.16, 0.52, saturation) *
      (1 - smoothstep(225, 250, luminance));

    if (redMask > 0.01) {
      const amount = redMask * 0.7;
      pixels[index] = Math.round(mix(r, clamp(luminance * 1.727), amount));
      pixels[index + 1] = Math.round(mix(g, clamp(luminance * 0.808), amount));
      pixels[index + 2] = Math.round(mix(b, clamp(luminance * 0.788), amount));
      continue;
    }

    const darkMask =
      (1 - smoothstep(105, 190, luminance)) *
      (1 - smoothstep(0.22, 0.48, saturation));
    if (darkMask > 0.01) {
      const target = clamp((luminance - 8) * 1.1 + 8);
      const amount = darkMask * 0.18;
      pixels[index] = Math.round(mix(r, target * 0.98, amount));
      pixels[index + 1] = Math.round(mix(g, target, amount));
      pixels[index + 2] = Math.round(mix(b, target * 1.03, amount));
    }
  }

  await sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .webp({ quality: 88, smartSubsample: true, effort: 6 })
    .toFile(output);
}

async function runWorkers(inputs, concurrency = 4) {
  let cursor = 0;
  let completed = 0;
  async function worker() {
    while (cursor < inputs.length) {
      const index = cursor++;
      await normalize(inputs[index]);
      completed += 1;
      if (completed % 25 === 0 || completed === inputs.length) {
        console.log(`Processed ${completed}/${inputs.length}`);
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
}

async function main() {
  const productsSource = await fs.readFile(productsFile, "utf8");
  const inputs = await collectInputs(productsSource);
  const missing = [];
  for (const input of inputs) {
    try {
      await fs.access(input);
    } catch {
      missing.push(input);
    }
  }
  if (missing.length) {
    throw new Error(`Missing ${missing.length} source images:\n${missing.join("\n")}`);
  }

  console.log(`Detail images to process: ${inputs.length}`);
  await runWorkers(inputs);

  const updatedSource = productsSource.replace(
    /(\/images\/cat-[^"?]+-images\/[^"?]+)(\.webp)(?=")/g,
    (full, stem, extension) =>
      stem.endsWith("-reference-tone") ? full : `${stem}-reference-tone${extension}`,
  );
  await fs.writeFile(productsFile, updatedSource, "utf8");
  console.log("Updated src/data/products.ts to reference the calibrated WebP files.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
