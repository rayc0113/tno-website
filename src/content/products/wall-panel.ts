import type { Product } from "@/types/product";

const wallPanel: Product = {
  slug: "wall-panel",
  name: "Wall Panel - 壁板系統",
  nameEn: "Wall Panel System",
  category: "金屬隔間板",
  shortDescription:
    "專為高安全需求空間打造的金屬隔間系統，結合防火、隔音與高強度結構設計，適用於船舶與各類室內空間。",
  shortDescriptionEn:
    "A metal partition system built for high-safety environments, combining fire resistance, acoustic insulation, and high-strength structural design for marine and interior spaces.",
  description:
    "專為高安全需求空間打造的金屬隔間系統，結合防火、隔音與高強度結構設計，適用於船舶與各類室內空間，提供穩定、安全且高品質的空間分隔解決方案。",
  descriptionEn:
    "A metal partition system engineered for high-safety environments, integrating fire resistance, sound insulation, and a high-strength structural design for marine vessels and indoor spaces — delivering a stable, safe, and premium-quality space-division solution.",
  images: [
    "/images/products/metal-panel/wall-panel/wall-panel01.webp",
    "/images/products/metal-panel/wall-panel/wall-panel02.webp",
    "/images/products/metal-panel/wall-panel/wall-panel03.webp",
    "/images/products/metal-panel/wall-panel/wall-panel04.webp",
  ],
  specs: [
    { label: "型號", value: "TNO-W5001 / TNO-W5002 / TNO-W2501" },
    { label: "厚度", value: "50mm / 25mm" },
    { label: "防火等級", value: "B-15 / B-0" },
    { label: "隔音係數", value: "42dB / 32dB" },
    { label: "重量", value: "16.3 ～ 21.0 kg/m²" },
  ],
  systemDescription:
    "金屬隔間板系統由面板、內襯材料與金屬軌道組成，透過模組化設計形成穩定且高強度的空間分隔結構。\n\n標準寬度為 590mm，最大長度可達 3000mm，可依空間需求彈性規劃配置，適用於不同類型的隔間應用。\n\n表面可選彩紋鋼板、烤漆鋼板或美耐板，內襯採用高密度礦纖板，在結構強度、防火性能與隔音效果之間取得最佳平衡。",
  systemDescriptionEn:
    "The metal partition system consists of surface panels, a core lining, and metal tracks — a modular design that forms a stable, high-strength space-division structure.\n\nStandard width is 590mm with a maximum length of up to 3000mm, allowing flexible layout for a wide range of partition applications.\n\nSurface options include patterned steel, baked-enamel steel, or melamine; the core uses high-density mineral fiber board, striking an optimal balance between structural strength, fire performance, and acoustic insulation.",
  features: [
    "高強度結構設計，具備優異耐衝擊與耐用性能",
    "通過防火與隔音測試，提升空間安全與舒適度",
    "模組化系統設計，施工快速並支援多功能整合",
    "多種表面材質與花色選擇，兼顧美觀與實用性",
  ],
  featuresEn: [
    "High-strength structural design delivering excellent impact resistance and durability",
    "Certified against fire and acoustic standards, enhancing safety and comfort",
    "Modular system for rapid installation and multi-function integration",
    "Wide range of surface finishes and patterns — both aesthetic and practical",
  ],
  applications: [
    "船舶住艙與公共空間",
    "商業船舶內裝工程",
    "多功能隔間空間規劃",
    "室內輕隔間系統應用",
  ],
  applicationsEn: [
    "Ship cabins and public spaces",
    "Commercial vessel interior fit-out",
    "Multi-purpose partition space planning",
    "Indoor lightweight partition systems",
  ],
  specRows: [
    {
      typeImage: "/images/products/metal-panel/wall-panel/TNO-W5001.webp",
      model: "TNO-W5001",
      thickness: "50mm",
      fireClass: "B-15",
      soundReduction: "42dB",
      weight: "20.3 kg/m²",
    },
    {
      typeImage: "/images/products/metal-panel/wall-panel/TNO-W5002.webp",
      model: "TNO-W5002",
      thickness: "50mm",
      fireClass: "B-15",
      soundReduction: "42dB",
      weight: "21.0 kg/m²",
    },
    {
      typeImage: "/images/products/metal-panel/wall-panel/TNO-W2501.webp",
      model: "TNO-W2501",
      thickness: "25mm",
      fireClass: "B-0",
      soundReduction: "32dB",
      weight: "16.3 kg/m²",
    },
  ],
  publishedAt: "2024-01-01",
  isPublished: true,
};

export default wallPanel;
