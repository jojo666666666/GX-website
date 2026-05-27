import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.2.11", "172.30.64.1"],

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
