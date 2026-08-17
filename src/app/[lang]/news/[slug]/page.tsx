import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem, newsItems } from "@/data/site";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return newsItems.flatMap((item) => [
    { lang: "en", slug: item.slug },
    { lang: "zh", slug: item.slug },
  ]);
}

export async function generateMetadata({ params }: PageProps) {
  const { lang: rawLang, slug } = await params;
  const lang = isLocale(rawLang) ? rawLang : "en";
  const item = getNewsItem(slug);

  return {
    title: item
      ? `${item.title[lang]} | ${lang === "zh" ? "赣星电动工具" : "GANXING Tools"}`
      : "News | GANXING Tools",
    description: item?.excerpt[lang],
    alternates: item
      ? {
          canonical: localizedPath(lang, `/news/${slug}`),
          languages: {
            "en-US": localizedPath("en", `/news/${slug}`),
            "zh-CN": localizedPath("zh", `/news/${slug}`),
            "x-default": localizedPath("en", `/news/${slug}`),
          },
        }
      : undefined,
  };
}

export default async function NewsPage({ params }: PageProps) {
  const { lang: rawLang, slug } = await params;

  if (!isLocale(rawLang)) {
    notFound();
  }

  const lang = rawLang as Locale;
  const item = getNewsItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      {/* ── Article header ── */}
      <section className="bg-white px-4 pb-12 pt-20 sm:px-5 sm:pt-24 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-5xl">
          <Link
            href={`${localizedPath(lang)}#news`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-600 transition hover:text-red-700 active:text-red-700 sm:text-sm"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {lang === "zh" ? "返回新闻" : "Back to News"}
          </Link>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:mt-8 sm:gap-3">
            <span className="text-red-600">{item.category[lang]}</span>
            <span>{item.date}</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl md:text-5xl lg:text-6xl">
            {item.title[lang]}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            {item.body.lead[lang]}
          </p>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="relative mx-auto aspect-[16/9] max-w-7xl overflow-hidden bg-neutral-100 sm:aspect-[16/8] sm:rounded-xl">
        <Image
          src={item.image}
          alt={item.title[lang]}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* ── Article body ── */}
      <article className="px-4 py-14 sm:px-5 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-12 sm:space-y-16">
          {item.body.sections.map((section) => (
            <section key={section.title.en}>
              <h2 className="text-2xl font-semibold leading-tight text-neutral-950 sm:text-3xl">
                {section.title[lang]}
              </h2>
              <div className="mt-4 space-y-4 sm:mt-5">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.en}
                    className="text-base leading-relaxed text-neutral-600 sm:text-lg"
                  >
                    {paragraph[lang]}
                  </p>
                ))}
              </div>
              {section.images ? (
                <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
                  {section.images.map((image) => (
                    <div
                      key={image}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100"
                    >
                      <Image
                        src={image}
                        alt={section.title[lang]}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}

          {/* ── CTA block ── */}
          <div className="rounded-xl bg-neutral-950 p-6 text-white sm:p-8">
            <h3 className="text-xl font-semibold sm:text-2xl">
              {lang === "zh" ? "需要更多资料？" : "Need more details?"}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
              {lang === "zh"
                ? "联系赣星销售团队获取完整目录、技术参数与报价。"
                : "Contact the GANXING sales team for catalogs, technical specs, and pricing."}
            </p>
            <Link
              href={`${localizedPath(lang)}#contact`}
              className="mt-5 inline-flex h-11 items-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white transition hover:bg-red-700 active:bg-red-700 sm:mt-6"
            >
              {lang === "zh" ? "联系销售" : "Contact Sales"}
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
