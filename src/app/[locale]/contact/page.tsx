import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import ContactForm from "./ContactForm";

interface Props { params: Promise<{ locale: string }> }

/**
 * LINE 官方帳號 QR Code
 *
 * ⚠️ 2026-07-24 會議決議新增，圖片待欣展提供（見 materials/06-聯絡我們-LINE-QR）。
 * 素材到位後：圖片放至 /public/images/contact/line-qr.webp，
 * 並將此常數改為 "/images/contact/line-qr.webp"，區塊就會自動顯示。
 */
const LINE_QR_IMAGE: string | null = null;

const CONTACT_INFO = {
  phone: "07-3717521",
  fax: "07-3711073",
  email: "tno.tw@msa.hinet.net",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact.meta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { "zh-TW": "/zh/contact", "en": "/en/contact" },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tf = await getTranslations("footer");

  return (
    <>
      {/* Hero */}
      <section className="relative h-[120px] md:h-[180px] flex items-center justify-center">
        <Image
          src="/images/contact/hero.webp"
          alt={t("title")}
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAABwAQCdASoIAAMABUB8JaACdAFAAAD+7Nm8ObqAbnxVuQXUaTP673pa4GgAAA=="
        />
        <div className="absolute inset-0 bg-[#071018]/60" />
      </section>

      {/* Contact section */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-start">
              <h2 className="text-[40px] font-bold text-title mb-5">{t("title")}</h2>
              <p className="text-body leading-relaxed">
                {t("description1")}<br />
                {t("description2")}
              </p>

              {/* 聯絡資訊 */}
              <dl className="mt-10 space-y-5 border-t border-surface pt-8">
                <div>
                  <dt className="text-[14px] font-semibold text-muted mb-1">{t("info.address")}</dt>
                  <dd className="text-body">{tf("address")}</dd>
                </div>
                <div>
                  <dt className="text-[14px] font-semibold text-muted mb-1">{t("info.phone")}</dt>
                  <dd className="text-body">
                    <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[14px] font-semibold text-muted mb-1">{t("info.fax")}</dt>
                  <dd className="text-body">{CONTACT_INFO.fax}</dd>
                </div>
                <div>
                  <dt className="text-[14px] font-semibold text-muted mb-1">{t("info.email")}</dt>
                  <dd className="text-body">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </dd>
                </div>
              </dl>

              {/* LINE 官方帳號（QR Code 到位前不顯示） */}
              {LINE_QR_IMAGE && (
                <div className="mt-8 flex items-center gap-5">
                  <Image
                    src={LINE_QR_IMAGE}
                    alt={t("info.line")}
                    width={120}
                    height={120}
                    className="rounded-lg border border-surface"
                  />
                  <div>
                    <p className="text-[14px] font-semibold text-muted mb-1">{t("info.line")}</p>
                    <p className="text-body">{t("info.lineHint")}</p>
                  </div>
                </div>
              )}
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
