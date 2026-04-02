import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import ContactForm from "./ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact.meta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/contact" },
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <>
      {/* Hero */}
      <section className="relative h-[120px] md:h-[180px] flex items-center justify-center">
        <Image
          src="/images/contact/hero.webp"
          alt={t("title")}
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAABwAQCdASoIAAMABUB8JaACdAFAAAD+7Nm8ObqAbnxVuQXUaTP673pa4GgAAA=="
        />
        <div className="absolute inset-0 bg-[#071018]/60" />
      </section>

      {/* Contact section */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-start">
              <h2 className="text-[40px] font-bold text-title mb-5">{t("title")}</h2>
              <p className="text-body leading-relaxed">
                {t("description1")}<br />
                {t("description2")}
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
