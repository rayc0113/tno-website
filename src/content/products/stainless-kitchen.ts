import type { Product } from "@/types/product";

const stainlessKitchen: Product = {
  slug: "stainless-kitchen",
  name: "不鏽鋼廚具",
  category: "不鏽鋼廚具",
  shortDescription: "專為船舶使用打造的客製化廚具",
  description:
    "欣展不鏽鋼廚具系列採用 316L 海洋級不鏽鋼製造，具備優異的耐鹽腐蝕性能，專為船艙廚房量身設計。提供從料理台、烤箱、爐具到儲物系統的完整廚具解決方案，可依船型尺寸客製化，並符合 SOLAS 防火安全規範。",
  coverImage: "/images/home/product_bg3.png",
  images: [
    "/images/products/stainless-kitchen-1.jpg",
    "/images/products/stainless-kitchen-2.jpg",
  ],
  specs: [
    { label: "材質", value: "316L 海洋級不鏽鋼" },
    { label: "表面處理", value: "髮絲紋 / 鏡面拋光" },
    { label: "防火認證", value: "符合 SOLAS 規範" },
    { label: "客製化", value: "依船型尺寸量身設計" },
    { label: "認證", value: "ABS、ClassNK、BV" },
  ],
  features: [
    "316L 海洋級不鏽鋼，耐鹽腐蝕",
    "完全客製化尺寸與配置",
    "符合 SOLAS 防火安全規範",
    "易清潔，衛生維護方便",
    "一站式廚房系統整合",
  ],
  applications: ["商業貨輪廚房", "客輪餐廚設備", "遊艇廚具", "軍艦船廚系統"],
  publishedAt: "2024-02-01",
  isPublished: true,
};

export default stainlessKitchen;
