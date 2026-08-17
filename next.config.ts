import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-insights.com https://challenges.cloudflare.com",
  "frame-src https://challenges.cloudflare.com",
  "media-src 'self'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.2.11", "172.30.64.1"],

  experimental: {
    serverActions: {
      bodySizeLimit: "64kb",
      allowedOrigins: ["ganxingtools.com", "www.ganxingtools.com"],
    },
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key:
              process.env.NODE_ENV === "production"
                ? "Content-Security-Policy"
                : "Content-Security-Policy-Report-Only",
            value: contentSecurityPolicy,
          },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
          { key: "X-DNS-Prefetch-Control", value: "off" },
        ],
      },
      {
        source: "/images/download%20management/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/images/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  images: {
    // Serve AVIF first (smallest), fall back to WebP — both are far smaller than JPEG/PNG
    formats: ["image/avif", "image/webp"],

    // Device widths used to generate srcset breakpoints.
    // Tuned for mobile-first: covers 360 → 1920 px without over-generating sizes.
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],

    // Sizes used for fixed-width images (fill + explicit sizes prop).
    imageSizes: [16, 32, 64, 96, 128, 256, 384, 512],

    // Keep generated images in the cache for 60 days (default is 60 s).
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },
};

export default nextConfig;
