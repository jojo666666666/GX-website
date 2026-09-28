"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      theme: "light";
      language: string;
      appearance: "interaction-only";
      "response-field": true;
      "response-field-name": "cf-turnstile-response";
    },
  ) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi & { reset: (widgetId?: string) => void };
  }
}

// Turnstile site keys are public identifiers and are restricted to the
// hostnames configured in Cloudflare. Keep the environment override for
// previews while ensuring the production widget cannot disappear if a
// deployment platform omits the public build-time variable.
const GANXING_TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAESzCo3ZtT9kdj60";

export default function TurnstileWidget({ lang }: { lang: "en" | "zh" }) {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  const renderWidget = useCallback(() => {
    if (!window.turnstile || !widgetRef.current || widgetIdRef.current) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(widgetRef.current, {
      sitekey: GANXING_TURNSTILE_SITE_KEY,
      theme: "light",
      language: lang === "zh" ? "zh-cn" : "en",
      appearance: "interaction-only",
      "response-field": true,
      "response-field-name": "cf-turnstile-response",
    });
  }, [lang]);

  useEffect(() => {
    const boundary = boundaryRef.current;

    if (!boundary || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(boundary);
    return () => observer.disconnect();
  }, []);

  useEffect(
    () => () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    },
    [],
  );

  return (
    <div
      ref={boundaryRef}
      className="mt-2 min-h-[70px] overflow-x-auto"
      aria-label={lang === "zh" ? "人机验证" : "Security verification"}
      onFocusCapture={() => setShouldLoad(true)}
    >
      {shouldLoad ? (
        <>
          <Script
            id="cloudflare-turnstile-script"
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            strategy="afterInteractive"
            onReady={renderWidget}
          />
          <div ref={widgetRef} />
        </>
      ) : null}
    </div>
  );
}
