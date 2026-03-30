"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Main Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface mb-4">
        <Image
          src={images[activeIndex]}
          alt={`${productName} ${activeIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                i === activeIndex
                  ? "border-brand-deep"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
