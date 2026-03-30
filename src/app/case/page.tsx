import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getCaseSummaries, getAllCaseCategories } from "@/content/cases";

export const metadata: Metadata = {
  title: "成功案例",
  description:
    "欣展豐富的船舶裝修工程實績，涵蓋散裝船翻新、遊艇內裝、離岸平台塗裝等多元類型案例。",
  alternates: { canonical: "/case" },
};

export default function CaseListPage() {
  const cases = getCaseSummaries();
  const categories = getAllCaseCategories();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[560px] overflow-hidden bg-black">
        <Image
          src="/images/home/hero.jpg"
          alt="TNO 欣展實績案例"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-[60px] h-full flex flex-col justify-center">
          <h1 className="text-[60px] font-extrabold leading-[75px] text-white mb-4 max-w-[771px]">
            實績案例
          </h1>
          <p className="text-white text-[20px] leading-[30px] max-w-[722px]">
            每一個案例都代表著我們對品質的承諾，<br />
            見證欣展與客戶共同創造的成果。
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-white/10 bg-[#0A1520] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 py-4 overflow-x-auto text-sm">
            <span className="text-white font-medium whitespace-nowrap cursor-pointer">全部</span>
            {categories.map((category) => (
              <span
                key={category}
                className="text-white/50 hover:text-white whitespace-nowrap cursor-pointer transition-colors duration-200"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem) => (
              <Link
                key={caseItem.slug}
                href={`/case/${caseItem.slug}`}
                className="group block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#4DA3D4]/40 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="relative h-56 bg-white/5">
                  <Image
                    src={caseItem.coverImage}
                    alt={caseItem.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#0D1B2A]/80 text-[#4DA3D4] text-xs px-2 py-1 rounded">
                      {caseItem.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-semibold text-lg mb-2 group-hover:text-[#4DA3D4] transition-colors duration-200">
                    {caseItem.title}
                  </h2>
                  <p className="text-white/60 text-sm line-clamp-2 mb-3">{caseItem.shortDescription}</p>
                  <div className="flex items-center justify-between text-xs text-white/40">
                    <span>{caseItem.client}</span>
                    <span>{caseItem.completedAt.substring(0, 7)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
