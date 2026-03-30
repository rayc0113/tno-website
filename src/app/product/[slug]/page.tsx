import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getAllProductSlugs,
} from "@/content/products";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import Button from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/product/${slug}` },
    openGraph: {
      title: `${product.name}｜TNO 欣展船舶`,
      description: product.shortDescription,
      images: [{ url: product.coverImage ?? product.images[0], alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    brand: { "@type": "Brand", name: "TNO 欣展" },
    category: product.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-surface pt-[70px]">
        <div className="max-w-[1400px] mx-auto px-[60px] max-lg:px-4 py-4">
          <nav className="text-sm text-body flex items-center gap-2">
            <Link href="/" className="hover:text-brand transition-colors">
              首頁
            </Link>
            <span className="text-muted">/</span>
            <Link href="/product" className="hover:text-brand transition-colors">
              產品
            </Link>
            <span className="text-muted">/</span>
            <span className="text-muted">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="bg-white pt-[40px] pb-[80px]">
        <div className="max-w-[1400px] mx-auto px-[60px] max-lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-start">

            {/* Image Gallery */}
            <ProductImageGallery
              images={product.images}
              productName={product.name}
            />

            {/* Product Info */}
            <div className="flex flex-col gap-7">
              {/* Category + Title + Description */}
              <div>
                <p className="text-body text-[16px] mb-1">{product.category}</p>
                <h1 className="text-[32px] font-bold text-title leading-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-body text-[16px] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* 產品優勢 */}
              {product.features.length > 0 && (
                <div>
                  <h2 className="text-brand font-extrabold text-[20px] mb-3">
                    產品優勢
                  </h2>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-title text-[16px] leading-relaxed"
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 系統結構 */}
              {product.systemDescription && (
                <div>
                  <h2 className="text-brand font-extrabold text-[20px] mb-3">
                    系統結構
                  </h2>
                  <div className="flex flex-col gap-4">
                    {product.systemDescription.split("\n\n").map((para, i) => (
                      <p key={i} className="text-title text-[16px] leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* 應用場景 */}
              {product.applications.length > 0 && (
                <div>
                  <h2 className="text-brand font-extrabold text-[20px] mb-3">
                    應用場景
                  </h2>
                  <ul className="space-y-2">
                    {product.applications.map((app) => (
                      <li
                        key={app}
                        className="text-title text-[16px] leading-relaxed"
                      >
                        • {app}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Specs Table */}
      {(product.specRows ?? product.specs).length > 0 && (
        <section className="bg-white pb-[80px]">
          <div className="max-w-[1400px] mx-auto px-[60px] max-lg:px-4">
            <div className="border-t border-surface mb-10" />
            <h2 className="text-brand font-extrabold text-[20px] mb-6">
              詳細規格
            </h2>
            <div className="overflow-x-auto border border-[#dedede]">
              {product.specRows ? (
                <table className="w-full border-collapse text-center">
                  <thead>
                    <tr className="bg-[#f4f5f8]">
                      <th className="border border-[#dedede] px-4 py-3 text-[14px] font-semibold text-[#68728b] w-[280px]">類型</th>
                      <th className="border border-[#dedede] px-4 py-3 text-[14px] font-semibold text-[#68728b]">型號</th>
                      <th className="border border-[#dedede] px-4 py-3 text-[14px] font-semibold text-[#68728b]">厚度</th>
                      <th className="border border-[#dedede] px-4 py-3 text-[14px] font-semibold text-[#68728b]">防火等級</th>
                      <th className="border border-[#dedede] px-4 py-3 text-[14px] font-semibold text-[#68728b]">隔音係數</th>
                      <th className="border border-[#dedede] px-4 py-3 text-[14px] font-semibold text-[#68728b]">重量</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specRows.map((row) => (
                      <tr key={row.model} className="bg-white">
                        <td className="border border-[#dedede] w-[280px] p-0 overflow-hidden">
                          <Image
                            src={row.typeImage}
                            alt={row.model}
                            width={280}
                            height={140}
                            style={{ width: "100%", height: "auto", display: "block" }}
                          />
                        </td>
                        <td className="border border-[#dedede] px-4 py-5 text-[16px] font-semibold text-title whitespace-nowrap">{row.model}</td>
                        <td className="border border-[#dedede] px-4 py-5 text-[16px] font-semibold text-title">{row.thickness}</td>
                        <td className="border border-[#dedede] px-4 py-5 text-[16px] font-semibold text-title">{row.fireClass}</td>
                        <td className="border border-[#dedede] px-4 py-5 text-[16px] font-semibold text-title">{row.soundReduction}</td>
                        <td className="border border-[#dedede] px-4 py-5 text-[16px] font-semibold text-title whitespace-nowrap">{row.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-[#f4f5f8]">
                      <th className="border border-[#dedede] px-5 py-3 text-[14px] font-semibold text-[#68728b]">規格項目</th>
                      <th className="border border-[#dedede] px-5 py-3 text-[14px] font-semibold text-[#68728b]">數值 / 說明</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((spec) => (
                      <tr key={spec.label} className="bg-white">
                        <td className="border border-[#dedede] px-5 py-4 text-[14px] font-semibold text-[#68728b] w-[200px]">{spec.label}</td>
                        <td className="border border-[#dedede] px-5 py-4 text-[16px] font-semibold text-title">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Product CTA */}
      <section className="bg-white pb-[80px]">
        <div className="max-w-[1400px] mx-auto px-[60px] max-lg:px-4">
          <div className="border-t border-surface pt-[60px] flex flex-col items-center text-center">
            <h2 className="text-title font-semibold text-[24px] leading-relaxed mb-6">
              想了解此產品如何幫助您的專案？
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" showArrow={false}>
                聯絡我們
              </Button>
              <Button href="/case" variant="secondary" showArrow={false}>
                查看相關案例
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
