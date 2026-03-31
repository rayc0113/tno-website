"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProductSummary } from "@/types/product";

interface Props {
  products: ProductSummary[];
  categories: string[];
}

export default function ProductGrid({ products, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("全部");

  const filtered =
    activeCategory === "全部"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12">
        {["全部", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-base font-semibold transition-colors duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-brand-deep text-white"
                : "bg-surface text-body hover:bg-brand-light/20 hover:text-brand-deep"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="group block"
          >
            <div className="relative aspect-square bg-surface rounded-2xl overflow-hidden mb-4">
              <Image
                src={product.coverImage}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-xs font-semibold text-brand-deep uppercase tracking-wider">
              {product.category}
            </span>
            <h2 className="text-title font-bold text-[18px] mt-1 group-hover:text-brand transition-colors duration-200">
              {product.name}
            </h2>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-body">
          <p>此分類暫無產品</p>
        </div>
      )}
    </div>
  );
}
