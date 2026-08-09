import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.ganxingtools.com/#organization",
  name: "GANXING Tools",
  alternateName: [
    "GANXING",
    "赣星",
    "赣星电动工具",
    "永康市赣星电动工具有限公司",
    "Yongkang Ganxing Power Tools Co., Ltd.",
  ],
  url: "https://www.ganxingtools.com",
  description:
    "GANXING Tools manufactures professional polishing, sanding, grinding, and surface-finishing tools for B2B buyers.",
  email: "sales@ganxingtools.com",
  telephone: "+86-133-3579-0798",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "No. 8, Building 11, Guangchang East Road, Xiadianwu Village, Dongcheng Street",
    addressLocality: "Yongkang",
    addressRegion: "Zhejiang",
    addressCountry: "CN",
  },
  sameAs: [
    "https://www.instagram.com/ganxing.polisher",
    "https://www.tiktok.com/@ganxing_powertools",
  ],
  knowsAbout: [
    "orbital polishers",
    "rotary polishers",
    "cordless polishers",
    "electric sanders",
    "metal polishing machines",
    "wet polishers",
    "angle grinders",
  ],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ganxingtools.com"),
  title: "GANXING Tools",
  description: "Professional polishing tools for industrial and trade teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
