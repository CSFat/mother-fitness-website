import { useEffect, useState } from "react";

/**
 * 媽媽的洗衣超能力 Infographic
 * 設計理念：溫馨、幽默、充滿愛的故事性呈現
 * 色彩系統：奶油色背景 + 粉紅/淡藍強調 + 金黃點綴
 */

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const homeHref =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/mother-fitness-website")
      ? "/mother-fitness-website/"
      : "/";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-section") || "0");
            setVisibleSections((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-section]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (index: number) => visibleSections.has(index);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-100 shadow-sm">
        <div className="container py-6">
          <div className="mb-5 flex justify-center">
            <a href={homeHref} className="rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-xs font-semibold text-pink-600 transition-colors hover:bg-pink-50">
              ← 回到「日日有力」健康專頁
            </a>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 mb-2">
              媽媽的洗衣超能力
            </h1>
            <p className="text-gray-600 text-lg">
              一份獻給所有媽媽的溫暖致敬
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 md:py-20">
        {/* Introduction Section */}
        <section className="mb-20 text-center max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-pink-100">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              洗衣服，看似平凡的家務，卻是媽媽用行動表達愛的方式。
            </p>
            <p className="text-gray-600 text-lg">
              讓我們一起發現媽媽隱藏的四大「超能力」，理解那些被忽視的溫暖。
            </p>
          </div>
        </section>

        {/* Power 1: Pocket Archaeology */}
        <section
          data-section="1"
          className={`mb-16 transition-all duration-700 transform ${
            isVisible(1)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
                <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
                  超能力一
                </h2>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  口袋考古學家
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  每次洗衣前，都是一場驚心動魄的「挖寶」儀式。衛生紙屑、硬幣、小石頭、玩具……媽媽總能從口袋裡挖出一個個驚喜。
                </p>
                <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-400">
                  <p className="text-gray-700 italic">
                    💡 <strong>幽默真相：</strong>媽媽的口袋考古術，比任何考古學家都更有耐心和愛心。
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485894322/YCnKPEEDLvZNQZ4qqw2jpq/power1-pocket-archaeology-hutKNp6mzCXyTN7YwSyAT6.webp"
                alt="媽媽在洗衣籃裡發現各種口袋寶藏"
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </section>

        {/* Power 2: Weather Prediction */}
        <section
          data-section="2"
          className={`mb-16 transition-all duration-700 transform ${
            isVisible(2)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485894322/YCnKPEEDLvZNQZ4qqw2jpq/power2-weather-prediction-kwefRxmtc5Bi4W2hJu7eYs.webp"
                alt="媽媽的天氣預測能力比氣象局還準"
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
                  超能力二
                </h2>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  氣象預測大師
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  比氣象局還準！媽媽只需看一眼天空，就能預測 10 分鐘後的暴雨。「收衣服啦！」的警報永遠比天氣預報快一步。
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="text-gray-700 italic">
                    💡 <strong>正能量視角：</strong>媽媽的「雨感」，是多年照顧家人的直覺，是無形的守護。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Power 3: Sunshine Alchemy */}
        <section
          data-section="3"
          className={`mb-16 transition-all duration-700 transform ${
            isVisible(3)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">
                  超能力三
                </h2>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  陽光煉金術師
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  那不是塵蟎的味道，是愛的味道。紫外線照射下，棉纖維產生醛類分子，形成獨特的「陽光香氣」。媽媽用太陽把愛烤進了衣服裡。
                </p>
                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                  <p className="text-gray-700 italic">
                    💡 <strong>科學與情感的結合：</strong>每一縷陽光香氣，都是媽媽對家人健康的祝福。
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485894322/YCnKPEEDLvZNQZ4qqw2jpq/power3-sunshine-alchemy-frp3vMo3bcT5hx3zXyKPMy.webp"
                alt="衣服在陽光下閃閃發光，散發出香氣"
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </section>

        {/* Power 4: Invisible Armor */}
        <section
          data-section="4"
          className={`mb-16 transition-all duration-700 transform ${
            isVisible(4)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485894322/YCnKPEEDLvZNQZ4qqw2jpq/power4-invisible-armor-oUVwN9N6KVFSSzQ4QCaJfz.webp"
                alt="穿上媽媽洗過的衣服，就穿上了隱形的盔甲"
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100">
                <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4">
                  超能力四
                </h2>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  隱形盔甲守護者
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  每一件平整的衣服，都是媽媽的心意。當你穿上她洗過的衣服，就穿上了一件隱形的盔甲——那是媽媽對你的守護。
                </p>
                <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-400">
                  <p className="text-gray-700 italic">
                    💡 <strong>最深的愛：</strong>洗衣服不只是家務，是媽媽用行動說「我愛你」。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Message */}
        <section
          data-section="5"
          className={`mt-20 transition-all duration-700 transform ${
            isVisible(5)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-12 md:p-16 shadow-xl border border-pink-200">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                致所有的媽媽
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                你們的洗衣服，不只是家務，更是一場場無聲的愛的儀式。每一次摺疊，每一次曬曬，都在訴說著「我在乎你」。
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                感謝你們用行動守護著家人，感謝你們把平凡的日常變成了充滿愛的故事。
              </p>
              <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg">
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                  你們是家裡最溫暖的存在 ♥
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-50 to-blue-50 border-t border-pink-100 py-12 mt-20">
        <div className="container text-center">
          <p className="text-gray-600 mb-2">
            製作於 2026 年 5 月 | 獻給所有偉大的媽媽
          </p>
          <p className="text-sm text-gray-500">
            ✨ 洗衣服是愛，摺衣服是心意，曬衣服是守護 ✨
          </p>
        </div>
      </footer>
    </div>
  );
}
