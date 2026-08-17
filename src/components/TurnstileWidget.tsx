"use client";

import Script from "next/script";

export default function TurnstileWidget({ lang }: { lang: "en" | "zh" }) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return null;
  }

  return (
    <div className="mt-5 min-h-[65px] overflow-x-auto" aria-label={lang === "zh" ? "人机验证" : "Security verification"}>
      <Script
        id="cloudflare-turnstile-script"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div
        className="cf-turnstile"
        data-sitekey={siteKey}
        data-theme="light"
        data-language={lang === "zh" ? "zh-cn" : "en"}
      />
    </div>
  );
}
