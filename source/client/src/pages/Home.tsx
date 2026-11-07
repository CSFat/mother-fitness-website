import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  Dumbbell,
  Leaf,
  ShieldCheck,
  Sparkles,
  Timer,
  Utensils,
} from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";

const entryCards = [
  {
    href: "/understand",
    number: "01",
    title: "先認識肌少症",
    text: "了解肌力為何重要，從日常小訊號開始留意。",
    icon: ShieldCheck,
    tone: "bg-[#e6eee8] text-[#416b5e]",
  },
  {
    href: "/moves",
    number: "02",
    title: "在家練習力量",
    text: "用椅子、牆壁和水樽，建立可持續的動作習慣。",
    icon: Dumbbell,
    tone: "bg-[#f8e3d5] text-[#a95538]",
  },
  {
    href: "/plan",
    number: "03",
    title: "跟住 7 日小計劃",
    text: "每天只留 10–15 分鐘，把照顧自己放進日程表。",
    icon: Timer,
    tone: "bg-[#f4e9c7] text-[#8b6b2f]",
  },
  {
    href: "/fuel",
    number: "04",
    title: "吃夠肌肉材料",
    text: "每餐想一想蛋白質，讓身體有材料修補與維持。",
    icon: Utensils,
    tone: "bg-[#eee4f0] text-[#77527f]",
  },
];

const rhythm = [
  { time: "01", label: "熱身", text: "肩膀繞圈、原地踏步，讓身體醒來。", icon: Sparkles },
  { time: "02", label: "力量", text: "坐站、牆壁推壓，練習日常真正會用到的肌肉。", icon: Dumbbell },
  { time: "03", label: "平衡", text: "扶著椅背站穩，慢慢把重心找回來。", icon: CircleDot },
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden bg-[#f7f3ec]">
          <div className="pointer-events-none absolute -right-32 top-8 h-80 w-80 rounded-full bg-[#edc4aa]/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-28 bottom-8 h-72 w-72 rounded-full bg-[#cbdccf]/35 blur-3xl" />
          <div className="container relative grid items-center gap-10 py-12 md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-24">
            <div className="relative z-10 max-w-xl">
              <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.22em] text-[#a95538]">
                <span className="h-px w-10 bg-[#d88761]" />
                給每天照顧家人的妳
              </p>
              <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1.08] tracking-[-0.04em] text-[#293d39]">
                家務很重要，
                <span className="block text-[#a95538]">妳的肌力也一樣重要。</span>
              </h1>
              <p className="mt-7 max-w-lg text-[16px] leading-8 text-[#625f59] md:text-lg">
                妳一直在提菜、抱孫、抹窗、上落樓梯。現在，讓我們把一點有目的的力量訓練也放進日常，預防肌少症，為未來保留更多選擇。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/plan"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a95538] px-6 py-3.5 text-sm font-bold tracking-[0.06em] text-[#fff8ef] shadow-[0_12px_24px_rgba(169,85,56,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#91462f] active:scale-[0.98]"
                >
                  開始 7 日小計劃 <ArrowRight size={17} />
                </Link>
                <Link
                  href="/understand"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9b9aa] bg-[#fffaf3]/60 px-6 py-3.5 text-sm font-bold tracking-[0.06em] text-[#293d39] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#a95538] hover:bg-[#fffaf3] active:scale-[0.98]"
                >
                  先了解肌少症
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold tracking-[0.04em] text-[#79726a]">
                <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-[#5c8b73]" />不用健身房</span>
                <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-[#5c8b73]" />從水樽開始</span>
                <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-[#5c8b73]" />按自己的步調</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-5 -top-5 z-10 hidden rounded-2xl border border-[#ead8c8] bg-[#fffaf3]/90 px-4 py-3 shadow-[0_16px_40px_rgba(89,67,51,0.12)] backdrop-blur md:block">
                <p className="text-[10px] font-bold tracking-[0.18em] text-[#9a6b55]">YOUR DAILY REMINDER</p>
                <p className="mt-1 font-serif text-lg font-bold text-[#293d39]">力量，是自由的底氣</p>
              </div>
              <div className="overflow-hidden rounded-[2rem] border-[10px] border-[#fffaf3] bg-[#e7dccd] shadow-[0_24px_70px_rgba(74,54,42,0.2)]">
                <img
                  src="/manus-storage/mother-strength-hero_e40a225f.jpg"
                  alt="媽媽在家中用水樽進行溫和的手臂力量練習"
                  className="aspect-[4/3] w-full object-cover object-center lg:aspect-[16/11]"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl border border-[#d4e0d4] bg-[#edf3eb] px-4 py-3 shadow-[0_14px_32px_rgba(66,95,75,0.13)] sm:-right-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5c8b73] text-white"><Leaf size={18} /></span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.12em] text-[#5c806d]">SMALL, STEADY</p>
                  <p className="text-sm font-bold text-[#29463b]">每天一點，累積很大</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e4dace] bg-[#fffaf3]">
          <div className="container grid gap-6 py-7 sm:grid-cols-3 sm:gap-0">
            <div className="flex items-center gap-4 border-[#e4dace] sm:border-r sm:px-8 first:sm:pl-0">
              <span className="font-serif text-4xl font-bold text-[#a95538]">2+</span>
              <p className="max-w-[150px] text-xs font-semibold leading-5 text-[#716961]">每週至少兩天肌肉強化運動</p>
            </div>
            <div className="flex items-center gap-4 border-[#e4dace] sm:border-r sm:px-8">
              <span className="font-serif text-4xl font-bold text-[#5c8b73]">10–15</span>
              <p className="max-w-[150px] text-xs font-semibold leading-5 text-[#716961]">每個動作可由這個次數範圍開始</p>
            </div>
            <div className="flex items-center gap-4 sm:pl-8">
              <span className="font-serif text-4xl font-bold text-[#9b7b38]">48h</span>
              <p className="max-w-[170px] text-xs font-semibold leading-5 text-[#716961]">同一肌肉群之間留足恢復時間</p>
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="mb-4 text-[11px] font-bold tracking-[0.22em] text-[#a95538]">START HERE / 從這裡開始</p>
              <h2 className="font-serif text-4xl font-bold leading-tight tracking-[-0.03em] text-[#293d39] md:text-5xl">照顧別人之前，<br /><span className="text-[#a95538]">也把自己放進日程表。</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#777068]">不用一次改變所有事情。選一頁，做一個小動作，讓身體重新感受到「我做得到」。</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {entryCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-[1.5rem] border border-[#e5dbcf] bg-[#fffaf3] p-6 shadow-[0_10px_30px_rgba(81,61,43,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#d9b9a4] hover:shadow-[0_16px_34px_rgba(81,61,43,0.1)]"
                >
                  <div className="flex items-start justify-between">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${card.tone}`}><Icon size={20} /></span>
                    <span className="font-mono text-xs font-bold text-[#b5a79a]">{card.number}</span>
                  </div>
                  <h3 className="mt-7 font-serif text-xl font-bold text-[#293d39]">{card.title}</h3>
                  <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-[#746e67]">{card.text}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-xs font-bold tracking-[0.08em] text-[#a95538] transition-transform duration-200 group-hover:translate-x-1">查看內容 <ChevronRight size={14} /></span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="overflow-hidden bg-[#293d39] text-[#f6eadb]">
          <div className="container grid gap-12 py-20 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-4 text-[11px] font-bold tracking-[0.22em] text-[#e4ad8c]">A RHYTHM THAT FITS REAL LIFE</p>
              <h2 className="font-serif text-4xl font-bold leading-tight tracking-[-0.03em] md:text-5xl">不用「很會運動」，<br /><span className="text-[#e9bb9b]">只要有自己的節奏。</span></h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-[#c6d2c8]">把訓練拆成一小段一小段，穿插在煮飯前、洗衣後，或家人午睡的時候。持續，比一次做很多更重要。</p>
              <Link href="/plan" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#789083] px-5 py-3 text-sm font-bold text-[#fff8ef] transition-colors hover:bg-[#38534d]">查看 7 日小計劃 <ArrowRight size={16} /></Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {rhythm.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.time} className="rounded-[1.5rem] border border-[#486058] bg-[#334a44] p-5">
                    <div className="flex items-center justify-between text-[#e4ad8c]"><span className="font-mono text-xs font-bold">{item.time}</span><Icon size={18} /></div>
                    <h3 className="mt-10 font-serif text-xl font-bold text-white">{item.label}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#c3d0c5]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="grid items-stretch gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#f1d9c8] p-8 md:p-12">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border-[18px] border-[#e3b699]/50" />
              <div className="relative max-w-xl">
                <p className="text-[11px] font-bold tracking-[0.22em] text-[#a95538]">A NOTE FOR MUM</p>
                <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#573528] md:text-4xl">提重物不是變大隻，<br />是讓日常少一點吃力。</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-[#765344]">強化肌肉的目的，是幫助妳更有把握地站起來、行樓梯、提買餸，繼續做想做的事。家務可以加分，但有目的的力量練習，才會更完整。</p>
                <Link href="/moves" className="mt-7 inline-flex items-center gap-2 font-bold text-[#91462f] hover:text-[#6f3323]">去動作庫看看 <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-[2rem] border border-[#dce5dc] bg-[#edf3eb] p-8 md:p-10">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5c8b73] text-white"><Leaf size={22} /></span>
                <h3 className="mt-7 font-serif text-2xl font-bold text-[#29463b]">家務是活動，<br />但不是全部。</h3>
                <p className="mt-4 text-sm leading-7 text-[#5b7165]">拖地、抹窗、買餸都能讓妳動起來。再加上肌肉強化、平衡與足夠營養，才是更穩妥的日常組合。</p>
              </div>
              <Link href="/safety" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#416b5e] hover:text-[#29463b]">先看安全提醒 <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
