import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import KnowledgeArticleCard from "@/components/KnowledgeArticleCard";
import KnowledgeVisual from "@/components/KnowledgeVisual";
import { knowledgeArticles, knowledgeTopic, knowledgeTopics, knowledgeTopicPath, knowledgeVisualImages } from "@/data/knowledge";
import { getAbsoluteUrl } from "@/lib/product-seo";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export function generateStaticParams() { return [{ lang: "en" }, { lang: "zh" }]; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: value } = await params;
  if (!isLocale(value)) return {};
  const lang = value as Locale;
  const title = lang === "zh" ? "表面处理知识中心 | 抛光、砂磨与修复专业指南" : "Surface Finishing Knowledge Center | Polishing & Sanding Guides";
  const description = lang === "zh" ? "赣星专业知识中心：汽车漆面修复、抛光机选型、抛光垫选择，以及后续石材、金属和砂磨专业指南。" : "Technical guides for automotive paint correction, polishing machine selection, pads, sanding, stone, metal and professional surface finishing.";
  const image = knowledgeVisualImages["scratch-depth"];
  return { title, description, alternates: { canonical: localizedPath(lang, "/knowledge"), languages: { "en-US": "/en/knowledge", "zh-CN": "/zh/knowledge", "x-default": "/en/knowledge" } }, openGraph: { title, description, type: "website", url: localizedPath(lang, "/knowledge"), images: [{ url: image, alt: lang === "zh" ? "汽车漆面划痕深度专业三维剖面图" : "Professional 3D automotive paint scratch-depth cutaway" }] }, twitter: { card: "summary_large_image", title, description, images: [image] } };
}

export default async function KnowledgePage({ params }: Props) {
  const { lang: value } = await params;
  if (!isLocale(value)) notFound();
  const lang = value as Locale;
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: lang === "zh" ? "首页" : "Home", item: getAbsoluteUrl(localizedPath(lang)) }, { "@type": "ListItem", position: 2, name: lang === "zh" ? "知识中心" : "Knowledge Center", item: getAbsoluteUrl(localizedPath(lang, "/knowledge")) }] };

  return <main className="min-h-screen bg-[#f5f5f2] pt-14 sm:pt-16">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
    <section className="relative overflow-hidden bg-neutral-950 px-4 py-20 text-white sm:px-5 sm:py-28 lg:px-8">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #d92d20 0, transparent 28%), linear-gradient(120deg, transparent 35%, #2b2b2b 100%)" }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-400">{lang === "zh" ? "赣星表面工艺知识库" : "GANXING Surface Intelligence"}</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl">{lang === "zh" ? "把表面问题，变成可控的工艺。" : "Turn surface problems into controlled processes."}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">{lang === "zh" ? "从缺陷诊断、材料反应到机器运动与耗材组合，用专业知识帮助用户在动手之前做出正确判断。" : "From defect diagnosis and material response to machine motion and consumable systems—make the right decision before removing material."}</p>
          <Link href={knowledgeTopicPath(lang)} className="mt-9 inline-flex min-h-12 items-center rounded-full bg-red-600 px-6 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500">{lang === "zh" ? "进入汽车漆面专题" : "Explore automotive paint correction"} →</Link>
        </div>
        <KnowledgeVisual type="scratch-depth" lang={lang} compact />
      </div>
    </section>

    <section className="px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [lang === "zh" ? "01 判断表面" : "01 Identify the surface", lang === "zh" ? "汽车漆面、石材、金属、木材或混凝土。" : "Paint, stone, metal, wood or concrete."],
            [lang === "zh" ? "02 判断缺陷" : "02 Diagnose the defect", lang === "zh" ? "划痕、太阳纹、氧化、砂痕、污染或涂层破损。" : "Scratches, swirls, oxidation, sanding marks or coating failure."],
            [lang === "zh" ? "03 建立工艺" : "03 Build the process", lang === "zh" ? "选择机器运动、研磨耗材、安全边界与检查方式。" : "Select motion, abrasive, safety limit and inspection method."],
          ].map(([title, body]) => <div key={title} className="rounded-3xl border border-neutral-200 bg-white p-6"><h2 className="text-lg font-bold text-neutral-950">{title}</h2><p className="mt-3 text-sm leading-7 text-neutral-600">{body}</p></div>)}
        </div>
      </div>
    </section>

    <section className="border-y border-neutral-200 bg-white px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">01 / Automotive</p><h2 className="mt-4 text-3xl font-black tracking-tight text-neutral-950 sm:text-5xl">{knowledgeTopic.title[lang]}</h2><p className="mt-4 max-w-2xl leading-7 text-neutral-600">{knowledgeTopic.description[lang]}</p></div><Link href={knowledgeTopicPath(lang)} className="text-sm font-bold text-red-600">{lang === "zh" ? "查看完整专题" : "View the complete topic"} →</Link></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">{knowledgeArticles.filter((article) => article.topic === knowledgeTopic.slug).map((article, index) => <KnowledgeArticleCard key={article.slug} article={article} lang={lang} index={index} />)}</div>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-5 sm:py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-5 sm:grid-cols-2">{knowledgeTopics.slice(1).map((topic, index) => <Link key={topic.slug} href={knowledgeTopicPath(lang, topic)} className="group visible overflow-hidden rounded-3xl bg-neutral-900 opacity-100 shadow-lg shadow-neutral-950/10 transition hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-2xl"><div className="relative aspect-[16/9] overflow-hidden"><Image src={knowledgeVisualImages[topic.visual]} alt={topic.title[lang]} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/10" /><div className="absolute inset-x-5 top-5 flex items-center justify-between"><span className="visible rounded-full border border-white/15 bg-black/60 px-3 py-1 font-mono text-xs font-black text-red-400 opacity-100 backdrop-blur-md">0{index + 2}</span><span className="visible rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[.14em] text-neutral-200 opacity-100 backdrop-blur-md">Interactive</span></div></div><div className="p-6"><h3 className="visible text-xl font-bold text-white opacity-100">{topic.title[lang]}</h3><p className="visible mt-3 text-sm leading-6 text-neutral-300 opacity-100">{topic.description[lang]}</p><span className="visible mt-6 inline-block text-sm font-bold text-red-400 opacity-100">{lang === "zh" ? "进入专题" : "Open topic"} →</span></div></Link>)}</div></div></section>
  </main>;
}
