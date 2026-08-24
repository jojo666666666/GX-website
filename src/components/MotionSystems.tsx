import type { Locale } from "@/lib/i18n";

const systems = [
  {
    key: "rotary",
    label: { en: "Rotary Drive", zh: "同心旋转" },
    body: { en: "Direct rotation for fast cutting and intensive correction.", zh: "直接同心传动，适合高效切削与深度修复。" },
  },
  {
    key: "orbital",
    label: { en: "Random Orbital", zh: "随机偏心" },
    body: { en: "Balanced orbital motion for controlled, hologram-free finishing.", zh: "均衡偏心轨迹，兼顾操控性与无炫纹精抛。" },
  },
  {
    key: "forced",
    label: { en: "Forced Rotation", zh: "强制驱动" },
    body: { en: "Gear-coupled motion combines consistent rotation with orbital reach.", zh: "齿轮耦合传动，兼具稳定旋转与偏心覆盖。" },
  },
] as const;

function MotionDiagram({ type }: { type: (typeof systems)[number]["key"] }) {
  return (
    <svg viewBox="0 0 220 128" className="h-32 w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`motion-gradient-${type}`} x1="0" x2="1">
          <stop stopColor="#ef4b3f" />
          <stop offset="1" stopColor="#b91c1c" />
        </linearGradient>
      </defs>
      <circle cx="110" cy="64" r="45" fill="none" stroke="rgba(255,255,255,.1)" />
      <circle cx="110" cy="64" r="28" fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.16)" />
      {type === "rotary" && (
        <g className="motion-spin">
          <circle cx="110" cy="64" r="35" fill="none" stroke={`url(#motion-gradient-${type})`} strokeWidth="4" strokeDasharray="38 11" />
          <circle cx="110" cy="29" r="5" fill="#ff695e" />
        </g>
      )}
      {type === "orbital" && (
        <>
          <ellipse cx="110" cy="64" rx="52" ry="31" fill="none" stroke="rgba(239,75,63,.7)" strokeWidth="2" strokeDasharray="5 7" />
          <g className="motion-orbit">
            <line x1="110" y1="64" x2="154" y2="64" stroke="rgba(255,255,255,.2)" />
            <circle cx="154" cy="64" r="12" fill={`url(#motion-gradient-${type})`} />
            <circle cx="154" cy="64" r="4" fill="#fff" />
          </g>
        </>
      )}
      {type === "forced" && (
        <>
          <g className="motion-spin">
            <circle cx="91" cy="64" r="30" fill="none" stroke={`url(#motion-gradient-${type})`} strokeWidth="7" strokeDasharray="8 5" />
            <circle cx="91" cy="64" r="10" fill="#e83a2f" />
          </g>
          <g className="motion-spin-reverse">
            <circle cx="143" cy="64" r="22" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="6" strokeDasharray="7 4" />
            <circle cx="143" cy="64" r="7" fill="#fff" />
          </g>
        </>
      )}
    </svg>
  );
}

export default function MotionSystems({ lang }: { lang: Locale }) {
  return (
    <div className="mt-12 border-t border-white/10 pt-10 lg:mt-16 lg:pt-12">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400">
          {lang === "zh" ? "运动系统" : "Motion Systems"}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
          {lang === "zh" ? "看见每一种传动逻辑" : "Engineering you can see"}
        </h3>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {systems.map((system, index) => (
          <article key={system.key} className="group rounded-xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-red-500/40 hover:bg-white/[0.055]">
            <div className="rounded-lg border border-white/8 bg-black/25">
              <MotionDiagram type={system.key} />
            </div>
            <p className="mt-5 text-[11px] font-bold tracking-[0.2em] text-red-400">0{index + 1}</p>
            <h4 className="mt-2 text-lg font-semibold text-white">{system.label[lang]}</h4>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">{system.body[lang]}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
