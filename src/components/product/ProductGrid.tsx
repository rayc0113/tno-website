"use client";

import { useRef } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { ProductSummary } from "@/types/product";

interface Props {
  products: ProductSummary[];
  categories: string[];
}

export default function ProductGrid({ products, categories }: Props) {
  const t = useTranslations("product");
  const tc = useTranslations("categories");
  const translateCategory = (cat: string) => (tc.has(cat) ? tc(cat) : cat);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const searchCat = searchParams.get("category");
  const activeCategory = searchCat && categories.includes(searchCat) ? searchCat : "all";

  function handleCategoryChange(cat: string) {
    const url = cat === "all" ? pathname : `${pathname}?category=${encodeURIComponent(cat)}`;
    router.push(url, { scroll: false });
    if (wrapperRef.current) {
      const top = wrapperRef.current.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const categoryCounts = products.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div ref={wrapperRef}>
      {/* Category Filter */}
      <div className="sticky top-[70px] z-30 bg-page flex flex-nowrap md:flex-wrap gap-3 mb-6 md:mb-12 overflow-x-auto md:overflow-x-visible py-3 -mx-6 px-6 md:mx-0 md:px-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {["all", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`flex-shrink-0 px-5 py-2 rounded-full text-base font-semibold transition-colors duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-brand-deep text-white"
                : "bg-surface text-body hover:bg-brand-light/20 hover:text-brand-deep"
            }`}
          >
            {cat === "all" ? t("filter.all") : `${translateCategory(cat)} (${categoryCounts[cat] ?? 0})`}
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
            <div className="bg-surface rounded-2xl overflow-hidden mb-4">
              <Image
                src={product.listImage}
                alt={product.name}
                width={600}
                height={600}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-base font-semibold text-brand-deep uppercase tracking-wider">
              {translateCategory(product.category)}
            </span>
            <h2 className="text-title font-bold text-[20px] mt-1 group-hover:text-brand transition-colors duration-200">
              {product.name}
            </h2>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-body">
          <p>{t("empty")}</p>
        </div>
      )}
    </div>
  );
}
