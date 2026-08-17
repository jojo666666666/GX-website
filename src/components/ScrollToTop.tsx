"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PRODUCT_RETURN_KEY = "ganxing-product-listing-return";
const HOME_RETURN_KEY = "ganxing-home-return";
const MAX_RETURN_AGE = 30 * 60 * 1000;

type ProductListingReturn = {
  pathname: string;
  cardId: string;
  scrollY: number;
  savedAt: number;
};

type HomeReturn = ProductListingReturn;

/**
 * Instantly scrolls the window to the top (0, 0) whenever the Next.js
 * pathname changes. This prevents the browser from inheriting the previous
 * page's scroll position and eliminates the sluggish "slide-down" effect
 * that occurs when scroll-behavior: smooth is active during route changes.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const hash = window.location.hash.slice(1);

    const isLocalizedHome = /^\/(?:en|zh)$/.test(pathname);
    const rememberHomePosition = (event: MouseEvent) => {
      if (!isLocalizedHome || event.button !== 0) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        !destination.pathname.startsWith(`${pathname}/products/`)
      ) {
        return;
      }

      sessionStorage.setItem(
        HOME_RETURN_KEY,
        JSON.stringify({
          pathname,
          cardId: link.id || "products",
          scrollY: window.scrollY,
          savedAt: Date.now(),
        } satisfies HomeReturn),
      );
    };

    document.addEventListener("click", rememberHomePosition, true);

    let savedReturn: ProductListingReturn | null = null;
    let savedHomeReturn: HomeReturn | null = null;
    try {
      const saved = sessionStorage.getItem(PRODUCT_RETURN_KEY);
      if (saved) savedReturn = JSON.parse(saved) as ProductListingReturn;
      const savedHome = sessionStorage.getItem(HOME_RETURN_KEY);
      if (savedHome) savedHomeReturn = JSON.parse(savedHome) as HomeReturn;
    } catch {
      sessionStorage.removeItem(PRODUCT_RETURN_KEY);
      sessionStorage.removeItem(HOME_RETURN_KEY);
    }

    const shouldRestoreProduct =
      !hash &&
      savedReturn?.pathname === pathname &&
      Date.now() - savedReturn.savedAt < MAX_RETURN_AGE;
    const shouldRestoreHome =
      !hash &&
      savedHomeReturn?.pathname === pathname &&
      Date.now() - savedHomeReturn.savedAt < MAX_RETURN_AGE;
    const returnPosition = shouldRestoreProduct
      ? savedReturn
      : shouldRestoreHome
        ? savedHomeReturn
        : null;
    const returnStorageKey = shouldRestoreProduct
      ? PRODUCT_RETURN_KEY
      : HOME_RETURN_KEY;

    let frameOne = 0;
    let frameTwo = 0;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;

    if (returnPosition) {
      const restore = () => {
        const card = document.getElementById(returnPosition.cardId);
        const headerOffset = window.innerWidth >= 768 ? 96 : 76;
        const top = card
          ? card.getBoundingClientRect().top + window.scrollY - headerOffset
          : returnPosition.scrollY;
        window.scrollTo({ top, left: 0, behavior: "instant" });
      };

      frameOne = window.requestAnimationFrame(() => {
        frameTwo = window.requestAnimationFrame(() => {
          restore();
          retryTimer = setTimeout(() => {
            restore();
            sessionStorage.removeItem(returnStorageKey);
          }, 180);
        });
      });

      return () => {
        window.cancelAnimationFrame(frameOne);
        window.cancelAnimationFrame(frameTwo);
        if (retryTimer) clearTimeout(retryTimer);
        document.removeEventListener("click", rememberHomePosition, true);
        window.history.scrollRestoration = previousScrollRestoration;
      };
    }

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return () => {
        document.removeEventListener("click", rememberHomePosition, true);
        window.history.scrollRestoration = previousScrollRestoration;
      };
    }

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
      document.removeEventListener("click", rememberHomePosition, true);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [pathname]);

  return null;
}
