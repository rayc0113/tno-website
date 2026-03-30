import type { CaseProject } from "@/types/case";

const commercialVesselInterior: CaseProject = {
  slug: "commercial-vessel-interior",
  title: "商業貨輪內裝",
  client: "XX 航運股份有限公司",
  category: "船艙內裝",
  shortDescription: "完整的船員起居與操作空間解決方案，打造舒適與高效的工作環境。",
  description:
    "本案為一艘 5 萬 DWT 商業散裝貨輪提供全艙內裝翻新工程，涵蓋船員宿舍、餐廳、操控室及走廊等區域。工程重點在於提升船員生活舒適度同時符合最新 SOLAS 安全規範，並在高雄港 14 天內完成施工，將對航運排班的影響降至最低。",
  coverImage: "/images/home/case_bg2.png",
  images: [
    "/images/cases/commercial-vessel-interior-1.jpg",
    "/images/cases/commercial-vessel-interior-2.jpg",
    "/images/cases/commercial-vessel-interior-3.jpg",
  ],
  services: ["隔間系統安裝", "船員艙房翻新", "防火天花板施工", "地板材料更換", "燈光系統升級"],
  completedAt: "2024-03-15",
  location: "高雄港",
  tags: ["商業貨輪", "船艙內裝", "船員宿舍", "SOLAS認證"],
  publishedAt: "2024-04-01",
  isPublished: true,
};

export default commercialVesselInterior;
