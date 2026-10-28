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
 *
 * ⚠️ 2026-10-12 文案重寫。原因有二：
 *   1. 換上窗口提供的新照片後，照片與文案對不上——舊文案寫的是「甲板鋪設與
 *      艙室內裝」，講的是鋪面板材；新照片拍的是大斷面硬木方材（分尺寸綑綁
 *      堆放、人員丈量標記），不是鋪面料。
 *   2. 舊文案以「欣展提供…」起句，文案裡出現公司名，與後來 10 支工程產品
 *      確立的標準（全段不出現公司名、規格書式客觀陳述）不一致。
 *
 * ⚠️ 待窗口確認：照片中這些大斷面方材實際供應給什麼用途？可能是塢墩墊木、
 *    船台用材、護舷材或結構用料，從照片分辨不出來。因此本篇的 applications
 *    刻意寫得保守，只寫「大斷面方材的下料供應」而不指定用途。確認後可補得
 *    更具體，說服力會更強。
 */
const timber: Product = {
  slug: "timber",
  name: "原木木料",
  nameEn: "Marine Timber",
  category: "木材",
  shortDescription: "船用硬木方材與板材的分級與下料供應——同一根原木鋸出來的料，等級並不相同",
  shortDescriptionEn:
    "Marine hardwood baulks and boards, graded and cut to size — pieces sawn from one and the same log are not all of one grade",
  description:
    "船上使用的木料多為硬木，取其密度高、耐磨，且含天然油脂而耐候——在潮濕狀態下仍保有一定的摩擦力。但木材終究是有機材料，吸濕後會脹縮，也受蟲蛀與腐朽影響，所以樹種、取材部位與乾燥程度，實際上決定了它在船上能撐多久。\n\n" +
    "大斷面方材的差異主要在取材：靠近樹心的心材密度高、油脂含量多，耐久性明顯優於外圍的邊材，因此同一根原木鋸出來的料，等級並不相同。供應範圍涵蓋依需求尺寸的下料與分級。樹種、等級、斷面與乾燥處理依用途選定，用於船上時並須確認該部位的防火與表面材料要求。同一批料攤開來看幾乎沒有差別，差別要到上船幾年後才顯現——而選料這一步，沒有辦法事後補救。",
  descriptionEn:
    "Timber used aboard ship is generally hardwood, chosen for its density, resistance to wear, and the natural oils that let it weather well and keep some grip when wet. It remains an organic material, though: it moves as it takes up and gives off moisture, and it is open to insect attack and decay. Species, the part of the log a piece is cut from, and how well it has been dried are what really determine how long it lasts in service.\n\n" +
    "With large baulks the difference comes down to where in the log they were cut. Heartwood, nearer the centre, is denser and carries more oil, and outlasts the sapwood around it — so pieces sawn from the same log are not all of one grade. Supply covers cutting to the sizes required and grading. Species, grade, section and drying are chosen for the intended use, and where timber goes aboard, the fire and surface-material requirements for that location are confirmed alongside. Laid out together, a parcel of timber looks much of a muchness; the difference only shows some years into service — and the choosing is not a step that can be put right later.",
  // 2026-10-12 依窗口提供的新照片整批汰換，並補上 coverImage 欄位
  //（原本只有 images，列表卡片取 images[0]）
  coverImage: "/images/products/timber/timber-cover.webp",
  images: [
    "/images/products/timber/timber-cover.webp",
    "/images/products/timber/timber-1.webp",
  ],
  // 規格待欣展提供 TDS／證書後再補；空陣列時詳情頁不顯示規格表
  specs: [],
  features: [
    "硬木密度高、含天然油脂，耐候且潮濕時仍具摩擦力",
    "心材與邊材的耐久性不同，取材部位直接影響等級",
    "依需求尺寸下料與分級供應",
    "用於船上時配合該部位的防火與表面材料規範選定",
  ],
  featuresEn: [
    "Dense hardwood carrying natural oils — weathers well and keeps some grip when wet",
    "Heartwood and sapwood do not last alike; where a piece is cut from governs its grade",
    "Cut to the sizes required and graded on supply",
    "Selected to meet the fire and surface-material requirements of each location aboard",
  ],
  applications: [
    "大斷面硬木方材的下料供應",
    "甲板鋪面與踏面用材",
    "艙室內裝的木質材料",
  ],
  applicationsEn: [
    "Supply of large-section hardwood baulks, cut to size",
    "Timber for deck surfaces and treads",
    "Timber for cabin interior work",
  ],
  publishedAt: "2024-02-10",
  isPublished: true,
};

export default timber;
