import type { Product } from "@/types/product";

/**
 * PU板、PU發泡劑、聚氨酯發泡劑
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
const puFoam: Product = {
  slug: "pu-foam",
  name: "PU板、PU發泡劑、聚氨酯發泡劑",
  nameEn: "PU Boards & Polyurethane Foam",
  category: "PU聚氨脂",
  shortDescription: "閉孔結構聚氨酯發泡材，隔熱效率高、吸水率低",
  shortDescriptionEn: "Closed-cell polyurethane foam — efficient insulation with low water absorption",
  description:
    "聚氨酯（Polyurethane，PU）為閉孔結構的發泡材料，導熱係數低、吸水率小，在相同厚度下可提供較佳的隔熱效果，並具良好的防潮特性，常用於冷藏艙、低溫管路與需要阻隔水氣的部位。可依需求以板材、管殼或現場發泡的方式施作。\n\n" +
    "PU 與礦物纖維材料的特性不同，選用時須一併考量該部位的防火要求——防火分隔部位通常仍以不燃性礦物纖維材為主，PU 則發揮其隔熱與防潮的優勢。實際規格與適用範圍歡迎來電討論。",
  descriptionEn:
    "Polyurethane (PU) is a closed-cell foam with low thermal conductivity and low water absorption, delivering strong insulation performance for a given thickness along with good moisture resistance. It is commonly used for refrigerated holds, low-temperature pipework, and anywhere a vapor barrier is needed, and can be supplied as rigid board, pre-formed pipe shells, or foamed in place.\n\n" +
    "PU behaves differently from mineral fiber materials, so the fire requirements of each location must be considered when specifying it — fire-rated divisions generally still rely on non-combustible mineral fiber, while PU is chosen for its insulation and moisture performance. Specifications and suitable applications are welcome to be discussed by phone.",
  images: [
    "/images/products/pu-foam/pu-foam-cover.webp",
  ],
  // 規格待欣展提供 TDS／證書後再補；空陣列時詳情頁不顯示規格表
  specs: [],
  features: [
    "閉孔結構，吸水率低、防潮性佳",
    "相同厚度下隔熱效率高",
    "可製成板材、管殼或現場發泡施作",
    "適合冷藏與低溫部位",
  ],
  featuresEn: [
    "Closed-cell structure with low water absorption and good moisture resistance",
    "High insulation efficiency for a given thickness",
    "Supplied as board, pipe shell, or foamed in place",
    "Suited to refrigerated and low-temperature areas",
  ],
  applications: [
    "冷藏艙與低溫貨艙隔熱",
    "低溫管路保溫",
    "甲板與艙壁防潮隔熱",
  ],
  applicationsEn: [
    "Refrigerated hold and cold cargo space insulation",
    "Low-temperature pipe insulation",
    "Deck and bulkhead moisture barriers",
  ],
  publishedAt: "2024-02-05",
  isPublished: true,
};

export default puFoam;
