import type { Product } from "@/types/product";

const puFoam: Product = {
  slug: "pu-foam",
  name: "PU 聚氨脂隔熱材料",
  category: "PU聚氨脂",
  shortDescription: "高性能 PU 聚氨脂隔熱材，提供優異隔熱效果與防潮性能",
  description:
    "欣展代理高品質 PU 聚氨脂（Polyurethane）隔熱材料，具備優異的導熱係數與防水防潮特性。廣泛應用於船艙冷庫、管路保溫及甲板隔熱，可依需求製作成板材、管殼或現場發泡，符合 IMO FTP Code 防火規範。",
  coverImage: "/images/home/product_bg2.png",
  images: [
    "/images/products/pu-foam-1.jpg",
    "/images/products/pu-foam-2.jpg",
  ],
  specs: [
    { label: "密度", value: "30 ~ 80 kg/m³（依規格）" },
    { label: "導熱係數", value: "≤ 0.022 W/(m·K)" },
    { label: "工作溫度", value: "-196°C ~ +120°C" },
    { label: "防火等級", value: "IMO FTP Code 認證" },
    { label: "認證", value: "ABS、ClassNK、DNV" },
  ],
  features: [
    "極低導熱係數，隔熱效果卓越",
    "閉孔結構，防水防潮性能優異",
    "輕量化，減少船體額外負擔",
    "可現場發泡，適應複雜管路形狀",
    "通過國際船級社防火認證",
  ],
  applications: ["船艙冷藏庫隔熱", "管路與設備保溫", "甲板與艙壁隔熱", "低溫冷媒管路包覆"],
  publishedAt: "2024-03-01",
  isPublished: true,
};

export default puFoam;
