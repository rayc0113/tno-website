import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "服務項目",
  description:
    "欣展提供船舶防腐塗裝、甲板鋪面工程、船艙內裝設計、材料代理等全方位船舶裝修服務。專業施工團隊，通過國際認證。",
  alternates: { canonical: "/service" },
};

const services = [
  {
    id: "coating",
    title: "防腐塗裝工程",
    description:
      "採用國際頂級防腐塗料，從表面處理（噴砂除銹）到多道塗層施工，嚴格依照船級社規範作業，確保塗裝系統發揮最佳防護效果，延長船體使用年限。",
    details: ["噴砂除銹（Sa2.5 / Sa3 等級）", "防腐底漆施工", "壓載艙重防腐系統", "船底防污塗料", "上構塗裝系統"],
    image: "/images/service/coating.jpg",
  },
  {
    id: "deck",
    title: "甲板鋪面工程",
    description:
      "提供多種材質甲板鋪面解決方案，包括 PVC 防滑鋪面、柚木甲板、複合材料甲板等，兼顧防滑安全性與美觀需求，符合 IMO 相關法規。",
    details: ["PVC 防滑甲板", "柚木甲板安裝", "複合材料甲板", "防火甲板敷料", "甲板更換與修繕"],
    image: "/images/service/deck.jpg",
  },
  {
    id: "interior",
    title: "船艙內裝工程",
    description:
      "從隔間系統、天花板、壁板到傢具客製，提供完整的船艙內裝整合服務。所有材料通過 IMO FTP Code 防火認證，安全與美觀兼具。",
    details: ["隔間系統安裝", "防火天花板與壁板", "客製化傢具製作", "燈光系統設計", "地板材料安裝"],
    image: "/images/service/interior.jpg",
  },
  {
    id: "material",
    title: "材料代理供應",
    description:
      "代理多個國際知名船舶材料品牌，提供 ABS、ClassNK 等各大船級社認可材料。穩定的供應鏈與完整的技術支援，是您最可靠的材料夥伴。",
    details: ["防腐塗料代理", "甲板材料供應", "隔熱吸音材料", "防火建材", "船用五金配件"],
    image: "/images/service/material.jpg",
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-[#0A1520] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-white transition-colors">首頁</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">服務項目</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">服務項目</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            整合材料、設計、施工三大核心能力，提供船舶裝修全方位解決方案。
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative h-72 lg:h-96 rounded-lg overflow-hidden bg-white/5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-white/70 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-white/80 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#4DA3D4] rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1520] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">需要客製化服務方案？</h2>
          <p className="text-white/60 mb-8">請聯繫我們的專業顧問，我們將為您量身規劃最適合的解決方案。</p>
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
