import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // 所有路徑，除了 _next 靜態資源、api、sitemap、robots
    "/((?!_next|_vercel|api|.*\\..*).*)",
  ],
};
