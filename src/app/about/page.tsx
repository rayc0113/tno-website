import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "關於我們",
  description:
    "TNO 欣展金屬成立於 2016 年，專注船舶隔間規劃、船舶維修、金屬加工與不鏽鋼廚具製造，通過 ISO 9001：2015 及多國船級社認證。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[800px] bg-black overflow-hidden">
        <Image
          src="/images/about/hero.webp"
          alt="欣展 — 船舶艙室整體規劃"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-[60px] h-full flex flex-col justify-center">
          <h1 className="text-[60px] font-extrabold leading-[75px] text-white mb-5">
            從設計到維修<br />
            打造最安全舒適的船舶艙室
          </h1>
          <p className="text-white text-[20px] leading-[30px] max-w-[722px]">
            專注船舶艙室整體規劃與施工，<br />
            以專業整合能力與嚴謹製程，提供業主一條龍服務。
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white pt-[140px] pb-[140px]">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <h2 className="text-[40px] font-bold text-title text-center mb-6">
            我們是欣展團隊
          </h2>
          <p className="text-body text-[20px] text-center leading-[1.8] mb-[64px] max-w-[988px] mx-auto">
            TNO 欣展金屬成立於 2016 年，專注於船舶隔間規劃、船舶維修、金屬加工與不鏽鋼廚具製造。
            我們相信，安全不只是技術，更是一份對人與空間的責任。<br /><br />
            從船艙隔間到建築內裝，我們以「品質、安全、功能」為核心，
            讓每個空間都兼具專業結構與家的安心。
          </p>

          {/* Two images — no gap, joined rounded corners */}
          <div className="flex h-[512px]">
            <div className="relative flex-1 rounded-tl-[24px] rounded-bl-[24px] overflow-hidden">
              <Image
                src="/images/about/about-company.png"
                alt="欣展公司"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[594px] flex-shrink-0 rounded-tr-[24px] rounded-br-[24px] overflow-hidden">
              <Image
                src="/images/about/about-teams.png"
                alt="欣展團隊"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 我們的信念 */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-[60px] flex items-start">
          {/* Left: text */}
          <div className="flex-1 flex flex-col pt-[27px] pr-10">
            <p className="text-brand text-[20px] font-semibold mb-4">我們的信念</p>
            <h2 className="text-[40px] font-bold text-title leading-tight mb-6">
              安全，是家的延伸
            </h2>
            <p className="text-body text-[20px] leading-[1.8]">
              我們相信安全不只是技術，而是一種責任。<br />
              每一項產品、每一次施工，都是對信任最直接的回應。<br />
              我們堅持以誠信、品質與服務為基礎，<br />
              用專業態度完成每個細節，<br />
              讓「安全」不只是標準，而是人們生活中最安心的依靠。
            </p>
          </div>

          {/* Right: image with decorative card (card peeks bottom-right) */}
          <div className="relative w-[640px] h-[488px] flex-shrink-0">
            {/* Decorative bg card */}
            <div className="absolute left-[32px] top-[47px] w-[608px] h-[441px] bg-sky rounded-[24px]" />
            {/* Image on top-left */}
            <div className="absolute left-0 top-0 w-[602px] h-[450px] rounded-[24px] overflow-hidden">
              <Image
                src="/images/about/about-belief.png"
                alt="我們的信念"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 我們的專業 */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-[60px] flex items-start">
          {/* Left: image with decorative card (card peeks bottom-left) */}
          <div className="relative w-[640px] h-[488px] flex-shrink-0">
            {/* Decorative bg card */}
            <div className="absolute left-0 top-[47px] w-[608px] h-[441px] bg-sky-light rounded-[24px]" />
            {/* Image on top-right */}
            <div className="absolute right-0 top-0 w-[602px] h-[450px] rounded-[24px] overflow-hidden">
              <Image
                src="/images/about/about-expertise.png"
                alt="我們的專業"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="flex-1 flex flex-col pt-[27px] pl-10">
            <p className="text-brand text-[20px] font-semibold mb-4">我們的專業</p>
            <h2 className="text-[40px] font-bold text-title leading-tight mb-6">
              專注船舶艙室<br />
              整體規劃與維修服務
            </h2>
            <p className="text-body text-[20px] leading-[1.8]">
              我們擁有完整的船舶艙室整合能力，<br />
              從規劃設計、材料供應、零件加工到船上安裝與維修，<br />
              提供業主一條龍的專業服務。<br />
              <br />
              我們以嚴謹製程與豐富實務經驗，<br />
              確保每艘船舶都兼具安全、舒適與效率。
            </p>
          </div>
        </div>
      </section>

      {/* 國際認證與品質保證 */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="text-center mb-[80px]">
            <h2 className="text-[40px] font-bold text-title mb-6">
              國際認證與品質保證
            </h2>
            <p className="text-body text-[20px] leading-[1.8] max-w-[720px] mx-auto">
              我們通過多項國際品質與安全認證，包括 ISO 9001：2015 以及多國船級社核可。<br />
              每一張證書，都是我們對品質與責任的堅持。<br />
              我們相信，信任來自專業，而專業源於不斷驗證。
            </p>
          </div>

          <div className="flex gap-[160px] items-start">
            {/* Left: ISO cert */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative w-[194px] h-[263px]">
                <Image
                  src="/images/about/about-certificate.png"
                  alt="ISO 9001:2015 品質管理系統證書"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-body text-[16px] text-center mt-4 leading-relaxed whitespace-nowrap">
                於2018年8月取得ISO 9001：2015品質管理系統證書
              </p>
            </div>

            {/* Right: certification logos */}
            <div className="flex-1 flex flex-col">
              <div className="relative w-full h-[216px]">
                <Image
                  src="/images/about/about-certification-logos.png"
                  alt="NK、ABS、KR、CR、BV、DNV、CE、CCS、LR、RINA 認證"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-body text-[16px] mt-4 leading-relaxed">
                依國際船級社規範含各式IMO證書：NK、ABS、KR、CR、BV、DNV、CE、CCS、LR、RINA
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
