import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Suspense } from "react";
import { getProductSummaries, getAllCategories } from "@/content/products";
import ProductGrid from "@/components/product/ProductGrid";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("product.meta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/product" },
  };
}

export default async function ProductListPage() {
  const t = await getTranslations("product");
  const products = getProductSummaries();
  const categories = getAllCategories();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] md:h-[420px] overflow-hidden bg-black">
        <Image
          src="/images/products/hero.webp"
          alt={t("hero.title")}
          fill
          className="object-cover opacity-50"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAMABUB8JZgCdAD0bVroAP6/fH+rWv4vwhzPbo3mEAQAAAA="
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-[60px] h-full flex flex-col justify-center">
          <h1 className="text-[36px] md:text-[60px] font-extrabold md:leading-[75px] text-white mb-4 max-w-[771px]">
            {t("hero.title")}
          </h1>
          <p className="text-white text-base md:text-[20px] md:leading-[30px] max-w-[722px]">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-page py-8 md:pt-[48px] md:pb-[100px]">
        <div className="max-w-[1700px] mx-auto px-6 md:px-[60px]">
          <Suspense>
            <ProductGrid products={products} categories={categories} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
