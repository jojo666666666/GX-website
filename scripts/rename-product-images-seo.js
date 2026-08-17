const fs = require("node:fs/promises");
const path = require("node:path");

const root = process.cwd();
const publicRoot = path.join(root, "public");
const productsFile = path.join(root, "src", "data", "products.ts");
const listingRoot = path.join(publicRoot, "images", "product-listing");
const lithiumRoot = path.join(publicRoot, "images", "cat-01-lithium-images");

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "product";

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

async function safeRename(source, destination) {
  if (source === destination) return;
  try {
    await fs.access(destination);
    throw new Error(`SEO rename target already exists: ${destination}`);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  await fs.rename(source, destination);
}

async function renameExplicitProductImages(sourceText) {
  const replacements = new Map();
  const urls = [...sourceText.matchAll(/"(\/images\/cat-[^"?]+-images\/[^"?]+\.webp)"/g)]
    .map((match) => match[1]);

  for (const url of new Set(urls)) {
    const slash = url.lastIndexOf("/");
    const oldName = url.slice(slash + 1);
    let stem = oldName.replace(/-reference-tone\.webp$/i, "");
    if (!stem.startsWith("ganxing-")) stem = `ganxing-${stem}`;
    const newName = `${stem}.webp`;
    const newUrl = `${url.slice(0, slash + 1)}${newName}`;
    const source = path.join(publicRoot, ...decodeURIComponent(url).replace(/^\//, "").split("/"));
    const destination = path.join(path.dirname(source), newName);
    await safeRename(source, destination);
    replacements.set(url, newUrl);
  }

  let updated = sourceText;
  for (const [oldUrl, newUrl] of replacements) {
    updated = updated.split(oldUrl).join(newUrl);
  }
  await fs.writeFile(productsFile, updated, "utf8");
  return replacements.size;
}

async function renameListingImages() {
  const files = await walk(listingRoot);
  let count = 0;
  for (const file of files) {
    if (!file.endsWith("-reference-tone-listing-main.webp")) continue;
    const name = path.basename(file);
    const match = name.match(/^(\d{2})-(.+)-reference-tone-listing-main\.webp$/);
    if (!match) continue;
    const destination = path.join(
      path.dirname(file),
      `${match[1]}-ganxing-${match[2]}-listing-main.webp`,
    );
    await safeRename(file, destination);
    count += 1;
  }
  return count;
}

async function renameCuratedImages() {
  const files = await walk(lithiumRoot);
  const semantics = {
    "listing-main-reference-tone.webp": "main-product-view",
    "01-product-overview-reference-tone.webp": "product-overview",
    "02-feature-view-reference-tone.webp": "key-feature-view",
    "03-configuration-reference-tone.webp": "configuration-view",
    "04-detail-view-reference-tone.webp": "product-detail-view",
  };
  let count = 0;

  for (const file of files) {
    if (!file.includes(`${path.sep}curated${path.sep}`)) continue;
    const semantic = semantics[path.basename(file)];
    if (!semantic) continue;
    const modelFolder = path.basename(path.dirname(path.dirname(file)));
    const destination = path.join(
      path.dirname(file),
      `ganxing-${slugify(modelFolder)}-cordless-polisher-${semantic}.webp`,
    );
    await safeRename(file, destination);
    count += 1;
  }
  return count;
}

async function main() {
  const sourceText = await fs.readFile(productsFile, "utf8");
  const explicit = await renameExplicitProductImages(sourceText);
  const listing = await renameListingImages();
  const curated = await renameCuratedImages();
  console.log(`Renamed ${explicit} explicit detail images.`);
  console.log(`Renamed ${listing} product listing images.`);
  console.log(`Renamed ${curated} curated detail images.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
