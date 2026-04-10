"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const localeOptions = [
  { value: "zh", label: "繁體中文" },
  { value: "en", label: "English" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/service", label: t("service") },
    { href: "/product", label: t("product") },
    { href: "/case", label: t("case") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  const forceWhite = /^\/(product|case)\/.+/.test(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = localeOptions.find((o) => o.value === locale);
  const isWhite = forceWhite || scrolled || isMenuOpen;
  const textColor = isWhite ? "text-title" : "text-white";
  const hoverBg = isWhite ? "hover:bg-surface" : "hover:bg-white/10";
  const iconStroke = isWhite ? "var(--color-title)" : "white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMenuOpen ? "bg-white shadow-sm" : isWhite ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 md:px-[60px]">
          <div className="flex items-center h-[70px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/common/logo.svg"
                alt="TNO 欣展"
                width={134}
                height={54}
                className="h-7 w-auto transition-all duration-300"
                style={isWhite ? {} : { filter: "brightness(0) invert(1)" }}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center ml-8 gap-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${textColor} text-base font-semibold px-4 py-3 rounded-xl ${hoverBg} transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Language dropdown (desktop) */}
            <div ref={langRef} className="hidden md:block relative ml-auto">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className={`flex items-center gap-2 ${textColor} text-base font-semibold cursor-pointer ${hoverBg} px-4 py-3 rounded-xl transition-colors duration-200`}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8.5" stroke={iconStroke} strokeWidth="1.2"/>
                  <ellipse cx="10" cy="10" rx="3.5" ry="8.5" stroke={iconStroke} strokeWidth="1.2"/>
                  <line x1="1.5" y1="10" x2="18.5" y2="10" stroke={iconStroke} strokeWidth="1.2"/>
                </svg>
                <span>{currentLang?.label}</span>
                <svg
                  width="16" height="16" viewBox="0 0 20 20" fill="none"
                  className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                >
                  <path d="M5 8l5 5 5-5" stroke={iconStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-lg border border-surface overflow-hidden z-50">
                  {localeOptions.map((opt) => (
                    <Link
                      key={opt.value}
                      href={pathname}
                      locale={opt.value}
                      onClick={() => setLangOpen(false)}
                      className={`w-full text-left px-4 py-3 text-base font-semibold transition-colors duration-150 flex items-center justify-between ${
                        locale === opt.value
                          ? "text-brand bg-surface"
                          : "text-title hover:bg-surface"
                      }`}
                    >
                      {opt.label}
                      {locale === opt.value && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden ml-auto p-2 flex flex-col justify-center items-center w-10 h-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke={iconStroke} strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <line x1="3" y1="6" x2="21" y2="6" stroke={iconStroke} strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="12" x2="21" y2="12" stroke={iconStroke} strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="18" x2="21" y2="18" stroke={iconStroke} strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden bg-white border-t border-surface transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-title text-base font-semibold py-3 px-2 border-b border-surface hover:text-brand transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Language options (mobile) */}
            <div className="pt-2">
              {localeOptions.map((opt) => (
                <Link
                  key={opt.value}
                  href={pathname}
                  locale={opt.value}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full flex items-center justify-between py-3 px-2 text-base font-semibold transition-colors duration-200 ${
                    locale === opt.value ? "text-brand" : "text-title hover:text-brand"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.2"/>
                      <ellipse cx="10" cy="10" rx="3.5" ry="8.5" stroke="currentColor" strokeWidth="1.2"/>
                      <line x1="1.5" y1="10" x2="18.5" y2="10" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    {opt.label}
                  </span>
                  {locale === opt.value && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
