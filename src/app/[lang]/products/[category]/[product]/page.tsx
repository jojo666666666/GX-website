import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Carousel from "@/components/Carousel";
import { dictionary } from "@/data/dictionary";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";
import {
  buildProductDescription,
  buildProductMetadata,
  getAbsoluteImage,
  getAbsoluteUrl,
  getAllProductDetailRouteParams,
  getCategoryByRouteSlug,
  getProductByRouteSlug,
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
    ? buildProductMetadata(category, productMatch.product, productMatch.index, lang)
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
  const copy = dictionary[lang];
  const title = product.title[lang] || product.title.en;
  const productName =
    product.model && title.trim().toLowerCase() !== product.model.trim().toLowerCase()
      ? `${product.model} ${title}`
      : product.model || title;
  const description = buildProductDescription(category, product, lang);
  const detailUrl = getAbsoluteUrl(productPath(lang, category, product, index));
  const categoryUrl = localizedPath(lang, `/products/${getSeoSlug(category)}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${detailUrl}#product`,
    name: productName,
    sku: product.model,
    url: detailUrl,
    category: category.title.en,
    description,
    image: product.images.map(getAbsoluteImage),
    mainEntityOfPage: detailUrl,
    brand: {
      "@type": "Brand",
      name: "GANXING",
    },
    manufacturer: {
      "@type": "Organization",
      name: "GANXING Tools",
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

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-white px-4 pb-12 pt-20 sm:px-5 sm:pt-24 lg:px-8 lg:pb-16 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            <Link
              href={localizedPath(lang)}
              className="transition hover:text-red-600 active:text-red-600"
            >
              {copy.product.breadcrumbHome}
            </Link>
            <span className="text-red-600">/</span>
            <Link
              href={categoryUrl}
              className="transition hover:text-red-600 active:text-red-600"
            >
              {category.title[lang]}
            </Link>
            <span className="text-red-600">/</span>
            <span>{product.model || copy.product.breadcrumbProducts}</span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start lg:gap-12">
            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
              <Carousel images={product.images} alt={productName} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">
                GANXING TOOLS
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl lg:text-5xl">
                {productName}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {(lang === "zh"
                  ? ["多图展示", "参数清晰", "支持询盘"]
                  : ["Multiple images", "Clear specs", "Inquiry ready"]
                ).map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-800"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`${localizedPath(lang)}#contact`}
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

      <section className="px-4 py-12 sm:px-5 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 sm:text-3xl">
              {lang === "zh" ? "产品图片" : "Product Images"}
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {product.images.map((image, imageIndex) => (
                <div
                  key={`${image}-${imageIndex}`}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border border-neutral-200 bg-white"
                >
                  <Image
                    src={image}
                    alt={`${productName} ${imageIndex + 1}`}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 50vw"
                    className="object-contain p-4"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
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
                  ? "该产品的详细参数可在后期补充，当前页面已预留参数区域。"
                  : "Detailed specifications can be added later. This page already reserves a specification area for future updates."}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
