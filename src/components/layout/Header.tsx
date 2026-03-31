"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/service", label: "服務" },
  { href: "/product", label: "產品" },
  { href: "/case", label: "實績案例" },
  { href: "/about", label: "關於欣展" },
  { href: "/contact", label: "聯絡我們" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const forceWhite = /^\/(product|case)\/.+/.test(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isWhite = forceWhite || scrolled;
  const textColor = isWhite ? "text-title" : "text-white";
  const hoverBg = isWhite ? "hover:bg-surface" : "hover:bg-white/10";
  const iconStroke = isWhite ? "var(--color-title)" : "white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isWhite ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full px-[60px]">
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

          {/* Language selector */}
          <div className={`hidden md:flex items-center gap-2 ml-auto ${textColor} text-base font-semibold cursor-pointer ${hoverBg} px-4 py-3 rounded-xl transition-colors duration-200`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8.5" stroke={iconStroke} strokeWidth="1.2"/>
              <ellipse cx="10" cy="10" rx="3.5" ry="8.5" stroke={iconStroke} strokeWidth="1.2"/>
              <line x1="1.5" y1="10" x2="18.5" y2="10" stroke={iconStroke} strokeWidth="1.2"/>
            </svg>
            <span>繁中</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 8l4 4 4-4" stroke={iconStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ml-auto ${textColor} p-2`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="開啟選單"
          >
            <div className="w-6 h-0.5 mb-1.5" style={{ background: iconStroke }} />
            <div className="w-6 h-0.5 mb-1.5" style={{ background: iconStroke }} />
            <div className="w-6 h-0.5" style={{ background: iconStroke }} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-100">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-title text-sm font-semibold py-3 border-b border-gray-100 hover:text-brand transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
