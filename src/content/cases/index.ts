/**
 * 案例內容管理
 *
 * 新增案例步驟：
 * 1. 在此目錄新增 [your-case-slug].ts 檔案（參考 _template.ts）
 * 2. import 後加入下方 allCases 陣列
 * 3. 確保 slug 唯一且使用英文小寫與連字號
 */

import type { CaseProject, CaseSummary } from "@/types/case";
import generalShipMaterial from "./general-ship-material";
import commercialVesselInterior from "./commercial-vessel-interior";
import shipRenovation from "./ship-renovation";

// ✅ 在此新增案例（新案例建議放在陣列最前面）
export const allCases: CaseProject[] = [
  generalShipMaterial,
  commercialVesselInterior,
  shipRenovation,
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
