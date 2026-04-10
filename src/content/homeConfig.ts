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
const HOME_FEATURED_PRODUCTS: { slug: string; homeImage: string }[] = [
  { slug: "metal-partition",    homeImage: "/images/home/product_bg1.webp" },
  { slug: "thermal-insulation", homeImage: "/images/home/product_bg2.webp" },
  { slug: "stainless-kitchen",  homeImage: "/images/home/product_bg3.webp" },
  { slug: "air-cabinet",        homeImage: "/images/home/product_bg4.webp" },
];

// ─── 精選案例 ────────────────────────────────────────────────────
// homeImage 必須填 /images/home/ 路徑，勿改為 /images/cases/
const HOME_FEATURED_CASES: { slug: string; homeImage: string }[] = [
  { slug: "bulk-carrier-insulation",  homeImage: "/images/home/case_bg1.webp" },
  { slug: "crew-quarters-renovation", homeImage: "/images/home/case_bg2.webp" },
  { slug: "fishing-vessel-upgrade",   homeImage: "/images/home/case_bg3.webp" },
];

export function getHomeFeaturedProducts(): ProductSummary[] {
  return HOME_FEATURED_PRODUCTS.flatMap(({ slug, homeImage }) => {
    const p = allProducts.find((p) => p.slug === slug);
    if (!p) return [];
    return [
      {
        slug: p.slug,
        name: p.name,
        category: p.category,
        shortDescription: p.shortDescription,
        coverImage: homeImage,
        listImage: homeImage,
      },
    ];
  });
}

export function getHomeFeaturedCases(): CaseSummary[] {
  return HOME_FEATURED_CASES.flatMap(({ slug, homeImage }) => {
    const c = allCases.find((c) => c.slug === slug);
    if (!c) return [];
    return [
      {
        slug: c.slug,
        title: c.title,
        client: c.client,
        category: c.category,
        shortDescription: c.shortDescription,
        coverImage: homeImage,
        completedAt: c.completedAt,
      },
    ];
  });
}
