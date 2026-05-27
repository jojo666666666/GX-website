"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "@/components/Icons";

type LightboxProps = {
  images: string[];
  activeIndex: number | null;
  alt: string;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function Lightbox({
  images,
  activeIndex,
  alt,
  onChange,
  onClose,
}: LightboxProps) {
  const [mounted, setMounted] = useState(false);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const isOpen = activeIndex !== null;
  const currentImage = activeIndex !== null ? images[activeIndex] : null;
  const hasMultiple = images.length > 1;

  useEffect(() => {
    setMounted(true);
  }, []);

  const move = useCallback(
    (direction: -1 | 1) => {
      if (activeIndex === null || images.length === 0) {
        return;
      }

      onChange((activeIndex + direction + images.length) % images.length);
    },
    [activeIndex, images.length, onChange],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        move(-1);
      }
      if (event.key === "ArrowRight") {
        move(1);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow || "auto";
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen, move, onClose]);

  if (!isOpen || !currentImage) {
    return null;
  }

  if (!mounted) {
    return null;
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerStart.current || !hasMultiple) {
      pointerStart.current = null;
      return;
    }

    const deltaX = event.clientX - pointerStart.current.x;
    const deltaY = event.clientY - pointerStart.current.y;
    pointerStart.current = null;

    if (Math.abs(deltaX) > 42 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
      event.preventDefault();
      event.stopPropagation();
      move(deltaX > 0 ? -1 : 1);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/90 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-neutral-950"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <CloseIcon className="h-5 w-5" />
      </button>
      {hasMultiple ? (
        <>
          <button
            type="button"
            className="absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-neutral-950"
            onClick={(event) => {
              event.stopPropagation();
              move(-1);
            }}
            aria-label="Previous enlarged image"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-neutral-950"
            onClick={(event) => {
              event.stopPropagation();
              move(1);
            }}
            aria-label="Next enlarged image"
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        </>
      ) : null}
      <div
        className="relative h-[82vh] w-full max-w-6xl touch-pan-y"
        onClick={(event) => event.stopPropagation()}
        onPointerDown={(event) => {
          pointerStart.current = { x: event.clientX, y: event.clientY };
        }}
        onPointerCancel={() => {
          pointerStart.current = null;
        }}
        onPointerUp={handlePointerUp}
      >
        {/*
         * Performance: no `priority` here — the lightbox is only opened on
         * explicit user interaction, so there is no reason to preload these
         * images. Removing `priority` lets the browser treat them as normal
         * lazy-loaded resources and avoids unnecessary bandwidth on page load.
         */}
        <Image
          src={currentImage}
          alt={alt}
          fill
          sizes="100vw"
          className="object-contain"
        />
        {hasMultiple && activeIndex !== null ? (
          <div className="absolute bottom-3 left-1/2 rounded-full bg-black/50 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
            {activeIndex + 1} / {images.length}
          </div>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
