import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about.meta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/about" },
  };
}

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[800px] bg-black overflow-hidden">
        <Image
          src="/images/about/hero.webp"
          alt={t("hero.title1")}
          fill
          className="object-cover opacity-60"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAADQAQCdASoIAAUABUB8JZQCdADdIk8cAAD+Fa5mMV0jJywoAAA="
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-[60px] h-full flex flex-col justify-center">
          <h1 className="text-[36px] leading-[46px] md:text-[60px] font-extrabold md:leading-[75px] text-white mb-4 md:mb-5">
            {t("hero.title1")}<br />
            {t("hero.title2")}
          </h1>
          <p className="text-white text-[18px] md:text-[22px] md:leading-[34px] max-w-[722px]">
            {t("hero.description1")}<br />
            {t("hero.description2")}
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 md:pt-[140px] md:pb-[140px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <h2 className="text-[28px] md:text-[40px] font-bold text-title text-center mb-4 md:mb-6">
            {t("team.title")}
          </h2>
          <p className="text-body text-[18px] md:text-[22px] text-center leading-[1.8] mb-10 md:mb-[64px] max-w-[988px] mx-auto">
            {t("team.description1")}
            {t("team.description2")}<br /><br />
            {t("team.description3")}
            {t("team.description4")}
          </p>

          <div className="flex flex-col md:flex-row md:h-[512px] gap-2 md:gap-1">
            <div className="relative h-[260px] md:h-auto md:w-[594px] flex-shrink-0 md:order-2 rounded-[20px] md:rounded-l-none md:rounded-r-[24px] overflow-hidden">
              <Image
                src="/images/about/about-teams.webp"
                alt={t("team.teamAlt")}
                fill
                sizes="(max-width: 768px) 100vw, 594px"
                className="object-cover"
              />
            </div>
            <div className="relative h-[260px] md:h-auto flex-1 md:order-1 rounded-[20px] md:rounded-r-none md:rounded-l-[24px] overflow-hidden">
              <Image
                src="/images/about/about-company.webp"
                alt={t("team.companyAlt")}
                fill
                sizes="(max-width: 768px) 100vw, calc(100vw - 714px)"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 信念 */}
      <section className="bg-white py-16 md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] flex flex-col md:flex-row md:items-start gap-10 md:gap-0">
          <div className="flex-1 flex flex-col md:pt-[27px] md:pr-10">
            <p className="text-brand text-[18px] md:text-[22px] font-semibold mb-3 md:mb-4">{t("belief.label")}</p>
            <h2 className="text-[28px] md:text-[40px] font-bold text-title leading-tight mb-4 md:mb-6">
              {t("belief.title")}
            </h2>
            <p className="text-body text-[18px] md:text-[22px] leading-[1.8]">
              {t("belief.description1")}<br />
              {t("belief.description2")}<br />
              {t("belief.description3")}<br />
              {t("belief.description4")}<br />
              {t("belief.description5")}
            </p>
          </div>
          <div className="relative w-full md:w-[640px] h-[300px] md:h-[488px] flex-shrink-0">
            <div className="absolute left-[24px] top-[36px] right-0 bottom-0 bg-sky rounded-[24px]" />
            <div className="absolute left-0 top-0 right-[24px] bottom-[36px] rounded-[24px] overflow-hidden">
              <Image src="/images/about/about-belief.webp" alt={t("belief.imageAlt")} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 專業 */}
      <section className="bg-white py-16 md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] flex flex-col-reverse md:flex-row md:items-start gap-10 md:gap-0">
          <div className="relative w-full md:w-[640px] h-[300px] md:h-[488px] flex-shrink-0">
            <div className="absolute left-0 top-[36px] right-[24px] bottom-0 bg-sky-light rounded-[24px]" />
            <div className="absolute left-[24px] top-0 right-0 bottom-[36px] rounded-[24px] overflow-hidden">
              <Image src="/images/about/about-expertise.webp" alt={t("expertise.imageAlt")} fill className="object-cover" />
            </div>
          </div>
          <div className="flex-1 flex flex-col md:pt-[27px] md:pl-10">
            <p className="text-brand text-[18px] md:text-[22px] font-semibold mb-3 md:mb-4">{t("expertise.label")}</p>
            <h2 className="text-[28px] md:text-[40px] font-bold text-title leading-tight mb-4 md:mb-6">
              {t("expertise.title1")}<br />
              {t("expertise.title2")}
            </h2>
            <p className="text-body text-[18px] md:text-[22px] leading-[1.8]">
              {t("expertise.description1")}<br />
              {t("expertise.description2")}<br />
              {t("expertise.description3")}<br />
              <br />
              {t("expertise.description4")}<br />
              {t("expertise.description5")}
            </p>
          </div>
        </div>
      </section>

      {/* 國際認證 */}
      <section className="bg-white py-16 md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="text-center mb-10 md:mb-[80px]">
            <h2 className="text-[28px] md:text-[40px] font-bold text-title mb-4 md:mb-6">
              {t("certification.title")}
            </h2>
            <p className="text-body text-[18px] md:text-[22px] leading-[1.8] max-w-[720px] mx-auto">
              {t("certification.description1")}<br className="hidden md:block" />
              {t("certification.description2")}<br className="hidden md:block" />
              {t("certification.description3")}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-[160px] items-center md:items-start gap-10">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative w-[160px] h-[216px] md:w-[194px] md:h-[263px]">
                <Image
                  src="/images/about/about-certificate.webp"
                  alt={t("certification.isoAlt")}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-body text-base md:text-[18px] text-center mt-4 leading-relaxed">
                {t("certification.isoCaption")}
              </p>
            </div>

            <div className="flex-1 flex flex-col w-full items-center md:items-start">
              <div className="relative w-full h-[160px] md:h-[216px]">
                <Image
                  src="/images/about/about-certification-logos.webp"
                  alt={t("certification.logosAlt")}
                  fill
                  className="object-contain object-center md:object-left"
                />
              </div>
              <p className="text-body text-base md:text-[18px] mt-4 leading-relaxed text-center md:text-left">
                {t("certification.logosCaption")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
