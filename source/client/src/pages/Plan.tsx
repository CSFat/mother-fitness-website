import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  CircleDot,
  Dumbbell,
  Footprints,
  Leaf,
  RotateCcw,
  Sparkles,
  Timer,
} from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";

const days = [
  { day: "一", tag: "醒一醒", title: "5 分鐘活動度", text: "肩膀繞圈、手腕腳踝活動，再原地踏步。", duration: "5 min", icon: Sparkles, tone: "#8b6b2f" },
  { day: "二", tag: "力量 A", title: "坐站 + 牆壁推壓", text: "各做 1 組，每個動作 8–12 下。", duration: "10 min", icon: Dumbbell, tone: "#a95538" },
  { day: "三", tag: "帶氧", title: "舒服地行 15 分鐘", text: "可以在家中走動、到樓下散步，或分成兩段完成。", duration: "15 min", icon: Footprints, tone: "#416b5e" },
  { day: "四", tag: "恢復", title: "伸展與呼吸", text: "給同一組肌肉休息，做輕柔伸展，不追求拉得深。", duration: "5–10 min", icon: Leaf, tone: "#77527f" },
  { day: "五", tag: "力量 B", title: "水樽划船 + 提踵", text: "各做 1 組，動作慢一點，留意呼吸。", duration: "10 min", icon: Dumbbell, tone: "#a95538" },
  { day: "六", tag: "平衡", title: "扶椅平衡 + 輕鬆散步", text: "先在穩固支撐旁練習，再按狀態走一小段。", duration: "10–15 min", icon: CircleDot, tone: "#416b5e" },
  { day: "日", tag: "選妳喜歡的", title: "重複一個最舒服的動作", text: "可以重做力量 A 或 B，也可以和家人一起外出走走。", duration: "10–20 min", icon: Sparkles, tone: "#8b6b2f" },
];

export default function Plan() {
  const [completed, setCompleted] = useState<boolean[]>(() => days.map(() => false));

  useEffect(() => {
    const saved = window.localStorage.getItem("everyday-strong-plan");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === days.length) setCompleted(parsed);
      } catch {
        // Ignore malformed local progress and start fresh.
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("everyday-strong-plan", JSON.stringify(completed));
  }, [completed]);

  const count = useMemo(() => completed.filter(Boolean).length, [completed]);
  const progress = Math.round((count / days.length) * 100);

  const reset = () => setCompleted(days.map(() => false));

  return (
    <SiteShell>
      <main>
        <section className="bg-[#e6eee8]">
          <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.22em] text-[#416b5e]"><span className="h-px w-10 bg-[#6e9a83]" />03 / BUILD A RHYTHM</p>
              <p className="flex items-center gap-2 text-sm font-semibold text-[#527464]"><Timer size={17} />每天 5–20 分鐘，按能力調整</p>
            </div>
            <div>
              <h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-[#29463b] md:text-7xl">不用等到有空，<span className="block text-[#416b5e]">先留一點時間給自己。</span></h1>
              <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[#5b7165]">這是一個溫和的起步版本。完成不是考試，妳可以減少次數、延長休息，或把一天拆成兩段。</p>
            </div>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#416b5e]">YOUR WEEK, YOUR PACE</p>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-[-0.03em] text-[#293d39]">完成一小步，<br /><span className="text-[#416b5e]">就是在累積。</span></h2>
              <div className="mt-8 rounded-[1.5rem] bg-[#293d39] p-6 text-[#f6eadb] shadow-[0_16px_34px_rgba(41,61,57,0.14)]">
                <div className="flex items-end justify-between"><div><p className="text-[10px] font-bold tracking-[0.18em] text-[#b6d1bd]">WEEKLY PROGRESS</p><p className="mt-2 font-serif text-4xl font-bold">{count}<span className="ml-1 text-lg text-[#b6c8ba]">/ 7</span></p></div><span className="font-mono text-sm font-bold text-[#e4ad8c]">{progress}%</span></div>
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#486058]"><div className="h-full rounded-full bg-[#e4ad8c] transition-all duration-300" style={{ width: `${progress}%` }} /></div>
                <p className="mt-4 text-sm leading-6 text-[#c3d0c5]">{count === 0 ? "今天先選一個最容易的開始。" : count === days.length ? "一整週完成！記得為自己留一句鼓勵。" : "不用追趕，下一天照自己的狀態繼續。"}</p>
                <button type="button" onClick={reset} className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#e4ad8c] hover:text-white"><RotateCcw size={13} />重新開始</button>
              </div>
              <div className="mt-6 flex items-start gap-3 text-xs leading-5 text-[#6c7d71]"><Leaf size={15} className="mt-0.5 shrink-0 text-[#5c8b73]" />每次完成後按一下，進度只儲存在這部裝置的瀏覽器中。</div>
            </div>

            <div className="grid gap-3">
              {days.map((item, index) => {
                const Icon = item.icon;
                const isDone = completed[index];
                return (
                  <button
                    key={item.day}
                    type="button"
                    onClick={() => setCompleted((current) => current.map((value, i) => i === index ? !value : value))}
                    className={`group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[1.5rem] border p-4 text-left transition-all duration-200 md:gap-6 md:p-5 ${isDone ? "border-[#9bbcab] bg-[#edf3eb]" : "border-[#e5dbcf] bg-[#fffaf3] hover:-translate-y-0.5 hover:border-[#b9cdbd] hover:shadow-[0_12px_28px_rgba(81,61,43,0.07)]"}`}
                    aria-pressed={isDone}
                  >
                    <span className="flex h-12 w-12 flex-col items-center justify-center rounded-2xl bg-[#f1ece4] font-serif leading-none text-[#7b7066] group-hover:bg-white"><span className="text-[10px] font-bold tracking-[0.14em]">DAY</span><span className="mt-1 text-lg font-bold">{item.day}</span></span>
                    <span className="min-w-0"><span className="flex flex-wrap items-center gap-2"><span className="text-[10px] font-bold tracking-[0.16em]" style={{ color: item.tone }}>{item.tag}</span><span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#9b9085]"><Timer size={11} />{item.duration}</span></span><span className={`mt-1 block font-serif text-xl font-bold ${isDone ? "text-[#416b5e] line-through decoration-[#8eb19c]" : "text-[#293d39]"}`}>{item.title}</span><span className="mt-1 block text-sm leading-6 text-[#746e67]">{item.text}</span></span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 ${isDone ? "border-[#5c8b73] bg-[#5c8b73] text-white" : "border-[#c9bfb4] bg-[#fffaf3] text-transparent group-hover:border-[#83a992]"}`}><Check size={18} strokeWidth={3} /></span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e4dace] bg-[#fffaf3]">
          <div className="container grid gap-6 py-12 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f8e3d5] text-[#a95538]"><Dumbbell size={20} /></span><div><h2 className="font-serif text-2xl font-bold text-[#293d39]">想先學會動作？</h2><p className="mt-1 text-sm leading-6 text-[#746e67]">到動作庫查看分步說明，再回來完成今日一格。</p></div></div>
            <Link href="/moves" className="inline-flex items-center gap-2 text-sm font-bold text-[#a95538] hover:text-[#91462f]">查看動作庫 <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
