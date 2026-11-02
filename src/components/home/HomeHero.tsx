"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function HomeHero() {
  const t = useTranslations("home.hero");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fading, setFading] = useState(false);
  const [started, setStarted] = useState(false);

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

  // 靜態首幀何時淡掉，由我們自己決定，不交給 <video poster>。
  //
  // iOS 上的實際行為：影片明明已經在播、currentTime 一路前進，poster 卻
  // 繼續蓋在畫面上，一直要等 loop 繞回去重新 seek（本片 17.3 秒）才被換掉。
  // 使用者看到的是「靜止十幾秒 → 黑色淡出 → 才變成影片」，而那個黑色淡出
  // 正是本檔案 FADE_BEFORE 的轉場，等於證明影片一直都在跑。
  //
  // 因此改為：自己放一層首幀圖，等 currentTime 真的開始前進才把它淡掉。
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let kicked = false;

    function onProgress() {
      if (!video || video.paused || video.currentTime <= 0) return;
      setStarted(true);

      // 保險：萬一卡住的不是 poster 而是合成層（畫面凍在第一幀），
      // 補一次極短的 seek 把它推一下——loop 的 seek 能解，這裡就提早做。
      if (!kicked) {
        kicked = true;
        try {
          video.currentTime = 0.05;
        } catch {
          // 還不能 seek 就算了，loop 時仍會自行恢復
        }
      }
    }

    video.addEventListener("playing", onProgress);
    video.addEventListener("timeupdate", onProgress);
    return () => {
      video.removeEventListener("playing", onProgress);
      video.removeEventListener("timeupdate", onProgress);
    };
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* 背景影片（桌面 + 行動）。刻意不設 poster，改用下方自己控制的首幀圖層 */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* 來源順序即優先序，瀏覽器挑第一個「型別支援且 media 命中」的。
            手機先給 720p 版（3.3MB，SSIM 與 1080p 版相同），起播時間約減半；
            mp4 排在 webm 前面，因為 webm（VP9, 10.7MB）在手機上大且無硬體解碼。 */}
        <source src="/videos/hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      {/* 首幀靜態圖。SSR 就在 HTML 裡，影片還沒好時不會空白；
          影片真的開始推進後淡出。排在 video 之後，所以蓋在它上面 */}
      <Image
        src="/images/home/hero-frame.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-700 ${
          started ? "opacity-0" : "opacity-100"
        }`}
      />

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
