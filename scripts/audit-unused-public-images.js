const fs = require("node:fs/promises");
const path = require("node:path");

const projectRoot = process.cwd();
const publicImages = path.join(projectRoot, "public", "images");
const scanRoots = [path.join(projectRoot, "src")];
const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif", ".ico"]);
const textExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".scss", ".json", ".md", ".html"]);

const normalize = (value) => {
  const clean = value.split(/[?#]/, 1)[0].replace(/\\/g, "/");
  try {
    return decodeURIComponent(clean).toLowerCase();
  } catch {
    return clean.toLowerCase();
  }
};

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

async function collectReferences() {
  const references = new Set();
  for (const root of scanRoots) {
    const files = await walk(root);
    for (const file of files) {
      if (!textExtensions.has(path.extname(file).toLowerCase())) continue;
      const text = await fs.readFile(file, "utf8");
      const matches = text.matchAll(/(?:https?:\/\/[^\s"'`]+)?(\/images\/[^"'`\s)>,}]+)/g);
      for (const match of matches) {
        if (!match[1].includes("${")) references.add(normalize(match[1]));
      }
    }
  }
  return references;
}

function isDynamicallyUsed(relativeUrl) {
  const normalized = normalize(relativeUrl);
  if (
    normalized.startsWith("/images/product-listing/") &&
    /\/\d{2}-ganxing-[^/]+-main\.webp$/.test(normalized)
  ) {
    // ProductCard builds these URLs from the category and product model.
    return true;
  }

  const dynamicallyCuratedModels = [
    "gx5901 gen2",
    "gx5905da",
    "gx5905ga",
    "gx5966da",
    "gx5966ro",
  ];
  if (
    normalized.startsWith("/images/cat-01-lithium-images/") &&
    normalized.includes("/curated/") &&
    normalized.endsWith(".webp") &&
    dynamicallyCuratedModels.some((model) =>
      normalized.includes(`/${model}/curated/`),
    )
  ) {
    // The lithium detail page builds curated gallery URLs dynamically.
    return true;
  }

  return false;
}

async function main() {
  const shouldDelete = process.argv.includes("--delete");
  const references = await collectReferences();
  const files = (await walk(publicImages)).filter((file) =>
    imageExtensions.has(path.extname(file).toLowerCase()),
  );
  const unused = [];
  const used = [];
  const existingUrls = new Set();

  for (const file of files) {
    const relative = `/images/${path.relative(publicImages, file).replace(/\\/g, "/")}`;
    existingUrls.add(normalize(relative));
    const item = { file, relative, size: (await fs.stat(file)).size };
    if (references.has(normalize(relative)) || isDynamicallyUsed(relative)) used.push(item);
    else unused.push(item);
  }

  const bytes = unused.reduce((sum, item) => sum + item.size, 0);
  const byTopDirectory = new Map();
  for (const item of unused) {
    const top = item.relative.split("/")[2] || "(root)";
    const current = byTopDirectory.get(top) || { count: 0, bytes: 0 };
    current.count += 1;
    current.bytes += item.size;
    byTopDirectory.set(top, current);
  }

  console.log(`Used images: ${used.length}`);
  console.log(`Unused images: ${unused.length}`);
  console.log(`Recoverable: ${(bytes / 1024 / 1024).toFixed(2)} MB`);
  const missingReferences = [...references].filter((reference) => {
    const extension = path.extname(reference).toLowerCase();
    return imageExtensions.has(extension) && !existingUrls.has(reference);
  });
  console.log(`Missing explicit image references: ${missingReferences.length}`);
  for (const reference of missingReferences) console.log(`  MISSING ${reference}`);
  console.log("\nUnused by top directory:");
  for (const [directory, stats] of [...byTopDirectory].sort()) {
    console.log(`${directory}: ${stats.count} files, ${(stats.bytes / 1024 / 1024).toFixed(2)} MB`);
  }

  await fs.writeFile(
    path.join(projectRoot, "unused-images-report.txt"),
    unused.map((item) => item.relative).sort().join("\n") + "\n",
  );

  if (shouldDelete) {
    for (const item of unused) await fs.unlink(item.file);
    console.log(`\nDeleted ${unused.length} unused images.`);
  } else {
    console.log("\nDry run only. Review unused-images-report.txt before using --delete.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
