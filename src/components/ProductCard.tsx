import Link from "next/link";
import Carousel from "@/components/Carousel";
import { localizedPath, type Locale } from "@/lib/i18n";
import type { Product } from "@/data/products";
import { dictionary } from "@/data/dictionary";

type ProductCardProps = {
  product: Product;
  lang: Locale;
};

export default function ProductCard({ product, lang }: ProductCardProps) {
  const copy = dictionary[lang];
  const title = product.title[lang] || product.title.en;
  const isDuplicateName =
    title.trim().toLowerCase() === product.model.trim().toLowerCase();

  return (
    <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl hover:shadow-neutral-950/10">
      <Carousel images={product.images} alt={`${product.model} ${title}`} />
      <div className="p-4 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">
          {product.model}
        </p>
        <h3 className="mt-2 min-h-[3rem] text-base font-semibold leading-snug text-neutral-950 sm:min-h-16 sm:text-lg">
          {isDuplicateName ? product.model : `${product.model} ${title}`}
        </h3>
        <dl className="mt-4 divide-y divide-neutral-100 border-y border-neutral-100">
          {product.specs.map((spec) => (
            <div
              key={`${product.model}-${spec.key.en}-${spec.value}`}
              className="grid grid-cols-[44%_1fr] gap-3 py-2.5 text-sm"
            >
              <dt className="text-neutral-500">
                {spec.key[lang] || spec.key.en}
              </dt>
              <dd className="font-medium text-neutral-900">{spec.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700">
            {copy.product.inStock}
          </span>
          <Link
            href={`${localizedPath(lang)}#contact`}
            className="flex h-10 items-center justify-center rounded-full bg-red-600 px-5 text-sm font-semibold text-white shadow-lg shadow-red-600/15 transition hover:bg-red-700 active:bg-red-700 sm:h-9 sm:w-auto"
          >
            {copy.product.quote}
          </Link>
        </div>
      </div>
    </article>
  );
}
