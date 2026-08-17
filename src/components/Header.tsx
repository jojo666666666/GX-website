"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { alternateLocale, localizedPath, type Locale } from "@/lib/i18n";
import { dictionary } from "@/data/dictionary";
import { productCategories } from "@/data/products";
import { categoryPath } from "@/lib/product-seo";

type HeaderProps = {
  lang: Locale;
};

// Product category groups for the dropdown menu
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

export default function Header({ lang }: HeaderProps) {
  const copy = dictionary[lang];
  const otherLang = alternateLocale(lang);
  const pathname = usePathname();
  const currentPath = pathname.replace(/^\/(en|zh)/, "") || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  // Smooth scroll to a section by id
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = window.innerWidth >= 640 ? 64 : 56;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Dropdown hover handlers with a small delay to prevent accidental close
  const handleProductsMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const otherNavLinks = [
    { href: `${localizedPath(lang)}#technology`, label: copy.nav.technology },
    { href: `${localizedPath(lang)}#about`, label: copy.nav.about },
    { href: `${localizedPath(lang)}#news`, label: copy.nav.news },
    {
      href: localizedPath(lang, "/downloads"),
      label: lang === "zh" ? "下载" : "Download",
    },
    { href: `${localizedPath(lang)}#contact`, label: copy.nav.contact },
  ];

  const allNavLinks = [
    { href: `${localizedPath(lang)}#products`, label: copy.nav.products },
    ...otherNavLinks,
  ];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[70] border-b border-black/5 bg-white/95 backdrop-blur-xl">
        <nav className="site-header-nav mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 lg:px-8">
          {/* Logo */}
          <Link
            href={localizedPath(lang)}
            className="group flex min-h-11 items-center"
            onClick={() => setMenuOpen(false)}
            aria-label={lang === "zh" ? "赣星首页" : "GANXING home"}
          >
            <span className="relative h-8 w-[74px] overflow-hidden rounded-[4px] bg-[#d93125] shadow-sm ring-1 ring-black/5 transition group-hover:shadow-md sm:h-9 sm:w-[83px]">
              <Image
                src="/images/brand/ganxing-logo.png"
                alt={lang === "zh" ? "赣星电动工具 Logo" : "GANXING Power Tools logo"}
                fill
                priority
                sizes="83px"
                className="object-contain"
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 text-sm font-medium text-neutral-600 lg:flex lg:gap-8">
            {/* Products link with hover dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button
                type="button"
                className="flex items-center gap-1 transition hover:text-red-600"
                onClick={() => {
                  scrollToSection("products");
                  setDropdownOpen(false);
                }}
              >
                {copy.nav.products}
                {/* Chevron icon */}
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute left-1/2 top-full z-50 mt-3 w-[520px] -translate-x-1/2 transition-all duration-200 ${
                  dropdownOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                {/* Arrow */}
                <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-neutral-200 bg-white" />

                <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-950/10">
                  <div className="grid grid-cols-2 gap-px bg-neutral-100 p-px">
                    {categoryGroups.map((group) => {
                      const categories = group.slugs
                        .map((slug) =>
                          productCategories.find((c) => c.slug === slug),
                        )
                        .filter(Boolean) as typeof productCategories;

                      return (
                        <div key={group.title.en} className="bg-white p-4">
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                            {group.title[lang]}
                          </p>
                          <ul className="space-y-1">
                            {categories.map((category) => (
                              <li key={category.slug}>
                                <Link
                                  href={categoryPath(lang, category)}
                                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-neutral-700 transition hover:bg-red-50 hover:text-red-600"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500/60" />
                                  {category.title[lang]}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                  {/* Footer link */}
                  <div className="border-t border-neutral-100 bg-neutral-50 px-4 py-3">
                    <Link
                      href={`${localizedPath(lang)}#products`}
                      className="text-xs font-semibold text-red-600 transition hover:text-red-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {lang === "zh"
                        ? "查看全部产品系列 →"
                        : "View all product categories →"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other nav links */}
            {otherNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-red-600"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <Link
              href={localizedPath(otherLang, currentPath)}
              className="inline-flex h-11 min-w-12 items-center justify-center rounded-full border border-neutral-200 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 transition hover:border-red-600 hover:text-red-600"
              onClick={() => {
                setMenuOpen(false);
                setDropdownOpen(false);
              }}
            >
              {otherLang}
            </Link>
            <Link
              href={`${localizedPath(lang)}#contact`}
              className="hidden h-11 items-center rounded-full bg-red-600 px-4 text-sm font-semibold text-white shadow-lg shadow-red-600/15 transition hover:bg-red-700 sm:inline-flex"
            >
              {copy.nav.quote}
            </Link>

            {/* Hamburger button — mobile only */}
            <button
              type="button"
              className="ml-1 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-lg transition active:bg-neutral-100 lg:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span
                className={`block h-0.5 w-5 rounded-full bg-neutral-800 transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-neutral-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-neutral-800 transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-navigation"
        className={`fixed left-0 right-0 top-14 z-[60] max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain border-b border-neutral-200 bg-white shadow-2xl transition-all duration-300 ease-in-out sm:top-16 sm:max-h-[calc(100dvh-4rem)] lg:hidden ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}
      >
        <nav
          className="mobile-menu-nav flex flex-col px-4 pb-6 pt-4"
          aria-label={lang === "zh" ? "手机导航" : "Mobile navigation"}
        >
          {allNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-h-[52px] items-center border-b border-neutral-100 text-base font-medium text-neutral-800 transition last:border-0 active:text-red-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`${localizedPath(lang)}#contact`}
            className="mt-5 flex h-12 items-center justify-center rounded-full bg-red-600 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition active:bg-red-700"
            onClick={() => setMenuOpen(false)}
          >
            {copy.nav.quote}
          </Link>
        </nav>
      </div>
    </>
  );
}
