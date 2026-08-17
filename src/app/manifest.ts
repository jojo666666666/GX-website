import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GANXING Tools",
    short_name: "GANXING",
    description:
      "Professional polishing, sanding, grinding, and surface-finishing tools.",
    start_url: "/en",
    display: "standalone",
    background_color: "#f5f5f2",
    theme_color: "#d92d20",
    icons: [
      {
        src: "/icon.png?v=ganxing-20260817",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
