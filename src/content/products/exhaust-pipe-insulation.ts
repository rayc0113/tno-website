import type { Product } from "@/types/product";

/**
 * 海軍艤裝工程（L 系列）— L-排煙管改裝工程及保溫材包覆工程
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，公司名只在最後一句出現，與材料類（岩棉等）同一個登記。
 * 刻意不寫管徑、保溫材厚度、材質牌號、艦名、單位與完工年份。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * 注意 shortDescription 的實際用途：產品列表卡片只顯示圖／分類／名稱
 * （見 ProductGrid.tsx），這句話不會出現在頁面上，而是作為詳情頁的
 * SEO description 與分享預覽的 OG description。故寫法以「一句講完、
 * 關鍵詞完整」為準，不需文采。
 */
const exhaustPipeInsulation: Product = {
  slug: "exhaust-pipe-insulation",
  name: "排煙管改裝、保溫材包覆",
  nameEn: "Exhaust Pipe Retrofit & Insulation Cladding",
  category: "海軍艤裝工程",
  shortDescription: "艦艇排煙管段的更換與改裝，含保溫材包覆及外覆金屬護皮",
  shortDescriptionEn:
    "Replacement and retrofit of naval exhaust pipe sections, including insulation and metal cladding",
  description:
    "排煙管為機艙高溫廢氣的排放通道，管壁溫度高且鄰近人員活動範圍與電纜設備，須以保溫材包覆並外覆金屬護皮，以降低表面溫度、防止燙傷並保護周邊設施。管段長期承受高溫與腐蝕，達使用年限後須進行更換。\n\n" +
    "施工範圍涵蓋既有管段拆除、新管段製作、現場銲接組立，以及保溫材包覆與護皮收邊。保溫材種類、厚度與護皮材質須依管徑、表面溫度與艦上規範選定；欣展可依專案條件提出施工方案，歡迎來電洽詢。",
  descriptionEn:
    "Exhaust pipes carry high-temperature gases out of the engine room. Their surfaces run hot and sit close to crew working areas, cabling, and equipment, so they are wrapped with insulation and finished with metal cladding to bring the surface temperature down, prevent burns, and protect nearby installations. The pipe sections themselves are subject to prolonged heat and corrosion and require replacement at the end of their service life.\n\n" +
    "The scope of work covers removal of existing sections, fabrication of replacements, on-site welding and assembly, and the insulation and cladding that follow. Insulation type, thickness, and cladding material are selected according to pipe diameter, surface temperature, and the applicable shipboard requirements. TNO can propose a method statement for your project — please contact us.",
  coverImage: "/images/products/naval-outfitting/exhaust-pipe-insulation-cover.webp",
  images: [
    "/images/products/naval-outfitting/exhaust-pipe-insulation-cover.webp",
    "/images/products/naval-outfitting/exhaust-pipe-insulation-1.webp",
    "/images/products/naval-outfitting/exhaust-pipe-insulation-2.webp",
    "/images/products/naval-outfitting/exhaust-pipe-insulation-3.webp",
    "/images/products/naval-outfitting/exhaust-pipe-insulation-4.webp",
  ],
  specs: [],
  features: [
    "保溫層外覆金屬護皮，兼顧隔熱效果與長期耐候",
    "管段以法蘭分段，可單段拆換而不動整條管路",
    "拆除、製管、銲接、包覆與收邊屬同一施工範圍",
  ],
  featuresEn: [
    "Insulation finished with metal cladding, for both thermal performance and long-term durability",
    "Flanged sections allow a single length to be replaced without disturbing the whole run",
    "Removal, fabrication, welding, insulation, and finishing fall within one scope of work",
  ],
  applications: [
    "艦艇排煙管的更換與改裝",
    "機艙高溫管路的保溫包覆",
    "既有保溫層老化後的翻修",
  ],
  applicationsEn: [
    "Replacement and retrofit of naval exhaust pipework",
    "Insulation of hot pipework in engine rooms",
    "Refurbishment of aged insulation",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default exhaustPipeInsulation;
