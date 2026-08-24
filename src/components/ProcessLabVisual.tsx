"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";
import { knowledgeVisualImages, type KnowledgeVisual } from "@/data/knowledge";
import type { Locale } from "@/lib/i18n";
import styles from "./ProcessLabVisual.module.css";

type LabType = Extract<KnowledgeVisual, "abrasive-refinement" | "wet-polishing-control" | "grain-direction" | "dust-control">;
type Props = { type: LabType; lang: Locale; compact?: boolean };

const ui = {
  en: { interactive: "INTERACTIVE PROCESS MODEL", safe: "CONTROLLED", alert: "CHECK PROCESS", coarse: "Shape", level: "Level", refine: "Refine", prep: "Prepare", dry: "Dry surface", wet: "Continuous water", across: "Across grain", with: "With grain", open: "Uncontrolled", vacuum: "Shroud + extraction", water: "Wet method", drag: "Select a process state to compare the material response.", stage: "REFINEMENT STAGE", alt: { "abrasive-refinement": "Abrasive grains refining a random-orbital sanding scratch pattern with extraction", "wet-polishing-control": "Diamond pad wet polishing stone with continuous water at the contact interface", "grain-direction": "Burnishing drum restoring the directional satin grain on stainless steel", "dust-control": "Concrete floor grinder shroud and HEPA extraction capturing dust at source" } },
  zh: { interactive: "交互式工艺模型", safe: "受控状态", alert: "检查工艺", coarse: "整形", level: "找平", refine: "细化", prep: "终饰准备", dry: "干燥界面", wet: "持续供水", across: "横跨纹理", with: "顺纹理", open: "无控制", vacuum: "防尘罩 + 集尘", water: "湿式方法", drag: "选择不同工艺状态，对比材料反应。", stage: "砂痕细化阶段", alt: { "abrasive-refinement": "磨粒在集尘条件下细化偏心砂磨砂痕", "wet-polishing-control": "金刚石磨片在接触界面持续供水进行石材湿磨", "grain-direction": "拉丝轮顺原纹理修复不锈钢缎面", "dust-control": "混凝土地坪研磨机通过防尘罩和 HEPA 集尘源头捕尘" } },
};

export default function ProcessLabVisual({ type, lang, compact = false }: Props) {
  const c = ui[lang];
  const [mode, setMode] = useState(type === "abrasive-refinement" ? 1 : 0);
  const choices = type === "abrasive-refinement" ? [c.coarse,c.level,c.refine,c.prep] : type === "wet-polishing-control" ? [c.dry,c.wet] : type === "grain-direction" ? [c.across,c.with] : [c.open,c.vacuum,c.water];
  const controlled = type === "abrasive-refinement" ? mode >= 2 : type === "wet-polishing-control" || type === "grain-direction" ? mode === 1 : mode > 0;

  return <figure className={`relative overflow-hidden border border-white/10 bg-[#080a0c] text-white shadow-2xl shadow-black/20 ${compact ? "rounded-2xl" : "rounded-[2rem]"}`}>
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/70 px-4 py-3 sm:px-6"><span className="font-mono text-[9px] font-bold tracking-[.2em] text-red-400 sm:text-xs">{c.interactive}</span><span className={`rounded-full border px-3 py-1 font-mono text-[9px] font-bold ${controlled ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-200" : "border-amber-400/40 bg-amber-400/15 text-amber-200"}`}>{controlled ? c.safe : c.alert}</span></div>
    <div className="relative aspect-[8/5] overflow-hidden">
      <Image src={knowledgeVisualImages[type]} alt={c.alt[type]} fill sizes={compact ? "(max-width: 1024px) 100vw, 48vw" : "(max-width: 900px) 100vw, 800px"} className={`object-cover transition duration-700 ${styles.image} ${!controlled ? "saturate-[.72]" : "saturate-[1.1]"}`} />
      <div className={`absolute inset-0 ${controlled ? "bg-gradient-to-t from-black/55 via-transparent to-black/15" : "bg-gradient-to-t from-amber-950/60 via-black/10 to-black/20"}`} />
      {type === "abrasive-refinement" && <AbrasiveOverlay stage={mode} label={c.stage} />}
      {type === "wet-polishing-control" && <WetOverlay wet={mode === 1} />}
      {type === "grain-direction" && <GrainOverlay aligned={mode === 1} />}
      {type === "dust-control" && <DustOverlay control={mode} />}
    </div>
    <figcaption className="bg-black/80 p-4 sm:p-5"><div className={`grid gap-2 ${choices.length === 4 ? "grid-cols-2 sm:grid-cols-4" : choices.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>{choices.map((label,index) => <button key={label} type="button" onClick={() => setMode(index)} aria-pressed={mode === index} className={`min-h-11 rounded-xl border px-3 py-2 text-xs font-bold transition sm:text-sm ${mode === index ? "border-red-500 bg-red-600 text-white shadow-lg shadow-red-950/30" : "border-white/15 bg-white/5 text-neutral-300 hover:border-white/40 hover:bg-white/10 hover:text-white"}`}>{label}</button>)}</div>{!compact && <p className="mt-4 text-xs leading-5 text-neutral-500">{c.drag}</p>}</figcaption>
  </figure>;
}

function AbrasiveOverlay({ stage, label }: { stage: number; label: string }) {
  const colors = ["#ff714f","#ff9f43","#42c8e8","#55d98b"];
  return <><div className="absolute left-4 top-4 rounded-xl border border-white/15 bg-black/60 px-3 py-2 backdrop-blur-md"><p className="font-mono text-[9px] tracking-[.15em] text-neutral-300">{label}</p><p className="mt-1 font-mono text-xl font-black" style={{color:colors[stage]}}>0{stage+1} / 04</p></div><svg viewBox="0 0 800 500" className="absolute inset-0 h-full w-full" aria-hidden="true"><path d={`M70 ${390-stage*9} C220 ${340-stage*6} 580 ${420-stage*10} 735 ${360-stage*6}`} fill="none" stroke={colors[stage]} strokeWidth={5-stage*.7} strokeDasharray={`${20-stage*3} ${12+stage*3}`} className={styles.grain}/><rect x={100+stage*150} y="80" width="5" height="300" rx="3" fill={colors[stage]} opacity=".8" className={styles.scan}/></svg></>;
}

function WetOverlay({ wet }: { wet: boolean }) {
  return <svg viewBox="0 0 800 500" className="absolute inset-0 h-full w-full" aria-hidden="true">{wet ? <><path d="M210 80 C280 150 310 220 390 270 S570 330 720 350" fill="none" stroke="#5bd7ff" strokeWidth="8" strokeLinecap="round" strokeDasharray="16 14" className={styles.flow}/>{Array.from({length:12}).map((_,i)=><circle key={i} cx={200+i*34} cy={90+(i%3)*15} r="6" fill="#88e4ff" className={styles.droplet} style={{animationDelay:`${i*.1}s`}}/>)}</> : <>{Array.from({length:22}).map((_,i)=><circle key={i} cx={170+(i%11)*48} cy={330-(i%4)*18} r={5+(i%3)} fill="#f5b66c" className={styles.particle} style={{animationDelay:`${(i%8)*.13}s`,"--dx":`${(i%2?1:-1)*(20+i%5*8)}px`,"--dy":`${-45-(i%5)*18}px`} as CSSProperties}/>)}</>}</svg>;
}

function GrainOverlay({ aligned }: { aligned: boolean }) {
  return <svg viewBox="0 0 800 500" className="absolute inset-0 h-full w-full" aria-hidden="true"><g transform={aligned ? undefined : "rotate(78 480 295)"}>{Array.from({length:5}).map((_,i)=><path key={i} d={`M220 ${270+i*18} H680`} stroke={aligned ? "#65e6df" : "#ffac55"} strokeWidth="4" strokeDasharray="24 16" className={styles.grain}/>)}</g><path d={aligned ? "M265 400 H650 M625 380 L655 400 L625 420" : "M500 110 V405 M480 140 L500 105 L520 140"} fill="none" stroke={aligned ? "#68f0b0" : "#ff7a59"} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" className={styles.pulse}/></svg>;
}

function DustOverlay({ control }: { control: number }) {
  const count = [30,8,5][control]; const color = control === 2 ? "#68d6ff" : control === 1 ? "#65e6df" : "#e7bd83";
  return <svg viewBox="0 0 800 500" className="absolute inset-0 h-full w-full" aria-hidden="true">{control===1 && <path d="M275 320 C430 300 500 210 690 100" fill="none" stroke="#60e4e0" strokeWidth="9" strokeDasharray="20 14" className={styles.flow}/>} {control===2 && Array.from({length:12}).map((_,i)=><circle key={`w${i}`} cx={280+i*26} cy={250+(i%3)*12} r="6" fill="#6edcff" className={styles.droplet} style={{animationDelay:`${i*.1}s`}}/>)} {Array.from({length:count}).map((_,i)=><circle key={i} cx={235+(i%15)*31} cy={365-(i%4)*12} r={control?3:6} fill={color} className={styles.particle} style={{animationDelay:`${(i%9)*.13}s`,"--dx":`${(i%2?1:-1)*(18+i%6*7)}px`,"--dy":`${-38-(i%7)*15}px`} as CSSProperties}/>)}</svg>;
}
