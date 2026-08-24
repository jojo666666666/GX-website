"use client";

import Script from "next/script";

// Turnstile site keys are public identifiers and are restricted to the
// hostnames configured in Cloudflare. Keep the environment override for
// previews while ensuring the production widget cannot disappear if a
// deployment platform omits the public build-time variable.
const GANXING_TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAESzCo3ZtT9kdj60";

export default function TurnstileWidget({ lang }: { lang: "en" | "zh" }) {
  return (
    <div className="mt-2 overflow-x-auto" aria-label={lang === "zh" ? "人机验证" : "Security verification"}>
      <Script
        id="cloudflare-turnstile-script"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div
        className="cf-turnstile"
        data-sitekey={GANXING_TURNSTILE_SITE_KEY}
        data-theme="light"
        data-language={lang === "zh" ? "zh-cn" : "en"}
        data-appearance="interaction-only"
      />
    </div>
  );
}
