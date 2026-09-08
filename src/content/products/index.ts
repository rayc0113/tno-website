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
  // 此陣列決定「全部產品」列表內的卡片順序；
  // 篩選列的分類順序另由下方 PRODUCT_CATEGORY_ORDER 指定。
  //
  // 2026-07-24 會議新增的三個工程分類，共 10 個項目
  // （照片於 2026-09-01 上站、文案於 2026-09-02 撰寫完成；內容為工項層級的
  //   通用正確敘述，不含規格數字，計畫請欣展窗口逐支確認描述是否正確。
  //   測桿預製與安裝是其中最不確定的一支，見該檔案檔頭）
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
  // 保留的材料類品項（排列與 PRODUCT_CATEGORY_ORDER 一致，
  // 讓「全部產品」的卡片順序不會和篩選列的分類順序打架）
  stainlessKitchen,
  thermalInsulation,
  glassWool,
  ceramicWool,
  timber,
  //
  // 未發布（不影響分類順序）
  puFoam,             // 2026-09-08 下架（整個 PU聚氨脂 分類已不對外）
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

/**
 * 產品分類的顯示順序（篩選列與 Footer 皆依此排列）
 *
 * 2026-09-08 依 TNO 窗口 Lucy 指定的順序登錄。清單中沒有出現的分類會排在最後。
 * 只有「實際有已發布產品」的分類才會顯示，因此在此登錄尚無品項的分類是安全的
 * ——不會多出一個點進去空無一物的篩選鈕，等該分類第一支產品上站就會自動就位。
 *
 * ⚠️「船舶維修」目前尚無產品：Lucy 的清單新增了這個分類，但先前提供的資料與
 *    照片都沒有這一項，品項名稱與照片待她確認後補上。
 */
const PRODUCT_CATEGORY_ORDER = [
  "客製化工程",
  "海軍艤裝工程",
  "港務工程",
  "船舶維修",
  "不鏽鋼廚具",
  "隔熱絕緣材",
  "木材",
];

export function getAllCategories(): string[] {
  const categories = [...new Set(getPublishedProducts().map((p) => p.category))];
  return categories.sort((a, b) => {
    const ia = PRODUCT_CATEGORY_ORDER.indexOf(a);
    const ib = PRODUCT_CATEGORY_ORDER.indexOf(b);
    return (ia === -1 ? Number.MAX_SAFE_INTEGER : ia) - (ib === -1 ? Number.MAX_SAFE_INTEGER : ib);
  });
}
