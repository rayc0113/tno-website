import Image from "next/image";
import Button from "@/components/ui/Button";

interface ContactCTAProps {
  bgImage?: string;
}

export default function ContactCTA({
  bgImage = "/images/home/contacCTA_bg.png",
}: ContactCTAProps) {
  return (
    <section className="relative h-[420px] md:h-[696px] overflow-hidden bg-black flex items-center justify-center">
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover opacity-70"
      />
      <div className="relative z-10 text-center px-6 max-w-[900px] mx-auto">
        <p className="text-white font-bold text-base md:text-[22px] mb-3 md:mb-4">攜手合作</p>
        <h2 className="text-[28px] md:text-[54px] font-semibold text-white leading-tight mb-6 md:mb-10">
          立即聯繫並獲取專屬船舶方案，<br />
          讓每一次航行更安全高效。
        </h2>
        <Button href="/contact" variant="primary">聯絡我們</Button>
      </div>
    </section>
  );
}
