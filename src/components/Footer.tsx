import Image from "next/image";
import Link from "next/link";
import { dictionary } from "@/data/dictionary";
import { productCategories } from "@/data/products";
import { localizedPath, type Locale } from "@/lib/i18n";
import { categoryPath } from "@/lib/product-seo";

export default function Footer({ lang }: { lang: Locale }) {
  const copy = dictionary[lang];

  return (
    <footer className="bg-neutral-950 px-4 py-10 text-white sm:px-5 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Top grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link
              href={localizedPath(lang)}
              className="group inline-flex items-center"
              aria-label={lang === "zh" ? "赣星首页" : "GANXING home"}
            >
              <span className="relative h-[58px] w-[134px] overflow-hidden rounded-md bg-[#d93125] shadow-xl shadow-black/20 ring-1 ring-white/10 transition group-hover:ring-white/25">
                <Image
                  src="/images/brand/ganxing-logo.png"
                  alt={lang === "zh" ? "赣星电动工具 Logo" : "GANXING Power Tools logo"}
                  fill
                  sizes="134px"
                  className="object-contain"
                />
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
              {copy.home.contactBody}
            </p>
          </div>

          {/* Products column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {copy.nav.products}
            </h4>
            <div className="mt-2 grid gap-0 sm:mt-4 sm:gap-1">
              {productCategories.slice(0, 6).map((category) => (
                <Link
                  key={category.slug}
                  href={categoryPath(lang, category)}
                  className="flex min-h-11 items-center py-2 text-sm text-neutral-400 transition hover:text-red-400 active:text-red-400"
                >
                  {category.title[lang]}
                </Link>
              ))}
            </div>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {lang === "zh" ? "公司信息" : "Company"}
            </h4>
            <div className="mt-2 grid gap-0 sm:mt-4 sm:gap-1">
              <Link
                href={`${localizedPath(lang)}#technology`}
                className="flex min-h-11 items-center py-2 text-sm text-neutral-400 transition hover:text-red-400 active:text-red-400"
              >
                {copy.nav.technology}
              </Link>
              <Link
                href={`${localizedPath(lang)}#about`}
                className="flex min-h-11 items-center py-2 text-sm text-neutral-400 transition hover:text-red-400 active:text-red-400"
              >
                {copy.nav.about}
              </Link>
              <Link
                href={localizedPath(lang, "/knowledge")}
                className="flex min-h-11 items-center py-2 text-sm text-neutral-400 transition hover:text-red-400 active:text-red-400"
              >
                {copy.nav.knowledge}
              </Link>
              <Link
                href={`${localizedPath(lang)}#news`}
                className="flex min-h-11 items-center py-2 text-sm text-neutral-400 transition hover:text-red-400 active:text-red-400"
              >
                {copy.nav.news}
              </Link>
              <Link
                href={`${localizedPath(lang)}#contact`}
                className="flex min-h-11 items-center py-2 text-sm text-neutral-400 transition hover:text-red-400 active:text-red-400"
              >
                {copy.nav.contact}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span>
            {lang === "zh"
              ? "© 2026 赣星电动工具有限公司 版权所有"
              : "© 2026 GANXING POWER TOOLS Co., Ltd. All Rights Reserved."}
          </span>
          <span className="font-semibold tracking-[0.15em] text-neutral-400">
            {lang === "zh" ? "赣星电动工具" : "GANXING TOOLS"}
          </span>
        </div>
      </div>
    </footer>
  );
}
