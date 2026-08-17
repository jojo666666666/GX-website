import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f3] px-6 py-20">
      <section className="w-full max-w-2xl rounded-[28px] border border-black/8 bg-white p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-12">
        <p className="text-sm font-bold tracking-[0.18em] text-red-600">404 · GANXING</p>
        <h1 className="mt-4 text-4xl font-bold text-neutral-950">Page not found / 页面不存在</h1>
        <p className="mx-auto mt-4 max-w-lg leading-7 text-neutral-600">
          The address may have changed. Choose your language to continue browsing our products.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link className="min-h-12 rounded-full bg-red-600 px-7 py-3 font-semibold text-white hover:bg-red-700" href="/en">
            English website
          </Link>
          <Link className="min-h-12 rounded-full border border-black/15 px-7 py-3 font-semibold text-neutral-900 hover:bg-neutral-100" href="/zh">
            中文网站
          </Link>
        </div>
      </section>
    </main>
  );
}
