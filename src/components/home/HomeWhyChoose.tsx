"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const statsData = [
  { value: 10, unit: "+", labelKey: "stat1Label" },
  { value: 80, unit: "%", labelKey: "stat2Label" },
  { value: 10, unit: "+", labelKey: "stat3Label" },
];

function useCountUp(target: number, duration = 1500, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);

  return count;
}

function StatItem({ value, unit, label, triggered }: { value: number; unit: string; label: string; triggered: boolean }) {
  const count = useCountUp(value, 1500, triggered);
  return (
    <div>
      <div className="flex items-end justify-center">
        <span className="text-[56px] md:text-[80px] font-semibold leading-none text-brand">{count}</span>
        <span className="text-[36px] md:text-[50px] font-semibold leading-none text-brand mb-2">{unit}</span>
      </div>
      <p className="text-body text-[20px] mt-2">{label}</p>
    </div>
  );
}

export default function HomeWhyChoose() {
  const t = useTranslations("home.whyChoose");
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white rounded-tl-[40px] rounded-tr-[40px] md:rounded-tl-[100px] md:rounded-tr-[100px] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.05)] py-16 md:py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] text-center">
        <h2 className="text-[32px] md:text-[54px] font-bold text-title mb-4">{t("title")}</h2>
        <p className="text-body text-[18px] md:text-[24px] mb-10 md:mb-16 md:whitespace-nowrap">
          {t("description")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {statsData.map((stat) => (
            <StatItem key={stat.labelKey} value={stat.value} unit={stat.unit} label={t(stat.labelKey as "stat1Label" | "stat2Label" | "stat3Label")} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}
