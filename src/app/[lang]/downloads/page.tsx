import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const catalogUrl =
  "/images/download%20management/Ganxing_catalog_2026.pdf";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = isLocale(rawLang) ? rawLang : "en";

  return {
    title:
      lang === "zh"
        ? "资料下载中心 | GANXING Tools"
        : "Download Center | GANXING Tools",
    description:
      lang === "zh"
        ? "下载 GANXING 产品目录、技术资料及其他文档。"
        : "Download GANXING product catalogs, technical resources, and documents.",
  };
}

export default async function DownloadsPage({ params }: PageProps) {
  const { lang: rawLang } = await params;

  if (!isLocale(rawLang)) {
    notFound();
  }

  const lang = rawLang as Locale;

  return (
    <main>
      <section className="bg-neutral-950 px-4 pb-16 pt-24 text-white sm:px-5 sm:pb-20 sm:pt-28 lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <Link
            href={localizedPath(lang)}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 transition hover:text-red-300"
          >
            ← {lang === "zh" ? "返回首页" : "Back to Home"}
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-red-400 sm:text-sm">
            GANXING RESOURCES
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
            {lang === "zh" ? "资料下载中心" : "Download Center"}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            {lang === "zh"
              ? "在这里查看并下载最新的产品目录、技术资料和相关文档。我们会持续更新此页面。"
              : "Browse and download our latest product catalogs, technical resources, and related documents. New resources will be added here over time."}
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-5 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                number: "01",
                en: "Choose a resource",
                zh: "选择所需资料",
              },
              {
                number: "02",
                en: "Preview the document",
                zh: "在线预览内容",
              },
              {
                number: "03",
                en: "Download the PDF",
                zh: "确认并下载 PDF",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-neutral-200 bg-white p-5"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-red-600">
                  {step.number}
                </span>
                <p className="mt-2 font-semibold text-neutral-950">
                  {step[lang]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-end justify-between gap-4 border-b border-neutral-200 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">
                {lang === "zh" ? "可用资料" : "Available Resources"}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-neutral-950 sm:text-3xl">
                {lang === "zh" ? "产品目录" : "Product Catalogs"}
              </h2>
            </div>
            <span className="text-sm font-medium text-neutral-500">1 PDF</span>
          </div>

          <article className="mt-6 grid overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm lg:grid-cols-[280px_1fr]">
            <div className="flex min-h-64 items-center justify-center bg-gradient-to-br from-neutral-950 to-neutral-800 p-8 text-white">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-16 items-center justify-center rounded-md bg-red-600 text-sm font-bold shadow-xl">
                  PDF
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  GANXING 2026
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                  PDF
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
                  2026
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
                  23.6 MB
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-neutral-950 sm:text-3xl">
                {lang === "zh"
                  ? "GANXING 2026 产品目录"
                  : "GANXING Product Catalog 2026"}
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600">
                {lang === "zh"
                  ? "包含 GANXING 产品系列、主要技术参数、应用场景及产品选型信息。"
                  : "Includes GANXING product ranges, key specifications, applications, and product selection information."}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 px-6 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950"
                >
                  {lang === "zh" ? "在线预览" : "Preview PDF"}
                </a>
                <a
                  href={catalogUrl}
                  download
                  className="inline-flex h-12 items-center justify-center rounded-full bg-red-600 px-7 text-sm font-semibold text-white shadow-lg shadow-red-600/15 transition hover:bg-red-700"
                >
                  {lang === "zh" ? "下载 PDF" : "Download PDF"}
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
