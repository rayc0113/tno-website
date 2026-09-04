import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tno.com.tw";

/**
 * ⚠️ 驗收期間暫時全站禁止搜尋引擎索引（2026-09-04 起）
 *
 * Why：站上仍有示意資料（範例案例的「XX 造船股份有限公司」等）與尚未經 TNO
 * 核可的產品文案。網站一旦公開可連，Google 就可能自己找到並開始索引；一旦被
 * 索引，之後改掉了舊內容還會在快取裡留一段時間。TNO 還沒確認前，不該讓外界
 * 看到他們認為不該被看到的內容。
 *
 * 這段期間知道網址的人（窗口、李總）照樣打得開、瀏覽完全正常，只有爬蟲被擋。
 *
 * 【正式對外那天要做的事】把下面的 disallow 改回 allow 並重新部署：
 *     { userAgent: "*", allow: "/" }
 * 時機：TNO 團隊總驗收通過、確認可以對外曝光之後。
 * 順序與其他上線步驟見記憶中的 project_domain_cutover。
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
