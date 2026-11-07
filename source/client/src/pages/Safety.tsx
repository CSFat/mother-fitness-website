import {
  AlertCircle,
  ArrowRight,
  Check,
  HeartPulse,
  Info,
  ShieldCheck,
  Wind,
} from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";

const before = [
  "地面乾爽、通道清空，椅子或枱面要穩固。",
  "先做 3–5 分鐘輕鬆熱身，讓身體慢慢進入狀態。",
  "穿合腳的鞋；做平衡練習時，旁邊一定有支撐。",
];

const during = [
  "出力時呼氣，放鬆時吸氣，不要長時間閉氣。",
  "肌肉有努力感可以，但尖銳疼痛、胸口不適、頭暈或氣促要即時停下。",
  "從無重量或輕水樽開始，動作穩定後才逐步增加。",
];

const consult = [
  "有心臟病、肺病、糖尿病、骨骼關節問題或其他慢性病。",
  "近期做過手術、受傷，或活動時反覆出現頭暈、胸痛、異常氣促。",
  "不明原因體重下降、食慾變差，或日常活動能力明顯轉差。",
];

export default function Safety() {
  return (
    <SiteShell>
      <main>
        <section className="bg-[#293d39] text-[#f6eadb]">
          <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.22em] text-[#e4ad8c]"><span className="h-px w-10 bg-[#d88761]" />START SAFELY / 安全開始</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#b8d0be]"><ShieldCheck size={17} />穩定，比勉強完成更重要</div>
            </div>
            <div>
              <h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-[-0.04em] md:text-7xl">對自己溫柔一點，<span className="block text-[#e9bb9b]">力量才走得長。</span></h1>
              <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[#c8d5ca]">運動應該幫助妳更有信心，而不是讓妳硬撐。開始前看一次安全提醒，按照自己的身體狀態調整。</p>
            </div>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[#e5dbcf] bg-[#fffaf3] p-7 shadow-[0_10px_30px_rgba(81,61,43,0.05)]"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e6eee8] text-[#416b5e]"><Check size={21} /></span><p className="mt-7 text-[11px] font-bold tracking-[0.18em] text-[#416b5e]">01 / BEFORE</p><h2 className="mt-3 font-serif text-2xl font-bold text-[#293d39]">做之前</h2><div className="mt-5 grid gap-3">{before.map((item) => <p key={item} className="flex items-start gap-2 text-sm leading-6 text-[#746e67]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#83a992]" />{item}</p>)}</div></div>
            <div className="rounded-[1.5rem] border border-[#e5dbcf] bg-[#fffaf3] p-7 shadow-[0_10px_30px_rgba(81,61,43,0.05)]"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f8e3d5] text-[#a95538]"><Wind size={21} /></span><p className="mt-7 text-[11px] font-bold tracking-[0.18em] text-[#a95538]">02 / DURING</p><h2 className="mt-3 font-serif text-2xl font-bold text-[#293d39]">做的時候</h2><div className="mt-5 grid gap-3">{during.map((item) => <p key={item} className="flex items-start gap-2 text-sm leading-6 text-[#746e67]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d88761]" />{item}</p>)}</div></div>
            <div className="rounded-[1.5rem] border border-[#e5dbcf] bg-[#fffaf3] p-7 shadow-[0_10px_30px_rgba(81,61,43,0.05)]"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4e9c7] text-[#8b6b2f]"><HeartPulse size={21} /></span><p className="mt-7 text-[11px] font-bold tracking-[0.18em] text-[#8b6b2f]">03 / AFTER</p><h2 className="mt-3 font-serif text-2xl font-bold text-[#293d39]">做完之後</h2><div className="mt-5 grid gap-3"><p className="flex items-start gap-2 text-sm leading-6 text-[#746e67]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b79a4d]" />給身體一點時間放鬆與補水。</p><p className="flex items-start gap-2 text-sm leading-6 text-[#746e67]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b79a4d]" />輕微肌肉疲勞可以觀察；持續疼痛就要休息並求助。</p><p className="flex items-start gap-2 text-sm leading-6 text-[#746e67]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b79a4d]" />記低哪些動作舒服，下一次從那裡開始。</p></div></div>
          </div>
        </section>

        <section className="border-y border-[#e4dace] bg-[#fffaf3]">
          <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#a95538]">WHEN TO ASK FIRST</p>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-[-0.03em] text-[#293d39]">以下情況，<br /><span className="text-[#a95538]">先問醫護人員。</span></h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#746e67]">如果妳不確定某個動作是否適合自己，請先向醫生或物理治療師查詢，再開始或增加強度。</p>
            </div>
            <div className="rounded-[2rem] border border-[#eed4c4] bg-[#fdf0e7] p-7 md:p-9">
              <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#a95538]"><AlertCircle size={22} /></span><div><h3 className="font-serif text-2xl font-bold text-[#6d3828]">請留意妳的起點</h3><p className="mt-2 text-sm leading-6 text-[#805847]">有以下情況，不代表不能運動，只是值得先得到個別化建議。</p></div></div>
              <div className="mt-7 grid gap-3">{consult.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-[#efd8cb] bg-[#fff8f2] p-3 text-sm leading-6 text-[#805847]"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f1d9c8] text-[#a95538]"><Check size={12} /></span>{item}</div>)}</div>
            </div>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#dce5dc] bg-[#edf3eb] p-8 text-center md:p-12">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#416b5e]"><Info size={22} /></span>
            <h2 className="mt-6 font-serif text-3xl font-bold text-[#29463b]">這是一份起步指南，不是醫療處方。</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5b7165]">每個人的年齡、病史、用藥和活動能力都不同。網站上的次數和動作只是溫和的例子，請以專業人士給妳的個人建議為準。</p>
            <Link href="/plan" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#416b5e] px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#34584d]">回到 7 日小計劃 <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
