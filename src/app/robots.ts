import type { MetadataRoute } from "next";
import { SITE_URL as siteUrl } from "@/lib/siteMeta";


/**
 * 全站開放搜尋引擎索引（2026-10-21 正式對外）
 *
 * 歷程：2026-09-04 起曾全站 disallow，因為當時站上仍有示意資料與未經 TNO
 * 核可的產品文案——網站公開可連，Google 就可能自己找到並索引，而索引過的
 * 舊內容改掉後還會在快取裡留一段時間。
 *
 * 2026-10-21：TNO 團隊總驗收通過、李總確認可以對外曝光，且已確認全站
 * canonical／hreflang／sitemap 都指向 www.tno.com.tw（在此之前它們指向
 * Vercel 測試網域，那時開放索引會讓 Google 把測試網域當正主），因此解開。
 *
 * ⚠️ 若日後又要暫時擋索引（例如大改版期間），把 allow 改回：
 *     { userAgent: "*", disallow: "/" }
 *    並記得改完要重新部署才生效。
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
