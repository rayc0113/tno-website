import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  showArrow?: boolean;
  className?: string;
}

/**
 * 主要 CTA 按鈕
 * variant="primary"  — 藍底白字（預設）
 * variant="outline"  — 白框白字（深色背景上使用）
 */
export default function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2.5 text-base font-semibold px-[35px] py-5 rounded-full transition-colors duration-200";

  const variants = {
    primary: "bg-brand hover:bg-brand-hover text-white",
    outline: "border border-white/60 text-white hover:bg-white/10",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {showArrow && <ArrowIcon />}
    </Link>
  );
}
