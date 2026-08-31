import type { Product } from "@/types/product";

/**
 * 陶瓷棉
 *
 * 內容基準（2026-08-31 修訂）：
 * 舊官網的產品文案已無法取得（Wayback 只存到首頁／關於我們／聯絡我們，
 * 產品頁未被存檔），原本的敘述與規格為早期架構階段的暫時性內容，
 * 其中含有未經查證的數字與逐產品船級社宣稱，已全部移除。
 *
 * 現行文字為「材料層級的通用正確敘述」——只陳述這類材料本身成立的事實，
 * 不宣稱本公司特定批次的規格、密度、耐溫值或個別船級社認證。
 * 規格表（specs）刻意留空，詳情頁會自動隱藏整個區塊。
 *
 * 待欣展提供材料商型錄／技術資料表（TDS）／船級社證書後，
 * 再補回 specs 與更精確的敘述。
 */
const ceramicWool: Product = {
  slug: "ceramic-wool",
  name: "陶瓷棉",
  nameEn: "Ceramic Fiber",
  category: "隔熱絕緣材",
  shortDescription: "氧化鋁矽系耐火纖維，適用溫度遠高於礦棉與玻璃棉",
  shortDescriptionEn: "Alumino-silicate refractory fiber with a far higher service temperature than mineral or glass wool",
  description:
    "陶瓷棉（陶瓷纖維）以氧化鋁與二氧化矽為主要成分，經高溫熔融後成纖製成，屬耐火纖維材料，適用溫度遠高於玻璃棉與岩（礦）棉。其熱容量低、升降溫反應快，並具良好的抗熱震特性，常用於排煙管、鍋爐與燃燒設備等高溫部位的包覆與襯裡。\n\n" +
    "實際可用溫度、密度與供應型態（毯狀、板狀、繩狀）須依部位條件與供應規格選定。欣展可依專案需求提供對應規格與相關證明文件，歡迎來電洽詢。",
  descriptionEn:
    "Ceramic fiber is composed primarily of alumina and silica, melted at high temperature and formed into fibers. As a refractory fiber, its service temperature is far higher than that of glass wool or rock wool. It has low heat storage, responds quickly to temperature change, and offers good thermal-shock resistance — properties that suit the lagging and lining of high-temperature areas such as exhaust uptakes, boilers, and combustion equipment.\n\n" +
    "Service temperature, density, and supply form (blanket, board, or rope) must be selected according to the conditions at each location and the available specifications. TNO can supply matching specifications and supporting documentation on a project basis — please contact us.",
  images: [
    "/images/products/insulation/ceramic-wool/ceramic-wool01.webp",
    "/images/products/insulation/ceramic-wool/ceramic-wool02.webp",
  ],
  // 規格待欣展提供 TDS／證書後再補；空陣列時詳情頁不顯示規格表
  specs: [],
  features: [
    "氧化鋁矽系耐火纖維，適用溫度遠高於礦棉與玻璃棉",
    "熱容量低，升降溫反應快",
    "抗熱震性佳，適合溫度變化劇烈的部位",
    "可依需求提供毯狀、板狀或繩狀",
  ],
  featuresEn: [
    "Alumino-silicate refractory fiber rated far above mineral or glass wool",
    "Low heat storage with rapid response to temperature change",
    "Good thermal-shock resistance for areas with sharp temperature swings",
    "Available as blanket, board, or rope as required",
  ],
  applications: [
    "排煙管與煙囪包覆",
    "鍋爐與燃燒設備襯裡",
    "高溫管路與接頭保溫",
  ],
  applicationsEn: [
    "Exhaust uptake and funnel lagging",
    "Boiler and combustion equipment lining",
    "High-temperature pipe and joint insulation",
  ],
  publishedAt: "2024-01-25",
  isPublished: true,
};

export default ceramicWool;
