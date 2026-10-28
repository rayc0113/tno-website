import type { Product } from "@/types/product";

/**
 * 岩（礦）棉
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
const thermalInsulation: Product = {
  slug: "thermal-insulation",
  name: "岩（礦）棉",
  nameEn: "Rock (Mineral) Wool",
  category: "隔熱絕緣材",
  shortDescription: "由天然礦石熔融紡絲製成的不燃性礦物纖維，適用於機艙與高溫管路",
  shortDescriptionEn: "Non-combustible mineral fiber spun from molten rock — for engine rooms and hot pipework",
  description:
    "岩（礦）棉以天然玄武岩、輝綠岩或礦渣經高溫熔融、紡絲成纖後製成，屬不燃性礦物纖維材料，是船舶防火隔熱最常使用的材料之一。其纖維結構同時具備隔熱與吸音效果，在高溫下不助燃、不易變形，適合機艙、鍋爐周邊與高溫管路等部位。\n\n" +
    "船舶用隔熱材的不燃性與防火試驗，依 SOLAS 公約與 IMO FTP Code 有明確要求。岩（礦）棉的耐溫範圍高於一般玻璃棉，因此多用於需要防火時效的艙壁與甲板，以及高溫設備周邊。實際採用的密度、厚度與適用等級，依安裝部位的溫度條件與船級社要求選定。",
  descriptionEn:
    "Rock (mineral) wool is produced by melting natural basalt, diabase, or mineral slag at high temperature and spinning it into fibers. As a non-combustible mineral fiber, it is one of the most widely used materials for marine fire insulation. Its fiber structure provides both thermal insulation and sound absorption, and it neither supports combustion nor deforms readily at high temperatures — making it well suited to engine rooms, boiler surrounds, and hot pipework.\n\n" +
    "Non-combustibility and fire testing for marine insulation are set out in the SOLAS Convention and the IMO FTP Code. Rock wool's service temperature range runs higher than that of ordinary glass wool, which is why it is the usual choice for fire-rated bulkheads and decks and for the surroundings of hot equipment. Density, thickness and rating are selected for the temperatures at the installation and for what the classification society requires.",
  images: [
    "/images/products/thermal-insulation/thermal-insulation-cover.webp",
    "/images/products/thermal-insulation/thermal-insulation-1.webp",
    "/images/products/thermal-insulation/thermal-insulation-2.webp",
  ],
  // 規格待欣展提供 TDS／證書後再補；空陣列時詳情頁不顯示規格表
  specs: [],
  features: [
    "不燃性礦物纖維，高溫下不助燃",
    "耐溫範圍高於一般玻璃棉",
    "纖維結構兼具隔熱與吸音",
    "可依部位裁切、包覆施工",
  ],
  featuresEn: [
    "Non-combustible mineral fiber that does not support combustion",
    "Higher service temperature range than typical glass wool",
    "Fiber structure delivers both insulation and sound absorption",
    "Can be cut and wrapped to suit each installation",
  ],
  applications: [
    "機艙與鍋爐周邊隔熱",
    "高溫管路包覆",
    "防火隔間與甲板隔熱填充",
  ],
  applicationsEn: [
    "Engine-room and boiler-area insulation",
    "High-temperature pipe lagging",
    "Fire-rated bulkhead and deck insulation infill",
  ],
  publishedAt: "2024-01-15",
  isPublished: true,
};

export default thermalInsulation;
