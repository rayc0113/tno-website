import type { Product } from "@/types/product";

/**
 * 海軍艤裝工程（L 系列）— L-排煙管改裝工程及保溫材包覆工程
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，全段不出現公司名（2026-09-07 依珈汶要求移除原本的「欣展可依…
 * 歡迎來電洽詢」收句——每支都掛同一句像罐頭文字），只針對功能與工序描述。
 * 刻意不寫管徑、保溫材厚度、材質牌號、艦名、單位與完工年份。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * 注意 shortDescription 的實際用途：產品列表卡片只顯示圖／分類／名稱
 * （見 ProductGrid.tsx），這句話不會出現在頁面上，而是作為詳情頁的
 * SEO description 與分享預覽的 OG description。故寫法以「一句講完、
 * 關鍵詞完整」為準，不需文采。
 *
 * 2026-09-08 依 TNO 窗口 Lucy 指示調整照片順序：原第 3 張（師傅組立大型
 * 保溫管件、甲板散置法蘭盤那張）改為封面兼第一張。作法是輪動實體檔名
 * （原 -2 → -cover、原 -cover → -1、原 -1 → -2），維持「封面照命名為
 * -cover.webp」的規範，因此下方 images 陣列不需改動。
 */
const exhaustPipeInsulation: Product = {
  slug: "exhaust-pipe-insulation",
  name: "排煙管改裝、保溫材包覆",
  nameEn: "Exhaust Pipe Retrofit & Insulation Cladding",
  category: "海軍艤裝工程",
  shortDescription: "艦艇排煙管段的更換與改裝，連同保溫材包覆與外覆金屬護皮——這條管子旁邊就是人、電纜與設備",
  shortDescriptionEn:
    "Replacement and retrofit of naval exhaust pipe sections, with insulation and metal cladding — what runs alongside this pipe is people, cabling and equipment",
  description:
    "排煙管最麻煩的地方，是它很燙，而且旁邊什麼都有。它是機艙高溫廢氣的排放通道，管壁溫度高，而走線的電纜、周邊設備與人員活動範圍往往就在幾十公分之外——所以必須以保溫材包覆、外覆金屬護皮，把表面溫度降到不會燙傷人的範圍，同時保護周邊設施。管段本身長期承受高溫與腐蝕，達使用年限後須整段更換。\n\n" +
    "施工範圍涵蓋既有管段拆除、新管段製作、現場銲接組立，以及保溫材包覆與護皮收邊。保溫材種類、厚度與護皮材質依管徑、表面溫度與艦上規範選定。包覆做得好不好，平常沒有人會注意；做得不好，碰到的人會先知道。",
  descriptionEn:
    "The awkward thing about an exhaust pipe is that it is very hot, and that everything else is right beside it. It carries high-temperature gas out of the engine room, so its wall runs hot — while cable runs, equipment and the spaces where people work are often only a foot or two away. Hence the insulation and the metal cladding over it, bringing the surface temperature down to where it will not burn anyone and shielding what surrounds it. The pipe sections themselves live with that heat and with corrosion, and at the end of their service life the run is replaced.\n\n" +
    "The scope of work covers removal of existing sections, fabrication of replacements, on-site welding and assembly, and the insulation and cladding that follow. Insulation type, thickness and cladding material are selected according to pipe diameter, surface temperature and the applicable naval requirements. Lagging done well goes unnoticed; lagging done badly is noticed first by whoever touches it.",
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
