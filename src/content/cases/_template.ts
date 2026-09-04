/**
 * 案例資料範本
 *
 * 使用方式：
 * 1. 複製此檔案並重新命名為 [your-slug].ts
 * 2. 填寫所有必要欄位
 * 3. 將圖片放至 /public/images/cases/ 目錄
 * 4. 在 index.ts 中 import 並加入 allCases 陣列（建議放最前面，新案例優先顯示）
 */

import type { CaseProject } from "@/types/case";

const template: CaseProject = {
  // URL 路徑，使用英文小寫加連字號，例：vessel-renovation-2024
  slug: "your-case-slug",

  // 案例標題
  title: "案例標題",

  // 客戶名稱（如客戶要求保密可填「私人客戶」）
  client: "客戶名稱",

  // 分類，須為下列三者之一（2026-07-24 會議定案）：一般船舶工程／船舶改裝／船舶維修
  //（新增分類時要同步登錄 src/lib/categories.ts 的 slug 與 index.ts 的 CASE_CATEGORY_ORDER）
  category: "分類",

  // 簡短描述，顯示於案例列表卡片（約 60 字內）
  shortDescription: "簡短說明此案例的背景與工程重點。",

  // 完整說明，顯示於案例詳情頁（可多段落）
  description: "詳細說明工程背景、挑戰、解決方案與成果。",

  // 封面圖（顯示於列表），放至 /public/images/cases/
  coverImage: "/images/cases/your-case-cover.jpg",

  // 詳情頁輪播圖片
  images: [
    { src: "/images/cases/your-case-1.jpg", caption: "這張照片在拍什麼（選填，顯示於圖片下方）" },
    { src: "/images/cases/your-case-2.jpg", caption: "這張照片在拍什麼（選填，顯示於圖片下方）" },
  ],

  // 本案使用的服務項目
  services: ["服務項目一", "服務項目二"],

  // 完工日期（YYYY-MM-DD）
  completedAt: "2024-01-01",

  // 施工地點
  location: "施工地點",

  // 標籤（用於 SEO 與搜尋）
  tags: ["標籤一", "標籤二"],

  // 發布日期（YYYY-MM-DD）
  publishedAt: "2024-01-01",

  // 設為 false 可隱藏案例但不刪除資料
  isPublished: true,
};

export default template;
