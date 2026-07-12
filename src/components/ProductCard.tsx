import Image from "next/image";
import Link from "next/link";
import type { Product, ProductCategory } from "@/data/products";
import { productPath } from "@/lib/product-seo";
import type { Locale } from "@/lib/i18n";

type ProductCardProps = {
  category: ProductCategory;
  product: Product;
  index: number;
  lang: Locale;
};

export default function ProductCard({
  category,
  product,
  index,
  lang,
}: ProductCardProps) {
  const title = product.title[lang] || product.title.en;
  const productName =
    product.model && title.trim().toLowerCase() !== product.model.trim().toLowerCase()
      ? `${product.model} ${title}`
      : product.model || title;
  const image = product.images[0];

  return (
    <Link
      href={productPath(lang, category, product, index)}
      prefetch={false}
      className="group block overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-neutral-950/10"
    >
      <article>
        <div className="relative aspect-[4/3] overflow-hidden bg-white">
          {image ? (
            <Image
              src={image}
              alt={productName}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain p-6 transition duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="grid h-full place-items-center text-sm font-semibold text-neutral-400">
              GANXING
            </div>
          )}
        </div>
        <div className="border-t border-neutral-100 p-4 sm:p-5">
          <h3 className="line-clamp-2 min-h-12 text-base font-semibold leading-snug text-neutral-950 sm:text-lg">
            {productName}
          </h3>
          <p className="mt-3 text-sm font-semibold text-red-600">
            {lang === "zh" ? "查看详情" : "View details"}
          </p>
        </div>
      </article>
    </Link>
  );
}
