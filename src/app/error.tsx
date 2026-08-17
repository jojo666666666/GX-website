"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page rendering error", {
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f3] px-6 py-20">
      <section className="w-full max-w-xl rounded-[28px] border border-black/8 bg-white p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-12">
        <p className="text-sm font-bold tracking-[0.18em] text-red-600">SYSTEM RECOVERY</p>
        <h1 className="mt-4 text-3xl font-bold text-neutral-950">This page needs a quick refresh</h1>
        <p className="mt-4 leading-7 text-neutral-600">
          The rest of the website is still available. Please retry this page. / 页面暂时无法加载，请重试。
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 min-h-12 rounded-full bg-red-600 px-7 font-semibold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
        >
          Retry / 重试
        </button>
      </section>
    </main>
  );
}
