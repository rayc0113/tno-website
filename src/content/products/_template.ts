/**
 * 產品資料範本
 *
 * 使用方式：
 * 1. 複製此檔案並重新命名為 [your-slug].ts
 * 2. 填寫所有必要欄位
 * 3. 將圖片放至 /public/images/products/ 目錄
 * 4. 在 index.ts 中 import 並加入 allProducts 陣列
 */

import type { Product } from "@/types/product";

const template: Product = {
  // URL 路徑，使用英文小寫加連字號，例：marine-coating
  slug: "your-product-slug",

  // 產品名稱（中文）
  name: "產品名稱",

  // 分類，用於篩選，例：塗料、甲板材料、內裝、五金配件
  category: "分類",

  // 簡短描述，顯示於產品列表卡片（約 50 字內）
  shortDescription: "簡短說明此產品的特色與用途。",

  // 完整描述，顯示於產品詳情頁（可多段落）
  description: "完整詳細的產品說明，包含材料特性、適用場景、施工方式等。",

  // 封面圖（顯示於列表），放至 /public/images/products/
  coverImage: "/images/products/your-product-cover.jpg",

  // 詳情頁輪播圖片
  images: [
    "/images/products/your-product-1.jpg",
    "/images/products/your-product-2.jpg",
  ],

  // 技術規格
  specs: [
    { label: "規格項目", value: "規格數值" },
    { label: "認證", value: "ABS、ClassNK" },
  ],

  // 產品特點（條列式）
  features: ["特點一", "特點二", "特點三"],

  // 適用場景
  applications: ["應用場景一", "應用場景二"],

  // 發布日期（YYYY-MM-DD）
  publishedAt: "2024-01-01",

  // 設為 false 可隱藏產品但不刪除資料
  isPublished: true,
};

export default template;
