import Image from "next/image";
import Link from "next/link";
import type { KnowledgeArticle } from "@/data/knowledge";
import { knowledgeArticlePath, knowledgeVisualImages } from "@/data/knowledge";
import type { Locale } from "@/lib/i18n";

export default function KnowledgeArticleCard({ article, lang, index }: { article: KnowledgeArticle; lang: Locale; index: number }) {
  return (
    <Link href={knowledgeArticlePath(lang, article)} className="group flex min-h-[32rem] flex-col overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-neutral-900/10">
      <div className="relative aspect-[8/5] overflow-hidden bg-neutral-950">
        <Image src={knowledgeVisualImages[article.visual]} alt={article.title[lang]} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
        <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/65 px-3 py-1 font-mono text-xs font-black tracking-[0.18em] text-red-400 backdrop-blur-md">{String(index + 1).padStart(2, "0")}</span>
        <span className="absolute bottom-5 right-5 rounded-full border border-white/15 bg-black/65 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">{article.readingTime[lang]}</span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">{article.difficulty[lang]}</p>
        <h3 className="mt-3 text-xl font-bold leading-snug text-neutral-950 transition group-hover:text-red-700 sm:text-2xl">{article.title[lang]}</h3>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-neutral-600">{article.description[lang]}</p>
        </div>
        <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-red-600">{lang === "zh" ? "阅读专业指南" : "Read the expert guide"}<span aria-hidden="true" className="transition group-hover:translate-x-1">→</span></span>
      </div>
    </Link>
  );
}
