import { useState } from "react";
import {
  Apple,
  ArrowRight,
  Check,
  Fish,
  GlassWater,
  Leaf,
  Milk,
  ShoppingBasket,
  Soup,
  Utensils,
} from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";

const foods = [
  { title: "蛋與奶", text: "雞蛋、牛奶、乳酪或無糖乳酪，放在早餐或小食。", icon: Milk, tone: "#a95538" },
  { title: "豆與豆製品", text: "豆腐、豆漿、毛豆、紅腰豆，煮麵或煮湯都方便加入。", icon: Leaf, tone: "#416b5e" },
  { title: "魚、肉、家禽", text: "魚、雞肉、瘦肉等，按自己的口味與需要選擇。", icon: Fish, tone: "#77527f" },
  { title: "一餐一個提醒", text: "不必計算得很複雜：每餐先找一項蛋白質來源。", icon: Utensils, tone: "#8b6b2f" },
];

const groceries = ["雞蛋或豆腐", "牛奶／無糖豆漿", "魚、雞肉或瘦肉", "豆類或毛豆"];

export default function Fuel() {
  const [checked, setChecked] = useState<boolean[]>(groceries.map(() => false));

  return (
    <SiteShell>
      <main>
        <section className="bg-[#f4e9c7]">
          <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.22em] text-[#8b6b2f]"><span className="h-px w-10 bg-[#b79a4d]" />04 / FUEL YOUR BODY</p>
              <p className="flex items-center gap-2 text-sm font-semibold text-[#8b7440]"><Apple size={17} />讓每一餐都有肌肉材料</p>
            </div>
            <div>
              <h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-[#5c4b28] md:text-7xl">練習讓肌肉出力，<span className="block text-[#8b6b2f]">也要給它足夠材料。</span></h1>
              <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[#75663f]">蛋白質是維持與修補肌肉的重要營養。先從熟悉的食物開始，不需要為了「健康」把吃飯變成另一份功課。</p>
            </div>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#8b6b2f]">THE EASY QUESTION</p>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-[-0.03em] text-[#293d39]">坐下來吃飯時，<br /><span className="text-[#8b6b2f]">先問自己一題。</span></h2>
              <div className="mt-7 rounded-[1.5rem] bg-[#293d39] p-6 text-[#f6eadb] shadow-[0_16px_34px_rgba(41,61,57,0.13)] md:p-7">
                <p className="text-[10px] font-bold tracking-[0.18em] text-[#e4ad8c]">A DAILY PROMPT</p>
                <p className="mt-5 font-serif text-3xl font-bold leading-tight">「這一餐，<br />有沒有一項蛋白質？」</p>
                <p className="mt-5 text-sm leading-6 text-[#c3d0c5]">有的話，已經是在照顧肌肉。可以是蛋、豆腐、魚、肉、奶或豆類，不必每一餐都一模一樣。</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {foods.map((food) => {
                const Icon = food.icon;
                return (
                  <div key={food.title} className="rounded-[1.5rem] border border-[#e5dbcf] bg-[#fffaf3] p-6 shadow-[0_10px_30px_rgba(81,61,43,0.05)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ backgroundColor: `${food.tone}16`, color: food.tone }}><Icon size={20} /></span>
                    <h3 className="mt-7 font-serif text-xl font-bold text-[#293d39]">{food.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#746e67]">{food.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e4dace] bg-[#fffaf3]">
          <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#416b5e]">KEEP IT PRACTICAL</p>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-[-0.03em] text-[#293d39]">把營養放進<br /><span className="text-[#416b5e]">妳本來就會做的菜。</span></h2>
              <div className="mt-7 grid gap-3 text-sm text-[#5b7165]">
                <div className="flex items-start gap-3"><span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#dceadf] text-[#416b5e]"><Check size={13} /></span><p>煮湯時加豆腐、蛋或瘦肉，讓一碗湯更完整。</p></div>
                <div className="flex items-start gap-3"><span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#dceadf] text-[#416b5e]"><Check size={13} /></span><p>早餐不只吃茶和麵包，可以配蛋、奶或無糖豆漿。</p></div>
                <div className="flex items-start gap-3"><span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#dceadf] text-[#416b5e]"><Check size={13} /></span><p>買餸時先選一項蛋白質，再配蔬菜和適量主食。</p></div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-[#dce5dc] bg-[#edf3eb] p-7 md:p-9">
              <div className="flex items-center justify-between"><div><p className="text-[11px] font-bold tracking-[0.18em] text-[#416b5e]">A SMALL SHOPPING LIST</p><h3 className="mt-3 font-serif text-2xl font-bold text-[#29463b]">下次買餸，選一樣就好。</h3></div><ShoppingBasket size={26} className="text-[#5c8b73]" /></div>
              <div className="mt-7 grid gap-3">
                {groceries.map((item, index) => (
                  <button key={item} type="button" onClick={() => setChecked((current) => current.map((value, i) => i === index ? !value : value))} className="flex items-center gap-3 rounded-xl border border-[#d2e0d4] bg-[#f7fbf5] p-3 text-left text-sm font-semibold text-[#4e6e5e]" aria-pressed={checked[index]}><span className={`flex h-5 w-5 items-center justify-center rounded-md border ${checked[index] ? "border-[#5c8b73] bg-[#5c8b73] text-white" : "border-[#adc7b4] bg-white text-transparent"}`}><Check size={13} strokeWidth={3} /></span>{item}</button>
                ))}
              </div>
              <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-[#668071]"><GlassWater size={14} className="mt-0.5 shrink-0" />飲水、均衡飲食與足夠總熱量同樣重要；這頁不提供個人化飲食處方。</p>
            </div>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="flex flex-col gap-7 rounded-[2rem] bg-[#f1d9c8] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="flex items-start gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff4e9] text-[#a95538]"><Soup size={22} /></span><div><h2 className="font-serif text-2xl font-bold text-[#573528]">有慢性病、腎臟問題或體重明顯下降？</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-[#765344]">開始大幅改變飲食或使用營養補充品前，先請醫生或註冊營養師按妳的情況給建議。</p></div></div>
            <Link href="/safety" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#a95538] hover:text-[#91462f]">查看安全提醒 <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
