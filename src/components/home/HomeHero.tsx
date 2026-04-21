"use client";

import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function HomeHero() {
  const t = useTranslations("home.hero");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const FADE_BEFORE = 2; // 結束前幾秒開始淡出

    function handleTimeUpdate() {
      if (!video) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= FADE_BEFORE && !fading) {
        setFading(true);
      }
    }

    function handleSeeked() {
      if (!video) return;
      if (video.currentTime < FADE_BEFORE) {
        setFading(false);
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("seeked", handleSeeked);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [fading]);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* 背景影片（桌面 + 行動），poster 為影片第一幀，網速慢時不會空白 */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/home/hero-frame.jpg"
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* 全域暗色遮罩 */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      {/* Loop 轉場：黑色淡入淡出 */}
      <div className={`absolute inset-0 bg-black z-[2] transition-opacity duration-[1500ms] ${fading ? "opacity-100" : "opacity-0"}`} />
      {/* 頂部漸層遮罩，確保 Header 圖文可讀 */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-[1]" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-[60px] pt-[20vh] md:pt-[22vh]">
        <h1 className="text-[36px] leading-[46px] md:text-[60px] font-extrabold md:leading-[75px] text-white mb-4 max-w-[771px]">
          {t("title1")}
          <br />
          {t("title2")}
        </h1>
        <p className="text-white text-[18px] md:text-[22px] md:leading-[34px] mb-8 md:mb-[60px] max-w-[900px]">
          {t("description")}
        </p>
        <Button href="/service">{t("cta")}</Button>
      </div>
    </section>
  );
}
