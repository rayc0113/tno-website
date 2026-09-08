/**
 * 全站品牌標題與預設描述（單一來源）
 *
 * 為什麼要獨立成一支：這兩句話同時被 layout.tsx（全站預設 + OG）與
 * [locale]/page.tsx（首頁覆蓋 + OG/Twitter）使用。原本兩邊各寫一份字面值，
 * 導致 2026-07-24 會議的定位調整只改到其中一邊——首頁的標題在其他頁面內文
 * 都已改為「改裝維修」後，仍顯示舊定位「船舶裝修全方位領導品牌」長達兩個月，
 * 而那正是貼首頁網址時預覽卡片會顯示的一句。
 *
 * 2026-09-08 起請只改這裡。
 *
 * 標題沿用關於我們 hero 的定案句（見 messages/*.json 的 about.hero.title2）。
 *
 * 認證只寫 ISO 9001:2015——首頁 BrandCTA 有實際證書圖可佐證。原本點名的
 * ABS、ClassNK 已移除：description 是 Google 搜尋結果與分享預覽唯一會顯示的
 * 一句，不宜點名個別船級社。（關於我們頁的船級社 logo 牆沿用舊官網資料，
 * 屬 TNO 自己的陳述，不在此處變動。）
 */

/**
 * 正式網域
 *
 * 影響 sitemap、canonical、OG 與結構化資料的 @id。原本 robots.ts、sitemap.ts、
 * layout.tsx 各寫一份相同的 fallback，一併收斂到這裡。
 *
 * ⚠️ NEXT_PUBLIC_* 於 build 時寫入，改了必須重新部署才會生效；在 Vercel 上
 *    型別要選 Config 而非 Secret（NEXT_PUBLIC_ 前綴的值本來就會露給瀏覽器）。
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tno.com.tw";

export function getSiteTitle(locale: string): string {
  return locale === "en"
    ? "TNO | Your Strongest Support in Ship Retrofit & Maintenance"
    : "TNO 欣展｜船舶改裝維修的最強後盾";
}

/**
 * 全站預設 description
 *
 * 注意：只有「沒有自訂 description」的頁面會用到這句。首頁有自己的
 * description（取自 home.hero.description），各內頁也都有各自的 meta。
 */
export function getSiteDescription(locale: string): string {
  return locale === "en"
    ? "TNO delivers ship retrofit, marine repair, and naval outfitting, with in-house metal fabrication and stainless steel kitchen manufacturing. Based in Kaohsiung, Taiwan since 2016. ISO 9001:2015 certified."
    : "欣展提供船舶改裝、船舶維修與海軍艤裝工程，並自有工廠承製金屬加工與不鏽鋼廚具。2016 年成立於高雄，通過 ISO 9001：2015 認證。";
}
