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
      <div className="rounded-2xl overflow-hidden bg-surface mb-4">
        <Image
          src={images[activeIndex]}
          alt={`${productName} ${activeIndex + 1}`}
          width={800}
          height={800}
          className="w-full aspect-square object-cover transition-opacity duration-300"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2 md:gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
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
