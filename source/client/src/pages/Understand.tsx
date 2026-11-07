import { useMemo, useState } from "react";
import {
  ArrowUpDown,
  ArrowRight,
  Check,
  ClipboardCheck,
  Footprints,
  Info,
  Scale,
  ShieldCheck,
  Utensils,
} from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";

const signals = [
  {
    icon: ArrowUpDown,
    title: "由椅子站起來變吃力",
    text: "需要用雙手撐住，或要試幾次才站穩。",
    color: "bg-[#f8e3d5] text-[#a95538]",
  },
  {
    icon: Footprints,
    title: "行樓梯或行路慢了",
    text: "以前熟悉的路線，現在更容易感到疲倦或不穩。",
    color: "bg-[#e6eee8] text-[#416b5e]",
  },
  {
    icon: Scale,
    title: "提買餸、開樽蓋變難",
    text: "手腳力量下降，會連帶影響很多日常小事。",
    color: "bg-[#f4e9c7] text-[#8b6b2f]",
  },
];

const pillars = [
  { icon: ShieldCheck, title: "肌力", kicker: "Strength", text: "以自身體重、水樽或阻力帶做有目的的力量練習。", tone: "#a95538" },
  { icon: Footprints, title: "活動力", kicker: "Move", text: "步行、太極或家務讓心肺與身體保持日常節奏。", tone: "#416b5e" },
  { icon: Utensils, title: "營養", kicker: "Fuel", text: "均衡飲食，並在每餐留意有沒有蛋白質來源。", tone: "#8b6b2f" },
];

const prompts = [
  "最近由椅子站起來，比以前更需要借力嗎？",
  "提起一袋日常買餸，是否比以前更容易感到吃力？",
  "最近有沒有因為疲倦或不穩，少了外出或活動？",
  "近來有沒有不明原因的體重下降或食慾明顯變差？",
];

export default function Understand() {
  const [checked, setChecked] = useState<boolean[]>(() => prompts.map(() => false));
  const count = useMemo(() => checked.filter(Boolean).length, [checked]);

  return (
    <SiteShell>
      <main>
        <section className="bg-[#293d39] text-[#f6eadb]">
          <div className="container grid gap-12 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.22em] text-[#e4ad8c]"><span className="h-px w-10 bg-[#d88761]" />01 / KNOW YOUR BODY</p>
              <p className="font-mono text-sm font-bold text-[#91b39c]">肌少症 sarcopenia</p>
            </div>
            <div>
              <h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-[-0.04em] md:text-7xl">不是「老了就一定會」<span className="block text-[#e9bb9b]">而是值得提早照顧。</span></h1>
              <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[#c8d5ca]">肌少症是肌肉量與肌肉力量隨時間下降，進一步影響活動能力的狀態。年齡是因素之一，但缺乏活動、營養不足和某些疾病也可能令肌肉流失加快。</p>
            </div>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#a95538]">NOTICE THE EVERYDAY</p>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-[-0.03em] text-[#293d39]">身體的提醒，<br /><span className="text-[#a95538]">常常藏在小事裡。</span></h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#746e67]">以下只是生活中的觀察方向，不是自我診斷。如果變化持續、影響生活，請向醫護人員查詢。</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {signals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.title} className="rounded-[1.5rem] border border-[#e5dbcf] bg-[#fffaf3] p-6 shadow-[0_10px_30px_rgba(81,61,43,0.05)]">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${signal.color}`}><Icon size={21} /></span>
                    <h3 className="mt-7 font-serif text-xl font-bold leading-snug text-[#293d39]">{signal.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#746e67]">{signal.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e4dace] bg-[#fffaf3]">
          <div className="container py-16 md:py-24">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-[0.22em] text-[#5c8b73]">THE THREE-PART APPROACH</p>
                <h2 className="mt-3 font-serif text-4xl font-bold tracking-[-0.03em] text-[#293d39]">給肌肉三樣日常支持。</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#746e67]">不用追求一次做到滿分。從一個支柱開始，再慢慢把另外兩個放進生活。</p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="relative overflow-hidden rounded-[1.5rem] border border-[#e5dbcf] bg-[#f7f3ec] p-7">
                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-15" style={{ backgroundColor: pillar.tone }} />
                    <div className="relative flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white" style={{ color: pillar.tone }}><Icon size={20} /></span><span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: pillar.tone }}>{pillar.kicker}</span></div>
                    <h3 className="relative mt-8 font-serif text-2xl font-bold text-[#293d39]">{pillar.title}</h3>
                    <p className="relative mt-3 text-sm leading-7 text-[#746e67]">{pillar.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div className="rounded-[2rem] border border-[#dce5dc] bg-[#edf3eb] p-7 md:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.22em] text-[#416b5e]">A GENTLE CHECK-IN</p>
                  <h2 className="mt-3 font-serif text-3xl font-bold text-[#29463b]">最近的身體，想告訴妳甚麼？</h2>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white font-serif text-2xl font-bold text-[#416b5e] shadow-sm">{count}<span className="ml-0.5 text-sm font-sans font-bold">/4</span></div>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#5b7165]">勾選符合近況的描述，當作與自己對話的開始。它不能診斷肌少症，也不能取代專業評估。</p>
              <div className="mt-7 grid gap-3">
                {prompts.map((prompt, index) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => setChecked((current) => current.map((value, i) => i === index ? !value : value))}
                    className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 ${checked[index] ? "border-[#7aa58e] bg-white shadow-sm" : "border-[#d5e1d6] bg-[#f4f8f2] hover:border-[#9bbcab]"}`}
                    aria-pressed={checked[index]}
                  >
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${checked[index] ? "border-[#5c8b73] bg-[#5c8b73] text-white" : "border-[#adc7b4] bg-white text-transparent"}`}><Check size={13} strokeWidth={3} /></span>
                    <span className="text-sm leading-6 text-[#456255]">{prompt}</span>
                  </button>
                ))}
              </div>
              <div className="mt-7 flex items-start gap-3 border-t border-[#d3e0d5] pt-5 text-xs leading-5 text-[#668071]"><Info size={15} className="mt-0.5 shrink-0" />如果勾選多項，或妳察覺活動能力持續變差，請安排與醫生、物理治療師或其他醫護人員傾談。</div>
            </div>
            <div className="lg:pt-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8e3d5] text-[#a95538]"><ClipboardCheck size={23} /></div>
              <h2 className="mt-7 font-serif text-3xl font-bold leading-tight text-[#293d39]">好消息是：<br /><span className="text-[#a95538]">肌力可以練回來。</span></h2>
              <p className="mt-5 text-sm leading-7 text-[#746e67]">從較輕的負荷開始，保持呼吸，動作穩定，再按自己的狀態慢慢增加。妳不需要等到「夠健康」才開始照顧肌肉。</p>
              <Link href="/moves" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#a95538] px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#91462f]">去動作庫找第一個動作 <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
