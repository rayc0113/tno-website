import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-欄杆安裝工程
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，公司名只在最後一句出現，與材料類（岩棉等）同一個登記。
 * 刻意不寫管徑、欄杆高度與立柱間距。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * 依現場照片撰寫：管狀欄杆於現場電銲、立柱與橫管的接合處、格柵板走道、
 * 工人繫全身式安全帶作業。
 */
const handrailInstallation: Product = {
  slug: "handrail-installation",
  name: "船上欄杆安裝",
  nameEn: "Onboard Handrail Installation",
  category: "客製化工程",
  shortDescription: "船上走道與平台防護欄杆的現場製作與安裝",
  shortDescriptionEn:
    "On-site fabrication and installation of guardrails for onboard walkways and platforms",
  description:
    "欄杆是走道與平台的基本防護，須具連續性且與既有結構確實接合。船上結構多有曲面與高低差，欄杆的立柱間距、橫管高度與端部收頭往往無法沿用標準件，須依現場丈量後製作。\n\n" +
    "施工範圍涵蓋現場丈量、管件切割彎製、立柱與橫管的銲接組立，以及銲道與表面的防蝕處理。立柱間距、欄杆高度與固定方式須依走道位置與既有結構決定；欣展可依現場條件提出施工方案，歡迎來電洽詢。",
  descriptionEn:
    "Guardrails are the basic protection on walkways and platforms: they must run continuously and be positively connected to the existing structure. Shipboard structures are full of curves and changes in level, so stanchion spacing, rail heights, and end terminations often cannot be taken from standard parts and are instead made to measurements taken on site.\n\n" +
    "The scope of work covers site measurement, cutting and bending of tube, welding up of stanchions and rails, and corrosion protection of the welds and surfaces. Stanchion spacing, rail height, and the method of fixing are determined by the walkway's location and the existing structure. TNO can propose a method statement for your project — please contact us.",
  coverImage: "/images/products/custom-engineering/handrail-installation-cover.webp",
  images: [
    "/images/products/custom-engineering/handrail-installation-cover.webp",
    "/images/products/custom-engineering/handrail-installation-1.webp",
  ],
  specs: [],
  features: [
    "依現場丈量製作，貼合曲面與高低差",
    "立柱與橫管現場銲接組立，確實固定於既有結構",
    "銲道與表面施作防蝕處理，延長海上環境的使用年限",
  ],
  featuresEn: [
    "Made to site measurements, following curved surfaces and changes in level",
    "Stanchions and rails welded up on site, positively fixed to the existing structure",
    "Welds and surfaces given corrosion protection for a longer life in the marine environment",
  ],
  applications: [
    "走道與平台的防護欄杆新設",
    "既有欄杆的汰換與延伸",
    "開口周邊的防護",
  ],
  applicationsEn: [
    "New guardrails for walkways and platforms",
    "Replacing and extending existing handrails",
    "Protection around openings",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default handrailInstallation;
