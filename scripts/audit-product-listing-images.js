const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const source = fs.readFileSync(path.join(process.cwd(), "src", "data", "products.ts"), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const dataModule = { exports: {} };
new Function("exports", "module", "require", compiled)(
  dataModule.exports,
  dataModule,
  require,
);

const categoryTypes = {
  "cat-01-lithium": "cordless-polisher",
  "cat-02-orbital-polisher": "orbital-polisher",
  "cat-03-sander": "electric-sander",
  "cat-04-rotary": "rotary-polisher",
  "cat-05-metal-polishing": "metal-polishing-machine",
  "cat-06-stone-polishing": "wet-polisher",
  "cat-07-angle-grinder": "angle-grinder",
  "cat-08-renovation": "surface-renovation-machine",
  "cat-09-accessories": "polishing-accessory",
};

const slugify = (value) =>
  value.toLowerCase().trim().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "product";

const missing = [];
for (const category of dataModule.exports.productCategories) {
  category.products.forEach((product, index) => {
    const label = product.model || product.title.en || `product-${index + 1}`;
    const filename = `${String(index + 1).padStart(2, "0")}-ganxing-${slugify(label)}-${categoryTypes[category.slug]}-main.webp`;
    const file = path.join(process.cwd(), "public", "images", "product-listing", category.slug, filename);
    if (!fs.existsSync(file)) missing.push(path.relative(process.cwd(), file));
  });
}

if (missing.length) {
  console.error(`Missing ${missing.length} product listing images:`);
  for (const file of missing) console.error(file);
  process.exitCode = 1;
} else {
  console.log("All 74 product listing image paths are valid.");
}
