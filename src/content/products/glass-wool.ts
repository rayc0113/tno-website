import type { Product } from "@/types/product";

const glassWool: Product = {
  slug: "glass-wool",
  name: "玻璃棉",
  category: "隔熱材料",
  shortDescription:
    "通過國際船級社認證的船用玻璃棉，優異的隔熱與隔音性能，廣泛應用於船艙壁板與管路包覆。",
  description:
    "欣展代理之船用玻璃棉採用高品質無機玻璃纖維製成，具有優異的熱絕緣性能與良好的隔音吸噪特性。通過 IMO FTP Code 防火認證，符合多國船級社要求，廣泛應用於船員艙房、走廊壁板、天花板及管路設備包覆，有效降低艙內溫度並提升居住舒適度。輕量化特性不增加船體負擔，施工便利可依現場尺寸裁切成型。",
  coverImage: "/images/products/glass-wool.png",
  images: [
    "/images/products/glass-wool/glass-wool01.png",
    "/images/products/glass-wool/glass-wool02.png",
    "/images/products/glass-wool/glass-wool03.png",
    "/images/products/glass-wool/glass-wool04.png",
    "/images/products/glass-wool/glass-wool05.png",
    "/images/products/glass-wool/glass-wool06.png",
    "/images/products/glass-wool/glass-wool07.png",
  ],
  specs: [
    { label: "材料", value: "無機玻璃纖維" },
    { label: "導熱係數", value: "≤ 0.036 W/(m·K)" },
    { label: "防火等級", value: "IMO FTP Code A 級認證" },
    { label: "密度範圍", value: "16 ~ 64 kg/m³（依規格）" },
    { label: "適用溫度", value: "-20°C ~ 350°C" },
    { label: "認證", value: "ABS、ClassNK、BV、RINA" },
  ],
  features: [
    "優異的熱絕緣效果，有效降低艙內溫度",
    "良好的隔音吸噪特性，提升居住舒適度",
    "輕量化設計，不增加船體重量",
    "防潮防腐，使用壽命長",
    "通過 IMO FTP Code 國際防火認證",
    "施工便利，可裁切成型依現場安裝",
  ],
  applications: [
    "船員艙房壁板與天花板",
    "走廊隔熱",
    "機艙隔熱",
    "管路與設備包覆",
    "甲板隔熱",
  ],
  publishedAt: "2024-01-01",
  isPublished: true,
};

export default glassWool;
