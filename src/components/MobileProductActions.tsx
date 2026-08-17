"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function MobileProductActions({
  lang,
  model,
  categoryUrl,
}: {
  lang: Locale;
  model: string;
  categoryUrl: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const inquiry = document.getElementById("product-inquiry");
    let inquiryInView = false;
    let frame = 0;

    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const revealPoint = Math.min(520, window.innerHeight * 0.7);
        setIsVisible(window.scrollY > revealPoint && !inquiryInView);
      });
    };

    const observer = inquiry
      ? new IntersectionObserver(
          ([entry]) => {
            inquiryInView = entry.isIntersecting;
            update();
          },
          { rootMargin: "0px 0px -18% 0px" },
        )
      : null;

    if (inquiry && observer) {
      observer.observe(inquiry);
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 px-4 pt-3 shadow-[0_-12px_35px_rgba(0,0,0,0.12)] backdrop-blur lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      role="navigation"
      aria-label={lang === "zh" ? "产品快捷操作" : "Product quick actions"}
    >
      <div className="mx-auto grid max-w-xl grid-cols-[0.8fr_1.2fr] gap-3">
        <Link
          href={categoryUrl}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-300 px-4 text-sm font-semibold text-neutral-950"
        >
          {lang === "zh" ? "返回分类" : "Back"}
        </Link>
        <Link
          href="#product-inquiry"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-600 px-4 text-center text-sm font-semibold text-white shadow-lg shadow-red-600/20"
        >
          {lang === "zh" ? `询价 ${model}` : `Quote ${model}`}
        </Link>
      </div>
    </div>
  );
}
