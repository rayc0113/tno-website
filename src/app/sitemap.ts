import type { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/content/products";
import { getAllCaseSlugs } from "@/content/cases";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tno-marine.com";
const locales = ["zh", "en"];

function localedUrl(locale: string, path: string) {
  return `${siteUrl}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const productSlugs = getAllProductSlugs();
  const caseSlugs = getAllCaseSlugs();

  const staticPaths = [
    { path: "", priority: 1, freq: "weekly" as const },
    { path: "/service", priority: 0.9, freq: "monthly" as const },
    { path: "/product", priority: 0.9, freq: "weekly" as const },
    { path: "/case", priority: 0.8, freq: "weekly" as const },
    { path: "/about", priority: 0.7, freq: "monthly" as const },
    { path: "/contact", priority: 0.7, freq: "monthly" as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const { path, priority, freq } of staticPaths) {
      entries.push({
        url: localedUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: freq,
        priority,
      });
    }
    for (const slug of productSlugs) {
      entries.push({
        url: localedUrl(locale, `/product/${slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
    for (const slug of caseSlugs) {
      entries.push({
        url: localedUrl(locale, `/case/${slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
