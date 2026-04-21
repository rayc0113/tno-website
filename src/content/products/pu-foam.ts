import type { Product } from "@/types/product";

const puFoam: Product = {
  slug: "pu-foam",
  name: "PU板、PU發泡劑、聚氨酯發泡劑",
  nameEn: "PU Panels, Spray Foam & Polyurethane Insulation",
  category: "PU聚氨脂",
  shortDescription: "高性能 PU 聚氨脂隔熱材，提供優異隔熱效果與防潮性能",
  shortDescriptionEn:
    "High-performance polyurethane insulation delivering exceptional thermal efficiency and moisture resistance.",
  description:
    "欣展代理高品質 PU 聚氨脂（Polyurethane）隔熱材料，具備優異的導熱係數與防水防潮特性。廣泛應用於船艙冷庫、管路保溫及甲板隔熱，可依需求製作成板材、管殼或現場發泡，符合 IMO FTP Code 防火規範。",
  descriptionEn:
    "TNO supplies premium polyurethane (PU) insulation with an excellent thermal conductivity rating and strong waterproof, moisture-resistant properties. Widely used for cold-storage holds, pipe lagging, and deck insulation, it can be supplied as rigid panels, pre-formed pipe shells, or sprayed on-site — all compliant with IMO FTP Code fire regulations.",
  images: [
    "/images/products/pu-foam/pu-foam/pu-foam01.webp",
  ],
  specs: [
    { label: "密度", value: "30 ~ 80 kg/m³（依規格）" },
    { label: "導熱係數", value: "≤ 0.022 W/(m·K)" },
    { label: "工作溫度", value: "-196°C ~ +120°C" },
    { label: "防火等級", value: "IMO FTP Code 認證" },
    { label: "認證", value: "ABS、ClassNK、DNV" },
  ],
  specsEn: [
    { label: "Density", value: "30 ~ 80 kg/m³ (by specification)" },
    { label: "Thermal Conductivity", value: "≤ 0.022 W/(m·K)" },
    { label: "Service Temperature", value: "-196°C ~ +120°C" },
    { label: "Fire Class", value: "IMO FTP Code certified" },
    { label: "Certifications", value: "ABS, ClassNK, DNV" },
  ],
  features: [
    "極低導熱係數，隔熱效果卓越",
    "閉孔結構，防水防潮性能優異",
    "輕量化，減少船體額外負擔",
    "可現場發泡，適應複雜管路形狀",
    "通過國際船級社防火認證",
  ],
  featuresEn: [
    "Ultra-low thermal conductivity for outstanding insulation performance",
    "Closed-cell structure with excellent waterproof and moisture resistance",
    "Lightweight — reduces added hull load",
    "Spray-applied on site to conform to complex pipe geometries",
    "Certified by international classification societies for fire safety",
  ],
  applications: ["船艙冷藏庫隔熱", "管路與設備保溫", "甲板與艙壁隔熱", "低溫冷媒管路包覆"],
  applicationsEn: [
    "Cold-storage hold insulation",
    "Pipe and equipment lagging",
    "Deck and bulkhead insulation",
    "Low-temperature refrigerant pipe lagging",
  ],
  publishedAt: "2024-03-01",
  isPublished: true,
};

export default puFoam;
