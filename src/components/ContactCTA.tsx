import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface ContactCTAProps {
  bgImage?: string;
  locale?: string;
}

export default async function ContactCTA({
  bgImage = "/images/home/contacCTA_bg.webp",
  locale,
}: ContactCTAProps) {
  const t = locale
    ? await getTranslations({ locale, namespace: "home.contactCTA" })
    : await getTranslations("home.contactCTA");
  return (
    <section className="relative h-[420px] md:h-[696px] overflow-hidden bg-black flex items-center justify-center">
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover opacity-70"
      />
      <div className="relative z-10 text-center px-6 max-w-[900px] mx-auto">
        <p className="text-white font-bold text-base md:text-[22px] mb-3 md:mb-4">{t("tagline")}</p>
        <h2 className="text-[28px] md:text-[54px] font-semibold text-white leading-tight mb-6 md:mb-10">
          {t("title1")}<br />
          {t("title2")}
        </h2>
        <Button href="/contact" variant="primary">{t("cta")}</Button>
      </div>
    </section>
  );
}
