/**
 * Category slug 對照表
 *
 * 目的：讓 `/product?category=...` 與 `/case?category=...` 的 URL 使用英文 slug，
 * 無論中/英站都保持乾淨可讀的網址。
 *
 * 資料儲存端（product.category / caseItem.category）仍維持原始中文值，
 * 顯示端仍透過 messages/*.json 的 `categories` 區塊翻譯，皆不變動。
 *
 * 新增分類時請同步在此登錄 slug。
 */

const CATEGORY_TO_SLUG: Record<string, string> = {
  // 產品分類（2026-07-24 會議新增的三個工程分類）
  "客製化工程": "custom-engineering",
  "海軍艤裝工程": "naval-outfitting",
  "港務工程": "port-engineering",
  // 產品分類（既有；已下架品項的分類仍保留對照，方便日後重新上架）
  "金屬隔間板": "metal-partition",
  "隔熱絕緣材": "thermal-insulation",
  "不鏽鋼廚具": "stainless-kitchen",
  "PU聚氨脂": "pu-foam",
  "木材": "timber",
  "造船用舵軸系統": "rudder-shaft-system",
  "造船用甲板上艤品、錨座配件": "deck-anchor-fittings",
  "船裝配件空氣櫃、過濾器": "air-cabinet-filters",
  // 案例分類（2026-07-24 會議調整為 一般／改裝／維修）
  "一般船舶工程": "general-marine",
  "船舶改裝": "ship-retrofit",
  "船舶維修": "ship-maintenance",
};

export function getCategorySlug(category: string): string {
  return CATEGORY_TO_SLUG[category] ?? category;
}

export function getCategoryFromSlug(
  slug: string,
  categories: string[]
): string | undefined {
  return categories.find((c) => getCategorySlug(c) === slug);
}
