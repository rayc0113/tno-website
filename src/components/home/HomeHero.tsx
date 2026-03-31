import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HomeHero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <Image
        src="/images/home/hero.webp"
        alt="船舶裝修 TNO 欣展"
        fill
        className="object-cover"
        priority
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoIAAUABUB8JZwAAurZ1CgAAP59Qt5bRWrUFrgAAAA="
      />
      {/* 頂部漸層遮罩，確保 Header 圖文可讀 */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-[1]" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-[60px] pt-[22vh]">
        <h1 className="text-[60px] font-extrabold leading-[75px] text-white mb-4 max-w-[771px]">
          從材料到設計製造
          <br />
          船舶裝修全方位領導品牌
        </h1>
        <p className="text-white text-[20px] leading-[30px] mb-[60px] max-w-[722px]">
          深耕十多年專業經驗與國際認證，欣展堅持安全與品質，守護您的每一趟航行。
        </p>
        <Button href="/service">探索服務</Button>
      </div>
    </section>
  );
}
