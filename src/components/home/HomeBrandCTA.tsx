import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HomeBrandCTA() {
  return (
    <section className="py-20 md:py-[200px] text-center relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/images/home/brandCTA_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-[60px]">
        <h2 className="text-[32px] md:text-[54px] font-bold text-title mb-4 md:mb-6 max-w-[788px] mx-auto leading-tight">
          從浩瀚海洋到日常生活，
          <br />
          欣展用專業與您同行。
        </h2>
        <p className="text-body text-base md:text-[22px] mb-8 md:mb-10 max-w-[748px] mx-auto leading-relaxed">
          我們結合 ISO 9001 與多項國際船級社認證，
          <br className="hidden md:block" />
          確保每一個流程穩定可靠，為船舶產業打造安全、耐用與高質量的成品。
        </p>
        <Button href="/about">了解更多</Button>
        <div className="flex items-center justify-center gap-2 mt-6">
          <Image
            src="/images/home/brandCTA_logo.png"
            alt="ISO 9001:2015 certified"
            width={98}
            height={50}
            className="object-contain"
          />
          <p className="text-muted text-xs max-w-[373px] text-left">
            ISO 9001:2015 certified — Certified by URS, accredited by UKAS
          </p>
        </div>
      </div>
    </section>
  );
}
