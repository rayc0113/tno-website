import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-測桿預製及安裝工程
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，公司名只在最後一句出現，與材料類（岩棉等）同一個登記。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * ⚠️ 這是六支客製化工程裡最沒把握的一支，已列為問窗口的第一順位。
 *    「測桿」照字面是量測用的桿件，但照片上是一個相當大的鋼製基座
 *    （帶弧形凹槽、肋板補強、螺栓接合面）加一根細長鋼樑，無法判斷它
 *    實際量測什麼、如何使用。
 *
 *    因此文案刻意迴避功能，整段只講「結構與工序」——桿件細長、基座以
 *    肋板補強、預製階段控制接合面尺寸、現場吊掛就位。這樣不會寫錯，
 *    但也是六支裡資訊量最薄的一支，讀起來像通用鋼構件。
 *
 *    窗口說明用途後，本支應整段重寫，補上功能與使用情境。
 */
const soundingRod: Product = {
  slug: "sounding-rod",
  name: "測桿預製與安裝",
  nameEn: "Sounding Rod Prefabrication & Installation",
  category: "客製化工程",
  shortDescription: "測桿與基座的廠內預製及現場安裝",
  shortDescriptionEn: "Workshop prefabrication and on-site installation of sounding rods and their bases",
  description:
    "本項為桿件與其基座的製作與安裝。桿件細長，基座以肋板補強並固定於甲板結構，安裝精度直接影響桿件的垂直度與後續使用。桿件與基座的接合面在預製階段即須控制尺寸，才能在現場順利就位。\n\n" +
    "施工範圍涵蓋桿件與基座的廠內預製、運送至現場，以及吊掛就位與固定。尺寸、基座形式與固定方式須依甲板結構與使用需求設計；欣展可依專案條件提出製作與安裝方案，歡迎來電洽詢。",
  descriptionEn:
    "This work covers the fabrication and installation of a rod and its base. The rod is slender, and the base is stiffened with gussets and fixed to the deck structure, so installation accuracy directly affects how true the rod stands and how well it performs in service. The mating faces between rod and base are dimensioned under workshop control so that the assembly seats correctly on site.\n\n" +
    "The scope of work covers workshop prefabrication of the rod and base, delivery to site, and lifting into position and fixing. Dimensions, base design, and the method of fixing are determined by the deck structure and how the assembly will be used. TNO can propose a fabrication and installation approach for your project — please contact us.",
  coverImage: "/images/products/custom-engineering/sounding-rod-cover.webp",
  images: [
    "/images/products/custom-engineering/sounding-rod-cover.webp",
    "/images/products/custom-engineering/sounding-rod-1.webp",
  ],
  specs: [],
  features: [
    "桿件與基座於廠內預製，縮短現場作業時間",
    "基座以肋板補強，貼合甲板既有結構",
    "接合面於預製階段控制尺寸，減少現場調整",
  ],
  featuresEn: [
    "Rod and base prefabricated in the workshop, shortening time spent working on site",
    "Base stiffened with gussets and matched to the existing deck structure",
    "Mating faces dimensioned under workshop control, reducing adjustment on site",
  ],
  applications: [
    "船上桿件與基座的新製安裝",
    "既有基座的補強與汰換",
    "甲板結構件的預製與現場吊裝",
  ],
  applicationsEn: [
    "New rods and bases installed onboard",
    "Reinforcement and replacement of existing bases",
    "Prefabrication and on-site lifting of deck structural items",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default soundingRod;
