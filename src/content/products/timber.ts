import type { Product } from "@/types/product";

const timber: Product = {
  slug: "timber",
  name: "原木木料",
  nameEn: "Marine Timber",
  category: "木材",
  shortDescription: "精選海洋級船用木材，耐潮防腐，適用於甲板鋪設與內裝裝潢",
  shortDescriptionEn:
    "Select marine-grade timber — moisture- and decay-resistant, ideal for deck planking and cabin interiors.",
  description:
    "欣展提供多種船用木材，包括柚木、橡木及合成木地板，具備優異的耐海水、耐鹽霧及防腐處理，專為船舶甲板鋪設與艙室內裝設計。所有木材均符合國際防火標準，提供美觀與耐用兼具的船用木材解決方案。",
  descriptionEn:
    "TNO offers a range of marine-grade timber including teak, oak, and engineered composite flooring — all treated for saltwater, salt-spray, and decay resistance, and purpose-built for vessel decks and cabin interiors. Every product meets international fire-safety standards, delivering a marine timber solution that balances timeless aesthetics with long-term durability.",
  images: [
    "/images/products/wood/wood-material/wood-material01.webp",
  ],
  specs: [
    { label: "材質", value: "柚木 / 橡木 / 合成木地板" },
    { label: "厚度", value: "10 ~ 50mm（依規格）" },
    { label: "表面處理", value: "防腐浸泡處理 / 防滑塗層" },
    { label: "防火等級", value: "符合 SOLAS 規範" },
    { label: "認證", value: "ABS、ClassNK、BV" },
  ],
  specsEn: [
    { label: "Material", value: "Teak / Oak / Engineered composite flooring" },
    { label: "Thickness", value: "10 ~ 50mm (by specification)" },
    { label: "Surface Treatment", value: "Decay-resistant impregnation / Anti-slip coating" },
    { label: "Fire Compliance", value: "SOLAS compliant" },
    { label: "Certifications", value: "ABS, ClassNK, BV" },
  ],
  features: [
    "海洋級防腐處理，耐鹽霧與潮濕",
    "優異的抗滑性能，保障甲板安全",
    "美觀天然紋理，提升船艙品味",
    "符合 SOLAS 防火安全規範",
    "客製化裁切，配合船型安裝需求",
  ],
  featuresEn: [
    "Marine-grade decay treatment — resists salt spray and humidity",
    "Excellent slip resistance for safer decks",
    "Natural grain and finish that elevates cabin aesthetics",
    "SOLAS fire-safety compliant",
    "Custom cutting to suit each vessel's installation requirements",
  ],
  applications: ["甲板鋪設", "艙室地板裝潢", "船艙壁板裝飾", "遊艇內裝"],
  applicationsEn: [
    "Deck planking",
    "Cabin flooring finishes",
    "Cabin wall-panel accents",
    "Yacht interior fit-out",
  ],
  publishedAt: "2024-03-01",
  isPublished: true,
};

export default timber;
