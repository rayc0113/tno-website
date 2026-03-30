import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProductSummaries, getAllCategories } from "@/content/products";

export const metadata: Metadata = {
  title: "精選產品",
  description:
    "欣展代理多款通過國際認證的船舶材料，包括防腐塗料、甲板鋪面材料、船艙內裝套件等，品質有保障。",
  alternates: { canonical: "/product" },
};

export default function ProductListPage() {
  const products = getProductSummaries();
  const categories = getAllCategories();

  return (
    <>
      {/* Page Header */}
      <section className="py-24 bg-[#0A1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-white transition-colors">首頁</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">精選產品</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">精選產品</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            嚴選國際認證材料，每項產品皆通過嚴格品質驗證，為您的船舶提供最可靠的保護。
          </p>
        </div>
      </section>

      {/* Category Filter - can be enhanced with client-side filtering */}
      <section className="border-b border-white/10 bg-[#0A1520] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 py-4 overflow-x-auto text-sm">
            <span className="text-white font-medium whitespace-nowrap cursor-pointer">全部</span>
            {categories.map((category) => (
              <span
                key={category}
                className="text-white/50 hover:text-white whitespace-nowrap cursor-pointer transition-colors duration-200"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/product/${product.slug}`}
                className="group block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#4DA3D4]/40 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="relative h-52 bg-white/5">
                  <Image
                    src={product.coverImage}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-[#4DA3D4] mb-2 block">{product.category}</span>
                  <h2 className="font-semibold text-lg mb-2 group-hover:text-[#4DA3D4] transition-colors duration-200">
                    {product.name}
                  </h2>
                  <p className="text-white/60 text-sm line-clamp-3">{product.shortDescription}</p>
                  <div className="mt-4 text-[#4DA3D4] text-sm font-medium">
                    查看詳情 →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
