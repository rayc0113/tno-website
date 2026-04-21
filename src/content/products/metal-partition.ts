import type { Product } from "@/types/product";

const metalPartition: Product = {
  slug: "metal-partition",
  name: "金屬隔間板",
  nameEn: "Metal Partition Panels",
  category: "金屬隔間板",
  shortDescription: "通過認證的防火隔間板，專為船舶內裝設計",
  shortDescriptionEn: "Certified fire-rated partition panels designed for marine interiors",
  description:
    "欣展金屬隔間板採用高強度鋼板與防火核材複合製成，通過 IMO FTP Code A 級防火認證，適用於船員艙房、走廊、機艙等各類隔間需求。模組化設計可快速安裝，有效縮短塢期，降低施工成本。",
  descriptionEn:
    "TNO's metal partition panels pair high-strength steel facings with a fire-rated core, certified to IMO FTP Code Class A. They suit every type of onboard partition — crew quarters, corridors, engine-room separation, and more. The modular design enables rapid installation, shortening dry-dock time and reducing overall construction costs.",
  coverImage: "/images/home/product_bg1.webp",
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
  specsEn: [
    { label: "Material", value: "Galvanized steel / Fire-rated core" },
    { label: "Fire Class", value: "A-60 / A-30 / A-0 / B-15" },
    { label: "Thickness", value: "50mm / 75mm / 100mm" },
    { label: "Surface Finish", value: "Baked enamel / Stainless steel / Wood-grain laminate" },
    { label: "Certifications", value: "ABS, ClassNK, BV, RINA" },
  ],
  features: [
    "通過 IMO FTP Code 防火認證",
    "優良隔音效果（≥40 dB）",
    "模組化設計，安裝快速",
    "多種飾面選擇，美觀實用",
    "可客製化尺寸",
  ],
  featuresEn: [
    "Certified to the IMO FTP Code for fire safety",
    "Excellent acoustic performance (≥40 dB)",
    "Modular design for rapid installation",
    "Wide selection of surface finishes — refined and practical",
    "Custom sizing available",
  ],
  applications: ["船員艙房隔間", "走廊隔間", "公共區域隔間", "機艙防火隔間"],
  applicationsEn: [
    "Crew cabin partitions",
    "Corridor partitions",
    "Public area partitions",
    "Engine-room fire partitions",
  ],
  publishedAt: "2024-01-01",
  isPublished: false,
};

export default metalPartition;
