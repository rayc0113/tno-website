import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";
import type { CaseSummary } from "@/types/case";

interface Props {
  cases: CaseSummary[];
}

export default function HomeCases({ cases }: Props) {
  return (
    <div className="bg-white">
    <section className="bg-surface rounded-[30px] md:rounded-[60px] py-10 px-4 md:py-[80px] md:px-[60px]">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-[32px] md:text-[54px] font-bold text-title mb-3">應用與實績</h2>
        <p className="text-body text-base md:text-[22px] mb-10 md:mb-[60px] max-w-[726px]">
          從船舶內裝到改裝維修，我們以專業與細節，實現每一個值得驕傲的成果。
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
                  <p className="text-white/80 text-sm md:text-[18px] line-clamp-1">{caseItem.shortDescription}</p>
                </div>
                <div className="hidden md:flex flex-shrink-0 bg-white/20 items-center gap-3.5 px-[23px] py-[15px] rounded-full text-white text-[16px] font-semibold group-hover:bg-white/30 transition-colors duration-200">
                  了解更多
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
