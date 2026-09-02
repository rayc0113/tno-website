import type { Product } from "@/types/product";

/**
 * 原木木料
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
const timber: Product = {
  slug: "timber",
  name: "原木木料",
  nameEn: "Marine Timber",
  category: "木材",
  shortDescription: "船舶甲板鋪設與艙室內裝所需的木質材料",
  shortDescriptionEn: "Timber for vessel decking and cabin interior work",
  description:
    "欣展提供船舶甲板鋪設與艙室內裝所需的木質材料。甲板用材傳統上以柚木等硬木為主，取其油脂含量高、耐候且濕潤時仍具防滑特性；艙室內裝則依設計需求選用不同木種與板材形式。\n\n" +
    "木材屬有機材料，用於船舶時須配合該部位的防火與表面材料規範選用與施作。實際樹種、等級、尺寸與處理方式依專案需求提供，歡迎來電洽詢。",
  descriptionEn:
    "TNO supplies the timber used for vessel decking and cabin interior work. Deck timber has traditionally been hardwood such as teak, chosen for its high natural oil content, weather resistance, and grip even when wet; interior work draws on different species and board formats according to the design.\n\n" +
    "Timber is an organic material, so its use aboard must follow the fire and surface-material requirements applying to each location. Species, grade, dimensions, and treatment are supplied to suit each project — please contact us to discuss.",
  images: [
    "/images/products/timber/timber-cover.webp",
  ],
  // 規格待欣展提供 TDS／證書後再補；空陣列時詳情頁不顯示規格表
  specs: [],
  features: [
    "甲板用材以柚木等硬木為主，耐候且濕潤時仍防滑",
    "依設計需求選用木種與板材形式",
    "可配合尺寸與處理方式客製供應",
    "兼顧艙室內裝的質感與耐用需求",
  ],
  featuresEn: [
    "Deck timber in hardwoods such as teak — weather-resistant and grippy when wet",
    "Species and board format selected to suit the design",
    "Dimensions and treatment supplied to order",
    "Balances interior appearance with long-term durability",
  ],
  applications: [
    "甲板鋪設",
    "艙室內裝與木作",
    "家具與內裝配件用材",
  ],
  applicationsEn: [
    "Deck laying",
    "Cabin interior and joinery work",
    "Furniture and interior fitting materials",
  ],
  publishedAt: "2024-02-10",
  isPublished: true,
};

export default timber;
