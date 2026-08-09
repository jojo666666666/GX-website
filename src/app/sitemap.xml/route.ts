import { productCategories } from "@/data/products";
import { newsItems } from "@/data/site";
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
  const locales = ["en", "zh"] as const;
  const entries = [
    urlEntry(getAbsoluteUrl("/en")),
    urlEntry(getAbsoluteUrl("/zh")),
    urlEntry(getAbsoluteUrl("/en/downloads")),
    urlEntry(getAbsoluteUrl("/zh/downloads")),
    ...newsItems.flatMap((item) =>
      locales.map((lang) =>
        urlEntry(getAbsoluteUrl(`/${lang}/news/${item.slug}`), [
          getAbsoluteImage(item.image),
        ]),
      ),
    ),
    ...productCategories.flatMap((category) => {
      const categoryImages = [getAbsoluteImage(category.sceneImage)];
      return locales.flatMap((lang) =>
        [
          urlEntry(
            getAbsoluteUrl(`/${lang}/products/${getSeoSlug(category)}`),
            categoryImages,
          ),
          ...category.products.map((product, index) =>
            urlEntry(
              getAbsoluteUrl(productPath(lang, category, product, index)),
              product.images.map(getAbsoluteImage),
            ),
          ),
        ],
      );
    }),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${entries.join("")}</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
