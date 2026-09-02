import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-燈塔座
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，公司名只在最後一句出現，與材料類（岩棉等）同一個登記。
 * 刻意不寫塔架高度、管徑、安裝座數量與燈具型號。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * 依現場照片撰寫：船上一座鋼製立柱塔架——大直徑鋼管柱身、附爬梯與安全
 * 護籠、柱身伸出多組 U 形設備安裝座、底部三腳斜撐固定於甲板，背景為
 * 港區海面。案名雖為「燈塔座」，照片顯示是裝設於船上的燈具／設備塔架，
 * 非陸上燈塔，故文案以「燈具塔架」敘述。
 */
const lighthouseBase: Product = {
  slug: "lighthouse-base",
  name: "燈塔座",
  nameEn: "Light Tower Base",
  category: "客製化工程",
  shortDescription: "燈具塔架與基座的製作安裝，含爬梯與安全護籠",
  shortDescriptionEn:
    "Fabrication and installation of light towers and their bases, including access ladder and safety cage",
  description:
    "燈具與號誌設備須架高至不受遮蔽的位置，塔架因此要承受設備自重、風壓與航行振動，並提供維護人員的登高路徑。柱身的斜撐配置與甲板固定方式決定整體穩定性，爬梯則須配置安全護籠。\n\n" +
    "施工範圍涵蓋塔架柱身與斜撐製作、設備安裝座配置、爬梯與安全護籠組立，以及甲板固定與防蝕處理。高度、安裝座數量與固定方式須依設備規格與甲板結構設計；欣展可依專案條件提出製作與安裝方案，歡迎來電洽詢。",
  descriptionEn:
    "Lights and signalling equipment have to sit high enough to be seen without obstruction, so the tower carries the weight of that equipment while standing up to wind load and vibration underway, and at the same time provides a way up for maintenance. The arrangement of the bracing and the method of fixing to the deck govern overall stability, and the access ladder requires a safety cage.\n\n" +
    "The scope of work covers fabrication of the tower column and bracing, provision of equipment mounting brackets, assembly of the access ladder and safety cage, and fixing to the deck with corrosion protection. Height, the number of mounting positions, and the method of fixing are designed around the equipment specification and the deck structure. TNO can propose a fabrication and installation approach for your project — please contact us.",
  coverImage: "/images/products/custom-engineering/lighthouse-base-cover.webp",
  images: [
    "/images/products/custom-engineering/lighthouse-base-cover.webp",
    "/images/products/custom-engineering/lighthouse-base-1.webp",
  ],
  specs: [],
  features: [
    "柱身配置斜撐並固定於甲板結構，抵抗風壓與航行振動",
    "柱身設多組安裝座，可配置不同高度的燈具與設備",
    "爬梯配置安全護籠，提供維護登高路徑",
    "鋼構表面施作防蝕處理",
  ],
  featuresEn: [
    "Braced column fixed to the deck structure, resisting wind load and vibration underway",
    "Multiple mounting brackets on the column for equipment at different heights",
    "Access ladder with safety cage, giving a route up for maintenance",
    "Steelwork given corrosion protection",
  ],
  applications: [
    "船上燈具與號誌設備的塔架",
    "既有塔架的汰換與補強",
    "需登高維護的設備支撐架",
  ],
  applicationsEn: [
    "Towers for onboard lights and signalling equipment",
    "Replacement and reinforcement of existing towers",
    "Support structures for equipment needing access at height",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default lighthouseBase;
