import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function HomeContactCTA() {
  return (
    <section className="relative h-[696px] overflow-hidden bg-black flex items-center justify-center">
      <Image
        src="/images/home/contacCTA_bg.png"
        alt=""
        fill
        className="object-cover opacity-70"
      />
      <div className="relative z-10 text-center px-4 max-w-[900px] mx-auto">
        <p className="text-white font-bold text-[22px] mb-4">攜手合作</p>
        <h2 className="text-[54px] font-semibold text-white leading-tight mb-10">
          立即聯繫並獲取專屬船舶方案，
          <br />
          讓您的航行更安全高效。
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 bg-[#0c74b5] hover:bg-[#0a62a0] text-white text-base font-semibold px-[35px] py-5 rounded-full transition-colors duration-200"
        >
          聯絡我們
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
