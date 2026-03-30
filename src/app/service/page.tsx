import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "服務項目",
  description:
    "欣展提供材料供應、產品製造、設計規劃、各式代工等全方位船舶裝修服務。整合設計、製造與加工能力，為您的專案提供一站式解決方案。",
  alternates: { canonical: "/service" },
};

const services = [
  {
    id: "material",
    category: "代理銷售",
    title: "材料供應 • 快速補給",
    description:
      "我們代理多種進口建材與原料，如隔熱材、PU 發泡板、工程用木材等，為您的專案提供穩定、高效的物料支援，避免因材料短缺延誤工期。",
    cta: { label: "立即洽詢", href: "/contact" },
    image: "/images/service/services_img1.png",
    imageAlt: "材料供應",
    imageRight: true,
  },
  {
    id: "manufacturing",
    category: "產品製造",
    title: "高品質生產 • 嚴格把關",
    description:
      "在自有工廠中生產金屬隔間板、不鏽鋼廚具、艤裝設備等，每道工序皆經過嚴格檢驗與控制，從材料到成品，皆符合國際認證標準。",
    cta: { label: "了解更多", href: "/product" },
    image: "/images/service/services_img2.png",
    imageAlt: "產品製造",
    imageRight: false,
  },
  {
    id: "design",
    category: "設計規劃",
    title: "打造專屬方案 • 精準表達構想",
    description:
      "我們為您量身設計 2D / 3D 規劃圖，從需求分析到空間佈局，確保每個細節契合實際運作。無論是船艙隔間還是不鏽鋼設備，皆能精準對接您的專案需求。",
    cta: { label: "立即洽詢", href: "/contact" },
    image: "/images/service/services_img3.png",
    imageAlt: "設計規劃",
    imageRight: true,
  },
  {
    id: "processing",
    category: "各式代工",
    title: "靈活加工 • 多元應用",
    description:
      "提供 CNC 車銑床、折床、燒焊、龍門銑等多樣金屬加工服務，支援船舶、工業與建築專案的二次加工需求，滿足多樣化設計與功能規格。",
    cta: { label: "立即洽詢", href: "/contact" },
    image: "/images/service/services_img4.png",
    imageAlt: "各式代工",
    imageRight: false,
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[800px] overflow-hidden">
        <Image
          src="/images/service/hero.jpg"
          alt="欣展服務項目"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-[60px] h-full flex flex-col justify-center">
          <h1 className="text-[60px] font-extrabold leading-[75px] text-white mb-4 max-w-[771px]">
            我們的服務
          </h1>
          <p className="text-white text-[20px] leading-[30px] max-w-[722px]">
            每一個專案背後，都是安全與信任的承諾。<br />
            欣展從設計到製造，提供全方位的一站式服務。
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1400px] mx-auto px-[60px] text-center">
          <h2 className="text-[40px] font-bold leading-[1.4] mb-6 text-title">
            我們的核心服務，<br />
            為每個專案提供最全面的支持。
          </h2>
          <p className="text-body text-[20px] leading-[1.8] max-w-[714px] mx-auto">
            結合設計、製造與加工能力，搭配物料代理與供應鏈優勢，<br />
            為您的專案從初期規劃一路到交付提供完整解決方案。
          </p>
        </div>
      </section>

      {/* Service Items */}
      <section className="bg-white pt-4 pb-40">
        <div className="max-w-[1400px] mx-auto px-[60px] space-y-40">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex items-stretch min-h-[430px] gap-10 ${service.imageRight ? "" : "flex-row-reverse"}`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col justify-center py-[40px]">
                <p className="text-brand-deep text-[20px] font-bold mb-4">
                  {service.category}
                </p>
                <h3 className="text-[40px] font-bold leading-tight mb-6 text-title">
                  {service.title}
                </h3>
                <p className="text-body text-[20px] leading-[1.8] mb-8 max-w-[497px]">
                  {service.description}
                </p>
                <div>
                  <Button href={service.cta.href} variant="primary">
                    {service.cta.label}
                  </Button>
                </div>
              </div>
              {/* Image */}
              <div className="w-[700px] flex-shrink-0 relative rounded-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px] bg-gradient-to-br from-brand-deep to-brand-light text-center">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <h2 className="text-[40px] font-bold mb-[40px] text-white">
            讓我們一起啟動您的專案
          </h2>
          <div className="flex items-center justify-center gap-4">
            <Button href="/contact" variant="white">立即聯繫我們</Button>
            <Button href="/case" variant="outline">查看案例</Button>
          </div>
        </div>
      </section>
    </>
  );
}
