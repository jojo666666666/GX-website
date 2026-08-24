import type { Metadata } from "next";
import type { Product, ProductCategory } from "@/data/products";
import { getProductCategory, productCategories } from "@/data/products";
import { localizedPath, type Locale } from "@/lib/i18n";

const siteUrl = "https://www.ganxingtools.com";
const companyName = "GANXING Tools";

const seoSlugByLegacySlug: Record<string, string> = {
  "cat-01-lithium": "cordless-polisher",
  "cat-02-orbital-polisher": "orbital-polisher",
  "cat-03-sander": "electric-sander",
  "cat-04-rotary": "rotary-polisher",
  "cat-05-metal-polishing": "metal-polishing-machine",
  "cat-06-stone-polishing": "wet-polisher",
  "cat-07-angle-grinder": "angle-grinder",
  "cat-08-renovation": "renovation-tools",
  "cat-09-accessories": "polishing-accessories",
};

const legacySlugBySeoSlug = Object.fromEntries(
  Object.entries(seoSlugByLegacySlug).map(([legacySlug, seoSlug]) => [
    seoSlug,
    legacySlug,
  ]),
) as Record<string, string>;

const mainFunctionByLegacySlug: Record<string, { en: string; zh: string }> = {
  "cat-01-lithium": {
    en: "cordless polishing and detailing",
    zh: "无线抛光与精修",
  },
  "cat-02-orbital-polisher": {
    en: "orbital paint correction",
    zh: "偏心漆面修复",
  },
  "cat-03-sander": {
    en: "sanding and surface preparation",
    zh: "砂磨与表面预处理",
  },
  "cat-04-rotary": { en: "rotary polishing", zh: "同心抛光" },
  "cat-05-metal-polishing": {
    en: "metal surface finishing",
    zh: "金属表面处理",
  },
  "cat-06-stone-polishing": { en: "wet stone polishing", zh: "石材湿磨抛光" },
  "cat-07-angle-grinder": { en: "variable speed grinding", zh: "调速研磨切割" },
  "cat-08-renovation": {
    en: "floor grinding and renovation",
    zh: "地坪研磨与翻新",
  },
  "cat-09-accessories": {
    en: "polishing accessories supply",
    zh: "抛光配件供应",
  },
};

const productTypeByLegacySlug: Record<string, { en: string; zh: string }> = {
  "cat-01-lithium": { en: "Cordless Polisher", zh: "锂电抛光机" },
  "cat-02-orbital-polisher": { en: "Orbital Polisher", zh: "偏心抛光机" },
  "cat-03-sander": { en: "Electric Sander", zh: "电动砂光机" },
  "cat-04-rotary": { en: "Rotary Polisher", zh: "同心抛光机" },
  "cat-05-metal-polishing": { en: "Metal Polishing Machine", zh: "金属抛光机" },
  "cat-06-stone-polishing": { en: "Wet Polisher", zh: "石材湿磨机" },
  "cat-07-angle-grinder": { en: "Angle Grinder", zh: "角磨机" },
  "cat-08-renovation": { en: "Surface Renovation Machine", zh: "表面翻新机" },
  "cat-09-accessories": { en: "Polishing Accessory", zh: "抛光配件" },
};

const imageProductTypeByLegacySlug: Record<string, string> = {
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

const applicationByLegacySlug: Record<string, { en: string; zh: string }[]> = {
  "cat-01-lithium": [
    {
      en: "Automotive detailing and paint maintenance",
      zh: "汽车美容与漆面养护",
    },
    {
      en: "Spot polishing and localized paint correction",
      zh: "局部抛光与漆面修复",
    },
    { en: "Cord-free outdoor applications", zh: "适用于户外无电源环境作业" },
  ],
  "cat-02-orbital-polisher": [
    {
      en: "Paint correction and swirl mark removal",
      zh: "漆面修复与太阳纹去除",
    },
    {
      en: "Final finishing and hologram-free polishing",
      zh: "精细收尾与无炫纹抛光",
    },
    {
      en: "Safe polishing for beginners and professionals",
      zh: "适合新手及专业用户安全操作",
    },
  ],
  "cat-03-sander": [
    { en: "Surface preparation before coating", zh: "喷涂前表面预处理" },
    { en: "Wood sanding and furniture refinishing", zh: "木材打磨与家具翻新" },
    { en: "Paint, rust, and coating removal", zh: "油漆、锈层及涂层去除" },
  ],
  "cat-04-rotary": [
    { en: "Heavy cutting and oxidation removal", zh: "重切削与氧化层去除" },
    { en: "Mirror finishing for high-gloss surfaces", zh: "高光镜面抛光处理" },
    { en: "Deep scratch and sanding mark removal", zh: "深度划痕与砂痕修复" },
  ],
  "cat-05-metal-polishing": [
    { en: "Tube and pipe polishing", zh: "圆管及管材抛光" },
    { en: "Linear finishing for metal surfaces", zh: "金属表面拉丝处理" },
    { en: "Industrial aluminum and steel polishing", zh: "铝材与钢材工业抛光" },
  ],
  "cat-06-stone-polishing": [
    {
      en: "Granite finishing and edge polishing",
      zh: "花岗岩精加工与边缘抛光",
    },
    { en: "Wet polishing for stone surfaces", zh: "石材湿抛作业" },
    {
      en: "Concrete and marble polishing and restoration",
      zh: "混凝土及大理石抛光与翻新",
    },
  ],
  "cat-07-angle-grinder": [
    {
      en: "Metal grinding, tile, stone, and concrete cutting & grinding",
      zh: "金属、瓷砖、石材及混凝土切割与打磨",
    },
    { en: "Weld preparation and deburring", zh: "焊缝处理与去毛刺" },
    { en: "Surface cleaning and rust removal", zh: "表面清洁与除锈" },
  ],
  "cat-08-renovation": [
    { en: "Concrete floor grinding and leveling", zh: "混凝土地坪研磨与找平" },
    { en: "Corner and edge grinding applications", zh: "边角区域精细打磨" },
    {
      en: "Dust-free renovation and surface preparation",
      zh: "无尘翻新与基层处理",
    },
  ],
  "cat-09-accessories": [
    { en: "Adapter and backing plate matching", zh: "转接件与托盘匹配" },
    {
      en: "Compatibility support for multiple tool systems",
      zh: "兼容多种工具系统",
    },
    { en: "Efficient maintenance and replacement", zh: "高效维护与快速更换" },
  ],
};

export function getSeoSlug(category: ProductCategory) {
  return seoSlugByLegacySlug[category.slug] ?? category.slug;
}

export function categoryPath(lang: Locale, category: ProductCategory) {
  return localizedPath(lang, `/products/${getSeoSlug(category)}`);
}

export function slugifySegment(value: string) {
  const slug = value
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "product";
}

export function getProductRouteSlug(product: Product, index: number) {
  const label = product.model || product.title.en || `product-${index + 1}`;
  return slugifySegment(label);
}

export function productPath(
  lang: Locale,
  category: ProductCategory,
  product: Product,
  index: number,
) {
  return localizedPath(
    lang,
    `/products/${getSeoSlug(category)}/${getProductRouteSlug(product, index)}`,
  );
}

export function getCategoryByRouteSlug(slug: string) {
  return (
    getProductCategory(slug) ??
    getProductCategory(legacySlugBySeoSlug[slug] ?? "")
  );
}

export function getProductByRouteSlug(
  category: ProductCategory,
  productSlug: string,
) {
  const index = category.products.findIndex((product, currentIndex) => {
    const stableSlug = getProductRouteSlug(product, currentIndex);
    return stableSlug === productSlug || `${stableSlug}-${currentIndex + 1}` === productSlug;
  });

  if (index < 0) {
    return null;
  }

  return {
    product: category.products[index],
    index,
  };
}

export function getMainFunction(
  category: ProductCategory,
  lang: Locale = "en",
) {
  return (
    mainFunctionByLegacySlug[category.slug]?.[lang] ??
    (lang === "zh" ? "专业表面处理" : "professional surface finishing")
  );
}

export function getApplications(category: ProductCategory, lang: Locale) {
  return (
    applicationByLegacySlug[category.slug]?.map(
      (application) => application[lang],
    ) ??
    (lang === "zh"
      ? ["专业制造", "B2B 分销", "OEM 供应"]
      : ["Professional manufacturing", "B2B distribution", "OEM supply"])
  );
}

export function getAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function getAbsoluteImage(path: string) {
  return getAbsoluteUrl(path);
}

export function getProductListingImage(
  category: ProductCategory,
  product: Product,
  index: number,
) {
  const label = product.model || product.title.en || `product-${index + 1}`;
  const productSlug = slugifySegment(label);
  const productType =
    imageProductTypeByLegacySlug[category.slug] || "professional-power-tool";
  return `/images/product-listing/${category.slug}/${String(index + 1).padStart(2, "0")}-ganxing-${productSlug}-${productType}-main.webp`;
}

export function getProductGalleryImages(
  category: ProductCategory,
  product: Product,
) {
  const hasUpdatedImages = product.images.some((image) =>
    image.includes("/updates-2026/"),
  );

  if (category.slug !== "cat-01-lithium" || hasUpdatedImages) {
    return product.images;
  }

  const modelSlug = slugifySegment(product.model || product.title.en);
  const base = `/images/cat-01-lithium-images/${encodeURIComponent(product.model)}/curated/ganxing-${modelSlug}-cordless-polisher`;
  const curatedImages = [
    `${base}-main-product-view.webp`,
    `${base}-product-overview.webp`,
    `${base}-key-feature-view.webp`,
    `${base}-configuration-view.webp`,
    `${base}-product-detail-view.webp`,
  ];

  return product.model.trim().toUpperCase() === "GX5905DA"
    ? curatedImages.filter((image) => !image.endsWith("-key-feature-view.webp"))
    : curatedImages;
}

export function getProductImageAlt(
  imagePath: string,
  productName: string,
  lang: Locale,
  index = 0,
) {
  const filename = decodeURIComponent(imagePath.split("/").pop() ?? "")
    .replace(/\.(?:avif|jpe?g|png|webp)$/i, "")
    .replace(/^\d{2}-ganxing-/i, "")
    .replace(/^ganxing-/i, "")
    .replace(/reference-tone/gi, "")
    .replace(/^gx\d+[a-z0-9-]*-\d{2}-/i, "")
    .replace(/\b(?:gx\d+[a-z0-9-]*)\b/gi, "")
    .replace(/\b(?:sku|feature)-?\d*(?:-\d{2})*(?:-\d{2})*(?:-pm)?-?\d*\b/gi, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const descriptor = filename || (index === 0 ? "main product view" : `product view ${index + 1}`);

  if (lang === "zh") {
    const translated = descriptor
      .replace(/main product view/gi, "产品主图")
      .replace(/main/gi, "产品主图")
      .replace(/side view/gi, "侧面展示")
      .replace(/back/gi, "背面展示")
      .replace(/top/gi, "顶部展示")
      .replace(/detail(?:s)?/gi, "细节展示")
      .replace(/standard set/gi, "标准套装")
      .replace(/deluxe set/gi, "豪华套装")
      .replace(/application/gi, "应用场景")
      .replace(/use/gi, "使用场景")
      .replace(/technical specifications/gi, "技术参数")
      .replace(/cordless/gi, "锂电")
      .replace(/random orbital polisher/gi, "自由偏心抛光机")
      .replace(/rotary polisher/gi, "同心抛光机")
      .replace(/gear driven dual action polisher/gi, "强制偏心抛光机");
    return `赣星 ${productName} ${translated}`.trim();
  }

  return `GANXING ${productName} ${descriptor}`.trim();
}

export function buildCategoryDescription(
  category: ProductCategory,
  lang: Locale,
) {
  if (lang === "zh") {
    return `${category.title.zh}专业制造商，提供稳定电机、精准调速与工业级表面处理方案。联系赣星获取免费报价。`;
  }

  return `${category.title.en} from GANXING Tools with stable motors, precise speed control, and B2B finishing support. Get a free quote today.`;
}

export function buildCategoryMetadata(
  category: ProductCategory,
  lang: Locale,
): Metadata {
  const title =
    lang === "zh"
      ? `${category.title.zh} - 专业${getMainFunction(category, lang)}制造商 | 赣星电动工具`
      : `${category.title.en} - Professional ${getMainFunction(category, lang)} Manufacturer | ${companyName}`;
  const description = buildCategoryDescription(category, lang);
  const seoSlug = getSeoSlug(category);
  const path = `/products/${seoSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath(lang, path),
      languages: {
        "en-US": localizedPath("en", path),
        "zh-CN": localizedPath("zh", path),
        "x-default": localizedPath("en", path),
      },
    },
    openGraph: {
      title,
      description,
      url: localizedPath(lang, path),
      siteName: companyName,
      type: "website",
      locale: lang === "zh" ? "zh_CN" : "en_US",
      alternateLocale: lang === "zh" ? ["en_US"] : ["zh_CN"],
      images: [
        {
          url: category.sceneImage,
          width: 1200,
          height: 900,
          alt: category.title[lang],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [category.sceneImage],
    },
  };
}

export function buildProductDescription(
  category: ProductCategory,
  product: Product,
  lang: Locale,
) {
  const title = product.title[lang] || product.title.en;
  const specSummary = product.specs
    .filter((spec) => spec.value)
    .slice(0, 4)
    .map((spec) => `${spec.key[lang] || spec.key.en}: ${spec.value}`)
    .join("; ");

  if (specSummary) {
    if (lang === "zh") {
      return `赣星 ${product.model} ${title}，属于${category.title.zh}系列。主要参数：${specSummary}。支持产品配置、包装方案及 OEM/ODM 定制咨询。`;
    }
    return `${product.model} ${title} from GANXING ${category.title.en}. Key details: ${specSummary}. Contact us for configuration, packing, and OEM options.`;
  }

  if (lang === "zh") {
    return `赣星 ${product.model || title} 专业${category.title.zh}，适用于专业表面处理作业。本页面提供产品图片、应用说明、技术特点及询盘支持。`;
  }

  return `${product.model || title} from GANXING ${category.title.en}. This product is designed for professional surface finishing workflows, with product images, application notes, and inquiry support available on this page.`;
}

export function buildProductMetadata(
  category: ProductCategory,
  product: Product,
  index: number,
  lang: Locale,
): Metadata {
  const productType = productTypeByLegacySlug[category.slug]?.[lang] || category.title[lang];
  const productLabel = product.model || product.title[lang] || product.title.en;
  const name = product.model ? `${product.model} ${productType}` : productLabel;
  const specValues = product.specs
    .filter((spec) => spec.value)
    .slice(0, 2)
    .map((spec) => spec.value)
    .join(lang === "zh" ? "、" : ", ");
  const description = lang === "zh"
    ? `赣星 ${name}${specValues ? `，参数：${specValues}` : ""}。查看产品图片、应用说明及 OEM/ODM 合作信息。`
    : `GANXING ${name}${specValues ? `. Specs: ${specValues}` : ""}. View images, applications and OEM/ODM options.`;
  const path = `/products/${getSeoSlug(category)}/${getProductRouteSlug(product, index)}`;
  const image = getProductGalleryImages(category, product)[0] || category.sceneImage;
  const metadataTitle = lang === "zh"
    ? `赣星 ${name} | 专业电动工具`
    : `${name} | ${companyName}`;

  return {
    title: metadataTitle,
    description,
    alternates: {
      canonical: localizedPath(lang, path),
      languages: {
        "en-US": localizedPath("en", path),
        "zh-CN": localizedPath("zh", path),
        "x-default": localizedPath("en", path),
      },
    },
    openGraph: {
      title: metadataTitle,
      description,
      url: localizedPath(lang, path),
      siteName: companyName,
      type: "website",
      locale: lang === "zh" ? "zh_CN" : "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 900,
          alt: name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description,
      images: [image],
    },
  };
}

export function getAllProductRouteParams() {
  if (process.env.NODE_ENV === "development") {
    return [];
  }

  return productCategories.flatMap((category) => {
    const seoSlug = getSeoSlug(category);
    return [
      { lang: "en", category: seoSlug },
      { lang: "zh", category: seoSlug },
    ];
  });
}

export function getAllProductDetailRouteParams() {
  if (process.env.NODE_ENV === "development") {
    return [];
  }

  return productCategories.flatMap((category) => {
    const seoSlug = getSeoSlug(category);

    return category.products.flatMap((product, index) => {
      const productSlug = getProductRouteSlug(product, index);

      return [
        { lang: "en", category: seoSlug, product: productSlug },
        { lang: "zh", category: seoSlug, product: productSlug },
      ];
    });
  });
}
