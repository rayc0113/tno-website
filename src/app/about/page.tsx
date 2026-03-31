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
      <section className="relative h-[420px] md:h-[800px] bg-black overflow-hidden">
        <Image
          src="/images/about/hero.webp"
          alt="欣展 — 船舶艙室整體規劃"
          fill
          className="object-cover opacity-60"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAADQAQCdASoIAAUABUB8JZQCdADdIk8cAAD+Fa5mMV0jJywoAAA="
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-[60px] h-full flex flex-col justify-center">
          <h1 className="text-[36px] leading-[46px] md:text-[60px] font-extrabold md:leading-[75px] text-white mb-4 md:mb-5">
            從設計到維修<br />
            打造最安全舒適的船舶艙室
          </h1>
          <p className="text-white text-[18px] md:text-[22px] md:leading-[34px] max-w-[722px]">
            專注船舶艙室整體規劃與施工，<br />
            以專業整合能力與嚴謹製程，提供業主一條龍服務。
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 md:pt-[140px] md:pb-[140px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <h2 className="text-[28px] md:text-[40px] font-bold text-title text-center mb-4 md:mb-6">
            我們是欣展團隊
          </h2>
          <p className="text-body text-[18px] md:text-[22px] text-center leading-[1.8] mb-10 md:mb-[64px] max-w-[988px] mx-auto">
            TNO 欣展金屬成立於 2016 年，專注於船舶隔間規劃、船舶維修、金屬加工與不鏽鋼廚具製造。
            我們相信，安全不只是技術，更是一份對人與空間的責任。<br /><br />
            從船艙隔間到建築內裝，我們以「品質、安全、功能」為核心，
            讓每個空間都兼具專業結構與家的安心。
          </p>

          {/* Two images — mobile: 上(teams) 下(company)；desktop: 左(company) 右(teams) */}
          <div className="flex flex-col md:flex-row md:h-[512px] gap-2 md:gap-1">
            {/* 團隊照：mobile 排第一(上)，desktop order-2(右) */}
            <div className="relative h-[260px] md:h-auto md:w-[594px] flex-shrink-0 md:order-2 rounded-[20px] md:rounded-l-none md:rounded-r-[24px] overflow-hidden">
              <Image
                src="/images/about/about-teams.png"
                alt="欣展團隊"
                fill
                sizes="(max-width: 768px) 100vw, 594px"
                className="object-cover"
              />
            </div>
            {/* 公司照：mobile 排第二(下)，desktop order-1(左) */}
            <div className="relative h-[260px] md:h-auto flex-1 md:order-1 rounded-[20px] md:rounded-r-none md:rounded-l-[24px] overflow-hidden">
              <Image
                src="/images/about/about-company.png"
                alt="欣展公司外觀"
                fill
                sizes="(max-width: 768px) 100vw, calc(100vw - 714px)"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 我們的信念 */}
      <section className="bg-white py-16 md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] flex flex-col md:flex-row md:items-start gap-10 md:gap-0">
          {/* Left: text */}
          <div className="flex-1 flex flex-col md:pt-[27px] md:pr-10">
            <p className="text-brand text-[18px] md:text-[22px] font-semibold mb-3 md:mb-4">我們的信念</p>
            <h2 className="text-[28px] md:text-[40px] font-bold text-title leading-tight mb-4 md:mb-6">
              安全，是家的延伸
            </h2>
            <p className="text-body text-[18px] md:text-[22px] leading-[1.8]">
              我們相信安全不只是技術，而是一種責任。<br />
              每一項產品、每一次施工，都是對信任最直接的回應。<br />
              我們堅持以誠信、品質與服務為基礎，<br />
              用專業態度完成每個細節，<br />
              讓「安全」不只是標準，而是人們生活中最安心的依靠。
            </p>
          </div>

          {/* Right: image with decorative card */}
          <div className="relative w-full md:w-[640px] h-[300px] md:h-[488px] flex-shrink-0">
            <div className="absolute left-[24px] top-[36px] right-0 bottom-0 bg-sky rounded-[24px]" />
            <div className="absolute left-0 top-0 right-[24px] bottom-[36px] rounded-[24px] overflow-hidden">
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
      <section className="bg-white py-16 md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] flex flex-col-reverse md:flex-row md:items-start gap-10 md:gap-0">
          {/* Left: image with decorative card */}
          <div className="relative w-full md:w-[640px] h-[300px] md:h-[488px] flex-shrink-0">
            <div className="absolute left-0 top-[36px] right-[24px] bottom-0 bg-sky-light rounded-[24px]" />
            <div className="absolute left-[24px] top-0 right-0 bottom-[36px] rounded-[24px] overflow-hidden">
              <Image
                src="/images/about/about-expertise.png"
                alt="我們的專業"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="flex-1 flex flex-col md:pt-[27px] md:pl-10">
            <p className="text-brand text-[18px] md:text-[22px] font-semibold mb-3 md:mb-4">我們的專業</p>
            <h2 className="text-[28px] md:text-[40px] font-bold text-title leading-tight mb-4 md:mb-6">
              專注船舶艙室<br />
              整體規劃與維修服務
            </h2>
            <p className="text-body text-[18px] md:text-[22px] leading-[1.8]">
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
      <section className="bg-white py-16 md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="text-center mb-10 md:mb-[80px]">
            <h2 className="text-[28px] md:text-[40px] font-bold text-title mb-4 md:mb-6">
              國際認證與品質保證
            </h2>
            <p className="text-body text-[18px] md:text-[22px] leading-[1.8] max-w-[720px] mx-auto">
              我們通過多項國際品質與安全認證，包括 ISO 9001：2015 以及多國船級社核可。<br className="hidden md:block" />
              每一張證書，都是我們對品質與責任的堅持。<br className="hidden md:block" />
              我們相信，信任來自專業，而專業源於不斷驗證。
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-[160px] items-center md:items-start gap-10">
            {/* Left: ISO cert */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative w-[160px] h-[216px] md:w-[194px] md:h-[263px]">
                <Image
                  src="/images/about/about-certificate.png"
                  alt="ISO 9001:2015 品質管理系統證書"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-body text-base md:text-[18px] text-center mt-4 leading-relaxed">
                於2018年8月取得ISO 9001：2015品質管理系統證書
              </p>
            </div>

            {/* Right: certification logos */}
            <div className="flex-1 flex flex-col w-full items-center md:items-start">
              <div className="relative w-full h-[160px] md:h-[216px]">
                <Image
                  src="/images/about/about-certification-logos.png"
                  alt="NK、ABS、KR、CR、BV、DNV、CE、CCS、LR、RINA 認證"
                  fill
                  className="object-contain object-center md:object-left"
                />
              </div>
              <p className="text-body text-base md:text-[18px] mt-4 leading-relaxed text-center md:text-left">
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
