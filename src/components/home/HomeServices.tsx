import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";

const services = [
  {
    id: "agency",
    title: "代理銷售",
    description: "提供經國際認證的隔熱材、泡棉與木材，確保船舶建造更安心",
    image: "/images/home/service_bg1.png",
    href: "/service#agency",
  },
  {
    id: "manufacturing",
    title: "產品製造",
    description: "從堅固的金屬板到不鏽鋼廚具，打造經久耐用的船舶部件",
    image: "/images/home/service_bg2.png",
    href: "/service#manufacturing",
  },
  {
    id: "design",
    title: "設計規劃",
    description: "從 2D 到 3D 規劃，以專業設計流程確保每個細節的可靠性",
    image: "/images/home/service_bg3.png",
    href: "/service#design",
  },
  {
    id: "oem",
    title: "各式代工",
    description: "從精密加工到焊接組裝，以專業工序打造可靠的船舶零件",
    image: "/images/home/service_bg4.png",
    href: "/service#oem",
  },
];

export default function HomeServices() {
  return (
    <section className="bg-white pt-[60px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] text-center mb-8 md:mb-[48px]">
        <h2 className="text-[32px] md:text-[54px] font-bold text-title mb-4">我們的專業服務</h2>
        <p className="text-body text-[18px] md:text-[24px] max-w-[670px] mx-auto">
          從內裝設計到零件加工，我們一路陪伴船舶建造與維護的每個環節，
          <br className="hidden md:block" />
          用最完善的解決方案，守護航行安全，也讓艙內生活更安心舒適。
        </p>
      </div>

      {/* 2×2 image grid, edge-to-edge */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.href}
            className="group relative h-[260px] md:h-[400px] overflow-hidden block"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8 md:px-12">
              <h3 className="text-[24px] md:text-[32px] font-bold mb-2 md:mb-3">{service.title}</h3>
              <p className="text-base md:text-[22px] text-white/90 md:whitespace-nowrap">{service.description}</p>
            </div>
            <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/20 flex items-center justify-center text-white opacity-70 group-hover:opacity-100 transition-opacity">
                <ArrowIcon />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
