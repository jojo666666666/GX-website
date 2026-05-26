"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Instantly scrolls the window to the top (0, 0) whenever the Next.js
 * pathname changes. This prevents the browser from inheriting the previous
 * page's scroll position and eliminates the sluggish "slide-down" effect
 * that occurs when scroll-behavior: smooth is active during route changes.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Use instant scroll — no animation, no jitter
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
