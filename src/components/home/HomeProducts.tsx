"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";
import Button from "@/components/ui/Button";
import type { ProductSummary } from "@/types/product";

interface Props {
  products: ProductSummary[];
}

// 卡片寬度 = (100vw - 左padding - 3個間距) / 3.5
// 讓任何視窗寬度下永遠顯示 3 張完整 + 半張
const CARD_WIDTH_STYLE = "calc((100vw - 108px) / 3.5)";
const LEFT_PAD = 60;

export default function HomeProducts({ products }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setIsAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2);
  }, []);

  const scrollToStart = () => {
    scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const scrollToEnd = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f7f8fa] pt-[60px] pb-[80px]">
      {/* Header */}
      <div className="px-[60px] flex items-end justify-between mb-8">
        <div>
          <h2 className="text-[54px] font-bold text-title mb-3">精選產品</h2>
          <p className="text-body text-[22px]">
            每一件產品都是欣展多年的專業淬鍊。
            <br />
            我們致力於打造航運產業最值得信賴的國際級產品。
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-2 flex-shrink-0 mb-1">
          <button
            onClick={scrollToStart}
            aria-label="上一個"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ background: isAtEnd ? "#e0e3ea" : "#0c74b5" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke={isAtEnd ? "#2e3b5d" : "white"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={scrollToEnd}
            aria-label="下一個"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ background: isAtEnd ? "#0c74b5" : "#e0e3ea" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke={isAtEnd ? "white" : "#2e3b5d"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable cards — overflow visible outside section, clipped by body */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4"
        style={{
          overflowX: "auto",
          paddingLeft: LEFT_PAD,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="group relative flex-shrink-0 rounded-[20px] overflow-hidden bg-black block"
            style={{ width: CARD_WIDTH_STYLE, aspectRatio: "3/5" }}
          >
            <Image
              src={product.coverImage}
              alt={product.name}
              fill
              className="object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-white text-[28px] font-bold leading-snug mb-2">{product.name}</h3>
              <p className="text-white/70 text-[20px]">{product.shortDescription}</p>
            </div>
          </Link>
        ))}

        {/* trailing spacer so last card doesn't bleed to edge */}
        <div className="flex-shrink-0" style={{ width: LEFT_PAD }} />
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10 px-[60px]">
        <Button href="/product">查看所有產品</Button>
      </div>
    </section>
  );
}
