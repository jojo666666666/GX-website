import { productCategories } from "@/data/products";
import {
  getAbsoluteImage,
  getAbsoluteUrl,
  getSeoSlug,
  productPath,
} from "@/lib/product-seo";

export const revalidate = 86400;

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

function urlEntry(url: string, images: string[] = []) {
  const imageEntries = [...new Set(images)]
    .map((image) => `<image:image><image:loc>${escapeXml(image)}</image:loc></image:image>`)
    .join("");

  return `<url><loc>${escapeXml(url)}</loc>${imageEntries}</url>`;
}

export async function GET() {
  const entries = [
    urlEntry(getAbsoluteUrl("/en")),
    urlEntry(getAbsoluteUrl("/zh")),
    ...productCategories.flatMap((category) => {
      const categoryUrl = getAbsoluteUrl(`/en/products/${getSeoSlug(category)}`);
      const categoryImages = [getAbsoluteImage(category.sceneImage)];
      const productEntries = category.products.map((product, index) =>
        urlEntry(
          getAbsoluteUrl(productPath("en", category, product, index)),
          product.images.map(getAbsoluteImage),
        ),
      );

      return [urlEntry(categoryUrl, categoryImages), ...productEntries];
    }),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${entries.join("")}</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
