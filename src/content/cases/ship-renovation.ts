import type { CaseProject } from "@/types/case";

const shipRenovation: CaseProject = {
  slug: "ship-renovation",
  title: "船舶改裝與維修",
  client: "YY 海運有限公司",
  category: "船舶改裝",
  shortDescription: "從內裝翻新到零件更換，以專業工序延長船舶壽命並提升運行效能。",
  description:
    "本案針對一艘服役 15 年的多功能作業船進行全面改裝維修工程，包括機艙隔熱材料更換、甲板防腐塗裝、船員區域內裝全面翻新，以及多項設備換裝作業。整體工程在基隆港執行，依照船東需求分階段完成，成功延長船舶使用年限並取得最新 SOLAS 認證。",
  coverImage: "/images/home/case_bg3.png",
  images: [
    "/images/cases/ship-renovation-1.jpg",
    "/images/cases/ship-renovation-2.jpg",
  ],
  services: ["機艙隔熱材料更換", "甲板防腐塗裝", "內裝全面翻新", "設備換裝", "SOLAS認證更新"],
  completedAt: "2023-11-30",
  location: "基隆港",
  tags: ["船舶改裝", "維修翻新", "壽命延長", "SOLAS"],
  publishedAt: "2023-12-15",
  isPublished: true,
};

export default shipRenovation;
