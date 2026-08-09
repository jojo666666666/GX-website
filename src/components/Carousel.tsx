"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";
import Lightbox from "@/components/Lightbox";

type CarouselProps = {
  images: string[];
  alt: string;
  lang: "en" | "zh";
};

export default function Carousel({ images, alt, lang }: CarouselProps) {
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const hasMultiple = images.length > 1;
  const currentImage = images[active] ?? images[0];

  const move = useCallback(
    (direction: -1 | 1) => {
      setActive(
        (current) => (current + direction + images.length) % images.length,
      );
    },
    [images.length],
  );

  const handlePointerUp = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!pointerStart.current) {
      return;
    }

    const deltaX = event.clientX - pointerStart.current.x;
    const deltaY = event.clientY - pointerStart.current.y;
    pointerStart.current = null;

    if (Math.abs(deltaX) > 42 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
      event.preventDefault();
      event.stopPropagation();
      move(deltaX > 0 ? -1 : 1);
      return;
    }

    if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
      event.preventDefault();
      event.stopPropagation();
      setLightboxIndex(active);
    }
  };

  if (!currentImage) {
    return (
      <div className="grid aspect-[4/3] place-items-center rounded-t-lg bg-neutral-100 text-sm text-neutral-400">
        {lang === "zh" ? "赣星" : "GANXING"}
      </div>
    );
  }

  return (
    <>
      <div className="group relative aspect-[4/3] overflow-hidden rounded-t-lg bg-white">
        <button
          type="button"
          className="relative h-full w-full cursor-zoom-in touch-pan-y"
          onPointerDown={(event) => {
            pointerStart.current = { x: event.clientX, y: event.clientY };
          }}
          onPointerCancel={() => {
            pointerStart.current = null;
          }}
          onPointerUp={handlePointerUp}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              setLightboxIndex(active);
            }
          }}
          aria-label={`Open ${alt} image`}
          title="Click to enlarge"
        >
          {/*
           * Performance: render ONLY the active image.
           * Previously all images were rendered simultaneously (just hidden via
           * opacity), causing every product image to be fetched on page load.
           * Now we render a single <Image> and swap it when the user navigates.
           * The key prop forces React to remount (and thus re-fetch) only when
           * the src actually changes.
           */}
          <Image
            key={currentImage}
            src={currentImage}
            alt={alt}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-6 transition duration-500 group-hover:scale-[1.03]"
          />
        </button>

        {hasMultiple ? (
          <>
            <button
              type="button"
              className="absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-neutral-200 bg-white/90 text-neutral-900 opacity-100 shadow-lg transition hover:border-red-600 hover:bg-red-600 hover:text-white md:opacity-0 md:group-hover:opacity-100"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                move(-1);
              }}
              aria-label="Previous image"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-neutral-200 bg-transparent /90 text-neutral-900 opacity-100 shadow-lg transition hover:border-red-600 hover:bg-red-600 hover:text-white md:opacity-0 md:group-hover:opacity-100"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                move(1);
              }}
              aria-label="Next image"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
            <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  className={`h-1.5 rounded-full transition-all ${index === active ? "w-6 bg-red-600" : "w-1.5 bg-neutral-300"}`}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setActive(index);
                  }}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <Lightbox
        images={images}
        activeIndex={lightboxIndex}
        alt={alt}
        onChange={(index) => {
          setLightboxIndex(index);
          setActive(index);
        }}
        onClose={() => setLightboxIndex(null)}
      />
    </>
  );
}
