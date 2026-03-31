import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "聯絡我們",
  description:
    "聯絡欣展船舶裝修專業團隊，取得免費評估報告與客製化服務方案。電話、Email、或填寫詢問表單均可聯繫。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[200px] md:h-[280px] flex items-center justify-center">
        <Image
          src="/images/contact/hero.webp"
          alt="聯絡我們"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAABwAQCdASoIAAMABUB8JaACdAFAAAD+7Nm8ObqAbnxVuQXUaTP673pa4GgAAA=="
        />
        <div className="absolute inset-0 bg-[#071018]/60" />
        <h1 className="relative z-10 text-[56px] font-bold text-white">聯絡我們</h1>
      </section>

      {/* Contact section */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-[60px] max-md:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: info */}
            <div className="flex flex-col justify-start">
              <h2 className="text-[40px] font-bold text-title mb-5">聯絡我們</h2>
              <p className="text-body leading-relaxed">
                若您有產品諮詢、報價需求或合作洽談，<br />
                請留下您的聯絡方式，我們將於工作日 24 小時內回覆。
              </p>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
