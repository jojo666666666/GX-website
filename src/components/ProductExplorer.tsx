"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product, ProductCategory } from "@/data/products";
import type { Locale } from "@/lib/i18n";

type ProductExplorerProps = {
  category: ProductCategory;
  lang: Locale;
};

function getSpecValue(product: Product, pattern: RegExp) {
  return product.specs.find((spec) => pattern.test(spec.key.en))?.value ?? "";
}

function isCordless(product: Product) {
  const text = `${product.title.en} ${product.specs.map((spec) => `${spec.key.en} ${spec.value}`).join(" ")}`;
  return /cordless|battery capacity|li-ion/i.test(text);
}

export default function ProductExplorer({ category, lang }: ProductExplorerProps) {
  const [query, setQuery] = useState("");
  const [powerSource, setPowerSource] = useState("all");
  const [backingPlate, setBackingPlate] = useState("all");
  const [selected, setSelected] = useState<number[]>([]);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const previousSelectedCountRef = useRef(0);
  const isZh = lang === "zh";

  const backingPlateOptions = useMemo(
    () =>
      [...new Set(category.products.map((product) => getSpecValue(product, /backing plate|disc \/ size/i)).filter(Boolean))]
        .sort()
        .slice(0, 12),
    [category.products],
  );

  const filteredProducts = useMemo(
    () =>
      category.products
        .map((product, index) => ({ product, index }))
        .filter(({ product }) => {
          const name = `${product.model} ${product.title.en} ${product.title.zh}`.toLowerCase();
          const matchesQuery = name.includes(query.trim().toLowerCase());
          const cordless = isCordless(product);
          const matchesPower =
            powerSource === "all" ||
            (powerSource === "cordless" ? cordless : !cordless);
          const plate = getSpecValue(product, /backing plate|disc \/ size/i);
          const matchesPlate = backingPlate === "all" || plate === backingPlate;
          return matchesQuery && matchesPower && matchesPlate;
        }),
    [backingPlate, category.products, powerSource, query],
  );

  const comparedProducts = selected.map((index) => ({
    product: category.products[index],
    index,
  }));
  const comparisonSpecs = [
    /rated voltage/i,
    /rated input power|rated power|input power/i,
    /no-load speed|spindle speed/i,
    /orbit/i,
    /backing plate|disc \/ size/i,
    /weight/i,
  ];

  const toggleComparison = (index: number) => {
    setSelected((current) => {
      if (current.includes(index)) return current.filter((item) => item !== index);
      if (current.length >= 3) return current;
      return [...current, index];
    });
  };

  useEffect(() => {
    const previousCount = previousSelectedCountRef.current;
    previousSelectedCountRef.current = selected.length;

    if (selected.length >= 2 && selected.length > previousCount) {
      const frame = window.requestAnimationFrame(() => {
        comparisonRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      return () => window.cancelAnimationFrame(frame);
    }
  }, [selected.length]);

  return (
    <div className="mt-8">
      <div className="brand-panel grid gap-3 p-4 md:grid-cols-[1.35fr_0.8fr_1fr_auto] md:items-end md:p-5">
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
          {isZh ? "搜索型号" : "Search models"}
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={isZh ? "例如 GX5903" : "e.g. GX5903"}
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            className="mt-2 h-12 w-full rounded-lg border border-neutral-200 bg-white px-4 text-base font-medium normal-case tracking-normal outline-none transition focus:border-red-500 lg:h-11 lg:text-sm"
          />
        </label>
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
          {isZh ? "动力类型" : "Power source"}
          <select
            value={powerSource}
            onChange={(event) => setPowerSource(event.target.value)}
            className="mt-2 h-12 w-full rounded-lg border border-neutral-200 bg-white px-3 text-base font-medium normal-case tracking-normal outline-none transition focus:border-red-500 lg:h-11 lg:text-sm"
          >
            <option value="all">{isZh ? "全部" : "All"}</option>
            <option value="cordless">{isZh ? "锂电" : "Cordless"}</option>
            <option value="corded">{isZh ? "有线" : "Corded"}</option>
          </select>
        </label>
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
          {isZh ? "托盘 / 盘径" : "Backing plate"}
          <select
            value={backingPlate}
            onChange={(event) => setBackingPlate(event.target.value)}
            className="mt-2 h-12 w-full rounded-lg border border-neutral-200 bg-white px-3 text-base font-medium normal-case tracking-normal outline-none transition focus:border-red-500 lg:h-11 lg:text-sm"
          >
            <option value="all">{isZh ? "全部尺寸" : "All sizes"}</option>
            {backingPlateOptions.map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </label>
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setPowerSource("all");
            setBackingPlate("all");
          }}
          className="h-12 rounded-lg border border-neutral-300 px-4 text-sm font-semibold text-neutral-700 transition hover:border-neutral-950 lg:h-11"
        >
          {isZh ? "重置" : "Reset"}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-500">
        <span>{isZh ? `显示 ${filteredProducts.length} 款产品` : `${filteredProducts.length} models shown`}</span>
        <span>{isZh ? "选择 2–3 款产品进行比较" : "Select 2–3 models to compare"}</span>
      </div>

      {comparedProducts.length >= 2 && (
        <div ref={comparisonRef} className="brand-panel mt-6 scroll-mt-28 overflow-hidden">
          <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-950 px-5 py-4 text-white">
            <h3 className="font-semibold">{isZh ? "产品比较" : "Product Comparison"}</h3>
            <button type="button" onClick={() => setSelected([])} className="text-xs font-semibold text-white/70 hover:text-white">
              {isZh ? "清除" : "Clear"}
            </button>
          </div>
          <div className="overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
            <table className="min-w-[680px] w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="p-4 text-neutral-500">{isZh ? "项目" : "Specification"}</th>
                  {comparedProducts.map(({ product }) => (
                    <th key={product.model} className="p-4 text-base text-neutral-950">{product.model}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonSpecs.map((pattern, rowIndex) => {
                  const labels = isZh
                    ? ["额定电压", "额定功率", "空载转速", "偏心距", "托盘 / 盘径", "重量"]
                    : ["Rated Voltage", "Rated Power", "No-Load Speed", "Orbit", "Backing Plate", "Weight"];
                  return (
                    <tr key={labels[rowIndex]} className="border-b border-neutral-100 last:border-0">
                      <th className="p-4 font-medium text-neutral-500">{labels[rowIndex]}</th>
                      {comparedProducts.map(({ product }) => (
                        <td key={product.model} className="p-4 font-semibold text-neutral-900">{getSpecValue(product, pattern) || "—"}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map(({ product, index }) => {
          const isSelected = selected.includes(index);
          const limitReached = selected.length >= 3 && !isSelected;
          return (
            <div key={`${product.model}-${index}`} className="relative">
              <button
                type="button"
                disabled={limitReached}
                onClick={() => toggleComparison(index)}
                className={`absolute left-3 top-3 z-20 min-h-11 rounded-full border px-3 py-2 text-xs font-semibold shadow-sm backdrop-blur transition ${
                  isSelected
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-neutral-200 bg-white/90 text-neutral-700 hover:border-red-400"
                } disabled:cursor-not-allowed disabled:opacity-40`}
              >
                {isSelected ? (isZh ? "已选择" : "Selected") : (isZh ? "加入比较" : "Compare")}
              </button>
              <ProductCard category={category} product={product} index={index} lang={lang} />
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="brand-panel mt-6 p-10 text-center text-neutral-500">
          {isZh ? "没有符合当前筛选条件的产品。" : "No products match the current filters."}
        </div>
      )}
    </div>
  );
}
