import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="bg-navy text-white/80">
      <div className="w-full px-6 md:px-[60px] py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Brand + Contact */}
          <div>
            <Link href="/" className="block mb-6">
              <Image
                src="/images/common/logo_fullname.svg"
                alt="TNO 欣展"
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
                <span>高雄市仁武區鳳仁路307巷68號</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 opacity-50">
                  <path d="M13 10.5c0 .28-.06.55-.19.8l-.6 1.2c-.16.31-.4.56-.7.72A2 2 0 0 1 10.5 13C5.25 13 1 8.75 1 3.5c0-.36.08-.72.22-1.01.15-.31.4-.57.7-.73l1.2-.6c.25-.12.52-.16.8-.12.27.04.52.17.7.37l2 2.5c.2.24.28.55.22.85l-.5 2 2 2 2-.5c.3-.07.6.01.85.22l2.5 2c.2.18.33.43.37.7.04.27 0 .54-.12.79z" stroke="currentColor" strokeWidth="1.1"/>
                </svg>
                <a href="tel:07-3717521" className="hover:text-white transition-colors">07-3717521</a>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 opacity-50">
                  <rect x="1" y="2" width="13" height="10" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M4 5h2M4 8h2M9 5h2M9 8h2M6 11v2M9 11v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <span>07-3711073</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 opacity-50">
                  <rect x="1" y="3" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1 4l6.5 4.5L14 4" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <a href="mailto:tno.tw@msa.hinet.net" className="hover:text-white transition-colors">tno.tw@msa.hinet.net</a>
              </div>
            </address>
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
                <li><Link href="/product" className="text-sm hover:text-white transition-colors duration-200">{t("products")}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-medium mb-4">{t("cases")}</h3>
              <ul className="space-y-3">
                <li><Link href="/case" className="text-sm hover:text-white transition-colors duration-200">{t("cases")}</Link></li>
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
