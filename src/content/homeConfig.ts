/**
 * 首頁精選項目配置
 *
 * 首頁的精選商品與實績案例使用專屬的首頁圖片（/images/home/），
 * 與各產品／案例詳情頁的 coverImage 完全無關。
 *
 * 規則：
 * - 若要更換首頁展示圖，只修改此檔案的 homeImage 欄位
 * - 若要更換某產品／案例的列表或詳情頁封面，只修改對應的 content 檔案
 * - 兩者互不影響
 */

import type { ProductSummary } from "@/types/product";
import type { CaseSummary } from "@/types/case";
import { allProducts } from "./products";
import { allCases } from "./cases";

// ─── 精選商品 ────────────────────────────────────────────────────
// homeImage 必須填 /images/home/ 路徑，勿改為 /images/products/
// homeTitle / homeTitleEn：首頁卡片標題覆寫（未填則使用 product.name / nameEn）
// homeDescription / homeDescriptionEn：首頁卡片說明覆寫（未填則使用 shortDescription）
type HomeFeatured = {
  slug: string;
  homeImage: string;
  homeTitle?: string;
  homeTitleEn?: string;
  homeDescription?: string;
  homeDescriptionEn?: string;
};

// 2026-07-24 會議：移除「金屬隔間板」「空氣櫃」兩張卡，改放三個新工程分類。
//
// 卡片點擊後導向 /product?category=<該產品的分類>，所以三張新卡各挑一支該分類的產品
// 當代表，再用 homeTitle / homeDescription 覆寫成「分類層級」的標題與說明。
//
// ⚠️ 新分類的產品尚未發布（isPublished: false），卡片仍會顯示，但點進去因為該分類
//    還沒有已發布產品，列表頁會退回顯示全部產品；素材到位並發布後篩選才會生效。
// ⚠️ product_bg1/4/5 目前沿用舊圖（bg5 是 bg1 的複本），待欣展提供新照片後
//    直接覆蓋同名檔案即可。
const HOME_FEATURED_PRODUCTS: HomeFeatured[] = [
  {
    slug: "duct-louver-panel",
    homeImage: "/images/home/product_bg1.webp",
    homeTitle: "客製化工程",
    homeTitleEn: "Custom Engineering",
    homeDescription: "依需求量身打造的船舶工程項目",
    homeDescriptionEn: "Marine engineering projects built to your requirements",
  },
  {
    slug: "exhaust-pipe-insulation",
    homeImage: "/images/home/product_bg4.webp",
    homeTitle: "海軍艤裝工程",
    homeTitleEn: "Naval Outfitting",
    homeDescription: "符合軍規標準的艦艇艤裝工程",
    homeDescriptionEn: "Naval vessel outfitting to military specifications",
  },
  {
    slug: "slipway-construction",
    homeImage: "/images/home/product_bg5.webp",
    homeTitle: "港務工程",
    homeTitleEn: "Port Engineering",
    homeDescription: "船台等港埠設施相關工程",
    homeDescriptionEn: "Slipway and port facility engineering",
  },
  { slug: "thermal-insulation", homeImage: "/images/home/product_bg2.webp", homeTitle: "隔熱絕緣材", homeTitleEn: "Thermal Insulation" },
  { slug: "stainless-kitchen",  homeImage: "/images/home/product_bg3.webp" },
];

// ─── 精選案例 ────────────────────────────────────────────────────
// homeImage 必須填 /images/home/ 路徑，勿改為 /images/cases/
// ⚠️ 目前三筆為暫時性案例，待欣展提供代表案例後整批汰換（見 materials/04-案例）
const HOME_FEATURED_CASES: HomeFeatured[] = [
  { slug: "bulk-carrier-insulation",  homeImage: "/images/home/case_bg1.webp" },
  { slug: "crew-quarters-renovation", homeImage: "/images/home/case_bg2.webp" },
  { slug: "fishing-vessel-upgrade",   homeImage: "/images/home/case_bg3.webp" },
];

export function getHomeFeaturedProducts(locale = "zh"): ProductSummary[] {
  const isEn = locale === "en";
  return HOME_FEATURED_PRODUCTS.flatMap(({ slug, homeImage, homeTitle, homeTitleEn, homeDescription, homeDescriptionEn }) => {
    const p = allProducts.find((p) => p.slug === slug);
    if (!p) return [];
    const name = isEn
      ? (homeTitleEn ?? p.nameEn ?? p.name)
      : (homeTitle ?? p.name);
    const shortDescription = isEn
      ? (homeDescriptionEn ?? p.shortDescriptionEn ?? p.shortDescription)
      : (homeDescription ?? p.shortDescription);
    return [
      {
        slug: p.slug,
        name,
        category: p.category,
        shortDescription,
        coverImage: homeImage,
        listImage: homeImage,
      },
    ];
  });
}

export function getHomeFeaturedCases(locale = "zh"): CaseSummary[] {
  const isEn = locale === "en";
  return HOME_FEATURED_CASES.flatMap(({ slug, homeImage }) => {
    const c = allCases.find((c) => c.slug === slug);
    if (!c) return [];
    return [
      {
        slug: c.slug,
        title: isEn ? (c.titleEn ?? c.title) : c.title,
        client: c.client,
        category: c.category,
        shortDescription: isEn ? (c.shortDescriptionEn ?? c.shortDescription) : c.shortDescription,
        coverImage: homeImage,
        completedAt: c.completedAt,
      },
    ];
  });
}
