import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
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
  logo: {
    "@type": "ImageObject",
    url: "https://www.ganxingtools.com/images/brand/ganxing-logo.png",
    width: 640,
    height: 277,
  },
  description:
    "GANXING Tools manufactures professional polishing, sanding, grinding, and surface-finishing tools for B2B buyers.",
  email: "sales@ganxingtools.com",
  telephone: "+86-579-87293328",
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

const inter = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
  style: "normal",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#d92d20",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ganxingtools.com"),
  title: "GANXING Tools",
  description: "Professional polishing tools for industrial and trade teams.",
  openGraph: {
    type: "website",
    siteName: "GANXING Tools",
    title: "GANXING Tools | Professional Surface Finishing Systems",
    description:
      "Professional polishing, sanding, grinding, and surface-finishing tools for global B2B buyers.",
    images: [
      {
        url: "/images/brand/ganxing-open-graph.png",
        width: 1200,
        height: 630,
        alt: "GANXING professional surface finishing systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GANXING Tools | Professional Surface Finishing Systems",
    description:
      "Professional polishing, sanding, grinding, and surface-finishing tools for global B2B buyers.",
    images: ["/images/brand/ganxing-open-graph.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=ganxing-20260817", sizes: "any" },
      { url: "/icon.png?v=ganxing-20260817", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png?v=ganxing-20260817", sizes: "512x512" }],
  },
  ...(process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION
    ? {
        verification: {
          other: {
            "baidu-site-verification": process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION,
          },
        },
      }
    : {}),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const documentLang = requestHeaders.get("x-site-locale") === "zh" ? "zh-CN" : "en";

  return (
    <html lang={documentLang} suppressHydrationWarning>
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
