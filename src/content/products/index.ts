/**
 * 產品內容管理
 *
 * 新增產品步驟：
 * 1. 在此目錄新增 [your-product-slug].ts 檔案（參考 _template.ts）
 * 2. import 後加入下方 allProducts 陣列
 * 3. 確保 slug 唯一且使用英文小寫與連字號
 */

import type { Product, ProductSummary } from "@/types/product";
import wallPanel from "./wall-panel";
import ceilingPanel from "./ceiling-panel";
import glassWool from "./glass-wool";
import ceramicWool from "./ceramic-wool";
import metalPartition from "./metal-partition";
import thermalInsulation from "./thermal-insulation";
import stainlessKitchen from "./stainless-kitchen";
import airCabinet from "./air-cabinet";

// ✅ 在此新增產品（新產品放最前面）
export const allProducts: Product[] = [
  wallPanel,
  ceilingPanel,
  glassWool,
  ceramicWool,
  metalPartition,
  thermalInsulation,
  stainlessKitchen,
  airCabinet,
];

export function getPublishedProducts(): Product[] {
  return allProducts.filter((p) => p.isPublished);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug && p.isPublished);
}

export function getProductSummaries(): ProductSummary[] {
  return getPublishedProducts().map(({ slug, name, category, shortDescription, coverImage, images }) => ({
    slug,
    name,
    category,
    shortDescription,
    coverImage: coverImage ?? images[0],
  }));
}

export function getAllProductSlugs(): string[] {
  return getPublishedProducts().map((p) => p.slug);
}

export function getProductsByCategory(category: string): Product[] {
  return getPublishedProducts().filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  const categories = getPublishedProducts().map((p) => p.category);
  return [...new Set(categories)];
}
