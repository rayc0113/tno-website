import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-開艙案
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，公司名只在最後一句出現，與材料類（岩棉等）同一個登記。
 * 刻意不寫開口尺寸、板厚、設備型號與船名。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * 依現場照片撰寫：夜間甲板切割出方形開口（周邊設加強框）、大型設備由
 * 船上吊車吊過開口、封板鋼板已銲上加強肋後吊起、甲板封板現場銲接復原。
 */
const hatchOpening: Product = {
  slug: "hatch-opening",
  name: "開艙工程",
  nameEn: "Deck Opening & Closing",
  category: "客製化工程",
  shortDescription: "甲板臨時開口的切割與復原，供大型設備吊運進出",
  shortDescriptionEn:
    "Cutting and restoring temporary deck openings so large equipment can be lifted in and out",
  description:
    "機艙內的大型設備更換時，既有通道往往不足以讓設備進出，需在甲板上開設臨時開口。開口會切斷甲板的連續性，因此復原時的封板厚度、加強肋配置與銲接品質，必須讓甲板恢復原有的強度與水密。\n\n" +
    "施工範圍涵蓋開口位置的放樣與切割、設備吊運進出的配合、封板與加強肋製作，以及銲接復原與表面處理。開口尺寸與補強方式須依設備外型與甲板結構設計；欣展可依現場條件提出施工方案，歡迎來電洽詢。",
  descriptionEn:
    "When large equipment in the engine room has to be replaced, the existing accesses are often too small for it to pass through, so a temporary opening is cut in the deck. Cutting the opening interrupts the continuity of the deck, so on closing up, the thickness of the insert plate, the arrangement of stiffeners, and the quality of the welding all have to bring the deck back to its original strength and watertightness.\n\n" +
    "The scope of work covers marking out and cutting the opening, supporting the lifting operation as equipment passes through, fabrication of the insert plate and stiffeners, and welding up and surface treatment afterwards. Opening size and the method of reinforcement are designed around the equipment's dimensions and the deck structure. TNO can propose a method statement for your project — please contact us.",
  coverImage: "/images/products/custom-engineering/hatch-opening-cover.webp",
  images: [
    "/images/products/custom-engineering/hatch-opening-cover.webp",
    "/images/products/custom-engineering/hatch-opening-1.webp",
    "/images/products/custom-engineering/hatch-opening-2.webp",
    "/images/products/custom-engineering/hatch-opening-3.webp",
    "/images/products/custom-engineering/hatch-opening-4.webp",
    "/images/products/custom-engineering/hatch-opening-5.webp",
  ],
  specs: [],
  features: [
    "開口位置依甲板結構放樣，避開主要結構構件",
    "封板附加強肋，銲接後恢復甲板強度與水密",
    "配合船上吊車與船期安排施作",
  ],
  featuresEn: [
    "Opening marked out from the deck structure so that primary members are avoided",
    "Insert plate with stiffeners, welded up to restore deck strength and watertightness",
    "Carried out in step with the ship's crane and its schedule",
  ],
  applications: [
    "機艙大型設備的更換吊運",
    "甲板臨時開口的切割與復原",
    "既有開口的補強",
  ],
  applicationsEn: [
    "Lifting large engine-room equipment in and out for replacement",
    "Cutting and closing temporary deck openings",
    "Reinforcement of existing openings",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default hatchOpening;
