import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { getProductSummaries, getAllCategories } from "@/content/products";
import ProductGrid from "@/components/product/ProductGrid";

export const metadata: Metadata = {
  title: "精選產品",
  description:
    "欣展代理多款通過國際認證的船舶材料，包括隔熱絕緣材料、金屬隔間板、船用設備等，品質可靠、服務專業。",
  alternates: { canonical: "/product" },
};

export default function ProductListPage() {
  const products = getProductSummaries();
  const categories = getAllCategories();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden bg-black">
        <Image
          src="/images/products/hero.webp"
          alt="TNO 欣展精選產品"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-[60px] h-full flex flex-col justify-center">
          <h1 className="text-[60px] font-extrabold leading-[75px] text-white mb-4 max-w-[771px]">
            多元船舶材料
          </h1>
          <p className="text-white text-[20px] leading-[30px] max-w-[722px]">
            從國際認證的隔熱材到艙裝系統，我們提供全方位解決方案。
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-page py-[100px]">
        <div className="max-w-[1700px] mx-auto px-[60px]">
          <Suspense>
            <ProductGrid products={products} categories={categories} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
