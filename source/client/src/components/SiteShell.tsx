import { useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowUpRight,
  Dumbbell,
  HeartPulse,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "/understand", label: "認識肌少症", shortLabel: "認識" },
  { href: "/moves", label: "居家動作庫", shortLabel: "動作" },
  { href: "/plan", label: "7日小計劃", shortLabel: "計劃" },
  { href: "/fuel", label: "飲食補給", shortLabel: "飲食" },
];

function NavItem({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-3 py-2 text-[13px] font-semibold tracking-[0.08em] transition-colors duration-200 ${
        active ? "text-[#a94e35]" : "text-[#655f58] hover:text-[#a94e35]"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
      <span
        className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-[#d88761] transition-transform duration-200 ${
          active ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </Link>
  );
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isActive = (href: string) => location === href;

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#2f332f] selection:bg-[#edc4aa] selection:text-[#42251d]">
      <div className="bg-[#293d39] px-4 py-2.5 text-center text-[11px] font-semibold tracking-[0.16em] text-[#f6eadb]">
        給每天照顧家人的妳：先照顧自己的肌力
      </div>
      <header className="sticky top-0 z-50 border-b border-[#e7ddd0]/90 bg-[#f7f3ec]/90 backdrop-blur-xl">
        <div className="container flex min-h-[74px] items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-3" aria-label="回到日日有力首頁">
            <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#d88761] text-[#fff8ef] shadow-[0_8px_20px_rgba(168,78,53,0.2)] transition-transform duration-200 group-hover:-rotate-3">
              <Dumbbell size={19} strokeWidth={2.4} />
            </span>
            <span className="leading-none">
              <span className="block font-serif text-[20px] font-bold tracking-[0.1em] text-[#293d39]">日日有力</span>
              <span className="mt-1 block text-[9px] font-semibold tracking-[0.22em] text-[#a27761]">EVERYDAY STRONG</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="主要導覽">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} active={isActive(item.href)} />
            ))}
            <Link
              href="/safety"
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-[#293d39] px-4 py-2.5 text-[12px] font-bold tracking-[0.08em] text-[#fff8ef] shadow-[0_7px_18px_rgba(41,61,57,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#38534d] active:scale-[0.98]"
            >
              安全開始 <ArrowUpRight size={14} />
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d7ccbf] text-[#293d39] lg:hidden"
            aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-[#e7ddd0] bg-[#fbf8f2] px-4 py-4 lg:hidden">
            <nav className="container flex flex-col gap-1" aria-label="行動版主要導覽">
              {navItems.map((item) => (
                <NavItem key={item.href} {...item} active={isActive(item.href)} onClick={() => setMobileOpen(false)} />
              ))}
              <Link
                href="/safety"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#293d39] px-4 py-3 text-sm font-bold text-[#fff8ef]"
              >
                安全開始 <HeartPulse size={16} />
              </Link>
            </nav>
          </div>
        )}
      </header>

      {children}

      <footer className="border-t border-[#e4dace] bg-[#293d39] text-[#f4e9db]">
        <div className="container grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:py-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d88761] text-[#fff8ef]">
                <Dumbbell size={17} />
              </span>
              <div>
                <p className="font-serif text-lg font-bold tracking-[0.1em]">日日有力</p>
                <p className="text-[9px] font-semibold tracking-[0.2em] text-[#d8baa5]">EVERYDAY STRONG</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#c4d0c6]">
              為每天照顧家人的媽媽，留一點時間練習力量、平衡與自信。從家中最熟悉的椅子和水樽開始。
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#e4ad8c]">BROWSE</p>
            <div className="mt-4 grid gap-2 text-sm text-[#d4dfd5]">
              <Link href="/understand" className="transition-colors hover:text-white">認識肌少症</Link>
              <Link href="/moves" className="transition-colors hover:text-white">居家動作庫</Link>
              <Link href="/plan" className="transition-colors hover:text-white">7日小計劃</Link>
              <Link href="/fuel" className="transition-colors hover:text-white">飲食補給</Link>
              <Link href="/laundry" className="transition-colors hover:text-white">媽媽的洗衣超能力</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#e4ad8c]">資料來源</p>
            <div className="mt-4 grid gap-3 text-xs leading-5 text-[#b7c6bb]">
              <a href="https://www.elderly.gov.hk/tc_chi/health_information/bones_and_joints/muscle_loss.html" target="_blank" rel="noreferrer" className="group inline-flex items-start gap-1.5 hover:text-white">
                香港衞生署長者健康服務：預防肌肉流失 <ArrowUpRight size={12} className="mt-0.5 shrink-0" />
              </a>
              <a href="https://www.who.int/initiatives/behealthy/physical-activity" target="_blank" rel="noreferrer" className="group inline-flex items-start gap-1.5 hover:text-white">
                WHO：Physical activity <ArrowUpRight size={12} className="mt-0.5 shrink-0" />
              </a>
              <a href="https://www.nia.nih.gov/health/exercise-and-physical-activity/three-types-exercise-can-improve-your-health-and-physical" target="_blank" rel="noreferrer" className="group inline-flex items-start gap-1.5 hover:text-white">
                NIA：Three types of exercise <ArrowUpRight size={12} className="mt-0.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#486058]">
          <div className="container flex flex-col gap-2 py-5 text-[11px] text-[#a9bab0] md:flex-row md:items-center md:justify-between">
            <p>健康教育用途，不能取代醫生或物理治療師的個別建議。</p>
            <p>為媽媽留力，也為自己留一點空間。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
