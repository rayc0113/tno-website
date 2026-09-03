/**
 * 案例內容管理
 *
 * 新增案例步驟：
 * 1. 在此目錄新增 [your-case-slug].ts 檔案（參考 _template.ts）
 * 2. import 後加入下方 allCases 陣列
 * 3. 確保 slug 唯一且使用英文小寫與連字號
 */

import type { CaseProject, CaseSummary } from "@/types/case";
import deckOpeningRestoration from "./deck-opening-restoration";
import bulkCarrierInsulation from "./bulk-carrier-insulation";
import crewQuartersRenovation from "./crew-quarters-renovation";
import fishingVesselUpgrade from "./fishing-vessel-upgrade";
import offshorePlatformLiving from "./offshore-platform-living";

// ✅ 在此新增案例（新案例建議放在陣列最前面）
//
// 分類（2026-07-24 會議決議）：一般船舶工程 / 船舶改裝 / 船舶維修
// ⚠️ 下列四筆為暫時性內容，待欣展提供 3–5 個代表案例後整批汰換
//    （素材見 materials/04-案例）
export const allCases: CaseProject[] = [
  // 【版面範例】2026-09-02 為檢視多圖編排而建，非欣展提供的正式案例
  deckOpeningRestoration,
  bulkCarrierInsulation,
  crewQuartersRenovation,
  fishingVesselUpgrade,
  offshorePlatformLiving,
];

export function getPublishedCases(): CaseProject[] {
  return allCases.filter((c) => c.isPublished);
}

export function getCaseBySlug(slug: string): CaseProject | undefined {
  return allCases.find((c) => c.slug === slug && c.isPublished);
}

export function getCaseSummaries(): CaseSummary[] {
  return getPublishedCases().map(
    ({ slug, title, client, category, shortDescription, coverImage, completedAt }) => ({
      slug,
      title,
      client,
      category,
      shortDescription,
      coverImage,
      completedAt,
    })
  );
}

export function getAllCaseSlugs(): string[] {
  return getPublishedCases().map((c) => c.slug);
}

export function getCasesByCategory(category: string): CaseProject[] {
  return getPublishedCases().filter((c) => c.category === category);
}

export function getAllCaseCategories(): string[] {
  const categories = getPublishedCases().map((c) => c.category);
  return [...new Set(categories)];
}
