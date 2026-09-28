import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { productCategories } from "@/data/products";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { categoryPath } from "@/lib/product-seo";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "GANXING Tools",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: rawLang } = await params;

  if (!isLocale(rawLang)) {
    notFound();
  }

  const lang = rawLang as Locale;
  const headerCategories = productCategories.map((category) => ({
    slug: category.slug,
    title: category.title[lang],
    href: categoryPath(lang, category),
  }));

  return (
    <>
      <ScrollToTop />
      <Header lang={lang} categories={headerCategories} />
      {children}
      <Footer lang={lang} />
    </>
  );
}
