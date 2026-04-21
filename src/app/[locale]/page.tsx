import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getHomeFeaturedProducts, getHomeFeaturedCases } from "@/content/homeConfig";
import HomeHero from "@/components/home/HomeHero";
import HomeCertifications from "@/components/home/HomeCertifications";
import HomeServices from "@/components/home/HomeServices";
import HomeProducts from "@/components/home/HomeProducts";
import HomeWhyChoose from "@/components/home/HomeWhyChoose";
import HomeCases from "@/components/home/HomeCases";
import HomeBrandCTA from "@/components/home/HomeBrandCTA";
import ContactCTA from "@/components/ContactCTA";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home.hero");
  const isEn = locale === "en";
  return {
    title: {
      absolute: isEn
        ? "TNO | Complete Marine Interior Solution"
        : "TNO 欣展｜船舶裝修全方位領導品牌",
    },
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: { "zh-TW": "/zh", "en": "/en" },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const products = getHomeFeaturedProducts(locale);
  const cases = getHomeFeaturedCases(locale);

  return (
    <>
      <HomeHero />
      <HomeCertifications locale={locale} />
      <HomeServices locale={locale} />
      <HomeProducts products={products} />
      <HomeWhyChoose />
      <HomeCases cases={cases} locale={locale} />
      <HomeBrandCTA locale={locale} />
      <ContactCTA locale={locale} />
    </>
  );
}
