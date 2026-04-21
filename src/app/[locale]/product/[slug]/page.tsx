import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, getAllProductSlugs } from "@/content/products";
import { localizeProduct } from "@/lib/localize";
import { Link } from "@/i18n/navigation";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import Button from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const raw = getProductBySlug(slug);
  if (!raw) return {};
  const loc: "zh" | "en" = locale === "en" ? "en" : "zh";
  const product = localizeProduct(raw, loc);
  const ogSuffix = loc === "en" ? " | TNO Marine" : "｜TNO 欣展船舶";

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/${locale}/product/${slug}` },
    openGraph: {
      title: `${product.name}${ogSuffix}`,
      description: product.shortDescription,
      images: [{ url: product.coverImage ?? product.images[0], alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const raw = getProductBySlug(slug);
  if (!raw) notFound();
  const loc: "zh" | "en" = locale === "en" ? "en" : "zh";
  const product = localizeProduct(raw, loc);

  const t = await getTranslations("product.detail");
  const tc = await getTranslations("categories");
  const categoryLabel = tc.has(product.category) ? tc(product.category) : product.category;
  const brandName = loc === "en" ? "TNO Marine" : "TNO 欣展";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    brand: { "@type": "Brand", name: brandName },
    category: categoryLabel,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-surface pt-[70px]">
        <div className="max-w-[1400px] mx-auto px-[60px] max-lg:px-6 py-4">
          <nav className="text-sm text-body flex items-center gap-2">
            <Link href="/" className="hover:text-brand transition-colors">{t("home")}</Link>
            <span className="text-muted">/</span>
            <Link href="/product" className="hover:text-brand transition-colors">{t("products")}</Link>
            <span className="text-muted">/</span>
            <span className="text-muted">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="bg-white pt-[40px] pb-[80px]">
        <div className="max-w-[1400px] mx-auto px-[60px] max-lg:px-6">

          {/* Mobile: 分類 + 名稱 + 簡述 */}
          <div className="lg:hidden mb-6">
            <p className="text-body text-[18px] mb-1">{categoryLabel}</p>
            <h1 className="text-[28px] font-bold text-title leading-tight mb-3">{product.name}</h1>
            <p className="text-body text-[18px] leading-relaxed">{product.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-start">
            <ProductImageGallery images={product.images} productName={product.name} />

            <div className="flex flex-col gap-7">
              {/* Desktop header */}
              <div className="hidden lg:block">
                <p className="text-body text-[18px] mb-1">{categoryLabel}</p>
                <h1 className="text-[32px] font-bold text-title leading-tight mb-4">{product.name}</h1>
                <p className="text-body text-[18px] leading-relaxed">{product.description}</p>
              </div>

              {product.features.length > 0 && (
                <div>
                  <h2 className="text-brand font-extrabold text-[20px] mb-3">{t("features")}</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="text-title text-[18px] leading-relaxed">• {feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {product.systemDescription && (
                <div>
                  <h2 className="text-brand font-extrabold text-[20px] mb-3">{t("system")}</h2>
                  <div className="flex flex-col gap-4">
                    {product.systemDescription.split("\n\n").map((para, i) => (
                      <p key={i} className="text-title text-[18px] leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {product.applications.length > 0 && (
                <div>
                  <h2 className="text-brand font-extrabold text-[20px] mb-3">{t("applications")}</h2>
                  <ul className="space-y-2">
                    {product.applications.map((app) => (
                      <li key={app} className="text-title text-[18px] leading-relaxed">• {app}</li>
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
          <div className="max-w-[1400px] mx-auto px-[60px] max-lg:px-6">
            <div className="border-t border-surface mb-10" />
            <h2 className="text-brand font-extrabold text-[20px] mb-6">{t("specs")}</h2>
            <div className="overflow-x-auto border border-[#dedede]">
              {product.specRows ? (
                <table className="w-full border-collapse text-center">
                  <thead>
                    <tr className="bg-[#f4f5f8]">
                      <th className="border border-[#dedede] px-4 py-3 text-[14px] font-semibold text-[#68728b] w-[280px]">{t("specType")}</th>
                      <th className="border border-[#dedede] px-4 py-3 text-[14px] font-semibold text-[#68728b]">{t("specModel")}</th>
                      <th className="border border-[#dedede] px-4 py-3 text-[14px] font-semibold text-[#68728b]">{t("specThickness")}</th>
                      <th className="border border-[#dedede] px-4 py-3 text-[14px] font-semibold text-[#68728b]">{t("specFire")}</th>
                      <th className="border border-[#dedede] px-4 py-3 text-[14px] font-semibold text-[#68728b]">{t("specSound")}</th>
                      <th className="border border-[#dedede] px-4 py-3 text-[14px] font-semibold text-[#68728b]">{t("specWeight")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specRows.map((row) => (
                      <tr key={row.model} className="bg-white">
                        <td className="border border-[#dedede] w-[280px] p-0 overflow-hidden">
                          <Image src={row.typeImage} alt={row.model} width={280} height={140} style={{ width: "100%", height: "auto", display: "block" }} />
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
                      <th className="border border-[#dedede] px-5 py-3 text-[14px] font-semibold text-[#68728b]">{t("specItem")}</th>
                      <th className="border border-[#dedede] px-5 py-3 text-[14px] font-semibold text-[#68728b]">{t("specValue")}</th>
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
        <div className="max-w-[1400px] mx-auto px-[60px] max-lg:px-6">
          <div className="border-t border-surface pt-[60px] flex flex-col items-center text-center">
            <h2 className="text-title font-semibold text-[24px] leading-relaxed mb-6">{t("ctaTitle")}</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" showArrow={false}>{t("ctaContact")}</Button>
              <Button href="/case" variant="secondary" showArrow={false}>{t("ctaCases")}</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
