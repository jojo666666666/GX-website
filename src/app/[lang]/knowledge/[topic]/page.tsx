import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import KnowledgeArticleCard from "@/components/KnowledgeArticleCard";
import KnowledgeVisual from "@/components/KnowledgeVisual";
import { getKnowledgeTopic, knowledgeArticles, knowledgeTopics, knowledgeVisualImages } from "@/data/knowledge";
import { getAbsoluteUrl } from "@/lib/product-seo";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string; topic: string }> };
export function generateStaticParams() { return ["en", "zh"].flatMap((lang) => knowledgeTopics.map((topic) => ({ lang, topic: topic.slug }))); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: value, topic } = await params; if (!isLocale(value)) return {}; const lang = value as Locale; const data = getKnowledgeTopic(topic); if (!data) return {};
  const title = `${data.title[lang]} | ${lang === "zh" ? "专业工艺指南与交互图解" : "Professional Process Guides & Interactive Models"}`;
  const description = data.description[lang];
  const image = knowledgeVisualImages[data.visual];
  return { title, description, alternates: { canonical: localizedPath(lang, `/knowledge/${topic}`), languages: { "en-US": `/en/knowledge/${topic}`, "zh-CN": `/zh/knowledge/${topic}`, "x-default": `/en/knowledge/${topic}` } }, openGraph: { title, description, type: "website", url: localizedPath(lang, `/knowledge/${topic}`), images: [{ url: image, alt: data.title[lang] }] }, twitter: { card: "summary_large_image", title, description, images: [image] } };
}

const processCopy: Record<string, { en: string[][]; zh: string[][] }> = {
  "automotive-paint-correction": { en: [["Diagnose","Identify defect type and depth"],["Test","Start with the least aggressive spot"],["Correct","Control motion, heat and removal"],["Inspect","Verify the true finish under light"]], zh: [["诊断","确认缺陷类型与深度"],["测试","以最低切削力建立测试区"],["修复","控制运动、热量和材料去除"],["检查","在一致光源下验证真实结果"]] },
  "sanding-surface-preparation": { en: [["Identify","Define substrate and next coating"],["Cut","Remove only the target defect"],["Refine","Replace the previous scratch"],["Verify","Use guide coat and extraction"]], zh: [["识别","确认基材和下一涂层"],["切削","只去除目标缺陷"],["细化","替换上一级砂痕"],["验证","使用指示层和集尘"]] },
  "wet-stone-polishing": { en: [["Identify","Confirm stone and silica risk"],["Protect","Wet-rated tool, GFCI and PPE"],["Refine","Progress pads by scratch evidence"],["Contain","Control water and slurry"]], zh: [["识别","确认石材和硅尘风险"],["防护","湿用工具、漏保和 PPE"],["细化","根据砂痕递进磨片"],["控制","管理供水和湿浆"]] },
  "stainless-steel-finishing": { en: [["Read","Identify alloy and grain"],["Remove","Level defect without a low spot"],["Blend","Refine every coarse scratch"],["Match","Finish with grain and feather"]], zh: [["判断","识别合金与纹理"],["去除","整平缺陷但不磨出低洼"],["融合","细化所有粗砂痕"],["匹配","顺纹终饰并渐进卸压"]] },
  "concrete-surface-renovation": { en: [["Survey","Map coating, slab and edges"],["Test","Prove tooling and controls"],["Grind","Monitor cut and extraction"],["Verify","Check profile for next step"]], zh: [["勘察","记录涂层、基层和边角"],["测试","验证磨具与控制措施"],["研磨","监测切削和集尘"],["验证","检查下一工序所需纹理"]] },
};

export default async function TopicPage({ params }: Props) {
  const { lang: value, topic } = await params; if (!isLocale(value)) notFound(); const lang = value as Locale; const topicData = getKnowledgeTopic(topic); if (!topicData) notFound();
  const articles = knowledgeArticles.filter((article) => article.topic === topic); const url = localizedPath(lang, `/knowledge/${topic}`); const process = processCopy[topic][lang];
  const graph = { "@context": "https://schema.org", "@graph": [{ "@type": "CollectionPage", name: topicData.title[lang], description: topicData.description[lang], url: getAbsoluteUrl(url), inLanguage: lang === "zh" ? "zh-CN" : "en-US", hasPart: articles.map((article) => ({ "@type": "Article", headline: article.title[lang], url: getAbsoluteUrl(localizedPath(lang, `/knowledge/${topic}/${article.slug}`)) })) }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: lang === "zh" ? "首页" : "Home", item: getAbsoluteUrl(localizedPath(lang)) }, { "@type": "ListItem", position: 2, name: lang === "zh" ? "知识中心" : "Knowledge Center", item: getAbsoluteUrl(localizedPath(lang, "/knowledge")) }, { "@type": "ListItem", position: 3, name: topicData.shortTitle[lang], item: getAbsoluteUrl(url) }] }] };
  return <main className="min-h-screen bg-[#f5f5f2] pt-14 sm:pt-16"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
    <section className="bg-white px-4 py-16 sm:px-5 sm:py-24 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><Link href={localizedPath(lang, "/knowledge")} className="text-sm font-bold text-red-600">← {lang === "zh" ? "知识中心" : "Knowledge Center"}</Link><p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">Technical domain / {String(knowledgeTopics.findIndex((item) => item.slug === topic) + 1).padStart(2,"0")}</p><h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-neutral-950 sm:text-6xl">{topicData.title[lang]}</h1><p className="mt-6 text-lg leading-8 text-neutral-600">{topicData.description[lang]}</p></div><KnowledgeVisual type={topicData.visual} lang={lang} compact /></div></section>
    <section className="bg-neutral-950 px-4 py-14 text-white sm:px-5 lg:px-8"><div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">{process.map(([title,body],index) => <div key={title} className="border-l border-white/15 pl-5"><span className="text-xs font-black text-red-400">{String(index+1).padStart(2,"0")}</span><h2 className="mt-5 text-xl font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-neutral-400">{body}</p></div>)}</div></section>
    <section className="px-4 py-16 sm:px-5 sm:py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">Field guides</p><h2 className="mt-4 text-3xl font-black text-neutral-950 sm:text-5xl">{lang === "zh" ? "从常见问题进入专业工艺" : "From common questions to professional process"}</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2">{articles.map((article,index) => <KnowledgeArticleCard key={article.slug} article={article} lang={lang} index={index} />)}</div></div></section>
    <section className="border-t border-neutral-200 bg-white px-4 py-14 sm:px-5 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] bg-red-600 p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-red-100">{lang === "zh" ? "赣星应用支持" : "GANXING application support"}</p><h2 className="mt-3 text-2xl font-black sm:text-3xl">{lang === "zh" ? "需要把工艺匹配到具体机器？" : "Need to match the process to a machine?"}</h2></div><Link href={`${localizedPath(lang)}#contact`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-neutral-950 px-6 text-sm font-bold shadow-lg transition hover:bg-neutral-800"><span className="text-white opacity-100">{lang === "zh" ? "联系技术与销售团队" : "Talk to our technical sales team"}</span></Link></div></section>
  </main>;
}
