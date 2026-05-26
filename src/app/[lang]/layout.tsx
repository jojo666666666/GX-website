import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { isLocale, locales, type Locale } from "@/lib/i18n";

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

  return (
    <>
      <ScrollToTop />
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  );
}
