import type { Product } from "@/types/product";

/**
 * 各式不鏽鋼廚具
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
const stainlessKitchen: Product = {
  slug: "stainless-kitchen",
  name: "各式不鏽鋼廚具",
  nameEn: "Marine Stainless Steel Galley Equipment",
  category: "不鏽鋼廚具",
  shortDescription: "依船艙尺寸與動線量身製作的船用不鏽鋼廚房設備",
  shortDescriptionEn: "Marine galley equipment in stainless steel, built to each vessel's dimensions and layout",
  description:
    "船舶廚房長期處於高濕、含鹽的環境，設備需同時具備耐蝕性與結構強度。欣展提供船用不鏽鋼廚具的設計與製作，涵蓋料理台、水槽、層架與各式儲物設備，並依實際艙間尺寸與作業動線規劃客製。\n\n" +
    "不鏽鋼材質等級與表面處理方式依使用部位與客戶需求選定；欣展設有自有金屬加工設備，從設計、下料到焊接組裝一貫作業，可配合現場條件調整尺寸與規格，細節歡迎於洽詢時一併討論。",
  descriptionEn:
    "A ship's galley lives in a humid, salt-laden environment, so its equipment has to combine corrosion resistance with structural strength. TNO designs and fabricates marine stainless steel galley equipment — prep counters, sinks, shelving, and storage units — laid out around the actual dimensions and workflow of each compartment.\n\n" +
    "Stainless grade and surface finish are selected according to where the equipment is used and what the client requires. With our own metalworking facility, design, cutting, welding, and assembly are handled in-house, so dimensions and specifications can be adapted to site conditions — details are welcome to be discussed at enquiry stage.",
  images: [
    "/images/products/stainless-kitchen-cover.webp",
  ],
  // 規格待欣展提供 TDS／證書後再補；空陣列時詳情頁不顯示規格表
  specs: [],
  features: [
    "依船艙實際尺寸與作業動線客製設計",
    "不鏽鋼材質，適應高濕含鹽的船上環境",
    "自有金屬加工廠，設計與製作一貫作業",
    "可整合料理、清洗與儲物機能",
  ],
  featuresEn: [
    "Custom-designed around each compartment's dimensions and workflow",
    "Stainless steel construction for humid, salt-laden shipboard conditions",
    "In-house metalworking — design through fabrication under one roof",
    "Integrates preparation, washing, and storage functions",
  ],
  applications: [
    "船員廚房料理台與水槽",
    "艙間儲物與層架系統",
    "廚房相關金屬設備客製",
  ],
  applicationsEn: [
    "Crew galley counters and sinks",
    "Compartment storage and shelving systems",
    "Custom galley metalwork",
  ],
  publishedAt: "2024-02-01",
  isPublished: true,
};

export default stainlessKitchen;
