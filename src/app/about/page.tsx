import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "關於我們",
  description:
    "欣展有限公司，專注船舶裝修領域逾 10 年，以材料代理、設計規劃、施工整合為核心，通過 ABS、ClassNK 等多項國際認證。",
  alternates: { canonical: "/about" },
};

const certifications = ["ABS", "ClassNK", "BV", "RINA", "Lloyd's Register", "DNV", "IMO", "MED"];

const milestones = [
  { year: "2010", event: "欣展有限公司成立，專注於船舶塗裝材料代理" },
  { year: "2013", event: "取得 ABS、ClassNK 認可供應商資格" },
  { year: "2016", event: "擴展業務至船艙內裝設計施工，成為一站式服務商" },
  { year: "2019", event: "首次承接離岸風電平台防腐塗裝工程" },
  { year: "2022", event: "累計服務超過 200 艘船舶，服務範圍拓展至東南亞" },
  { year: "2024", event: "持續深耕技術研發，推動環保低 VOC 塗料普及" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-28 bg-[#0A1520] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/about/hero-bg.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-white transition-colors">首頁</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">關於我們</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">關於欣展</h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            從海洋到日常生活，欽展與同行。
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">我們的故事</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  欣展有限公司成立於 2010 年，由一群對海洋產業充滿熱情的專業人士共同創辦。
                  我們深知船舶裝修的複雜性，因此從創立之初便致力於整合材料、設計、施工三大核心能力，
                  為船東提供真正的一站式解決方案。
                </p>
                <p>
                  十餘年來，欣展服務超過 200 艘各型船舶，工程類型涵蓋散裝船、貨輪、遊艇、
                  客輪及離岸工程平台。每一個專案，我們都以船東的最大利益為出發點，
                  追求品質、效率與安全的完美平衡。
                </p>
                <p>
                  面對瞬息萬變的海洋產業，欣展持續投入技術研發與人才培訓，
                  並積極引進國際最新環保材料，以永續發展的態度迎接未來的挑戰。
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-white/5">
              <Image
                src="/images/about/team.jpg"
                alt="欣展團隊"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#0A1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">國際認證</h2>
          <p className="text-white/60 text-center mb-12 max-w-xl mx-auto">
            欣展取得多項國際船級社認可，確保每項工程符合最高品質標準。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-white/5 border border-white/10 rounded-lg p-6 text-center"
              >
                <span className="text-xl font-bold text-[#4DA3D4]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">發展里程碑</h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="flex gap-8">
                  <div className="w-12 text-right text-[#4DA3D4] font-bold text-sm flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="relative flex-1 pl-6">
                    <div className="absolute left-0 top-1.5 w-2 h-2 bg-[#4DA3D4] rounded-full -translate-x-1" />
                    <p className="text-white/70 text-sm leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1520] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">與我們攜手合作</h2>
          <p className="text-white/60 mb-8">讓欣展成為您最可靠的船舶裝修夥伴。</p>
          <Link
            href="/contact"
            className="bg-[#1E6FBA] hover:bg-[#1a5f9e] text-white font-medium px-10 py-3 rounded inline-block transition-colors duration-200"
          >
            聯絡我們
          </Link>
        </div>
      </section>
    </>
  );
}
