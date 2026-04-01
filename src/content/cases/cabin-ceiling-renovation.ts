import type { CaseProject } from "@/types/case";

const cabinCeilingRenovation: CaseProject = {
  slug: "cabin-ceiling-renovation",
  title: "船舶天花板翻新工程",
  client: "B 公司",
  category: "船艙內裝",
  shortDescription: "更換老化天花板隔熱板材，同步升級防火等級，延長船舶使用年限。",
  description:
    "本案針對一艘服役逾十年的貨輪進行天花板系統全面翻新，更換老化的隔熱板材，並導入符合最新 SOLAS 規範的防火建材，有效提升艙室隔熱性能與安全等級。",
  coverImage: "/images/cases/basic/ship-ceiling-panel-renovation.webp",
  images: [
    "/images/cases/basic/ship-ceiling-panel-renovation.webp",
  ],
  services: ["天花板板材拆除", "隔熱材料更換", "防火建材安裝", "品質驗收"],
  completedAt: "2024-02-01",
  location: "高雄港",
  tags: ["天花板翻新", "防火建材", "隔熱", "SOLAS"],
  publishedAt: "2024-03-01",
  isPublished: true,
};

export default cabinCeilingRenovation;
