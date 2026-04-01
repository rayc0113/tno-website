import type { Product } from "@/types/product";

const deckFittings: Product = {
  slug: "deck-fittings",
  name: "造船用甲板上艤品",
  category: "造船用甲板上艤品、錨座配件",
  shortDescription: "完整的甲板上艤品系列，符合國際規範，確保甲板作業安全",
  description:
    "欣展提供各式造船用甲板上艤品，包括繫纜桩、導纜器、甲板艙蓋、通風筒、救生艇架等標準及客製化配件。所有產品均依照 IACS、IMO 規範設計，採用高強度鋼材製造，通過主要船級社認證，確保甲板作業安全與可靠性。",
  coverImage: "/images/home/product_bg1.webp",
  images: [
    "/images/products/deck-fittings-1.jpg",
    "/images/products/deck-fittings-2.jpg",
  ],
  specs: [
    { label: "材質", value: "高強度碳鋼 / 316L 不鏽鋼" },
    { label: "表面處理", value: "熱浸鍍鋅 / 環氧塗層" },
    { label: "設計規範", value: "依 IACS、IMO 標準" },
    { label: "適用範圍", value: "各型商業船舶甲板" },
    { label: "認證", value: "ABS、ClassNK、DNV、BV" },
  ],
  features: [
    "符合 IACS 及 IMO 國際規範",
    "高強度材質，耐海洋環境腐蝕",
    "精密鑄造或鍛造，尺寸公差嚴格",
    "通過多項國際船級社認證",
    "提供標準品及客製化配件",
  ],
  applications: ["甲板繫纜設備", "艙蓋系統", "通風設備", "救生設備支架"],
  publishedAt: "2024-03-01",
  isPublished: true,
};

export default deckFittings;
