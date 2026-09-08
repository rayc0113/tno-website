/**
 * 結構化資料（JSON-LD）
 *
 * 建立於 2026-09-08。在此之前全站只有產品內頁（Product）與案例內頁（Article）
 * 兩支 schema，六個主要頁面完全沒有結構化資料——也就是 Google 手上沒有 TNO 的
 * 公司實體資料（名稱、地址、電話、成立年份）。對一家高雄的 B2B 廠商來說，
 * 「高雄 船舶改裝」這類地區性搜尋很依賴這份資料。
 *
 * ⚠️ 只寫得出確實掌握的事實。以下欄位刻意留空，不臆測：
 *    - geo（經緯度）：手上沒有座標，寧可不寫也不要放錯的位置
 *    - openingHoursSpecification：不知道實際營業時間
 *    - taxID（統一編號）：未取得
 *    - sameAs 只放 LINE 官方帳號，因為 TNO 目前沒有其他官方社群
 *    這幾項補上會讓地區搜尋更完整，可向 TNO 索取。
 *
 * ⚠️ 名稱不一致待確認：站上目前有三種英文寫法——siteName 用 "TNO Marine"、
 *    頁尾版權用 "TNO Inc."、關於我們內文用 "TNO Metal"。Google 認實體時
 *    希望名稱一致，建議請 TNO 定一個對外英文名稱後統一。此處先以 CLAUDE.md
 *    記載的登記名稱作為 legalName，name 沿用各語系頁面現有的寫法。
 */

const PHONE = "+886-7-3717521";
const FAX = "+886-7-3711073";
const EMAIL = "tno.tw@msa.hinet.net";
const LINE_URL = "https://line.me/R/ti/p/@252zcdqr";
const LEGAL_NAME = "TNO 欣展有限公司";
const FOUNDING_YEAR = "2016";

/** 供其他 schema 以 @id 指向同一個公司實體，避免 Google 認成多家公司 */
export function organizationId(siteUrl: string): string {
  return `${siteUrl}/#organization`;
}

/**
 * 公司實體（LocalBusiness）
 *
 * 用 LocalBusiness 而非 Organization：LocalBusiness 是 Organization 的子類，
 * 涵蓋 Organization 的所有欄位，另外還能帶地址與電話進地區搜尋結果。
 */
export function getOrganizationSchema(locale: string, siteUrl: string) {
  const isEn = locale === "en";
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": organizationId(siteUrl),
    name: isEn ? "TNO Metal" : "TNO 欣展有限公司",
    legalName: LEGAL_NAME,
    alternateName: isEn ? ["TNO", "TNO Marine"] : ["TNO 欣展", "欣展"],
    url: `${siteUrl}/${locale}`,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/common/logo_fullname.svg`,
    },
    image: `${siteUrl}/images/home/hero.webp`,
    description: isEn
      ? "TNO delivers ship retrofit, marine repair, and naval outfitting, with in-house metal fabrication and stainless steel kitchen manufacturing. Based in Kaohsiung, Taiwan since 2016."
      : "欣展提供船舶改裝、船舶維修與海軍艤裝工程，並自有工廠承製金屬加工與不鏽鋼廚具。2016 年成立於高雄。",
    foundingDate: FOUNDING_YEAR,
    telephone: PHONE,
    faxNumber: FAX,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: isEn
        ? "No. 8-1, Lane 436, Zhongzheng Rd."
        : "文武里中正路436巷8之1號",
      addressLocality: isEn ? "Renwu District" : "仁武區",
      addressRegion: isEn ? "Kaohsiung City" : "高雄市",
      postalCode: "814",
      addressCountry: "TW",
    },
    areaServed: {
      "@type": "Country",
      name: isEn ? "Taiwan" : "臺灣",
    },
    knowsLanguage: ["zh-TW", "en"],
    sameAs: [LINE_URL],
  };
}

/**
 * 麵包屑
 *
 * 產品／案例內頁畫面上本來就有「首頁 / 產品 / 品項名」，但沒有對應的結構化
 * 資料，搜尋結果因此顯示原始網址而非這條路徑。items 傳入不含首頁的層級即可，
 * 首頁會自動補在最前面。
 */
export function getBreadcrumbSchema(
  locale: string,
  siteUrl: string,
  items: { name: string; path: string }[]
) {
  const home = { name: locale === "en" ? "Home" : "首頁", path: "" };
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [home, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}/${locale}${item.path}`,
    })),
  };
}
