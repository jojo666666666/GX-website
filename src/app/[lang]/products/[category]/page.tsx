import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { dictionary } from "@/data/dictionary";
import type { ProductCategory } from "@/data/products";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";
import {
  buildCategoryDescription,
  buildCategoryMetadata,
  getAbsoluteImage,
  getAbsoluteUrl,
  getAllProductRouteParams,
  getApplications,
  getCategoryByRouteSlug,
  getMainFunction,
  getSeoSlug,
  productPath,
} from "@/lib/product-seo";

type PageProps = {
  params: Promise<{ lang: string; category: string }>;
};

export function generateStaticParams() {
  return getAllProductRouteParams();
}

export async function generateMetadata({ params }: PageProps) {
  const { lang: rawLang, category: slug } = await params;
  const lang = isLocale(rawLang) ? rawLang : "en";
  const category = getCategoryByRouteSlug(slug);

  return category
    ? buildCategoryMetadata(category, lang)
    : { title: "Products | GANXING Tools" };
}

function buildJsonLd(category: ProductCategory, lang: Locale) {
  const pageUrl = getAbsoluteUrl(
    localizedPath(lang, `/products/${getSeoSlug(category)}`),
  );
  const products = category.products.map((product, index) => {
    const productUrl = getAbsoluteUrl(productPath(lang, category, product, index));
    const name =
      `${product.model} ${product.title[lang] || product.title.en}`.trim();
    const description = product.specs
      .slice(0, 4)
      .map((spec) => `${spec.key[lang] || spec.key.en}: ${spec.value}`)
      .join("; ");

    return {
      "@type": "Product",
      "@id": `${pageUrl}#product-${index + 1}`,
      name,
      description: description || category.description[lang],
      image: product.images.map(getAbsoluteImage),
      brand: {
        "@type": "Brand",
        name: lang === "zh" ? "赣星" : "GANXING",
      },
      manufacturer: {
        "@type": "Organization",
        name: lang === "zh" ? "赣星电动工具" : "GANXING Tools",
        url: getAbsoluteUrl(localizedPath(lang)),
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        url: productUrl,
      },
    };
  });

  return [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${pageUrl}#itemlist`,
      name: category.title[lang],
      description: buildCategoryDescription(category, lang),
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: product,
      })),
    },
    ...products.map((product) => ({
      "@context": "https://schema.org",
      ...product,
    })),
  ];
}

function buildFaq(category: ProductCategory, applications: string[], lang: Locale) {
  const categoryName = category.title[lang];

  if (lang === "zh") {
    return [
      {
        question: `${categoryName}适合哪些应用？`,
        answer: `赣星${categoryName}适用于${applications.join("、")}。每个型号页面均提供产品图片与技术规格。`,
      },
      {
        question: `如何选择合适的${categoryName}？`,
        answer: "请根据具体工序、作业材料和页面列出的转速、尺寸及其他技术参数比较型号；如需协助，可向销售团队发送询盘。",
      },
      {
        question: `如何获取赣星${categoryName}的报价？`,
        answer: "选择所需型号后，可通过网站询盘表单联系赣星销售团队，提供应用和采购需求以获取报价支持。",
      },
    ];
  }

  return [
    {
      question: `What applications are ${category.title.en} used for?`,
      answer: `GANXING ${category.title.en} are used for ${applications.join(", ")}. Each model page includes product images and technical specifications.`,
    },
    {
      question: `How do I choose the right ${category.title.en}?`,
      answer: "Compare models against the required process, material, and the listed speed, size, and technical specifications. For selection help, send an inquiry to the sales team.",
    },
    {
      question: `How can I request a quote for GANXING ${category.title.en}?`,
      answer: "Select the required model and contact the GANXING sales team through the website inquiry form with your application and purchasing requirements.",
    },
  ];
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { lang: rawLang, category: slug } = await params;

  if (!isLocale(rawLang)) {
    notFound();
  }

  const lang = rawLang as Locale;
  const category = getCategoryByRouteSlug(slug);
  const copy = dictionary[lang];

  if (!category) {
    return (
      <main className="min-h-screen px-4 pt-24 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-xl border border-neutral-200 bg-white p-6 sm:p-8">
          <h1 className="text-2xl font-semibold sm:text-3xl">
            {copy.product.notFoundTitle}
          </h1>
          <p className="mt-3 text-neutral-600">{copy.product.notFoundBody}</p>
          <Link
            href={localizedPath(lang)}
            className="mt-6 inline-flex h-11 items-center rounded-full bg-neutral-950 px-5 text-sm font-semibold text-white"
          >
            {copy.nav.back}
          </Link>
        </div>
      </main>
    );
  }

  const applications = getApplications(category, lang);
  const faqItems = buildFaq(category, applications, lang);
  const keyFeatures =
    lang === "zh"
      ? [
          "稳定电机输出",
          "精准调速控制",
          "低噪音",
          "无刷电机",
          "防水 & 防尘",
          "耐磨齿轮组",
        ]
      : [
          "Stable motor output",
          "Precise speed control",
          "Low noise",
          "Brushless motor",
          "Dustproof & waterproof",
          "Wear-resistant gear system",
        ];
  const jsonLd = [
    ...buildJsonLd(category, lang),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── Hero ── */}
      <section className="order-1 relative overflow-hidden bg-white px-4 pb-14 pt-20 sm:px-5 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
            {/* Text */}
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                <Link
                  href={localizedPath(lang)}
                  className="transition hover:text-red-600 active:text-red-600"
                >
                  {copy.product.breadcrumbHome}
                </Link>
                <span className="text-red-600">/</span>
                <span>{copy.product.breadcrumbProducts}</span>
              </div>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.04] text-neutral-950 sm:text-5xl md:text-6xl lg:text-7xl">
                {category.title[lang]}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                {category.description[lang]}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-red-600 sm:text-sm">
                {lang === "zh"
                  ? "专业制造商 · 免费报价"
                  : `Professional ${getMainFunction(category, lang)} manufacturer · Get a free quote`}
              </p>
            </div>

            {/* Scene image */}
            <div className="relative min-h-[220px] overflow-hidden rounded-xl bg-neutral-100 shadow-2xl shadow-neutral-950/10 sm:min-h-[320px] md:min-h-[400px] lg:min-h-[440px]">
              <Image
                src={category.sceneImage}
                alt={category.title[lang]}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Features & Applications ── */}
      <section
        className="order-3 px-4 py-12 sm:px-5 sm:py-16 lg:px-8"
        aria-labelledby="key-features"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <h2
                id="key-features"
                className="text-2xl font-semibold text-neutral-950 sm:text-3xl"
              >
                {lang === "zh" ? "核心优势" : "Key Features"}
              </h2>
              <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 text-sm font-semibold text-neutral-800"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-neutral-950 sm:text-3xl">
                {lang === "zh" ? "应用场景" : "Applications"}
              </h2>
              <ul className="mt-5 grid gap-2.5">
                {applications.map((application) => (
                  <li
                    key={application}
                    className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 text-sm text-neutral-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600" />
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="order-4 px-4 py-12 sm:px-5 sm:py-16 lg:px-8"
        aria-labelledby="product-selection-faq"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600 sm:text-sm">
            {lang === "zh" ? "赣星电动工具" : "GANXING TOOLS"}
          </p>
          <h2
            id="product-selection-faq"
            className="mt-2 text-2xl font-semibold text-neutral-950 sm:mt-3 sm:text-4xl"
          >
            {lang === "zh" ? "产品选型常见问题" : "Product Selection FAQ"}
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-xl border border-neutral-200 bg-white p-5"
              >
                <h3 className="text-base font-semibold text-neutral-950">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section
        className="order-2 px-4 py-14 sm:px-5 sm:py-20 lg:px-8"
        aria-labelledby="technical-specifications"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600 sm:text-sm">
                {lang === "zh" ? "赣星电动工具" : "GANXING TOOLS"}
              </p>
              <h2
                id="technical-specifications"
                className="mt-2 text-2xl font-semibold text-neutral-950 sm:mt-3 sm:text-4xl"
              >
                {lang === "zh"
                  ? "技术规格与全部型号"
                  : "All Product Models"}
              </h2>
            </div>
            <p className="text-sm font-semibold text-neutral-500">
              {category.products.length} {copy.product.modelCount}
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {category.products.map((product, index) => (
              <ProductCard
                key={`${product.model}-${index}`}
                category={category}
                product={product}
                index={index}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
