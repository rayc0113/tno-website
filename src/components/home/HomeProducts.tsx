"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import type { ProductSummary } from "@/types/product";

interface Props {
  products: ProductSummary[];
}


export default function HomeProducts({ products }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector("a");
    const amount = card ? card.offsetWidth + 16 : 360;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  }

  return (
    <section className="bg-page pt-10 md:pt-[60px] pb-12 md:pb-[80px]">
      {/* Header */}
      <div className="px-6 md:px-[60px] mb-6 md:mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-[32px] md:text-[54px] font-bold text-title mb-2 md:mb-3">精選產品</h2>
          <p className="text-body text-[18px] md:text-[24px]">
            每一件產品都是欣展多年的專業淬鍊。
            <br className="hidden md:block" />
            我們致力於打造航運產業最值得信賴的國際級產品。
          </p>
        </div>
        {/* Desktop nav arrows */}
        <div className="hidden md:flex gap-2 flex-shrink-0 mb-1">
          <button
            onClick={() => scroll("left")}
            aria-label="向左滑動"
            className="w-14 h-14 rounded-full border border-surface bg-white shadow-md flex items-center justify-center text-title hover:bg-brand hover:border-brand hover:text-white hover:shadow-lg transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="向右滑動"
            className="w-14 h-14 rounded-full border border-surface bg-white shadow-md flex items-center justify-center text-title hover:bg-brand hover:border-brand hover:text-white hover:shadow-lg transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* Scrollable cards — overflow visible outside section, clipped by body */}
      <div
        ref={scrollRef}
        className="flex gap-4 pl-6 md:pl-[60px]"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/product?category=${encodeURIComponent(product.category)}`}
            className="group relative flex-shrink-0 rounded-[20px] overflow-hidden bg-black block w-[calc((100vw-32px)/1.5)] md:w-[calc((100vw-108px)/3.5)]"
            style={{ aspectRatio: "3/5" }}
          >
            <Image
              src={product.coverImage}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 66vw, 28vw"
              className="object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center">
              <h3 className="text-white text-[22px] md:text-[28px] font-bold leading-snug mb-2">{product.name}</h3>
              <p className="text-white/70 text-base md:text-[22px]">{product.shortDescription}</p>
            </div>
          </Link>
        ))}

        {/* trailing spacer */}
        <div className="flex-shrink-0 w-4 md:w-[60px]" />
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-8 md:mt-10 px-6 md:px-[60px]">
        <Button href="/product">查看所有產品</Button>
      </div>
    </section>
  );
}
