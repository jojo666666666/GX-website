const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

const root = path.join(
  process.cwd(),
  "public",
  "images",
  "product-listing",
);

const clamp = (value, min = 0, max = 255) =>
  Math.max(min, Math.min(max, value));

function smoothstep(edge0, edge1, value) {
  const x = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return x * x * (3 - 2 * x);
}

function mix(a, b, amount) {
  return a + (b - a) * amount;
}

async function normalize(input) {
  const output = input.replace("-listing-main.webp", "-reference-tone-listing-main.webp");
  const image = sharp(input).removeAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const pixels = Buffer.from(data);

  for (let index = 0; index < pixels.length; index += 3) {
    const r = pixels[index];
    const g = pixels[index + 1];
    const b = pixels[index + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const chroma = max - min;
    const saturation = max === 0 ? 0 : chroma / max;
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Target only warm red plastic. The soft mask retains highlights and texture.
    const redDominance = r - Math.max(g, b);
    const redMask =
      smoothstep(10, 42, redDominance) *
      smoothstep(0.16, 0.52, saturation) *
      (1 - smoothstep(225, 250, luminance));

    if (redMask > 0.01) {
      // Reference photo median: RGB(173, 81, 79), luminance about 100.
      // Scale from each pixel's luminance so highlights and shadows remain real.
      const targetR = clamp(luminance * 1.727);
      const targetG = clamp(luminance * 0.808);
      const targetB = clamp(luminance * 0.788);
      const amount = redMask * 0.7;
      pixels[index] = Math.round(mix(r, targetR, amount));
      pixels[index + 1] = Math.round(mix(g, targetG, amount));
      pixels[index + 2] = Math.round(mix(b, targetB, amount));
      continue;
    }

    // Give neutral black/dark-grey housings a consistent clean charcoal tone.
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
    raw: { width: info.width, height: info.height, channels: 3 },
  })
    .webp({ quality: 88, smartSubsample: true, effort: 6 })
    .toFile(output);

  const size = (await fs.stat(output)).size;
  console.log(`${path.relative(root, output)} (${Math.round(size / 1024)} KB)`);
}

async function main() {
  const categories = await fs.readdir(root, { withFileTypes: true });
  const inputs = [];

  for (const category of categories) {
    if (!category.isDirectory()) continue;
    const categoryPath = path.join(root, category.name);
    const entries = await fs.readdir(categoryPath, { withFileTypes: true });
    for (const entry of entries) {
      if (
        entry.isFile() &&
        entry.name.endsWith("-listing-main.webp") &&
        !entry.name.includes("-color-matched-") &&
        !entry.name.includes("-reference-tone-")
      ) {
        inputs.push(path.join(categoryPath, entry.name));
      }
    }
  }

  await Promise.all(inputs.map(normalize));
  console.log(`Normalized ${inputs.length} product listing images.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
