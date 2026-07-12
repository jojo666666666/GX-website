import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const imagesRoot = path.join(root, "public/images");
const sourceFiles = [
  "src/data/products.ts",
  "src/data/site.ts",
  "src/app/[lang]/page.tsx",
];

function resolveActualPath(webPath) {
  const parts = webPath.replace(/^\/images\//, "").split("/");
  let current = imagesRoot;
  const actualParts = [];

  for (const part of parts) {
    if (!fs.existsSync(current)) return null;
    const match = fs
      .readdirSync(current)
      .find((entry) => entry.toLowerCase() === part.toLowerCase());
    if (!match) return null;
    actualParts.push(match);
    current = path.join(current, match);
  }

  return "/images/" + actualParts.join("/");
}

const report = { missing: [], caseMismatches: [], duplicates: [] };

for (const relativeFile of sourceFiles) {
  const file = path.join(root, relativeFile);
  const content = fs.readFileSync(file, "utf8");
  const paths = [...content.matchAll(/"(\/images\/[^"]+)"/g)].map((m) => m[1]);

  for (const imagePath of paths) {
    const actual = resolveActualPath(imagePath);
    if (!actual) {
      report.missing.push({ file: relativeFile, path: imagePath });
    } else if (actual !== imagePath) {
      report.caseMismatches.push({
        file: relativeFile,
        declared: imagePath,
        actual,
      });
    }
  }

  if (relativeFile === "src/data/products.ts") {
    const imageBlocks = [...content.matchAll(/images:\s*\[([\s\S]*?)\]/g)];
    for (const [block] of imageBlocks) {
      const blockPaths = [...block.matchAll(/"(\/images\/[^"]+)"/g)].map(
        (m) => m[1],
      );
      const seen = new Map();
      for (const imagePath of blockPaths) {
        const key = imagePath.toLowerCase();
        if (seen.has(key)) {
          report.duplicates.push({
            file: relativeFile,
            path: imagePath,
            dupOf: seen.get(key),
          });
        } else {
          seen.set(key, imagePath);
        }
      }
    }
  }
}

console.log(JSON.stringify(report, null, 2));
process.exit(
  report.missing.length + report.caseMismatches.length + report.duplicates.length > 0
    ? 1
    : 0,
);
