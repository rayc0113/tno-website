import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-tc",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tno-marine.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TNO 欣展｜船舶裝修全方位領導品牌",
    template: "%s｜TNO 欣展船舶",
  },
  description:
    "欣展提供船舶防腐塗裝、甲板鋪面、船艙內裝等全方位船舶裝修服務。通過 ABS、ClassNK 國際認證，10 年以上豐富經驗，為您的船隊提供專業保障。",
  keywords: [
    "船舶裝修",
    "船舶塗裝",
    "防腐塗料",
    "甲板鋪面",
    "船艙內裝",
    "marine coating",
    "ship renovation",
    "欣展",
    "TNO",
    "高雄船舶",
  ],
  authors: [{ name: "TNO 欣展有限公司" }],
  creator: "TNO 欣展有限公司",
  publisher: "TNO 欣展有限公司",
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteUrl,
    siteName: "TNO 欣展船舶",
    title: "TNO 欣展｜船舶裝修全方位領導品牌",
    description:
      "從材料到設計製造，欣展提供船舶裝修全方位服務。防腐塗裝、甲板工程、內裝設計，品質有保障。",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TNO 欣展船舶裝修",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TNO 欣展｜船舶裝修全方位領導品牌",
    description: "從材料到設計製造，欣展提供船舶裝修全方位服務。",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={notoSansTC.variable}>
      <body className={`${notoSansTC.className} bg-[#f7f8fa] text-[#2e3b5d] antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
