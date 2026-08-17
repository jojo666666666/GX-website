const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

const source = "E:/新图片/问题/logo.png";
const appDir = path.join(process.cwd(), "src", "app");

function icoFromPng(png, width, height) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(width === 256 ? 0 : width, 0);
  entry.writeUInt8(height === 256 ? 0 : height, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
}

async function main() {
  const { data, info } = await sharp(source)
    .extract({ left: 220, top: 18, width: 220, height: 220 })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const mark = Buffer.alloc(info.width * info.height * 4);
  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const sourceIndex = (y * info.width + x) * 3;
      const outputIndex = (y * info.width + x) * 4;
      const luminance =
        0.2126 * data[sourceIndex] +
        0.7152 * data[sourceIndex + 1] +
        0.0722 * data[sourceIndex + 2];
      const belongsToMark = y < 150 || (x >= 68 && x <= 150);
      const alpha = belongsToMark && luminance > 180 ? 255 : 0;
      mark[outputIndex] = 255;
      mark[outputIndex + 1] = 255;
      mark[outputIndex + 2] = 255;
      mark[outputIndex + 3] = alpha;
    }
  }

  const whiteMark = await sharp(mark, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .resize(356, 356, { fit: "contain", kernel: sharp.kernel.lanczos3 })
    .blur(0.5)
    .png()
    .toBuffer();

  const icon = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 221, g: 51, b: 40, alpha: 1 },
    },
  })
    .composite([{ input: whiteMark, gravity: "centre" }])
    .png({ compressionLevel: 9, palette: false })
    .toBuffer();

  const faviconPng = await sharp(icon)
    .resize(256, 256)
    .ensureAlpha()
    .png({ compressionLevel: 9, palette: false })
    .toBuffer();

  await Promise.all([
    fs.writeFile(path.join(appDir, "icon.png"), icon),
    fs.writeFile(path.join(appDir, "apple-icon.png"), icon),
    fs.writeFile(path.join(appDir, "favicon.ico"), icoFromPng(faviconPng, 256, 256)),
  ]);

  console.log("Built GANXING favicon, app icon, and Apple touch icon.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
