import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import Carousel from "@/components/Carousel";
import InquiryForm from "@/components/InquiryForm";
import MobileProductActions from "@/components/MobileProductActions";
import ProductCard from "@/components/ProductCard";
import { dictionary } from "@/data/dictionary";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";
import {
  buildProductDescription,
  buildProductMetadata,
  getAbsoluteImage,
  getAbsoluteUrl,
  getAllProductDetailRouteParams,
  getApplications,
  getCategoryByRouteSlug,
  getProductByRouteSlug,
  getProductGalleryImages,
  getProductImageAlt,
  getSeoSlug,
  productPath,
} from "@/lib/product-seo";

type PageProps = {
  params: Promise<{ lang: string; category: string; product: string }>;
};

export function generateStaticParams() {
  return getAllProductDetailRouteParams();
}

export async function generateMetadata({ params }: PageProps) {
  const {
    lang: rawLang,
    category: categorySlug,
    product: productSlug,
  } = await params;
  const lang = isLocale(rawLang) ? rawLang : "en";
  const category = getCategoryByRouteSlug(categorySlug);
  const productMatch = category
    ? getProductByRouteSlug(category, productSlug)
    : null;

  return category && productMatch
    ? buildProductMetadata(
        category,
        productMatch.product,
        productMatch.index,
        lang,
      )
    : { title: "Product Details | GANXING Tools" };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const {
    lang: rawLang,
    category: categorySlug,
    product: productSlug,
  } = await params;

  if (!isLocale(rawLang)) {
    notFound();
  }

  const lang = rawLang as Locale;
  const category = getCategoryByRouteSlug(categorySlug);

  if (!category) {
    notFound();
  }

  const productMatch = getProductByRouteSlug(category, productSlug);

  if (!productMatch) {
    notFound();
  }

  const { product, index } = productMatch;
  const canonicalPath = productPath(lang, category, product, index);
  if (
    categorySlug !== getSeoSlug(category) ||
    productSlug !== canonicalPath.split("/").pop()
  ) {
    permanentRedirect(canonicalPath);
  }
  const copy = dictionary[lang];
  const title = product.title[lang] || product.title.en;
  const productName =
    product.model &&
    title.trim().toLowerCase() !== product.model.trim().toLowerCase()
      ? `${product.model} ${title}`
      : product.model || title;
  const description = buildProductDescription(category, product, lang);
  const galleryImages = getProductGalleryImages(category, product);
  const hasUpdatedImages = product.images.some((image) =>
    image.includes("/updates-2026/"),
  );
  const detailImages =
    category.slug === "cat-01-lithium" && !hasUpdatedImages
      ? galleryImages.slice(1)
      : galleryImages;
  const quickSpecs = product.specs.filter((spec) => spec.value).slice(0, 4);
  const applications = getApplications(category, lang);
  const specificationSummary = quickSpecs
    .map((spec) => `${spec.key[lang] || spec.key.en}: ${spec.value}`)
    .join(lang === "zh" ? "；" : "; ");
  const productFaqs = [
    {
      question:
        lang === "zh"
          ? `${product.model} 主要适用于哪些作业？`
          : `What applications is the ${product.model} designed for?`,
      answer: applications.join(lang === "zh" ? "、" : ", "),
    },
    {
      question:
        lang === "zh"
          ? `${product.model} 的主要参数是什么？`
          : `What are the key specifications of the ${product.model}?`,
      answer: specificationSummary || description,
    },
    {
      question:
        lang === "zh"
          ? `${product.model} 是否支持 OEM / ODM 合作？`
          : `Is OEM or ODM cooperation available for the ${product.model}?`,
      answer:
        lang === "zh"
          ? "支持面向经销商和品牌客户的合作洽谈。请在询盘中填写目标市场、数量和定制要求，以便销售团队提供对应方案。"
          : "Cooperation is available for distributors and brand customers. Include your market, quantity, and customization requirements in the inquiry so our sales team can prepare the right proposal.",
    },
  ];
  const relatedProducts = category.products
    .map((relatedProduct, relatedIndex) => ({ product: relatedProduct, index: relatedIndex }))
    .filter((item) => item.index !== index)
    .sort((a, b) => Math.abs(a.index - index) - Math.abs(b.index - index))
    .slice(0, 3);
  const detailUrl = getAbsoluteUrl(productPath(lang, category, product, index));
  const categoryUrl = localizedPath(lang, `/products/${getSeoSlug(category)}`);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${detailUrl}#product`,
    name: productName,
    sku: product.model,
    url: detailUrl,
    category: category.title.en,
    description,
    image: galleryImages.map((image, imageIndex) => ({
      "@type": "ImageObject",
      contentUrl: getAbsoluteImage(image),
      caption: getProductImageAlt(image, productName, lang, imageIndex),
    })),
    mainEntityOfPage: detailUrl,
    brand: {
      "@type": "Brand",
      name: lang === "zh" ? "赣星" : "GANXING",
    },
    manufacturer: {
      "@type": "Organization",
      name: lang === "zh" ? "赣星电动工具" : "GANXING Tools",
      url: getAbsoluteUrl(localizedPath(lang)),
    },
    additionalProperty: product.specs
      .filter((spec) => spec.value)
      .map((spec) => ({
        "@type": "PropertyValue",
        name: spec.key.en,
        value: spec.value,
      })),
  };
  const jsonLd = [
    productJsonLd,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: copy.product.breadcrumbHome, item: getAbsoluteUrl(localizedPath(lang)) },
        { "@type": "ListItem", position: 2, name: category.title[lang], item: getAbsoluteUrl(categoryUrl) },
        { "@type": "ListItem", position: 3, name: productName, item: detailUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: productFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <main className="pb-24 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-[#f5f5f2] px-4 pb-12 pt-20 sm:px-5 sm:pt-24 lg:px-8 lg:pb-16 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            <Link
              href={localizedPath(lang)}
              className="-my-3 inline-flex min-h-11 items-center py-3 transition hover:text-red-600 active:text-red-600"
            >
              {copy.product.breadcrumbHome}
            </Link>
            <span className="text-red-600">/</span>
            <Link
              href={categoryUrl}
              className="-my-3 inline-flex min-h-11 items-center py-3 transition hover:text-red-600 active:text-red-600"
            >
              {category.title[lang]}
            </Link>
            <span className="text-red-600">/</span>
            <span>{product.model || copy.product.breadcrumbProducts}</span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start lg:gap-12">
            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
              <Carousel
                images={galleryImages}
                alt={productName}
                lang={lang}
                square={hasUpdatedImages}
              />
            </div>

            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">
                {lang === "zh" ? "赣星电动工具" : "GANXING TOOLS"}
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl lg:text-5xl">
                {productName}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {description}
              </p>

              {quickSpecs.length > 0 && (
                <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200">
                  {quickSpecs.map((spec) => (
                    <div key={`${spec.key.en}-${spec.value}`} className="bg-white p-4">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
                        {spec.key[lang] || spec.key.en}
                      </dt>
                      <dd className="mt-1 text-base font-semibold text-neutral-950 sm:text-lg">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#product-inquiry"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white shadow-lg shadow-red-600/15 transition hover:bg-red-700 active:bg-red-700"
                >
                  {copy.product.quote}
                </Link>
                <Link
                  href={categoryUrl}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 px-6 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950 active:border-neutral-950"
                >
                  {lang === "zh" ? "返回分类" : "Back to category"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f2] px-4 py-12 sm:px-5 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:gap-12">
            <div>
            <h2 className="text-2xl font-semibold text-neutral-950 sm:text-3xl">
              {lang === "zh" ? "产品图片" : "Product Images"}
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              {lang === "zh" ? "点击上方缩略图快速浏览；以下为完整产品详情图。" : "Use the thumbnails above for quick browsing; the complete product image set follows below."}
            </p>
            <div className="mt-6 space-y-4">
              {detailImages.map((image, imageIndex) => (
                <div
                  key={`${image}-${imageIndex}`}
                  className={`relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm ${hasUpdatedImages ? "aspect-square" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={image}
                    alt={getProductImageAlt(image, productName, lang, imageIndex)}
                    fill
                    sizes="(min-width: 1024px) 62vw, 100vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-2xl font-semibold text-neutral-950 sm:text-3xl">
              {lang === "zh" ? "产品参数" : "Product Specifications"}
            </h2>
            {product.specs.length > 0 ? (
              <dl className="mt-5 overflow-hidden rounded-lg border border-neutral-200 bg-white">
                {product.specs.map((spec) => (
                  <div
                    key={`${product.model}-${spec.key.en}-${spec.value}`}
                    className="grid gap-2 border-b border-neutral-100 px-4 py-3 text-sm last:border-b-0 sm:grid-cols-[42%_1fr] sm:px-5"
                  >
                    <dt className="font-medium text-neutral-500">
                      {spec.key[lang] || spec.key.en}
                    </dt>
                    <dd className="font-semibold text-neutral-950">
                      {spec.value || "-"}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <div className="mt-5 rounded-lg border border-neutral-200 bg-white p-5 text-sm leading-relaxed text-neutral-600">
                {lang === "zh"
                  ? "联系我们，获取更多产品详情."
                  : "Contact us for more product details."}
              </div>
            )}
          </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl bg-neutral-950 p-6 text-white sm:p-8">
              <p className="brand-eyebrow text-red-400">{lang === "zh" ? "应用场景" : "Designed For"}</p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{lang === "zh" ? "适合专业表面处理作业" : "Built around professional workflows"}</h2>
              <ul className="mt-6 space-y-3">
                {applications.map((application) => (
                  <li key={application} className="flex gap-3 text-sm leading-relaxed text-neutral-300">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-red-500" />
                    {application}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
              <p className="brand-eyebrow">{lang === "zh" ? "产品重点" : "Product Highlights"}</p>
              <h2 className="mt-3 text-2xl font-semibold text-neutral-950 sm:text-3xl">{lang === "zh" ? "关键配置一目了然" : "Key configuration at a glance"}</h2>
              <dl className="mt-6 divide-y divide-neutral-200">
                {product.specs.filter((spec) => spec.value).slice(0, 6).map((spec) => (
                  <div key={`${spec.key.en}-${spec.value}`} className="flex items-center justify-between gap-4 py-3 text-sm">
                    <dt className="text-neutral-500">{spec.key[lang] || spec.key.en}</dt>
                    <dd className="text-right font-semibold text-neutral-950">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-10 border-t border-neutral-200 pt-10">
            <p className="brand-eyebrow">{lang === "zh" ? "产品选型 FAQ" : "Product Selection FAQ"}</p>
            <h2 className="mt-3 text-2xl font-semibold text-neutral-950 sm:text-3xl">
              {lang === "zh" ? `关于 ${product.model} 的常见问题` : `Common questions about ${product.model}`}
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {productFaqs.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6">
                  <h3 className="font-semibold leading-snug text-neutral-950">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-[#f5f5f2] px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="brand-eyebrow">{lang === "zh" ? "同系列产品" : "Related Products"}</p>
                <h2 className="mt-3 text-3xl font-semibold text-neutral-950 sm:text-4xl">{lang === "zh" ? "您还可以比较这些型号" : "Consider these models"}</h2>
              </div>
              <Link href={categoryUrl} className="hidden min-h-11 items-center text-sm font-semibold text-red-600 hover:text-red-700 sm:inline-flex">
                {lang === "zh" ? "查看全部型号 →" : "View all models →"}
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <ProductCard key={`${item.product.model}-${item.index}`} category={category} product={item.product} index={item.index} lang={lang} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="product-inquiry" className="scroll-mt-20 bg-white px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">
              {lang === "zh" ? "产品询盘" : "Product Inquiry"}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-neutral-950 sm:text-4xl">
              {lang === "zh" ? `咨询 ${product.model}` : `Request a quote for ${product.model}`}
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              {lang === "zh"
                ? "产品型号已自动填写。请告诉我们采购数量、目标市场或定制要求，销售团队将在一个工作日内回复。"
                : "The product model is already included. Tell us your quantity, market, or customization requirements and our sales team will reply within one business day."}
            </p>
          </div>
          <InquiryForm lang={lang} productName={productName} sourceUrl={detailUrl} />
        </div>
      </section>

      <MobileProductActions lang={lang} model={product.model} categoryUrl={categoryUrl} />
    </main>
  );
}
