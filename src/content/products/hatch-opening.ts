import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-開艙案
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，全段不出現公司名（2026-09-07 依珈汶要求移除原本的「欣展可依…
 * 歡迎來電洽詢」收句——每支都掛同一句像罐頭文字），只針對功能與工序描述。
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
  shortDescription: "甲板臨時開口的切割與復原，供大型設備吊運進出——開口是手段，把甲板補回原有的強度才是工程",
  shortDescriptionEn:
    "Temporary deck openings cut and made good so large equipment can be lifted in and out — cutting it is the means; bringing the deck back to strength is the work",
  description:
    "要把機艙裡的大型設備換掉，往往得先在甲板上切一個洞——既有通道進不去，設備就只能從上面吊進吊出。問題是甲板本身是連續的受力結構，切開的那一刻它就不再連續。所以真正的工程不在切，在補：封板厚度、加強肋配置與銲接品質，必須讓甲板恢復原有的強度與水密。\n\n" +
    "施工範圍涵蓋開口位置的放樣與切割、設備吊運進出的配合、封板與加強肋製作，以及銲接復原與表面處理。開口尺寸與補強方式依設備外型與甲板結構設計。一個處理得好的臨時開口，完工之後應該看不出它曾經存在。",
  descriptionEn:
    "Replacing a large item of machinery in the engine room usually begins with cutting a hole in the deck — the existing accesses will not take it, so it has to come out from above. The difficulty is that a deck is itself a continuous load-bearing structure, and the moment it is cut it stops being continuous. The work is therefore less about the cutting than the making good: insert-plate thickness, the arrangement of stiffeners and the quality of the welding all have to bring the deck back to its original strength and watertightness.\n\n" +
    "The scope of work covers marking out and cutting the opening, supporting the lifting operation as equipment passes through, fabrication of the insert plate and stiffeners, and welding up and surface treatment afterwards. Opening size and the method of reinforcement follow from the equipment's dimensions and the deck structure. A temporary opening properly done is one that, afterwards, gives no sign it was ever there.",
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
