import type { Product } from "@/types/product";

const stainlessKitchen: Product = {
  slug: "stainless-kitchen",
  name: "各式不鏽鋼廚具",
  nameEn: "Stainless Steel Galley Equipment",
  category: "不鏽鋼廚具",
  shortDescription: "專為船舶使用打造的客製化廚具",
  shortDescriptionEn: "Custom-built galley equipment designed for marine use",
  description:
    "欣展不鏽鋼廚具系列採用 316L 海洋級不鏽鋼製造，具備優異的耐鹽腐蝕性能，專為船艙廚房量身設計。提供從料理台、烤箱、爐具到儲物系統的完整廚具解決方案，可依船型尺寸客製化，並符合 SOLAS 防火安全規範。",
  descriptionEn:
    "TNO's stainless galley line is built from 316L marine-grade stainless steel, offering outstanding resistance to salt-air corrosion in every cabin kitchen. From prep counters and ovens to cooking ranges and storage systems, we deliver a complete turnkey galley solution — fully customizable to vessel dimensions and compliant with SOLAS fire-safety regulations.",
  images: [
    "/images/products/stainless-kitchen/stainless-kitchen/stainless-kitchen01.webp",
  ],
  specs: [
    { label: "材質", value: "316L 海洋級不鏽鋼" },
    { label: "表面處理", value: "髮絲紋 / 鏡面拋光" },
    { label: "防火認證", value: "符合 SOLAS 規範" },
    { label: "客製化", value: "依船型尺寸量身設計" },
    { label: "認證", value: "ABS、ClassNK、BV" },
  ],
  specsEn: [
    { label: "Material", value: "316L marine-grade stainless steel" },
    { label: "Surface Finish", value: "Hairline / Mirror polish" },
    { label: "Fire Compliance", value: "SOLAS compliant" },
    { label: "Customization", value: "Tailored to vessel dimensions" },
    { label: "Certifications", value: "ABS, ClassNK, BV" },
  ],
  features: [
    "316L 海洋級不鏽鋼，耐鹽腐蝕",
    "完全客製化尺寸與配置",
    "符合 SOLAS 防火安全規範",
    "易清潔，衛生維護方便",
    "一站式廚房系統整合",
  ],
  featuresEn: [
    "316L marine-grade stainless steel — resistant to salt-air corrosion",
    "Fully custom dimensions and configurations",
    "SOLAS fire-safety compliant",
    "Easy to clean and hygienic to maintain",
    "Turnkey galley system integration",
  ],
  applications: ["商業貨輪廚房", "客輪餐廚設備", "遊艇廚具", "軍艦船廚系統"],
  applicationsEn: [
    "Commercial cargo vessel galleys",
    "Passenger ship catering equipment",
    "Yacht galley fit-out",
    "Naval vessel galley systems",
  ],
  publishedAt: "2024-02-01",
  isPublished: true,
};

export default stainlessKitchen;
