"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { alternateLocale, localizedPath, type Locale } from "@/lib/i18n";
import { dictionary } from "@/data/dictionary";

type HeaderProps = {
  lang: Locale;
};

export default function Header({ lang }: HeaderProps) {
  const copy = dictionary[lang];
  const otherLang = alternateLocale(lang);
  const pathname = usePathname();
  const currentPath = pathname.replace(/^\/(en|zh)/, "") || "/";
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: `${localizedPath(lang)}#products`, label: copy.nav.products },
    { href: `${localizedPath(lang)}#technology`, label: copy.nav.technology },
    { href: `${localizedPath(lang)}#about`, label: copy.nav.about },
    { href: `${localizedPath(lang)}#news`, label: copy.nav.news },
    { href: `${localizedPath(lang)}#contact`, label: copy.nav.contact },
  ];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 lg:px-8">
          {/* Logo */}
          <Link
            href={localizedPath(lang)}
            className="flex items-center gap-2.5 font-semibold tracking-[0.18em] text-neutral-950"
            onClick={() => setMenuOpen(false)}
          >
            <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-red-600" />
            <span className="text-sm sm:text-base">{copy.brand as string}</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex lg:gap-8">
            {navLinks.map((link) => (
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
              className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 transition hover:border-red-600 hover:text-red-600"
            >
              {otherLang}
            </Link>
            <Link
              href={`${localizedPath(lang)}#contact`}
              className="hidden rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/15 transition hover:bg-red-700 sm:inline-flex"
            >
              {copy.nav.quote}
            </Link>

            {/* Hamburger button — mobile only */}
            <button
              type="button"
              className="ml-1 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg transition active:bg-neutral-100 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
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
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed left-0 right-0 top-14 z-40 border-b border-neutral-200 bg-white transition-all duration-300 ease-in-out md:hidden ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col px-4 pb-6 pt-4">
          {navLinks.map((link) => (
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
