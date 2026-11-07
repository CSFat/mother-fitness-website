import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleDot,
  Dumbbell,
  Info,
  MoveHorizontal,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";

const moves = [
  {
    id: "sit-to-stand",
    label: "下肢",
    title: "坐站練習",
    english: "Sit to stand",
    icon: ArrowDown,
    tone: "#a95538",
    equipment: "穩固椅子",
    reps: "8–12 下",
    target: "大腿、臀部、核心",
    intro: "把每天起身的動作，變成一個有意識的力量練習。",
    steps: ["坐在椅子前半部，雙腳踩穩，身體微微前傾。", "用腳掌推地，慢慢站起，不要用手拉自己。", "站穩後，再慢慢坐回椅子；全程保持呼吸。"],
    cue: "如果完全站不起來，先用較高的椅子，或用手輕觸椅面輔助。",
  },
  {
    id: "wall-push",
    label: "上肢",
    title: "牆壁推壓",
    english: "Wall push-up",
    icon: MoveHorizontal,
    tone: "#416b5e",
    equipment: "穩固牆壁",
    reps: "8–12 下",
    target: "胸口、肩膀、手臂",
    intro: "比地板掌上壓溫和，適合把上肢訓練放進家務之間。",
    steps: ["面向牆壁站立，雙手放在肩膀高度，距離約一個手臂。", "身體保持一直線，手肘向後彎，胸口靠近牆壁。", "用手掌推回起始位置，感覺胸口和手臂出力。"],
    cue: "腳跟保持踩地；如果肩膀不舒服，把雙手放高一點。",
  },
  {
    id: "bottle-row",
    label: "背部",
    title: "水樽划船",
    english: "Bottle row",
    icon: Dumbbell,
    tone: "#8b6b2f",
    equipment: "兩個小水樽",
    reps: "8–12 下",
    target: "上背、肩膀、手臂",
    intro: "用兩個輕水樽練習拉的動作，幫助提物和搬東西更有把握。",
    steps: ["雙腳打開至髖部寬度，膝蓋微曲，身體從髖部前傾。", "手臂自然向下，手掌相對；肩膀遠離耳朵。", "把手肘向後拉，水樽靠近身體，再慢慢放下。"],
    cue: "背部保持平直；寧願減輕水樽，也不要用腰背甩動。",
  },
  {
    id: "heel-balance",
    label: "小腿／平衡",
    title: "提踵與扶椅平衡",
    english: "Heel raise + balance",
    icon: CircleDot,
    tone: "#77527f",
    equipment: "椅背或廚房枱",
    reps: "10 下 + 20 秒",
    target: "小腿、腳踝、平衡力",
    intro: "先練小腿力量，再用穩固支撐練習站得更穩。",
    steps: ["一手扶住椅背，雙腳平行站好，慢慢踮起腳尖。", "停留一秒，再控制速度放下；重複 10 次。", "保持扶椅，將一隻腳向前輕點，感受重心轉移。"],
    cue: "平衡練習一定要在旁邊有穩固支撐，先求穩，再減少扶持。",
  },
];

export default function Moves() {
  const [selected, setSelected] = useState(0);
  const move = moves[selected];
  const Icon = move.icon;

  return (
    <SiteShell>
      <main>
        <section className="bg-[#f1d9c8]">
          <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.22em] text-[#a95538]"><span className="h-px w-10 bg-[#c87b5d]" />02 / MOVE WITH PURPOSE</p>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#85513e]"><Dumbbell size={17} />不用器械房，家裡就是起點</div>
            </div>
            <div>
              <h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-[#573528] md:text-7xl">讓動作回到生活裡，<span className="block text-[#a95538]">讓力量留下來。</span></h1>
              <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[#765344]">挑一個動作開始。負荷可以很輕，但要穩定、可控制，而且讓妳感覺到自己正在變得更有把握。</p>
            </div>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#a95538]">CHOOSE ONE TO EXPLORE</p>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-[-0.03em] text-[#293d39]">四個日常會用到的<br /><span className="text-[#a95538]">力量方向。</span></h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#746e67]">先選自己最熟悉、最安全的一個。做到動作穩定，再慢慢增加次數或負荷。</p>
              <div className="mt-7 grid gap-2">
                {moves.map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelected(index)}
                      className={`group flex items-center gap-4 rounded-2xl border p-3 text-left transition-all duration-200 ${selected === index ? "border-[#d4ad96] bg-[#fffaf3] shadow-[0_10px_24px_rgba(81,61,43,0.08)]" : "border-transparent bg-[#f1ece4] hover:border-[#e5d4c6] hover:bg-[#fffaf3]"}`}
                      aria-pressed={selected === index}
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: `${item.tone}16`, color: item.tone }}><ItemIcon size={19} /></span>
                      <span className="min-w-0 flex-1"><span className="block text-[10px] font-bold tracking-[0.16em] text-[#aa9d90]">{item.label}</span><span className="mt-0.5 block font-serif text-lg font-bold text-[#293d39]">{item.title}</span></span>
                      <ArrowRight size={16} className={`text-[#b6a89b] transition-transform duration-200 ${selected === index ? "translate-x-0 text-[#a95538]" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#e5dbcf] bg-[#fffaf3] shadow-[0_18px_40px_rgba(81,61,43,0.08)]">
              <div className="flex flex-col gap-6 border-b border-[#ece2d6] p-7 md:flex-row md:items-start md:justify-between md:p-10">
                <div>
                  <div className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: `${move.tone}16`, color: move.tone }}><Icon size={22} /></span><span className="text-xs font-bold tracking-[0.16em] text-[#9c8f82]">{move.english}</span></div>
                  <h2 className="mt-7 font-serif text-4xl font-bold tracking-[-0.03em] text-[#293d39]">{move.title}</h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#746e67]">{move.intro}</p>
                </div>
                <div className="flex shrink-0 gap-2 md:flex-col md:items-end"><span className="rounded-full bg-[#f1ece4] px-3 py-1.5 text-[11px] font-bold text-[#776d63]">{move.equipment}</span><span className="rounded-full bg-[#e6eee8] px-3 py-1.5 text-[11px] font-bold text-[#416b5e]">{move.reps}</span></div>
              </div>
              <div className="grid gap-8 p-7 md:grid-cols-[1.05fr_0.95fr] md:p-10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[#a95538]"><span className="h-px w-6 bg-[#d88761]" />HOW TO DO IT</div>
                  <div className="mt-6 grid gap-4">
                    {move.steps.map((step, index) => (
                      <div key={step} className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f1d9c8] font-mono text-xs font-bold text-[#a95538]">{index + 1}</span><p className="pt-0.5 text-sm leading-6 text-[#5e5a54]">{step}</p></div>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-3 rounded-2xl bg-[#edf3eb] p-4 text-sm leading-6 text-[#4e6e5e]"><ShieldCheck size={18} className="mt-0.5 shrink-0" /><p><span className="font-bold">小提示：</span>{move.cue}</p></div>
                </div>
                <div className="rounded-[1.5rem] bg-[#293d39] p-6 text-[#f6eadb] md:p-7">
                  <p className="text-[10px] font-bold tracking-[0.18em] text-[#e4ad8c]">YOUR FOCUS</p>
                  <h3 className="mt-4 font-serif text-2xl font-bold">今天不求快，<br />只求做得穩。</h3>
                  <div className="mt-8 grid gap-4 border-t border-[#486058] pt-5 text-sm">
                    <div className="flex items-start gap-3"><Timer size={17} className="mt-0.5 text-[#e4ad8c]" /><div><p className="font-bold text-white">負荷</p><p className="mt-1 leading-6 text-[#c3d0c5]">先用沒有重量或很輕的水樽，熟悉路徑。</p></div></div>
                    <div className="flex items-start gap-3"><ShieldCheck size={17} className="mt-0.5 text-[#e4ad8c]" /><div><p className="font-bold text-white">呼吸</p><p className="mt-1 leading-6 text-[#c3d0c5]">出力時呼氣，放鬆時吸氣，不要閉氣。</p></div></div>
                    <div className="flex items-start gap-3"><Info size={17} className="mt-0.5 text-[#e4ad8c]" /><div><p className="font-bold text-white">感受</p><p className="mt-1 leading-6 text-[#c3d0c5]">肌肉有努力可以，尖銳疼痛或不適就要停下。</p></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e4dace] bg-[#fffaf3]">
          <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f4e9c7] text-[#8b6b2f]"><Check size={20} /></span><div><p className="font-serif text-xl font-bold text-[#293d39]">同一組肌肉，隔天再練。</p><p className="mt-1 text-sm leading-6 text-[#746e67]">讓身體有時間恢復。中間可以散步、伸展或做平衡練習。</p></div></div>
            <Link href="/plan" className="inline-flex items-center gap-2 text-sm font-bold text-[#a95538] hover:text-[#91462f]">把動作放入 7 日計劃 <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
