import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-燈塔座
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，全段不出現公司名（2026-09-07 依珈汶要求移除原本的「欣展可依…
 * 歡迎來電洽詢」收句——每支都掛同一句像罐頭文字），只針對功能與工序描述。
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
  shortDescription: "燈具塔架與基座的製作安裝，配置爬梯與安全護籠——燈要架得夠高才看得見，塔就得扛得住那個高度的風",
  shortDescriptionEn:
    "Fabrication and installation of light towers and their bases, with access ladder and safety cage — a light has to stand high to be seen, and the tower has to take the wind that comes with the height",
  description:
    "燈要有用，就得架得夠高——燈具與號誌設備必須位在不受遮蔽的位置才看得見。但架得越高，塔身承受的風壓與航行振動就越大，而且維護人員還得爬上去。柱身的斜撐配置與甲板固定方式決定整體穩定性，爬梯則須配置安全護籠。\n\n" +
    "施工範圍涵蓋塔架柱身與斜撐製作、設備安裝座配置、爬梯與安全護籠組立，以及甲板固定與防蝕處理。高度、安裝座數量與固定方式依設備規格與甲板結構設計。塔架平常不會有人多看一眼，直到有人得在搖晃的甲板上爬到它頂端。",
  descriptionEn:
    "A light is only any use if it stands high enough — lights and signalling equipment have to sit clear of obstruction to be seen at all. But the higher they go, the more wind load and vibration the tower beneath them has to carry, and somebody still has to climb it to maintain them. The arrangement of the bracing and the method of fixing to the deck govern how stable the whole thing stands, and the access ladder requires a safety cage.\n\n" +
    "The scope of work covers fabrication of the tower column and bracing, provision of equipment mounting brackets, assembly of the access ladder and safety cage, and fixing to the deck with corrosion protection. Height, the number of mounting positions and the method of fixing follow from the equipment specification and the deck structure. Nobody gives a light tower a second look — until somebody has to climb to the top of it on a moving deck.",
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
