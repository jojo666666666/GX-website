import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const productsFile = path.join(root, "src/data/products.ts");
const content = fs.readFileSync(productsFile, "utf8");

const products = [
  ...content.matchAll(/model:\s*"([^"]*)",[\s\S]*?images:\s*\[([\s\S]*?)\]/g),
];

const crossFolder = [];

for (const [, model, block] of products) {
  if (!model) continue;
  const paths = [...block.matchAll(/"(\/images\/[^"]+)"/g)].map((m) => m[1]);
  const folders = new Set(
    paths.map((p) => p.split("/").slice(-2, -1)[0].toLowerCase()),
  );

  if (folders.size > 1) {
    crossFolder.push({ model, paths, folders: [...folders] });
  }
}

console.log(JSON.stringify(crossFolder, null, 2));
