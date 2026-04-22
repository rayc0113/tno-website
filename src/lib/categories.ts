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
  // 產品分類
  "金屬隔間板": "metal-partition",
  "隔熱絕緣材": "thermal-insulation",
  "不鏽鋼廚具": "stainless-kitchen",
  "PU聚氨脂": "pu-foam",
  "木材": "timber",
  "造船用舵軸系統": "rudder-shaft-system",
  "造船用甲板上艤品、錨座配件": "deck-anchor-fittings",
  "船裝配件空氣櫃、過濾器": "air-cabinet-filters",
  // 案例分類
  "一般船舶材料": "general-marine-materials",
  "商業貨輪內裝": "commercial-vessel-interior",
  "船舶改裝與維修": "ship-retrofit",
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
