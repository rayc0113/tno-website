import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default async function HomeBrandCTA() {
  const t = await getTranslations("home.brandCTA");
  return (
    <section className="py-20 md:py-[200px] text-center relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/images/home/brandCTA_bg.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-[60px]">
        <h2 className="text-[32px] md:text-[54px] font-bold text-title mb-4 md:mb-6 max-w-[788px] mx-auto leading-tight">
          {t("title1")}
          <br />
          {t("title2")}
        </h2>
        <p className="text-body text-[18px] md:text-[24px] mb-8 md:mb-10 mx-auto leading-relaxed">
          {t("description1")}
          <br className="hidden md:block" />
          {t("description2")}
        </p>
        <Button href="/about">{t("cta")}</Button>
        <div className="flex items-center justify-center gap-2 mt-6">
          <Image
            src="/images/home/brandCTA_logo.webp"
            alt="ISO 9001:2015 certified"
            width={98}
            height={50}
            className="object-contain"
          />
          <p className="text-muted text-xs max-w-[373px] text-left">
            ISO 9001:2015 certified — Certified by URS, accredited by UKAS
          </p>
        </div>
      </div>
    </section>
  );
}
