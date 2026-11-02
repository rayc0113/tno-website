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

  // 行動版自動播放保險。
  //
  // iOS 即使 muted + playsInline 也不保證放行：低電力模式會直接全擋，
  // 省電／低資料模式與冷啟動時機也可能擋下第一次 play()。症狀是永遠停在
  // poster，而使用者在站內點過幾頁再回首頁就會動——差別不在快取，在於
  // 那時候已經有過使用者手勢。
  //
  // 因此不只試一次：影片備妥時再試、分頁切回前景時再試，並在第一次
  // 使用者手勢（觸控／點擊／捲動／按鍵）時再試。成功後立刻解除所有監聽。
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const GESTURES = ["touchstart", "pointerdown", "click", "scroll", "keydown"] as const;
    let settled = false;

    function cleanup() {
      if (!video) return;
      video.removeEventListener("loadeddata", attempt);
      video.removeEventListener("canplay", attempt);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      for (const type of GESTURES) {
        window.removeEventListener(type, attempt);
      }
    }

    function attempt() {
      if (settled || !video) return;
      video.muted = true; // 政策要求：非靜音一定會被擋
      video
        .play()
        .then(() => {
          settled = true;
          cleanup();
        })
        .catch(() => {
          // still blocked — 保持監聽，等下一個時機
        });
    }

    function onVisibilityChange() {
      if (!document.hidden) attempt();
    }

    attempt();
    video.addEventListener("loadeddata", attempt);
    video.addEventListener("canplay", attempt);
    document.addEventListener("visibilitychange", onVisibilityChange);
    for (const type of GESTURES) {
      window.addEventListener(type, attempt, { passive: true });
    }

    return cleanup;
  }, []);

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
        {/* mp4 排在前面：iOS Safari 會挑第一個宣稱支援的來源，
            而 webm（VP9, 10.7MB）在手機上大且無硬體解碼，mp4（H.264, 6.1MB）才是可靠的那一個 */}
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
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
