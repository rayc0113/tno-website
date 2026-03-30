import type { Product } from "@/types/product";

const deckCovering: Product = {
  slug: "deck-covering",
  name: "甲板鋪面材料",
  category: "甲板材料",
  shortDescription: "耐磨防滑甲板鋪面，提供舒適安全的步行環境，適用於各式船艦甲板。",
  description:
    "專為海洋環境設計的高性能甲板鋪面材料，具備卓越的耐磨、防滑及抗紫外線特性。多種顏色與紋理可選，兼顧功能與美觀，適用於豪華遊艇到工作船等各種船型。",
  coverImage: "/images/products/deck-covering-cover.jpg",
  images: [
    "/images/products/deck-covering-1.jpg",
    "/images/products/deck-covering-2.jpg",
  ],
  specs: [
    { label: "材質", value: "PVC / 柚木 / 複合材料" },
    { label: "防滑係數", value: "≥ 0.6 (乾濕皆適用)" },
    { label: "耐溫範圍", value: "-20°C ~ +80°C" },
    { label: "厚度", value: "6mm / 8mm / 12mm" },
    { label: "認證", value: "MED、IMO" },
  ],
  features: [
    "優異的防滑安全性",
    "抗紫外線不褪色",
    "易清潔維護",
    "隔熱降噪效果佳",
    "符合 IMO 防火規範",
  ],
  applications: ["客輪甲板", "遊艇甲板", "工作船甲板", "離岸平台"],
  publishedAt: "2024-01-15",
  isPublished: true,
};

export default deckCovering;
