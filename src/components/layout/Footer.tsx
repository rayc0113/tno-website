import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getAllCategories } from "@/content/products";
import { getAllCaseCategories } from "@/content/cases";
import { getCategorySlug } from "@/lib/categories";
import { LINE_ACCOUNT } from "@/lib/lineAccount";

export default async function Footer({ locale }: { locale?: string } = {}) {
  const t = locale
    ? await getTranslations({ locale, namespace: "footer" })
    : await getTranslations("footer");
  const tc = locale
    ? await getTranslations({ locale, namespace: "categories" })
    : await getTranslations("categories");
  const productCategories = getAllCategories();
  const caseCategories = getAllCaseCategories();
  const translateCategory = (cat: string) => (tc.has(cat) ? tc(cat) : cat);

  return (
    <footer className="bg-navy text-white/80">
      <div className="w-full px-6 md:px-[60px] py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Brand + Contact + LINE */}
          <div>
            <Link href="/" className="block mb-6">
              {/* alt 用公司全名：這張 SVG 畫的就是 logo 加「欣展金屬工業有限公司」
                  一行字，但那是圖，爬蟲讀不到。台灣客戶搜的是「欣展金屬」
                  「欣展金屬工業」，而登記全名原本在全站可讀文字裡一次都沒出現過
                  （2026-10-21 珈汶指出）。alt 寫全名既符合圖的內容，也補上缺口。 */}
              <Image
                src="/images/common/logo_fullname.svg"
                alt={t("companyName")}
                width={149}
                height={60}
                className="h-[60px] w-auto"
              />
            </Link>
            <address className="not-italic space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="mt-0.5 flex-shrink-0 opacity-50">
                  <path d="M7.5 1C5.01 1 3 3.01 3 5.5c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5C12 3.01 9.99 1 7.5 1z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7.5" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <span>{t("address")}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 opacity-50">
                  <path d="M13 10.5c0 .28-.06.55-.19.8l-.6 1.2c-.16.31-.4.56-.7.72A2 2 0 0 1 10.5 13C5.25 13 1 8.75 1 3.5c0-.36.08-.72.22-1.01.15-.31.4-.57.7-.73l1.2-.6c.25-.12.52-.16.8-.12.27.04.52.17.7.37l2 2.5c.2.24.28.55.22.85l-.5 2 2 2 2-.5c.3-.07.6.01.85.22l2.5 2c.2.18.33.43.37.7.04.27 0 .54-.12.79z" stroke="currentColor" strokeWidth="1.1"/>
                </svg>
                {/* Tel: / Fax: 用英文縮寫不進 i18n——兩個號碼都是 07 開頭八碼、icon 又小，
                    沒有文字標示容易誤打傳真號碼；這兩個縮寫各語言通用，不需翻譯 */}
                <span>Tel: <a href="tel:07-3717521" className="hover:text-white transition-colors">07-3717521</a></span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 opacity-50">
                  <rect x="1" y="2" width="13" height="10" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M4 5h2M4 8h2M9 5h2M9 8h2M6 11v2M9 11v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <span>Fax: 07-3711073</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 opacity-50">
                  <rect x="1" y="3" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1 4l6.5 4.5L14 4" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <a href="mailto:tno.tw@msa.hinet.net" className="hover:text-white transition-colors">tno.tw@msa.hinet.net</a>
              </div>
            </address>

            {/* LINE 官方帳號
                疊在聯絡資訊下方、不是並排——白框左緣與 logo、地址 icon 同一條
                左邊界，讀起來是這一欄的延續而不是插進去的區塊。並排會讓左欄
                出現第二條邊界，變成 L 形（2026-10-16 比稿後由珈汶定案）。

                欄寬取「地址寬」與「本區塊寬」的最大值，英文長地址本來就比較寬，
                所以這個版本不會壓縮右側導覽欄——英文導覽欄需要 665px，被壓到
                就會整排折行。

                QR 本身也是連結：手機掃不了自己螢幕上的 QR，點一下直接開 LINE。

                外層用 bg-black/20 疊在 bg-navy 上做出更深一階的藍，加 white/10
                細邊框——把 QR 與右側文字收成同一塊，右邊才不會看起來空空的
                （2026-10-16 珈汶回饋）。

                行動版不出血：左右各留 24px 與外層容器同一條邊界，底色不貼到
                螢幕邊緣（2026-10-16 珈汶看過滿版後決定留 padding）。

                max-w 只在 md 以上生效——行動版讓它撐滿欄寬（327px），
                桌機固定 360px（依珈汶 2026-10-20 的 Figma 稿）——不用 max-w 是
                因為中文內容只撐到 330，兩個語系寬度會不一致；英文則會被長地址
                撐到 488，兩邊都要靠固定寬度才對得齊。 */}
            {LINE_ACCOUNT.qrImage && (
              <div className="mt-8 flex items-center gap-4 rounded-2xl bg-black/25 p-4 md:p-5 md:w-[360px]">
                <a
                  href={LINE_ACCOUNT.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 rounded-xl bg-white p-2 transition-transform duration-200 hover:scale-[1.03]"
                >
                  <Image
                    src={LINE_ACCOUNT.qrImage}
                    unoptimized
                    alt={t("line")}
                    width={104}
                    height={104}
                    className="rounded-md w-[80px] h-[80px] md:w-[96px] md:h-[96px]"
                  />
                </a>
                <div>
                  <p className="text-[15px] font-semibold text-white">{t("line")}</p>
                  <p className="text-sm text-white/70 mt-1.5">{t("lineHint")}</p>
                  <a
                    href={LINE_ACCOUNT.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1.5 text-sm text-brand-light hover:text-white transition-colors duration-200"
                  >
                    {LINE_ACCOUNT.id}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-2 md:flex md:gap-20 lg:gap-40 md:mr-[80px] gap-x-8 gap-y-8">
            <div>
              <h3 className="text-white text-sm font-medium mb-4">{t("company")}</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-sm hover:text-white transition-colors duration-200">{t("about")}</Link></li>
                <li><Link href="/service" className="text-sm hover:text-white transition-colors duration-200">{t("service")}</Link></li>
                <li><Link href="/contact" className="text-sm hover:text-white transition-colors duration-200">{t("contact")}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-medium mb-4">{t("products")}</h3>
              <ul className="space-y-3">
                {productCategories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/product?category=${getCategorySlug(cat)}`}
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {translateCategory(cat)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-medium mb-4">{t("cases")}</h3>
              <ul className="space-y-3">
                {caseCategories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/case?category=${getCategorySlug(cat)}`}
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {translateCategory(cat)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-xs text-center text-white/30">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
