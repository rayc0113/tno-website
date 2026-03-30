import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "聯絡我們",
  description:
    "聯絡欣展船舶裝修專業團隊，取得免費評估報告與客製化服務方案。電話、Email、或填寫詢問表單均可聯繫。",
  alternates: { canonical: "/contact" },
};

const contactInfo = [
  {
    label: "電話",
    value: "+886-7-000-0000",
    href: "tel:+886-7-000-0000",
  },
  {
    label: "Email",
    value: "info@tno-marine.com",
    href: "mailto:info@tno-marine.com",
  },
  {
    label: "地址",
    value: "高雄市前鎮區○○路○○號",
    href: null,
  },
  {
    label: "服務時間",
    value: "週一至週五 09:00–18:00",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-24 bg-[#0A1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40 mb-6">
            <Link href="/" className="hover:text-white transition-colors">首頁</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">聯絡我們</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">聯絡我們</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            無論您有任何船舶裝修需求，歡迎隨時聯繫我們的專業團隊。
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-6">聯絡資訊</h2>
              <dl className="space-y-5">
                {contactInfo.map((info) => (
                  <div key={info.label}>
                    <dt className="text-white/40 text-xs mb-1">{info.label}</dt>
                    <dd className="text-white/90 text-sm">
                      {info.href ? (
                        <a
                          href={info.href}
                          className="hover:text-[#4DA3D4] transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        info.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 pt-8 border-t border-white/10">
                <h3 className="font-medium mb-3 text-sm">服務項目諮詢</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  {["船舶防腐塗裝", "甲板鋪面工程", "船艙內裝設計", "材料採購", "其他工程"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#4DA3D4] rounded-full" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-semibold mb-6">填寫詢問表單</h2>
              <form className="space-y-5" action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/60 mb-1.5">
                      姓名 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="您的姓名"
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#4DA3D4]/60 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm text-white/60 mb-1.5">
                      公司名稱
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="您的公司"
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#4DA3D4]/60 transition-colors duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/60 mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#4DA3D4]/60 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-white/60 mb-1.5">
                    電話
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+886-"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#4DA3D4]/60 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm text-white/60 mb-1.5">
                    詢問項目
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-[#0D1B2A] border border-white/10 rounded px-4 py-2.5 text-sm text-white/80 focus:outline-none focus:border-[#4DA3D4]/60 transition-colors duration-200"
                  >
                    <option value="">請選擇...</option>
                    <option value="coating">船舶防腐塗裝</option>
                    <option value="deck">甲板鋪面工程</option>
                    <option value="interior">船艙內裝設計</option>
                    <option value="material">材料採購</option>
                    <option value="other">其他工程</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-white/60 mb-1.5">
                    詢問內容 <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="請描述您的需求、船型、預計工期等資訊，我們將盡快回覆..."
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#4DA3D4]/60 transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1E6FBA] hover:bg-[#1a5f9e] text-white font-medium py-3 rounded transition-colors duration-200"
                >
                  送出詢問
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
