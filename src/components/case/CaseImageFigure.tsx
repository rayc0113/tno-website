"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { CaseImage } from "@/types/case";

interface Props {
  images: CaseImage[];
  locale: string;
  /** 這個元件負責顯示 images 裡的哪些張（索引） */
  indexes: number[];
  /** 單張（插在段落之間）或多張網格（文末照片牆） */
  layout: "single" | "grid";
  alt: string;
}

const ICON_BUTTON =
  "w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-title transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function CaseImageFigure({ images, locale, indexes, layout, alt }: Props) {
  const t = useTranslations("case.detail");
  const [openAt, setOpenAt] = useState<number | null>(null);

  const captionOf = (img: CaseImage) =>
    locale === "en" ? (img.captionEn ?? img.caption) : img.caption;

  // lightbox 在「全部照片」的範圍內前後移動，而不只是本元件顯示的那幾張，
  // 這樣讀者從段落間的圖點開後，可以一路看完整組施工紀錄。
  const step = useCallback(
    (delta: number) =>
      setOpenAt((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openAt === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenAt(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openAt, step]);

  const figure = (i: number, sizes: string) => {
    const img = images[i];
    const caption = captionOf(img);
    return (
      <figure key={i} className="m-0">
        <button
          type="button"
          onClick={() => setOpenAt(i)}
          aria-label={t("enlarge")}
          className="group relative block w-full overflow-hidden rounded-[15px] bg-surface cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Image
            src={img.src}
            alt={caption ?? alt}
            width={960}
            height={640}
            sizes={sizes}
            className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </button>
        {caption && (
          <figcaption className="mt-3 text-[15px] leading-[1.7] text-muted">{caption}</figcaption>
        )}
      </figure>
    );
  };

  return (
    <>
      {layout === "single" ? (
        <div className="my-10">{figure(indexes[0], "(max-width: 1024px) 100vw, 960px")}</div>
      ) : (
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {indexes.map((i) => figure(i, "(max-width: 640px) 100vw, 470px"))}
        </div>
      )}

      {openAt !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("gallery")}
          className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-10"
          onClick={() => setOpenAt(null)}
        >
          <div
            className="relative max-w-[1100px] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openAt].src}
              alt={captionOf(images[openAt]) ?? alt}
              width={1200}
              height={1200}
              sizes="(max-width: 1100px) 100vw, 1100px"
              className="max-h-[72vh] w-auto object-contain rounded-[12px]"
            />
            {captionOf(images[openAt]) && (
              <p className="mt-4 text-[15px] md:text-[16px] leading-[1.7] text-white/80 text-center max-w-[720px]">
                {captionOf(images[openAt])}
              </p>
            )}
            <p className="mt-2 text-[14px] text-white/50 tabular-nums">
              {openAt + 1} / {images.length}
            </p>

            {images.length > 1 && (
              <div className="mt-5 flex items-center gap-3">
                <button type="button" onClick={() => step(-1)} aria-label={t("prevImage")} className={ICON_BUTTON}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button type="button" onClick={() => step(1)} aria-label={t("nextImage")} className={ICON_BUTTON}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setOpenAt(null)}
            aria-label={t("close")}
            className={`${ICON_BUTTON} absolute top-4 right-4 md:top-6 md:right-6`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
