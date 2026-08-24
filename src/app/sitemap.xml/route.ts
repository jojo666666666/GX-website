import { productCategories } from "@/data/products";
import { newsItems } from "@/data/site";
import { knowledgeArticles, knowledgeTopics, knowledgeVisualImages } from "@/data/knowledge";
import {
  getAbsoluteImage,
  getAbsoluteUrl,
  getProductGalleryImages,
  getProductImageAlt,
  getProductListingImage,
  getSeoSlug,
  productPath,
} from "@/lib/product-seo";

export const revalidate = 86400;

// Update this value whenever the public product or editorial content changes.
const siteContentLastModified = "2026-08-24";

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

type SitemapImage =
  | string
  | { url: string; title?: string; caption?: string };

function urlEntry(url: string, images: SitemapImage[] = []) {
  const imageEntries = [...new Set(images)]
    .map((image) => {
      const item = typeof image === "string" ? { url: image } : image;
      const title = item.title
        ? `<image:title>${escapeXml(item.title)}</image:title>`
        : "";
      const caption = item.caption
        ? `<image:caption>${escapeXml(item.caption)}</image:caption>`
        : "";
      return `<image:image><image:loc>${escapeXml(item.url)}</image:loc>${title}${caption}</image:image>`;
    })
    .join("");

  return `<url><loc>${escapeXml(url)}</loc><lastmod>${siteContentLastModified}</lastmod>${imageEntries}</url>`;
}

export async function GET() {
  const locales = ["en", "zh"] as const;
  const entries = [
    urlEntry(getAbsoluteUrl("/en")),
    urlEntry(getAbsoluteUrl("/zh")),
    urlEntry(getAbsoluteUrl("/en/downloads")),
    urlEntry(getAbsoluteUrl("/zh/downloads")),
    ...locales.flatMap((lang) => [
      urlEntry(getAbsoluteUrl(`/${lang}/knowledge`), [
        {
          url: getAbsoluteImage(knowledgeVisualImages["scratch-depth"]),
          title: lang === "zh" ? "汽车漆面划痕深度专业三维剖面图" : "Professional automotive paint scratch-depth 3D cutaway",
          caption: lang === "zh" ? "用于判断清漆层、色漆层和底漆层划痕深度的技术图解" : "Technical visualization for diagnosing scratch depth across clear coat, color coat and primer",
        },
      ]),
      ...knowledgeTopics.map((topic) =>
        urlEntry(getAbsoluteUrl(`/${lang}/knowledge/${topic.slug}`), [{
          url: getAbsoluteImage(knowledgeVisualImages[topic.visual]),
          title: topic.title[lang],
          caption: topic.description[lang],
        }]),
      ),
      ...knowledgeArticles.map((article) =>
        urlEntry(getAbsoluteUrl(`/${lang}/knowledge/${article.topic}/${article.slug}`), [{
          url: getAbsoluteImage(knowledgeVisualImages[article.visual]),
          title: article.title[lang],
          caption: article.description[lang],
        }]),
      ),
    ]),
    ...newsItems.flatMap((item) =>
      locales.map((lang) =>
        urlEntry(getAbsoluteUrl(`/${lang}/news/${item.slug}`), [
          getAbsoluteImage(item.image),
        ]),
      ),
    ),
    ...productCategories.flatMap((category) => {
      return locales.flatMap((lang) =>
        [
          urlEntry(
            getAbsoluteUrl(`/${lang}/products/${getSeoSlug(category)}`),
            [
              getAbsoluteImage(category.sceneImage),
              ...category.products.map((product, index) => {
                const name = `${product.model} ${product.title[lang] || product.title.en}`.trim();
                const image = getProductListingImage(category, product, index);
                return {
                  url: getAbsoluteImage(image),
                  title: name,
                  caption: getProductImageAlt(image, name, lang, 0),
                };
              }),
            ],
          ),
          ...category.products.map((product, index) =>
            urlEntry(
              getAbsoluteUrl(productPath(lang, category, product, index)),
              getProductGalleryImages(category, product).map((image, imageIndex) => ({
                url: getAbsoluteImage(image),
                title: `${product.model} ${product.title[lang] || product.title.en}`,
                caption: getProductImageAlt(
                  image,
                  `${product.model} ${product.title[lang] || product.title.en}`,
                  lang,
                  imageIndex,
                ),
              })),
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
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
