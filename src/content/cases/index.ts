/**
 * 案例內容管理
 *
 * 新增案例步驟：
 * 1. 在此目錄新增 [your-case-slug].ts 檔案（參考 _template.ts）
 * 2. import 後加入下方 allCases 陣列
 * 3. 確保 slug 唯一且使用英文小寫與連字號
 */

import type { CaseProject, CaseSummary } from "@/types/case";
import surveyPoleInstall from "./survey-pole-install";
import launchPlatformInstall from "./launch-platform-install";
import mituoSlipwayReplacement from "./mituo-slipway-replacement";
import ductLouverPrefabInstallation from "./duct-louver-prefab-installation";
import deckOpeningRestoration from "./deck-opening-restoration";
import bulkCarrierInsulation from "./bulk-carrier-insulation";
import crewQuartersRenovation from "./crew-quarters-renovation";
import fishingVesselUpgrade from "./fishing-vessel-upgrade";
import offshorePlatformLiving from "./offshore-platform-living";

// ✅ 在此新增案例（新案例建議放在陣列最前面）
//
// 分類（2026-10-12 起）：港務工程 / 船舶改裝 / 船舶維修（沿革見下方 CASE_CATEGORY_ORDER）
// ⚠️ 下列四筆為暫時性假資料，已於 2026-09-03 設為 isPublished: false 下架
//    （含編造的量化數據與虛構客戶名，不能讓欣展窗口看到）。檔案保留不刪，
//    待欣展提供 3–5 個代表案例後整批汰換（素材見 materials/04-案例）。
export const allCases: CaseProject[] = [
  // 依 TNO 正式工單（完工報告 PDF）撰寫的案例
  surveyPoleInstall,
  launchPlatformInstall,
  mituoSlipwayReplacement,
  ductLouverPrefabInstallation,
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

/**
 * 分類篩選列的顯示順序（2026-07-24 會議定的順序，與首頁精選案例一致）。
 *
 * 不能沿用 allCases 的陣列順序——那個順序決定「案例本身」的顯示排序
 * （新案例放最前面），若拿來推分類順序，只要最新的案例換一個分類，
 * 篩選列的順序就會跟著跳動。
 *
 * 新增分類時請同步在此登錄；未登錄的分類會排在最後。
 */
/**
 * 案例分類（2026-10-12 調整）
 *
 * 7/24 會議定的三類是「一般船舶工程／船舶改裝／船舶維修」。2026-10-12 讀完
 * 窗口提供的六份完工報告後發現兩件事：
 *   1.「一般船舶工程」一筆都對應不到——六個案子全是既有船或既有設施的改裝、
 *      維修與汰換，沒有一筆是新造船工程
 *   2.「彌陀漁港船台新製」是岸上的港灣設施，三類都放不進去
 * 因此把空著的「一般船舶工程」換成「港務工程」。維持三類、首頁版面不動，
 * 而且「港務工程」的用語全部現成（產品分類已在用，slug 與中英翻譯都有）。
 *
 * 舊的「一般船舶工程」在 categories.ts 與 messages 仍保留對照，日後若有新造船
 * 案例可直接復用。
 */
const CASE_CATEGORY_ORDER = ["港務工程", "船舶改裝", "船舶維修"];

export function getAllCaseCategories(): string[] {
  const categories = [...new Set(getPublishedCases().map((c) => c.category))];
  return categories.sort((a, b) => {
    const ia = CASE_CATEGORY_ORDER.indexOf(a);
    const ib = CASE_CATEGORY_ORDER.indexOf(b);
    return (ia === -1 ? Number.MAX_SAFE_INTEGER : ia) - (ib === -1 ? Number.MAX_SAFE_INTEGER : ib);
  });
}
