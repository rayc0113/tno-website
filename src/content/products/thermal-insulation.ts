import type { Product } from "@/types/product";

const thermalInsulation: Product = {
  slug: "thermal-insulation",
  name: "岩（礦）棉",
  nameEn: "Rock / Mineral Wool",
  category: "隔熱絕緣材",
  shortDescription: "高密度岩礦棉隔熱材，耐高溫、防火性能優異，適用於船舶機艙及高溫管路包覆。",
  shortDescriptionEn: "High-density rock wool insulation with superior heat and fire resistance for engine rooms and high-temp piping",
  description:
    "欣展代理之船用岩（礦）棉由天然玄武岩或礦渣熔融紡絲製成，具有卓越的耐高溫與防火性能，通過 IMO FTP Code A 級認證。相較玻璃棉，岩礦棉耐溫更高、吸音效果更佳，特別適用於機艙隔熱、高溫管路包覆及防火隔間填充等嚴苛環境。",
  descriptionEn:
    "TNO's marine rock (mineral) wool is spun from melted natural basalt or slag, delivering outstanding heat and fire resistance certified to IMO FTP Code Class A. Compared to glass wool, rock wool handles higher temperatures and offers better sound absorption — making it ideal for engine-room insulation, high-temperature pipe lagging, and fire-rated partition infill in demanding marine environments.",
  images: [
    "/images/products/insulation/rock-wool/rock-wool01.webp",
    "/images/products/insulation/rock-wool/rock-wool02.webp",
    "/images/products/insulation/rock-wool/rock-wool03.webp",
  ],
  specs: [
    { label: "材料種類", value: "岩棉 / 玻璃棉 / PU泡棉 / 複合板" },
    { label: "導熱係數", value: "≤ 0.040 W/(m·K)" },
    { label: "防火等級", value: "IMO FTP Code A 級認證" },
    { label: "密度", value: "32 ~ 120 kg/m³（依規格）" },
    { label: "認證", value: "ABS、ClassNK、MED" },
  ],
  specsEn: [
    { label: "Material Types", value: "Rock wool / Glass wool / PU foam / Composite panels" },
    { label: "Thermal Conductivity", value: "≤ 0.040 W/(m·K)" },
    { label: "Fire Class", value: "IMO FTP Code Class A certified" },
    { label: "Density", value: "32 ~ 120 kg/m³ (by specification)" },
    { label: "Certifications", value: "ABS, ClassNK, MED" },
  ],
  features: [
    "優異的隔熱降溫效果",
    "良好的隔音吸噪特性",
    "輕量化，不增加船體重量",
    "防潮防腐，耐久性佳",
    "施工便利，可裁切成型",
  ],
  featuresEn: [
    "Outstanding thermal insulation and heat reduction",
    "Strong acoustic absorption and noise damping",
    "Lightweight — no added hull weight",
    "Moisture- and corrosion-resistant with long-term durability",
    "Easy to install and cut to shape on site",
  ],
  applications: ["船艙壁板與天花板", "機艙隔熱", "管路與設備包覆", "甲板隔熱"],
  applicationsEn: [
    "Cabin wall panels and ceilings",
    "Engine-room insulation",
    "Pipe and equipment lagging",
    "Deck insulation",
  ],
  publishedAt: "2024-01-15",
  isPublished: true,
};

export default thermalInsulation;
