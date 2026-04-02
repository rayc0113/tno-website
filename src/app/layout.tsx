import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

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
  authors: [{ name: "TNO 欣展有限公司" }],
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const lang = locale === "en" ? "en" : "zh-TW";

  return (
    <html lang={lang} className={notoSansTC.variable}>
      <body className={`${notoSansTC.className} bg-page text-title antialiased`}>
        {children}
      </body>
    </html>
  );
}
