import type { Product } from "@/types/product";

const thermalInsulation: Product = {
  slug: "thermal-insulation",
  name: "隔熱絕緣材料",
  category: "隔熱絕緣材",
  shortDescription: "提供船舶最佳的隔熱與隔音效果",
  description:
    "欣展代理多款國際知名隔熱絕緣材料，包括岩棉、玻璃棉、泡棉及複合隔熱板等，全面通過 IMO FTP Code 防火認證。廣泛應用於船艙壁板、機艙隔熱、管路包覆等場景，有效降低艙內溫度並提升隔音效果。",
  coverImage: "/images/home/product_bg2.png",
  images: [
    "/images/products/thermal-insulation-1.jpg",
    "/images/products/thermal-insulation-2.jpg",
  ],
  specs: [
    { label: "材料種類", value: "岩棉 / 玻璃棉 / PU泡棉 / 複合板" },
    { label: "導熱係數", value: "≤ 0.040 W/(m·K)" },
    { label: "防火等級", value: "IMO FTP Code A 級認證" },
    { label: "密度", value: "32 ~ 120 kg/m³（依規格）" },
    { label: "認證", value: "ABS、ClassNK、MED" },
  ],
  features: [
    "優異的隔熱降溫效果",
    "良好的隔音吸噪特性",
    "輕量化，不增加船體重量",
    "防潮防腐，耐久性佳",
    "施工便利，可裁切成型",
  ],
  applications: ["船艙壁板與天花板", "機艙隔熱", "管路與設備包覆", "甲板隔熱"],
  publishedAt: "2024-01-15",
  isPublished: true,
};

export default thermalInsulation;
