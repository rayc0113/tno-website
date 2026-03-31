"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, unit: "+", label: "年專業船舶經驗" },
  { value: 80, unit: "%", label: "台灣船廠的首選合作夥伴" },
  { value: 10, unit: "+", label: "國際認證背書" },
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
        <h2 className="text-[32px] md:text-[54px] font-bold text-title mb-4">為何選擇欣展？</h2>
        <p className="text-body text-[18px] md:text-[24px] mb-10 md:mb-16 max-w-[792px] mx-auto">
          深耕台灣，放眼全球，我們憑藉專業與承諾，成為船舶業主共同信賴的合作夥伴。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}
