export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] pt-24" aria-busy="true" aria-label="Loading page">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="h-4 w-32 animate-pulse rounded-full bg-black/10" />
        <div className="mt-6 h-12 max-w-2xl animate-pulse rounded-2xl bg-black/10" />
        <div className="mt-4 h-5 max-w-xl animate-pulse rounded-full bg-black/8" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="overflow-hidden rounded-[24px] border border-black/6 bg-white">
              <div className="aspect-[4/3] animate-pulse bg-black/7" />
              <div className="space-y-3 p-6">
                <div className="h-6 animate-pulse rounded-full bg-black/10" />
                <div className="h-4 w-2/3 animate-pulse rounded-full bg-black/8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
