import type { CaseProject } from "@/types/case";

const vesselRenovation2024: CaseProject = {
  slug: "vessel-renovation-2024",
  title: "大型散裝船全船翻新工程",
  client: "XX 航運股份有限公司",
  category: "船體翻新",
  shortDescription: "針對一艘 20 年船齡的 75,000 DWT 散裝船進行全面翻新，包含船體防腐處理、甲板更換及船艙內裝升級。",
  description:
    "本案為一艘服役逾 20 年的巴拿馬型散裝船提供全面翻新服務。工程範圍涵蓋船體外板噴砂防腐、主甲板鋪面更換、壓載艙塗裝、機艙設備隔熱材料更換，以及船員生活區內裝翻新。整體工程在高雄港 12 天內完工，成功延長船舶使用壽命 10 年以上。",
  coverImage: "/images/cases/vessel-renovation-2024-cover.jpg",
  images: [
    "/images/cases/vessel-renovation-2024-1.jpg",
    "/images/cases/vessel-renovation-2024-2.jpg",
    "/images/cases/vessel-renovation-2024-3.jpg",
  ],
  services: ["船體防腐塗裝", "甲板鋪面更換", "船艙內裝翻新", "隔熱材料施工"],
  completedAt: "2024-03-15",
  location: "高雄港",
  tags: ["散裝船", "船體翻新", "防腐塗裝", "甲板工程"],
  publishedAt: "2024-04-01",
  isPublished: true,
};

export default vesselRenovation2024;
