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

/**
 * 對外名稱（2026-09-08 珈汶確認：英文正式名稱為 TNO Inc.）
 *
 * 收在這裡的原因與標題相同——「TNO Marine」原本散在 layout、產品內頁、
 * 案例內頁共四處，站上因此同時存在 TNO Marine／TNO Inc.／TNO Metal 三種
 * 英文寫法。Google 認公司實體時名稱要一致，三種寫法會互相稀釋。
 *
 * 三個用途刻意分開，因為中文站三者不同：
 * - getBrandName  文案與 schema 的品牌名
 * - getSiteName   標題後綴與 OG siteName
 * - getLegalName  登記名稱（結構化資料的 legalName）
 */
export function getBrandName(locale: string): string {
  return locale === "en" ? "TNO Inc." : "TNO 欣展";
}

export function getSiteName(locale: string): string {
  return locale === "en" ? "TNO Inc." : "TNO 欣展船舶";
}

/**
 * 登記名稱（結構化資料的 legalName）
 *
 * ⚠️ 2026-10-21 更正：中文原本寫「TNO 欣展有限公司」，**那家公司不存在**。
 *    依經濟部商工登記公示資料，實際登記名稱是「欣展金屬工業有限公司」
 *    （統編 45908936，109-02-27 由「欣展金屬有限公司」更名而來）。
 *    legalName 在 schema.org 的定義就是政府登記的正式名稱，寫錯等於向
 *    Google 宣告一個不存在的法人。
 *
 *    這同時是 SEO 缺口：珈汶指出台灣客戶會搜「欣展金屬」「欣展金屬工業」，
 *    而這兩組字原本在全站的可讀文字裡一次都沒出現過（footer 的公司全名
 *    是畫在 logo SVG 裡的，爬蟲讀不到）。
 *
 * ⚠️ 英文仍是 TNO Inc.（2026-09-08 珈汶確認）。但經濟部記載的「章程所訂
 *    外文公司名稱」疑似是 **TNO CO., Ltd.**，兩者不一致，待向李總確認後再定。
 *    在確認之前不動，因為這是對外品牌名稱，不該由實作端自行決定。
 */
export function getLegalName(locale: string): string {
  return locale === "en" ? "TNO Inc." : "欣展金屬工業有限公司";
}

/**
 * 首頁標題（透過 title.absolute 覆蓋 layout 的預設）
 *
 * 2026-10-22 中文版補上「金屬工業」。原本是「TNO 欣展｜船舶改裝維修的最強後盾」，
 * 珈汶指出台灣客戶搜的是公司全名——而「欣展金屬」「欣展金屬工業」當時在標題裡
 * 一個字都沒有，搜這兩組字官網進不了第一頁（對手全是 104、商工登記、台灣公司網
 * 這類公司資料庫，每個都比新網域資深）。
 *
 * 用「欣展金屬工業」而不是「欣展金屬」：前者把後者整個包含在內，兩組查詢都命中。
 * 不加「有限公司」：對搜尋沒有額外幫助（沒人只搜這四個字），但會讓標題從品牌
 * 變成公文抬頭。登記全名已在 structuredData 的 legalName 與 footer logo 的 alt。
 *
 * 長度不是限制——實際量過，Google 桌機標題約 600px 才截斷，這句 408px，
 * 連加上「有限公司」的 488px 都還有餘裕。
 *
 * 涵蓋珈汶指定的關鍵字：欣展 / 金屬 / 工業 / TNO（搜尋不分大小寫，tno 同樣命中）。
 *
 * 內頁後綴維持 getSiteName 的「TNO 欣展船舶」，負責「欣展 船」「欣展 維修」
 * 那幾組字——全部改成金屬會丟掉船舶的相關性，而船舶才是主要業務。
 */
export function getSiteTitle(locale: string): string {
  return locale === "en"
    ? "TNO | Your Strongest Support in Ship Retrofit & Maintenance"
    : "TNO 欣展金屬工業｜船舶改裝維修的最強後盾";
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
