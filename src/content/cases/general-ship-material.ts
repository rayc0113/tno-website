import type { CaseProject } from "@/types/case";

const generalShipMaterial: CaseProject = {
  slug: "general-ship-material",
  title: "一般船舶材料",
  client: "散裝船東聯盟",
  category: "材料供應",
  shortDescription: "國際認證的船舶材料，確保安全耐用與規範合一的內裝品質。",
  description:
    "本案為國內大型船運公司旗下多艘船舶提供完整的內裝建材採購與供應服務。所有材料均通過 ABS、ClassNK 等國際船級社認證，涵蓋隔熱材料、金屬隔間板、防火建材等品項，確保材料品質完全符合 SOLAS 規範，為船舶安全提供最可靠的基礎保障。",
  coverImage: "/images/home/case_bg1.png",
  images: [
    "/images/cases/general-ship-material-1.jpg",
    "/images/cases/general-ship-material-2.jpg",
  ],
  services: ["材料採購規劃", "國際認證材料供應", "品質驗收", "到船交付"],
  completedAt: "2024-05-01",
  location: "高雄港",
  tags: ["材料供應", "防火建材", "國際認證", "船舶安全"],
  publishedAt: "2024-06-01",
  isPublished: true,
};

export default generalShipMaterial;
