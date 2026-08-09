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
    const hash = window.location.hash.slice(1);

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    let frameOne = 0;
    let frameTwo = 0;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;

    const scrollToHash = () => {
      const target = document.getElementById(decodeURIComponent(hash));

      if (!target) return false;

      const headerOffset = window.innerWidth >= 768 ? 80 : 64;
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, left: 0, behavior: "instant" });
      return true;
    };

    // Wait until the destination route and its sections have rendered.
    frameOne = window.requestAnimationFrame(() => {
      frameTwo = window.requestAnimationFrame(() => {
        if (!scrollToHash()) {
          retryTimer = setTimeout(scrollToHash, 150);
        }
      });
    });

    return () => {
      window.cancelAnimationFrame(frameOne);
      window.cancelAnimationFrame(frameTwo);
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, [pathname]);

  return null;
}
