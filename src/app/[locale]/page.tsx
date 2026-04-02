import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getHomeFeaturedProducts } from "@/content/products";
import { getCaseSummaries } from "@/content/cases";
import HomeHero from "@/components/home/HomeHero";
import HomeCertifications from "@/components/home/HomeCertifications";
import HomeServices from "@/components/home/HomeServices";
import HomeProducts from "@/components/home/HomeProducts";
import HomeWhyChoose from "@/components/home/HomeWhyChoose";
import HomeCases from "@/components/home/HomeCases";
import HomeBrandCTA from "@/components/home/HomeBrandCTA";
import ContactCTA from "@/components/ContactCTA";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home.hero");
  return {
    title: { absolute: "TNO 欣展｜船舶裝修全方位領導品牌" },
    description: t("description"),
    alternates: { canonical: "/" },
  };
}

export default function HomePage() {
  const products = getHomeFeaturedProducts();
  const cases = getCaseSummaries();

  return (
    <>
      <HomeHero />
      <HomeCertifications />
      <HomeServices />
      <HomeProducts products={products} />
      <HomeWhyChoose />
      <HomeCases cases={cases} />
      <HomeBrandCTA />
      <ContactCTA />
    </>
  );
}
