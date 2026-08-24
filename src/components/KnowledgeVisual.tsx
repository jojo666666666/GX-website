import Image from "next/image";
import ProcessLabVisual from "@/components/ProcessLabVisual";
import { knowledgeVisualImages, type KnowledgeVisual as VisualType } from "@/data/knowledge";
import type { Locale } from "@/lib/i18n";
import styles from "./KnowledgeVisual.module.css";

type Props = { type: VisualType; lang: Locale; compact?: boolean };

const copy = {
  en: {
    alt: {
      "scratch-depth": "3D cutaway showing automotive clear coat, color coat, primer and three scratch depths",
      "swirl-correction": "Red automotive paint before and after controlled swirl mark correction under inspection light",
      "motion-comparison": "Rotary, free-spinning dual action and forced rotation polisher motion systems",
      "pad-system": "Foam, wool and microfiber polishing pad material structures",
    },
    scratch: ["CLEAR COAT · POLISHABLE", "COLOR COAT · ASSESS", "COATING BREACH · REPAIR"],
    swirls: ["SWIRL SCATTER", "CONTROLLED REFLECTION"],
    motions: ["ROTARY", "FREE DA", "FORCED DA"],
    pads: ["FOAM", "WOOL", "MICROFIBER"],
  },
  zh: {
    alt: {
      "scratch-depth": "汽车清漆层、色漆层、底漆层与三种划痕深度三维剖面图",
      "swirl-correction": "检测灯下红色汽车漆面太阳纹修复前后对比",
      "motion-comparison": "同心、自由偏心与强制偏心抛光运动系统",
      "pad-system": "海绵、羊毛和超纤抛光垫材料结构",
    },
    scratch: ["清漆层 · 可抛光", "色漆层 · 谨慎评估", "涂层破损 · 补漆修复"],
    swirls: ["太阳纹散射", "受控镜面反射"],
    motions: ["同心旋转", "自由偏心", "强制偏心"],
    pads: ["海绵结构", "羊毛纤维", "超纤结构"],
  },
};

export default function KnowledgeVisual({ type, lang, compact = false }: Props) {
  if (type === "abrasive-refinement" || type === "wet-polishing-control" || type === "grain-direction" || type === "dust-control") {
    return <ProcessLabVisual type={type} lang={lang} compact={compact} />;
  }

  const c = copy[lang];
  const labels = type === "scratch-depth" ? c.scratch : type === "swirl-correction" ? c.swirls : type === "motion-comparison" ? c.motions : c.pads;

  return <figure className={`group overflow-hidden border border-neutral-800 bg-[#080a0c] shadow-2xl shadow-black/20 ${compact ? "rounded-2xl" : "rounded-[2rem]"}`} aria-label={c.alt[type]}>
    <div className="relative aspect-[8/5] overflow-hidden">
      <Image src={knowledgeVisualImages[type]} alt={c.alt[type]} fill sizes={compact ? "(max-width: 1024px) 100vw, 48vw" : "(max-width: 900px) 100vw, 800px"} className={`object-cover ${styles.image}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/15" />

      {type === "scratch-depth" && <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 sm:inset-x-6 sm:bottom-6">{labels.map((label,index) => <div key={label} className="rounded-xl border border-white/15 bg-black/60 px-2 py-2 text-center backdrop-blur-md sm:px-3"><span className={`mx-auto mb-1.5 block h-1.5 w-10 rounded-full ${["bg-emerald-400","bg-amber-400","bg-red-500"][index]} ${styles.glow}`} /><span className="font-mono text-[8px] font-bold tracking-[.08em] text-white sm:text-[10px]">{label}</span></div>)}</div>}

      {type === "swirl-correction" && <><div className={`absolute bottom-0 left-1/2 top-0 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent ${styles.scan}`} /><div className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-4 sm:inset-x-7 sm:bottom-6">{labels.map((label,index) => <span key={label} className={`rounded-full border px-3 py-2 text-center font-mono text-[9px] font-bold tracking-[.12em] backdrop-blur-md sm:text-[11px] ${index ? "border-cyan-300/40 bg-cyan-950/50 text-cyan-100" : "border-red-300/40 bg-red-950/50 text-red-100"}`}>{label}</span>)}</div></>}

      {type === "motion-comparison" && <div className="absolute inset-x-3 bottom-4 grid grid-cols-3 gap-2 sm:inset-x-7 sm:bottom-6">{labels.map((label,index) => <div key={label} className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-black/60 px-2 py-2 backdrop-blur-md"><span className={`h-2 w-2 shrink-0 rounded-full ${index ? "bg-cyan-400" : "bg-red-500"} ${styles.glow}`} /><span className="font-mono text-[8px] font-bold tracking-[.1em] text-white sm:text-[10px]">{label}</span></div>)}</div>}

      {type === "pad-system" && <div className="absolute inset-x-3 bottom-4 grid grid-cols-3 gap-2 sm:inset-x-7 sm:bottom-6">{labels.map((label,index) => <span key={label} className={`rounded-full border px-2 py-2 text-center font-mono text-[8px] font-bold tracking-[.1em] text-white backdrop-blur-md sm:text-[10px] ${["border-cyan-300/40 bg-cyan-950/55","border-white/30 bg-black/55","border-red-300/40 bg-red-950/55"][index]}`}>{label}</span>)}</div>}
    </div>
  </figure>;
}
