import type { Product } from "@/types/product";

const ceramicWool: Product = {
  slug: "ceramic-wool",
  name: "陶瓷棉",
  nameEn: "Ceramic Wool",
  category: "隔熱絕緣材",
  shortDescription:
    "高密度岩礦棉隔熱材，耐高溫、防火性能優異，適用於船舶機艙及高溫管路包覆。",
  shortDescriptionEn:
    "High-density ceramic wool insulation with excellent heat and fire resistance — ideal for engine rooms and high-temperature pipe lagging.",
  description:
    "欣展代理之船用岩（礦）棉由天然玄武岩或礦渣熔融紡絲製成，具有卓越的耐高溫與防火性能，通過 IMO FTP Code A 級認證。相較玻璃棉，岩礦棉耐溫更高、吸音效果更佳，特別適用於機艙隔熱、高溫管路包覆及防火隔間填充等嚴苛環境。",
  descriptionEn:
    "TNO's marine ceramic wool is spun from natural basalt or mineral-slag fibers, delivering outstanding heat and fire resistance certified to IMO FTP Code Class A. Compared to glass wool, it handles higher temperatures and offers superior sound absorption — making it especially suited to engine-room insulation, high-temperature pipe lagging, and fire-rated partition infill in demanding marine environments.",
  images: [
    "/images/products/insulation/ceramic-wool/ceramic-wool01.webp",
    "/images/products/insulation/ceramic-wool/ceramic-wool02.webp",
  ],
  specs: [
    { label: "材料", value: "天然玄武岩 / 礦渣纖維" },
    { label: "導熱係數", value: "≤ 0.040 W/(m·K)" },
    { label: "防火等級", value: "IMO FTP Code A 級認證" },
    { label: "密度範圍", value: "40 ~ 150 kg/m³（依規格）" },
    { label: "適用溫度", value: "最高 750°C" },
    { label: "認證", value: "ABS、ClassNK、DNV、BV" },
  ],
  specsEn: [
    { label: "Material", value: "Natural basalt / Mineral-slag fibers" },
    { label: "Thermal Conductivity", value: "≤ 0.040 W/(m·K)" },
    { label: "Fire Class", value: "IMO FTP Code Class A certified" },
    { label: "Density Range", value: "40 ~ 150 kg/m³ (by specification)" },
    { label: "Service Temperature", value: "Up to 750°C" },
    { label: "Certifications", value: "ABS, ClassNK, DNV, BV" },
  ],
  features: [
    "耐高溫，最高可承受 750°C",
    "優異的防火與隔熱性能",
    "良好的隔音吸噪效果",
    "防潮防腐，耐久性佳",
    "通過 IMO FTP Code 國際防火認證",
  ],
  featuresEn: [
    "High-temperature resistance up to 750°C",
    "Excellent fire resistance and thermal insulation",
    "Strong sound absorption and noise damping",
    "Moisture- and corrosion-resistant with long-term durability",
    "Certified to the IMO FTP Code international fire safety standard",
  ],
  applications: ["機艙隔熱", "高溫管路包覆", "鍋爐與排氣管隔熱", "防火隔間填充"],
  applicationsEn: [
    "Engine-room insulation",
    "High-temperature pipe lagging",
    "Boiler and exhaust-pipe insulation",
    "Fire-rated partition infill",
  ],
  publishedAt: "2024-01-01",
  isPublished: true,
};

export default ceramicWool;
