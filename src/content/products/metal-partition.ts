import type { Product } from "@/types/product";

const metalPartition: Product = {
  slug: "metal-partition",
  name: "金屬隔間板",
  category: "內裝材料",
  shortDescription: "通過認證的防火隔間板，專為船舶內裝設計，兼顧安全性與空間靈活性。",
  description:
    "欣展金屬隔間板採用高強度鋼板與防火核材複合製成，通過 IMO FTP Code A 級防火認證，適用於船員艙房、走廊、機艙等各類隔間需求。模組化設計可快速安裝，有效縮短塢期，降低施工成本。",
  coverImage: "/images/home/product_bg1.png",
  images: [
    "/images/products/metal-partition-1.jpg",
    "/images/products/metal-partition-2.jpg",
  ],
  specs: [
    { label: "材質", value: "鍍鋅鋼板 / 防火核材" },
    { label: "防火等級", value: "A-60 / A-30 / A-0 / B-15" },
    { label: "厚度", value: "50mm / 75mm / 100mm" },
    { label: "表面處理", value: "烤漆 / 不鏽鋼飾面 / 木紋覆膜" },
    { label: "認證", value: "ABS、ClassNK、BV、RINA" },
  ],
  features: [
    "通過 IMO FTP Code 防火認證",
    "優良隔音效果（≥40 dB）",
    "模組化設計，安裝快速",
    "多種飾面選擇，美觀實用",
    "可客製化尺寸",
  ],
  applications: ["船員艙房隔間", "走廊隔間", "公共區域隔間", "機艙防火隔間"],
  publishedAt: "2024-01-01",
  isPublished: true,
};

export default metalPartition;
