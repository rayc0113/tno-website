import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "TNO 欣展｜船舶裝修全方位領導品牌",
  description:
    "從材料到設計製造，欣展是船舶裝修的全方位領導品牌。深耕十多年專業經驗，提供代理銷售、產品製造、設計規劃、各式代工等服務，通過 ABS、ClassNK 等國際認證。",
  alternates: { canonical: "/" },
};

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
