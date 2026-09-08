import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Noto_Sans_TC } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSiteTitle, getSiteDescription } from "@/lib/siteMeta";
import "../globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-tc",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tno.com.tw";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = getSiteTitle(locale);
  const description = getSiteDescription(locale);
  const siteName = isEn ? "TNO Marine" : "TNO 欣展船舶";
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: isEn ? "%s | TNO Marine" : "%s｜TNO 欣展船舶",
    },
    description,
    authors: [{ name: "TNO 欣展有限公司" }],
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url: `/${locale}`,
      locale: isEn ? "en_US" : "zh_TW",
      alternateLocale: isEn ? ["zh_TW"] : ["en_US"],
      images: [
        {
          url: "/images/home/hero.webp",
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/home/hero.webp"],
    },
  };
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const lang = locale === "en" ? "en" : "zh-TW";

  return (
    <html lang={lang} className={notoSansTC.variable}>
      <body className={`${notoSansTC.className} bg-page text-title antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
