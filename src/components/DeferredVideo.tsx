"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function DeferredVideo({
  lang,
  src,
  poster,
  title,
}: {
  lang: Locale;
  src: string;
  poster: string;
  title: string;
}) {
  const [hasStarted, setHasStarted] = useState(false);
  const playLabel = lang === "zh" ? `播放视频：${title}` : `Play video: ${title}`;

  if (hasStarted) {
    return (
      <video
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        controls
        playsInline
        preload="auto"
        aria-label={title}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setHasStarted(true)}
      className="group relative h-full w-full overflow-hidden text-left"
      aria-label={playLabel}
    >
      <Image
        src={poster}
        alt={`${title} video cover`}
        fill
        sizes="(min-width: 1024px) 47vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-[1.025]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/15" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-red-600 text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition group-hover:scale-105 group-hover:bg-red-500 sm:h-20 sm:w-20">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" aria-hidden="true">
            <path d="M8 5.5v13l10-6.5L8 5.5Z" />
          </svg>
        </span>
      </span>
      <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        {lang === "zh" ? "点击播放 · 15 秒" : "Play video · 15 sec"}
      </span>
    </button>
  );
}
