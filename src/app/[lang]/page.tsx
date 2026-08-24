import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DeferredVideo from "@/components/DeferredVideo";
import HomeCarousel from "@/components/HomeCarousel";
import InquiryForm from "@/components/InquiryForm";
import MotionSystems from "@/components/MotionSystems";
import ScrollToSection from "@/components/ScrollToSection";
import SocialLinks from "@/components/SocialLinks";
import { dictionary } from "@/data/dictionary";
import { knowledgeArticles, knowledgeArticlePath, knowledgeTopicPath } from "@/data/knowledge";
import { productCategories } from "@/data/products";
import {
  contactInfo,
  heroImages,
  heroStats,
  newsItems,
  technologyFeatures,
  tickerItems,
} from "@/data/site";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";
import { categoryPath } from "@/lib/product-seo";

type PageProps = {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<{ inquiry?: string }>;
};

const SHOW_FRANKFURT_EXHIBITION = Date.now() < Date.UTC(2026, 8, 13);

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = isLocale(rawLang) ? rawLang : "en";
  const isChinese = lang === "zh";
  const title = isChinese
    ? "赣星电动工具官网｜专业抛光机与表面处理工具制造商"
    : "GANXING Tools | Professional Polishing Tool Manufacturer";
  const description = isChinese
    ? "永康市赣星电动工具有限公司专业研发制造汽车抛光机、无刷锂电抛光机、偏心抛光机、石材水磨机及金属表面处理工具。"
    : "GANXING Tools manufactures professional automotive polishers, cordless polishers, orbital polishers, wet polishers, and metal surface-finishing tools.";

  return {
    title,
    description,
    keywords: isChinese
      ? ["赣星", "赣星电动工具", "赣星抛光机", "抛光机厂家", "永康市赣星电动工具有限公司"]
      : ["GANXING", "GANXING Tools", "polisher manufacturer", "professional polishing tools"],
    alternates: {
      canonical: localizedPath(lang),
      languages: {
        "en-US": localizedPath("en"),
        "zh-CN": localizedPath("zh"),
        "x-default": localizedPath("en"),
      },
    },
    openGraph: {
      title,
      description,
      url: localizedPath(lang),
      siteName: isChinese ? "赣星电动工具" : "GANXING Tools",
      locale: isChinese ? "zh_CN" : "en_US",
      alternateLocale: isChinese ? ["en_US"] : ["zh_CN"],
      type: "website",
      images: [
        {
          url: "/images/brand/ganxing-open-graph.png",
          width: 1200,
          height: 630,
          alt: isChinese ? "赣星专业表面处理工具" : "GANXING professional surface finishing systems",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/brand/ganxing-open-graph.png"],
    },
  };
}

export default async function HomePage({ params, searchParams }: PageProps) {
  const { lang: rawLang } = await params;

  if (!isLocale(rawLang)) {
    notFound();
  }

  const lang = rawLang as Locale;
  const requestedInquiry = (await searchParams)?.inquiry;
  const defaultInquiryType =
    requestedInquiry === "dealer" || requestedInquiry === "oem"
      ? requestedInquiry
      : "product";
  const copy = dictionary[lang];
  const ticker = [...tickerItems[lang], ...tickerItems[lang]];
  const categoryGroups = [
    {
      title: { en: "Automotive Polishing", zh: "汽车抛光工具" },
      slugs: [
        "cat-01-lithium",
        "cat-02-orbital-polisher",
        "cat-03-sander",
        "cat-04-rotary",
      ],
    },
    {
      title: { en: "Surface Finishing", zh: "表面处理" },
      slugs: ["cat-05-metal-polishing", "cat-06-stone-polishing"],
    },
    {
      title: { en: "Construction & Grinding", zh: "建筑翻新与研磨" },
      slugs: ["cat-07-angle-grinder", "cat-08-renovation"],
    },
    {
      title: { en: "Accessories & Consumables", zh: "配件耗材" },
      slugs: ["cat-09-accessories"],
    },
  ];

  return (
    <main className="home-page">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-5 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="absolute inset-x-0 top-14 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent sm:top-16" />

        <div className="mx-auto max-w-7xl">
          {/* Two-column on lg, stacked on mobile */}
          <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
            {/* Text content — first on mobile */}
            <div>
              <p className="brand-eyebrow">
                {copy.home.eyebrow}
              </p>
              <h1 className="brand-display mt-4 text-[2.6rem] font-semibold text-neutral-950 sm:text-6xl lg:text-8xl">
                {lang === "zh" ? (
                  <>
                    专业抛光机
                    <br />
                    <span className="text-red-600">与表面处理</span>
                    <br />
                    <span className="text-neutral-300">工具制造商</span>
                  </>
                ) : (
                  <>
                    Professional
                    <br />
                    <span className="text-red-600">polishing</span>
                    <br />
                    <span className="text-neutral-300">TOOLS</span>
                  </>
                )}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                {copy.home.subtitle}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ScrollToSection
                  targetId="products"
                  className="flex h-12 items-center justify-center rounded-full bg-red-600 px-7 text-sm font-semibold text-white shadow-xl shadow-red-600/20 transition hover:bg-red-700 active:bg-red-700 sm:h-11 sm:w-auto"
                >
                  {copy.home.primaryCta}
                </ScrollToSection>
                <ScrollToSection
                  targetId="contact"
                  className="flex h-12 items-center justify-center rounded-full border border-neutral-300 bg-white px-7 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950 active:border-neutral-950 sm:h-11 sm:w-auto"
                >
                  {copy.home.secondaryCta}
                </ScrollToSection>
              </div>
            </div>

            {/* Carousel — second on mobile */}
            <div>
              <HomeCarousel images={heroImages} lang={lang} />
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 md:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.value} className="bg-white p-4 sm:p-5">
                <p className="text-2xl font-semibold text-neutral-950 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-neutral-500 sm:text-xs">
                  {stat.label[lang]}
                </p>
              </div>
            ))}
          </div>

          {SHOW_FRANKFURT_EXHIBITION && (
            <div className="brand-panel mt-10 overflow-hidden">
              <div className="flex flex-col gap-2 border-b border-neutral-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <div>
                  <p className="brand-eyebrow">
                    {lang === "zh" ? "即将参展" : "Upcoming Exhibition"}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-neutral-950 sm:text-2xl">
                    {lang === "zh" ? "期待在法兰克福与您见面" : "Meet GANXING in Frankfurt"}
                  </h2>
                </div>
                <p className="text-sm font-semibold text-neutral-500">8–12 September 2026 · Hall 1.1, F20</p>
              </div>
              <div className="relative aspect-[1866/843] w-full bg-neutral-950">
                <Image
                  src="/images/Exhibition-images/frankfurt/ganxing-frankfurt-exhibition-poster.webp"
                  alt={lang === "zh" ? "赣星法兰克福展会海报" : "GANXING Frankfurt exhibition poster"}
                  fill
                  sizes="(min-width: 1280px) 1280px, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="overflow-hidden border-y border-neutral-200 bg-neutral-950 py-3.5 text-white">
        <div className="ticker-track flex w-max gap-8 whitespace-nowrap">
          {ticker.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-sm"
            >
              <span className="mr-8 text-red-500">/</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Products ── */}
      <section
        id="products"
        className="px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600 sm:text-sm">
            {copy.home.productsLabel}
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:mt-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl">
              {copy.home.productsTitle}
            </h2>
            <p className="text-sm font-medium text-neutral-500">
              {lang === "zh"
                ? `${productCategories.length} 个产品系列`
                : `${productCategories.length} categories`}
            </p>
          </div>

          <div className="mt-8 space-y-10 sm:mt-10 sm:space-y-12">
            {categoryGroups.map((group) => {
              const categories = group.slugs
                .map((slug) =>
                  productCategories.find((category) => category.slug === slug),
                )
                .filter(
                  (category): category is (typeof productCategories)[number] =>
                    Boolean(category),
                );

              return (
                <div key={group.title.en}>
                  <h3 className="text-xl font-semibold text-neutral-950 sm:text-2xl">
                    {group.title[lang]}
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:mt-5 lg:grid-cols-3 lg:gap-5">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        id={`category-card-${category.slug}`}
                        href={categoryPath(lang, category)}
                        className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-red-100 hover:shadow-xl hover:shadow-neutral-950/10 active:border-red-100"
                      >
                        <div className="relative aspect-[16/10] bg-neutral-100">
                          <Image
                            src={category.sceneImage}
                            alt={category.title[lang]}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">
                            {category.products.length} {copy.product.modelCount}
                          </p>
                          <h4 className="mt-2 text-lg font-semibold text-neutral-950 sm:text-xl">
                            {category.title[lang]}
                          </h4>
                          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                            {category.description[lang]}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Technology ── */}
      <section
        id="technology"
        className="bg-neutral-950 px-4 py-16 text-white sm:px-5 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
            {/* Video — full width on mobile */}
            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black lg:aspect-square">
              <DeferredVideo
                lang={lang}
                src="/images/videos/tech-showcase.mp4?v=20260817-optimized"
                poster="/images/videos/ganxing-polishing-technology-video-poster.webp"
                title={lang === "zh" ? "赣星抛光技术展示" : "GANXING polishing technology showcase"}
              />
              <div className="absolute right-3 top-3 rounded-lg border border-white/15 bg-neutral-950/70 px-3 py-2 text-xs backdrop-blur sm:right-5 sm:top-5 sm:px-4 sm:py-3 sm:text-sm">
                <strong className="block text-red-400">
                  Polishing Technology
                </strong>
                <span className="text-white/70">
                  Digital Control & Li-ion System
                </span>
              </div>
            </div>

            {/* Text content */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400 sm:text-sm">
                {copy.home.techLabel}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                {copy.home.techTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-400 sm:mt-5">
                {lang === "zh"
                  ? "我们将先进的电机控制算法与精密机械工艺融合，打造行业领先的专业抛光工具动力平台。"
                  : "We integrate advanced motor control algorithms with precision mechanical engineering to create an industry-leading power platform for professional polishing tools."}
              </p>
              <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
                {technologyFeatures.map((feature, index) => (
                  <div
                    key={feature.title.en}
                    className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-[3rem_1fr] sm:gap-4 sm:p-5"
                  >
                    <div className="text-sm font-semibold tracking-[0.2em] text-red-400">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {feature.title[lang]}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                        {feature.body[lang]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <MotionSystems lang={lang} />
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        className="px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
            {/* Text content */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600 sm:text-sm">
                {copy.home.aboutLabel}
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl md:text-5xl">
                {copy.home.aboutTitle}
              </h2>
              <p className="mt-5 leading-relaxed text-neutral-600">
                {lang === "zh"
                  ? "永康市赣星电动工具有限公司是一家集研发、智造与全球销售于一体的科技型企业，长期深耕表面处理技术领域，致力于抛光类电动工具的技术研发和应用创新。"
                  : "Yongkang Ganxing Power Tools Co., Ltd. is a technology-driven enterprise integrating R&D, intelligent manufacturing, and global sales, focused on professional polishing power tools and surface-treatment innovation."}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["CE", "ETL", "CCC", "ISO 9001", "RoHS", "GS"].map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-semibold text-neutral-700"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200">
                {[
                  { value: "20+", label: { en: "Patents", zh: "核心专利" } },
                  {
                    value: "10+",
                    label: { en: "Engineers", zh: "研发工程师" },
                  },
                  {
                    value: "50+",
                    label: { en: "Product Models", zh: "产品型号" },
                  },
                  {
                    value: "15+",
                    label: { en: "Countries Served", zh: "全球销售网络" },
                  },
                ].map((stat) => (
                  <div key={stat.label.en} className="bg-white p-4 sm:p-6">
                    <p className="text-2xl font-semibold text-neutral-950 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      {stat.label[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Factory image */}
            <div className="relative min-h-[260px] overflow-hidden rounded-xl bg-neutral-100 shadow-xl shadow-neutral-950/10 sm:min-h-[380px] lg:min-h-[520px]">
              <Image
                src="/images/imageupdate/factory.jpg"
                alt={lang === "zh" ? "赣星工厂" : "GANXING factory"}
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-white/60 bg-white/95 p-2.5 pr-4 text-neutral-950 shadow-xl backdrop-blur sm:bottom-6 sm:left-6 sm:gap-4 sm:p-3 sm:pr-5">
                <div className="relative h-[52px] w-[120px] flex-none overflow-hidden rounded-md bg-[#d93125] shadow-sm sm:h-[60px] sm:w-[139px]">
                  <Image
                    src="/images/brand/ganxing-logo.png"
                    alt={lang === "zh" ? "赣星电动工具 Logo" : "GANXING Power Tools logo"}
                    fill
                    sizes="139px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <strong className="block text-base sm:text-xl">Since 2010</strong>
                  <span className="block max-w-[150px] text-xs leading-snug text-neutral-500 sm:text-sm">
                    {lang === "zh"
                      ? "专业抛光电动工具制造商"
                      : "Professional polishing tool manufacturer"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partnership ── */}
      <section className="bg-neutral-950 px-4 py-16 text-white sm:px-5 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="brand-eyebrow text-red-400">
            {lang === "zh" ? "全球商业合作" : "Global Partnerships"}
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="brand-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
              {lang === "zh" ? "与赣星一起拓展市场" : "Build your market with GANXING"}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-400 lg:justify-self-end">
              {lang === "zh"
                ? "我们支持海外经销合作、品牌定制、产品配置与包装方案，为不同市场提供稳定的专业工具供应。"
                : "We support distributors and private-label partners with product configuration, branding, packaging, and dependable professional tool supply."}
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">01</span>
              <h3 className="mt-4 text-2xl font-semibold">{lang === "zh" ? "成为经销商" : "Become a Distributor"}</h3>
              <p className="mt-3 leading-relaxed text-neutral-400">
                {lang === "zh" ? "获取产品组合建议、渠道报价与市场支持。" : "Discuss product portfolios, channel pricing, and market support."}
              </p>
              <Link href={`${localizedPath(lang)}?inquiry=dealer#contact`} className="mt-6 inline-flex h-11 items-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white shadow-lg shadow-red-950/20 transition hover:bg-red-500">
                {lang === "zh" ? "申请经销合作" : "Discuss Distribution"}
              </Link>
            </article>
            <article className="rounded-xl border border-red-500/40 bg-red-600 p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">02</span>
              <h3 className="mt-4 text-2xl font-semibold">OEM / ODM</h3>
              <p className="mt-3 leading-relaxed text-white/75">
                {lang === "zh" ? "支持颜色、品牌标识、包装、配置及市场认证需求。" : "Configure colors, branding, packaging, product sets, and market requirements."}
              </p>
              <Link href={`${localizedPath(lang)}?inquiry=oem#contact`} className="mt-6 inline-flex h-11 items-center rounded-full bg-neutral-950 px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-neutral-950">
                {lang === "zh" ? "讨论定制项目" : "Start an OEM Project"}
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── Knowledge Center ── */}
      <section className="bg-neutral-950 px-4 py-16 text-white sm:px-5 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-400 sm:text-sm">
                {lang === "zh" ? "赣星专业知识中心" : "GANXING Knowledge Center"}
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                {lang === "zh" ? "先理解表面，再选择工具。" : "Understand the surface before choosing the tool."}
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-neutral-400">
                {lang === "zh" ? "用材料、运动和工艺知识，解决划痕、太阳纹、工具选型及抛光垫匹配等常见问题。" : "Use material, motion and process knowledge to solve scratches, swirl marks, tool selection and polishing-pad questions."}
              </p>
              <Link href={knowledgeTopicPath(lang)} className="mt-8 inline-flex min-h-12 items-center rounded-full bg-red-600 px-6 text-sm font-bold text-white transition hover:bg-red-500">
                {lang === "zh" ? "进入知识中心" : "Explore the knowledge center"} →
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {knowledgeArticles.slice(0, 4).map((article, index) => (
                <Link key={article.slug} href={knowledgeArticlePath(lang, article)} className="group rounded-3xl border border-white/10 bg-white/[.04] p-5 transition hover:border-red-500/50 hover:bg-white/[.07]">
                  <span className="text-xs font-black tracking-[.18em] text-red-400">0{index + 1}</span>
                  <h3 className="mt-5 text-base font-bold leading-6 text-white group-hover:text-red-300">{article.title[lang]}</h3>
                  <span className="mt-5 inline-block text-xs font-bold text-neutral-400">{article.readingTime[lang]} →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── News ── */}
      <section
        id="news"
        className="bg-white px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600 sm:text-sm">
            {copy.home.newsLabel}
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:mt-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl">
              {lang === "zh" ? "最新资讯" : "News & Updates"}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:mt-10 lg:grid-cols-3 lg:gap-5">
            {newsItems.map((item) => (
              <Link
                key={item.slug}
                href={localizedPath(lang, `/news/${item.slug}`)}
                className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-950/10 active:border-red-100"
              >
                <div className="relative aspect-[16/10] bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.title[lang]}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    <span className="text-red-600">{item.category[lang]}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-neutral-950 sm:mt-3 sm:text-xl">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:mt-3">
                    {item.excerpt[lang]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            {/* Contact info — below form on mobile, left on desktop */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
                {lang === "zh" ? "开始" : "Let's"}
                <br />
                <span className="text-red-600">
                  {lang === "zh" ? "合作" : "Work Together"}
                </span>
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-600 sm:mt-5">
                {copy.home.contactBody}
              </p>
              <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label.en}
                    className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
                      {item.label[lang]}
                    </p>
                    <p className="mt-1.5 text-sm text-neutral-800 sm:mt-2 sm:text-base">
                      {item.value[lang]}
                    </p>
                  </div>
                ))}
                <div className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-red-600 sm:mb-4">
                    {lang === "zh" ? "社交与店铺" : "Social Channels"}
                  </p>
                  <SocialLinks lang={lang} />
                </div>
              </div>
            </div>

            {/* Form — first on mobile */}
            <div className="order-1 lg:order-2">
              <InquiryForm key={defaultInquiryType} lang={lang} defaultInquiryType={defaultInquiryType} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
