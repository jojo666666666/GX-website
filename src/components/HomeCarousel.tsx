"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";

export default function HomeCarousel({ images, lang }: { images: string[]; lang: "en" | "zh" }) {
  const [active, setActive] = useState(0);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 4200);

    return () => window.clearInterval(id);
  }, [images.length]);

  const move = (direction: -1 | 1) => {
    setActive(
      (current) => (current + direction + images.length) % images.length,
    );
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    if (!pointerStart.current) return;
    const deltaX = event.clientX - pointerStart.current.x;
    const deltaY = event.clientY - pointerStart.current.y;
    pointerStart.current = null;

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      move(deltaX > 0 ? -1 : 1);
    }
  };

  return (
    <div
      className="relative min-h-[240px] overflow-hidden rounded-xl bg-neutral-950 shadow-2xl shadow-neutral-950/20 sm:min-h-[340px] lg:min-h-[420px]"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        pointerStart.current = null;
      }}
    >
      {/*
       * Performance: render ONLY the active image plus the next one (preloaded).
       * Previously all 6 hero images were rendered simultaneously, causing all
       * of them to be fetched on page load. Now:
       *   - active image: rendered with priority (LCP candidate)
       *   - next image: rendered hidden so it's ready before the auto-advance
       *   - all other images: not in the DOM until they become active/next
       */}
      {images.map((image, index) => {
        const isActive = index === active;
        const isNext = index === (active + 1) % images.length;

        // Only render the active slide and the upcoming slide.
        // The upcoming slide is rendered but invisible so the browser can
        // start fetching it before the auto-advance timer fires.
        if (!isActive && !isNext) return null;

        return (
          <Image
            key={image}
            src={image}
            alt={lang === "zh" ? "赣星专业抛光工具" : "GANXING polishing tools"}
            fill
            // Only the very first image (index 0 on initial load) gets priority.
            // Subsequent slides should NOT block the initial page render.
            priority={index === 0}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className={`object-cover transition duration-700 ${isActive ? "opacity-90 scale-100" : "opacity-0 scale-105"}`}
          />
        );
      })}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />

      {/* Prev button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          move(-1);
        }}
        className="absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-neutral-950 active:scale-95 sm:h-10 sm:w-10"
        aria-label="Previous hero image"
      >
        <ArrowLeftIcon className="h-5 w-5" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          move(1);
        }}
        className="absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-neutral-950 active:scale-95 sm:h-10 sm:w-10"
        aria-label="Next hero image"
      >
        <ArrowRightIcon className="h-5 w-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={`${image}-dot`}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActive(index);
            }}
            className={`h-5 rounded-full transition-all active:scale-90 ${index === active ? "w-8 bg-red-500" : "w-2 bg-white/50"}`}
            style={{ minWidth: index === active ? "2rem" : "0.5rem" }}
            aria-label={`Show hero image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
