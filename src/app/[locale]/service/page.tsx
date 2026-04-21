import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("service.meta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/service`,
      languages: { "zh-TW": "/zh/service", "en": "/en/service" },
    },
  };
}

const serviceIds = ["material", "manufacturing", "design", "processing"] as const;
const serviceImages = [
  "/images/service/services_img1.webp",
  "/images/service/services_img2.webp",
  "/images/service/services_img3.webp",
  "/images/service/services_img4.webp",
];
const serviceCtas = ["/contact", "/product", "/contact", "/contact"];
const serviceImageRight = [true, false, true, false];

export default async function ServicePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("service");

  const services = serviceIds.map((id, i) => ({
    id,
    category: t(`items.${id}.category`),
    title: t(`items.${id}.title`),
    description: t(`items.${id}.description`),
    cta: t(`items.${id}.cta`),
    ctaHref: serviceCtas[i],
    image: serviceImages[i],
    imageRight: serviceImageRight[i],
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] md:h-[800px] overflow-hidden">
        <Image
          src="/images/service/hero.webp"
          alt={t("hero.title")}
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoIAAUABUB8JZwAA3AA/tr3XSSpR+0IAAA="
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-[60px] h-full flex flex-col justify-center">
          <h1 className="text-[36px] leading-[46px] md:text-[60px] font-extrabold md:leading-[75px] text-white mb-4 max-w-[771px]">
            {t("hero.title")}
          </h1>
          <p className="text-white text-[18px] md:text-[22px] md:leading-[34px] max-w-[722px]">
            {t("hero.description1")}<br />
            {t("hero.description2")}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-[120px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] text-center">
          <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.4] mb-4 md:mb-6 text-title">
            {t("intro.title1")}<br />
            {t("intro.title2")}
          </h2>
          <p className="text-body text-[18px] md:text-[22px] leading-[1.8] max-w-[714px] mx-auto">
            {t("intro.description1")}<br className="hidden md:block" />
            {t("intro.description2")}
          </p>
        </div>
      </section>

      {/* Service Items */}
      <section className="bg-white pt-4 pb-16 md:pb-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] space-y-16 md:space-y-40">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row md:items-stretch md:min-h-[430px] gap-8 md:gap-10 ${service.imageRight ? "" : "md:flex-row-reverse"}`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col justify-center md:py-[40px]">
                <p className="text-brand-deep text-[18px] md:text-[22px] font-bold mb-3 md:mb-4">
                  {service.category}
                </p>
                <h3 className="text-[26px] md:text-[40px] font-bold leading-tight mb-4 md:mb-6 text-title">
                  {service.title}
                </h3>
                <p className="text-body text-[18px] md:text-[22px] leading-[1.8] mb-6 md:mb-8 max-w-[497px]">
                  {service.description}
                </p>
                <div>
                  <Button href={service.ctaHref} variant="primary">
                    {service.cta}
                  </Button>
                </div>
              </div>
              {/* Image */}
              <div className="w-full h-[260px] md:w-[700px] md:h-auto flex-shrink-0 relative rounded-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-[120px] bg-gradient-to-br from-brand-deep to-brand-light text-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <h2 className="text-[28px] md:text-[40px] font-bold mb-8 md:mb-[40px] text-white">
            {t("cta.title")}
          </h2>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="white">{t("cta.contact")}</Button>
            <Button href="/case" variant="outline">{t("cta.cases")}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
