"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { CaseSummary } from "@/types/case";

interface Props {
  cases: CaseSummary[];
  categories: string[];
}

export default function CaseGrid({ cases, categories }: Props) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>(() => {
    const cat = searchParams.get("category");
    return cat && categories.includes(cat) ? cat : "全部";
  });

  useEffect(() => {
    const cat = searchParams.get("category");
    setActiveCategory(cat && categories.includes(cat) ? cat : "全部");
  }, [searchParams, categories]);

  const filtered =
    activeCategory === "全部"
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  const categoryCounts = cases.reduce<Record<string, number>>((acc, c) => {
    acc[c.category] = (acc[c.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      {/* Category Filter */}
      <div className="sticky top-[70px] z-30 bg-page md:static md:bg-transparent flex gap-3 mb-6 md:mb-12 overflow-x-auto py-3 md:py-0 -mx-6 px-6 md:mx-0 md:px-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {["全部", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-5 py-2 rounded-full text-base font-semibold transition-colors duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-brand-deep text-white"
                : "bg-surface text-body hover:bg-brand-light/20 hover:text-brand-deep"
            }`}
          >
            {cat === "全部" ? "全部案例" : `${cat} (${categoryCounts[cat] ?? 0})`}
          </button>
        ))}
      </div>

      {/* Case Grid — 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((caseItem) => (
          <Link
            key={caseItem.slug}
            href={`/case/${caseItem.slug}`}
            className="group block"
          >
            {/* Cover Image */}
            <div className="relative h-[253px] bg-surface rounded-[15px] overflow-hidden mb-4">
              <Image
                src={caseItem.coverImage}
                alt={caseItem.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Card Info */}
            <span className="text-base font-semibold text-brand-deep uppercase tracking-wider">
              {caseItem.category}
            </span>
            <h2 className="text-title font-semibold text-[20px] mt-1 group-hover:text-brand transition-colors duration-200">
              {caseItem.title}
            </h2>
            <p className="text-body text-[16px] mt-1 line-clamp-2">
              {caseItem.shortDescription}
            </p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-body">
          <p>此分類暫無案例</p>
        </div>
      )}
    </div>
  );
}
