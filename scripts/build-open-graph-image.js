const path = require("node:path");
const sharp = require("sharp");

const projectRoot = path.resolve(__dirname, "..");
const logoPath = path.join(
  projectRoot,
  "public",
  "images",
  "brand",
  "ganxing-logo.png",
);
const outputPath = path.join(
  projectRoot,
  "public",
  "images",
  "brand",
  "ganxing-open-graph.png",
);

const background = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="82%" cy="16%" r="72%">
        <stop offset="0" stop-color="#c93429" stop-opacity="0.34"/>
        <stop offset="0.54" stop-color="#151515" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="line" x1="0" x2="1">
        <stop stop-color="#df3428"/>
        <stop offset="1" stop-color="#df3428" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="#0e0e0f"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
    <path d="M760 0L1200 0L1200 420Z" fill="#ffffff" fill-opacity="0.025"/>
    <rect x="80" y="488" width="470" height="3" rx="1.5" fill="url(#line)"/>
    <text x="80" y="394" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="700" letter-spacing="-1">PROFESSIONAL</text>
    <text x="80" y="459" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="700" letter-spacing="-1">SURFACE FINISHING SYSTEMS</text>
    <text x="80" y="548" fill="#a7a7aa" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="500" letter-spacing="4">ENGINEERED FOR GLOBAL PROFESSIONALS</text>
  </svg>
`);

async function build() {
  const logo = await sharp(logoPath)
    .resize({ width: 430, height: 186, fit: "contain" })
    .png()
    .toBuffer();

  await sharp(background)
    .composite([{ input: logo, top: 96, left: 80 }])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath);

  console.log(`Created ${outputPath}`);
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
