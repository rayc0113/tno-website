import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { getCaseSummaries, getAllCaseCategories } from "@/content/cases";
import CaseGrid from "@/components/case/CaseGrid";

export const metadata: Metadata = {
  title: "實績案例",
  description:
    "欣展豐富的船舶裝修工程實績，涵蓋散裝船翻新、遊艇內裝、離岸平台塗裝等多元類型案例。",
  alternates: { canonical: "/case" },
};

export default function CaseListPage() {
  const cases = getCaseSummaries();
  const categories = getAllCaseCategories();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] md:h-[420px] overflow-hidden bg-black">
        <Image
          src="/images/cases/hero.webp"
          alt="TNO 欣展實績案例"
          fill
          className="object-cover opacity-50"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoIAAMABUB8JYgCdAD0h/pcAP46my29YNqOHcqlWgAAAA=="
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-[60px] h-full flex flex-col justify-center">
          <h1 className="text-[36px] md:text-[60px] font-extrabold md:leading-[75px] text-white mb-4">
            實績案例
          </h1>
          <p className="text-white text-base md:text-[20px] md:leading-[30px] max-w-[600px]">
            每一個案例都代表著我們對品質的承諾，<br />
            見證欣展與客戶共同創造的成果。
          </p>
        </div>
      </section>

      {/* Cases Section */}
      <section className="bg-page py-8 md:py-[100px]">
        <div className="max-w-[1700px] mx-auto px-6 md:px-[60px]">
          <Suspense>
            <CaseGrid cases={cases} categories={categories} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
