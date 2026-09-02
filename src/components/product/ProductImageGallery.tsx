"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  images: string[];
  productName: string;
}

const ARROW_BUTTON =
  "w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-title transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function ProductImageGallery({ images, productName }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("product.detail");

  // 只有一張圖時不顯示左右切換與縮圖列
  const hasMultiple = images.length > 1;

  // 頭尾循環，避免使用者在第一／最後一張時按到沒有反應的按鈕
  const step = (delta: number) =>
    setActiveIndex((i) => (i + delta + images.length) % images.length);

  return (
    <div>
      {/* Main Image */}
      <div className="relative rounded-2xl overflow-hidden bg-surface mb-4">
        <Image
          src={images[activeIndex]}
          alt={`${productName} ${activeIndex + 1}`}
          width={800}
          height={800}
          className="w-full aspect-square object-cover transition-opacity duration-300"
          priority
        />

        {/* 兩顆切換鈕併排置於主圖下緣中央，避免壓在照片主體上 */}
        {hasMultiple && (
          <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={t("prevImage")}
              className={ARROW_BUTTON}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={t("nextImage")}
              className={ARROW_BUTTON}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {hasMultiple && (
        <div className="grid grid-cols-5 gap-2 md:gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`${productName} ${i + 1}`}
              aria-current={i === activeIndex}
              className={`rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                i === activeIndex
                  ? "border-brand-deep"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} ${i + 1}`}
                width={200}
                height={200}
                className="w-full aspect-square object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
