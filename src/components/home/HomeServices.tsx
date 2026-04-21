import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import ArrowIcon from "@/components/ui/ArrowIcon";

const serviceImages = [
  { id: "material", image: "/images/home/service_bg1.webp", href: "/service" },
  { id: "manufacturing", image: "/images/home/service_bg2.webp", href: "/service" },
  { id: "design", image: "/images/home/service_bg3.webp", href: "/service" },
  { id: "processing", image: "/images/home/service_bg4.webp", href: "/service" },
] as const;

export default async function HomeServices({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home.services" });
  return (
    <section className="bg-white pt-[60px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] text-center mb-8 md:mb-[48px]">
        <h2 className="text-[32px] md:text-[54px] font-bold text-title mb-4">{t("title")}</h2>
        <p className="text-body text-[18px] md:text-[24px]">
          {t("description1")}
          <br className="hidden md:block" />
          {t("description2")}
        </p>
      </div>

      {/* 2×2 image grid, edge-to-edge */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {serviceImages.map(({ id, image, href }) => (
          <Link
            key={id}
            href={href}
            className="group relative h-[260px] md:h-[400px] overflow-hidden block"
          >
            <Image
              src={image}
              alt={t(`items.${id}.title`)}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8 md:px-12">
              <h3 className="text-[24px] md:text-[32px] font-bold mb-2 md:mb-3">{t(`items.${id}.title`)}</h3>
              <p className="text-base md:text-[22px] text-white/90 max-w-full">{t(`items.${id}.description`)}</p>
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
