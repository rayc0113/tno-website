import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#4DA3D4] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">頁面不存在</h2>
        <p className="text-white/60 mb-8">您找尋的頁面可能已移除或不存在。</p>
        <Link
          href="/"
          className="bg-[#1E6FBA] hover:bg-[#1a5f9e] text-white font-medium px-8 py-3 rounded inline-block transition-colors duration-200"
        >
          返回首頁
        </Link>
      </div>
    </div>
  );
}
