import type { MetadataRoute } from "next";
import { getPublishedProducts } from "@/content/products";
import { getPublishedCases } from "@/content/cases";
import { SITE_URL as siteUrl } from "@/lib/siteMeta";

const locales = ["zh", "en"];

function localedUrl(locale: string, path: string) {
  return `${siteUrl}/${locale}${path}`;
}

/**
 * 中英雙語 hreflang
 *
 * HTML head 已有 hreflang（各頁 generateMetadata 的 alternates.languages），
 * 這裡是加在 sitemap 裡的同一份宣告——兩處都給，Google 對雙語站的對應判斷
 * 會更穩。x-default 指向中文站，與 head 一致。
 */
function alternatesFor(path: string) {
  return {
    languages: {
      "zh-TW": localedUrl("zh", path),
      en: localedUrl("en", path),
      "x-default": localedUrl("zh", path),
    },
  };
}

/**
 * lastModified 的取值原則
 *
 * 原本每一筆都寫 `new Date()`，等於宣告「每次 build 全站都剛剛更新過」。
 * 這種訊號 Google 會學會不信，反而讓真正更新的頁面失去優勢。改為：
 * - 產品／案例內頁：用該筆內容自己的日期
 * - 列表頁：用底下所有內容中最新的那一天（有新品項才算更新）
 * - 靜態頁（關於、聯絡、服務）：用內容最後整理的日期常數，改文案時一併更新
 */
const STATIC_PAGE_UPDATED = "2026-09-08";

function latest(dates: string[]): Date {
  const sorted = [...dates].sort();
  return new Date(sorted[sorted.length - 1] ?? STATIC_PAGE_UPDATED);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getPublishedProducts();
  const cases = getPublishedCases();

  const productUpdated = latest(products.map((p) => p.publishedAt));
  const caseUpdated = latest(cases.map((c) => c.publishedAt));
  const staticUpdated = new Date(STATIC_PAGE_UPDATED);

  const staticPaths = [
    { path: "", priority: 1, freq: "weekly" as const, lastModified: staticUpdated },
    { path: "/service", priority: 0.9, freq: "monthly" as const, lastModified: staticUpdated },
    { path: "/product", priority: 0.9, freq: "weekly" as const, lastModified: productUpdated },
    { path: "/case", priority: 0.8, freq: "weekly" as const, lastModified: caseUpdated },
    { path: "/about", priority: 0.7, freq: "monthly" as const, lastModified: staticUpdated },
    { path: "/contact", priority: 0.7, freq: "monthly" as const, lastModified: staticUpdated },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const { path, priority, freq, lastModified } of staticPaths) {
      entries.push({
        url: localedUrl(locale, path),
        lastModified,
        changeFrequency: freq,
        priority,
        alternates: alternatesFor(path),
      });
    }
    for (const product of products) {
      const path = `/product/${product.slug}`;
      entries.push({
        url: localedUrl(locale, path),
        lastModified: new Date(product.publishedAt),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: alternatesFor(path),
      });
    }
    for (const caseItem of cases) {
      const path = `/case/${caseItem.slug}`;
      entries.push({
        url: localedUrl(locale, path),
        lastModified: new Date(caseItem.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: alternatesFor(path),
      });
    }
  }

  return entries;
}
