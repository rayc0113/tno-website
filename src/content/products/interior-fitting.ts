import type { Product } from "@/types/product";

const interiorFitting: Product = {
  slug: "interior-fitting",
  name: "船艙內裝套件",
  category: "內裝",
  shortDescription: "專業船艙內裝整合解決方案，從設計到施工一站式服務，打造舒適的海上空間。",
  description:
    "我們提供全套船艙內裝服務，包括隔間系統、傢具定製、燈光設計及各類飾材安裝。嚴格遵循 SOLAS 防火安全規範，材料通過 IMO FTP Code 認證，在安全與美觀之間取得完美平衡。",
  coverImage: "/images/products/interior-fitting-cover.jpg",
  images: [
    "/images/products/interior-fitting-1.jpg",
    "/images/products/interior-fitting-2.jpg",
  ],
  specs: [
    { label: "防火等級", value: "IMO FTP Code A-60 / B-15" },
    { label: "隔音效果", value: "≥ 40 dB" },
    { label: "材料來源", value: "歐洲、日本認證材料" },
    { label: "施工方式", value: "乾式工法 / 濕式工法" },
    { label: "認證", value: "ABS、RINA、ClassNK" },
  ],
  features: [
    "符合 SOLAS 防火規範",
    "優良隔音降振效果",
    "模組化設計易於安裝",
    "客製化尺寸與外觀",
    "一站式設計施工服務",
  ],
  applications: ["客輪船艙", "遊艇內裝", "郵輪公共區域", "海工平台生活區"],
  publishedAt: "2024-02-01",
  isPublished: true,
};

export default interiorFitting;
