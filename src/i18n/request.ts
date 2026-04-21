import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { headers } from "next/headers";

export default getRequestConfig(async ({ requestLocale }) => {
  const headersList = await headers();

  // next-intl middleware sets x-next-intl-locale; 若 requestLocale 未正確傳入則 fallback 讀 header
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    const fromHeader = headersList.get("x-next-intl-locale");
    locale = fromHeader && routing.locales.includes(fromHeader as (typeof routing.locales)[number])
      ? fromHeader
      : routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
