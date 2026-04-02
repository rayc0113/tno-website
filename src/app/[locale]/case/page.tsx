import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Suspense } from "react";
import { getCaseSummaries, getAllCaseCategories } from "@/content/cases";
import CaseGrid from "@/components/case/CaseGrid";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("case.meta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/case" },
  };
}

export default async function CaseListPage() {
  const t = await getTranslations("case");
  const cases = getCaseSummaries();
  const categories = getAllCaseCategories();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] md:h-[420px] overflow-hidden bg-black">
        <Image
          src="/images/cases/hero.webp"
          alt={t("hero.title")}
          fill
          className="object-cover opacity-50"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoIAAMABUB8JYgCdAD0h/pcAP46my29YNqOHcqlWgAAAA=="
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-[60px] h-full flex flex-col justify-center">
          <h1 className="text-[36px] md:text-[60px] font-extrabold md:leading-[75px] text-white mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-white text-base md:text-[20px] md:leading-[30px] max-w-[600px]">
            {t("hero.description1")}<br />
            {t("hero.description2")}
          </p>
        </div>
      </section>

      {/* Cases Section */}
      <section className="bg-page py-8 md:pt-[48px] md:pb-[100px]">
        <div className="max-w-[1700px] mx-auto px-6 md:px-[60px]">
          <Suspense>
            <CaseGrid cases={cases} categories={categories} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
