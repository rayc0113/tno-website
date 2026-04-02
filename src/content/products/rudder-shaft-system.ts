import type { Product } from "@/types/product";

const rudderShaftSystem: Product = {
  slug: "rudder-shaft-system",
  name: "舵軸、舵鑄件、舵葉、軸架、舵架鑄件",
  category: "造船用舵軸系統",
  shortDescription: "高精度船用舵軸系統，確保船舶操控穩定性與安全性",
  description:
    "欣展提供完整的船用舵軸系統，包括舵軸、舵托、舵機支架及相關緊固配件。採用高強度合金鋼製造，通過 ABS、ClassNK 等主要船級社認證，確保在各種海況下的操舵穩定性與可靠性，適用於各類型商業船舶與特種船。",
  images: [
    "/images/products/rudder-system/rudder-system/rudder-system01.webp",
  ],
  specs: [
    { label: "材質", value: "高強度合金鋼 / 不鏽鋼" },
    { label: "表面處理", value: "鍍鉻 / 防腐塗層" },
    { label: "適用船型", value: "商業貨輪、散裝船、特種船" },
    { label: "加工精度", value: "依 ISO 標準公差" },
    { label: "認證", value: "ABS、ClassNK、DNV、BV" },
  ],
  features: [
    "高強度合金鋼，承載能力優異",
    "精密加工，確保操舵靈活穩定",
    "通過多項國際船級社認證",
    "耐腐蝕塗層，適應惡劣海洋環境",
    "可依船型規格客製化設計",
  ],
  applications: ["商業貨輪舵系統", "散裝船操舵設備", "特種船舵機配套", "船舶改裝維修"],
  publishedAt: "2024-03-01",
  isPublished: true,
};

export default rudderShaftSystem;
