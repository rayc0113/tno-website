/**
 * 產品內容管理
 *
 * 新增產品步驟：
 * 1. 在此目錄新增 [your-product-slug].ts 檔案（參考 _template.ts）
 * 2. import 後加入下方 allProducts 陣列
 * 3. 確保 slug 唯一且使用英文小寫與連字號
 */

import type { Product, ProductSummary } from "@/types/product";
import ductLouverPanel from "./duct-louver-panel";
import drainageScaffolding from "./drainage-scaffolding";
import soundingRod from "./sounding-rod";
import hatchOpening from "./hatch-opening";
import handrailInstallation from "./handrail-installation";
import lighthouseBase from "./lighthouse-base";
import exhaustPipeInsulation from "./exhaust-pipe-insulation";
import accommodationLadder from "./accommodation-ladder";
import magazineConversion from "./magazine-conversion";
import slipwayConstruction from "./slipway-construction";
import wallPanel from "./wall-panel";
import ceilingPanel from "./ceiling-panel";
import glassWool from "./glass-wool";
import ceramicWool from "./ceramic-wool";
import metalPartition from "./metal-partition";
import thermalInsulation from "./thermal-insulation";
import stainlessKitchen from "./stainless-kitchen";
import airCabinet from "./air-cabinet";
import puFoam from "./pu-foam";
import timber from "./timber";
import rudderShaftSystem from "./rudder-shaft-system";
import deckFittings from "./deck-fittings";
import anchorFittings from "./anchor-fittings";

export const allProducts: Product[] = [
  // 分類順序決定篩選列左至右的排列
  //
  // 2026-07-24 會議新增的三個工程分類，共 10 個項目
  // （目前為版面示意內容，名稱與分類正確、文案圖片為佔位，待欣展窗口確認）
  //
  // 註：欣展提供的資料夾共 11 項，其中 D-登艦梯 未單獨開卡——它與 L-登艦梯
  //    是同一種品項，照片併入 accommodation-ladder 的照片牆即可，避免產品頁
  //    出現兩張同名卡片。
  ductLouverPanel,
  drainageScaffolding,
  soundingRod,
  hatchOpening,
  handrailInstallation,
  lighthouseBase,
  exhaustPipeInsulation,
  accommodationLadder,
  magazineConversion,
  slipwayConstruction,
  // 保留的 6 個材料類品項
  thermalInsulation,
  glassWool,
  ceramicWool,
  stainlessKitchen,
  puFoam,
  timber,
  //
  // 未發布（不影響分類順序）
  metalPartition,
  wallPanel,          // 2026-07-24 下架
  ceilingPanel,       // 2026-07-24 下架
  rudderShaftSystem,  // 2026-07-24 下架
  deckFittings,       // 2026-07-24 下架
  anchorFittings,     // 2026-07-24 下架
  airCabinet,         // 2026-07-24 下架
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
    listImage: coverImage ?? images[0],
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
