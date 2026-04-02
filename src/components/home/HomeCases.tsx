import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import ArrowIcon from "@/components/ui/ArrowIcon";
import type { CaseSummary } from "@/types/case";

interface Props {
  cases: CaseSummary[];
}

export default async function HomeCases({ cases }: Props) {
  const t = await getTranslations("home.cases");
  return (
    <div className="bg-white">
    <section className="bg-surface rounded-[30px] md:rounded-[60px] py-10 px-6 md:py-[80px] md:px-[60px]">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-[32px] md:text-[54px] font-bold text-title mb-3">{t("title")}</h2>
        <p className="text-body text-[18px] md:text-[24px] mb-10 md:mb-[60px] md:whitespace-nowrap">
          {t("description")}
        </p>

        {/* 3 stacked full-width cards */}
        <div className="flex flex-col gap-4 md:gap-6">
          {cases.map((caseItem) => (
            <Link
              key={caseItem.slug}
              href={`/case/${caseItem.slug}`}
              className="group relative h-[240px] md:h-[400px] overflow-hidden rounded-[15px] block bg-black"
            >
              <Image
                src={caseItem.coverImage}
                alt={caseItem.title}
                fill
                className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 md:bottom-[50px] md:left-[50px] md:right-[50px] flex items-end justify-between gap-4 md:gap-8">
                <div>
                  <h3 className="text-xl md:text-[32px] font-semibold text-white mb-1">
                    {caseItem.title}
                  </h3>
                  <p className="text-white/80 text-base md:text-[20px] line-clamp-1">{caseItem.shortDescription}</p>
                </div>
                <div className="hidden md:flex flex-shrink-0 bg-white/20 items-center gap-3.5 px-[23px] py-[15px] rounded-full text-white text-[16px] font-semibold group-hover:bg-white/30 transition-colors duration-200">
                  {t("learnMore")}
                  <ArrowIcon />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
