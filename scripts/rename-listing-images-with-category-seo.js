const fs = require("node:fs/promises");
const path = require("node:path");

const root = path.join(process.cwd(), "public", "images", "product-listing");
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

const accessorySlugs = {
  "02": "extension-shaft",
  "03": "6-mm-flexible-shaft",
  "04": "3-mm-flexible-shaft",
  "05": "forced-orbital-polisher-adapter-ga03",
  "06": "random-orbital-polisher-adapter-da05",
  "07": "tool-cord-organizer-clip",
};

async function main() {
  let renamed = 0;
  const categories = await fs.readdir(root, { withFileTypes: true });
  for (const category of categories) {
    if (!category.isDirectory()) continue;
    const type = categoryTypes[category.name];
    if (!type) continue;
    const directory = path.join(root, category.name);
    const files = await fs.readdir(directory, { withFileTypes: true });
    for (const file of files) {
      if (!file.isFile()) continue;
      const match = file.name.match(/^(\d{2})-ganxing-(.+)-listing-main\.webp$/);
      if (!match) continue;
      const slug =
        category.name === "cat-09-accessories" && match[2] === "accessory"
          ? accessorySlugs[match[1]]
          : match[2];
      const destination = path.join(
        directory,
        `${match[1]}-ganxing-${slug}-${type}-main.webp`,
      );
      await fs.rename(path.join(directory, file.name), destination);
      renamed += 1;
    }
  }
  console.log(`Renamed ${renamed} listing images with product-category keywords.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
