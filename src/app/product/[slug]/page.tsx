import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, getAllProductSlugs, getProductSummaries } from "@/content/products";

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
      images: [{ url: product.coverImage, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = getProductSummaries()
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, 3);

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
      <section className="py-6 bg-[#0A1520] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors">首頁</Link>
            <span className="mx-2">/</span>
            <Link href="/product" className="hover:text-white transition-colors">精選產品</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden bg-white/5 mb-4">
                <Image
                  src={product.coverImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((img, i) => (
                  <div key={i} className="relative h-24 rounded overflow-hidden bg-white/5">
                    <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="text-xs text-[#4DA3D4] block mb-2">{product.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-white/70 leading-relaxed mb-8">{product.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">產品特點</h2>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/80 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#4DA3D4] rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">適用場景</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-[#1E6FBA] hover:bg-[#1a5f9e] text-white font-medium px-8 py-3 rounded inline-block transition-colors duration-200"
              >
                詢問此產品
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-12 bg-[#0A1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">技術規格</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((spec) => (
                  <tr key={spec.label} className="border-b border-white/10">
                    <td className="py-3 pr-8 text-white/50 w-40">{spec.label}</td>
                    <td className="py-3 text-white/90">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">相關產品</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/product/${p.slug}`}
                  className="group block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#4DA3D4]/40 transition-colors duration-200"
                >
                  <div className="relative h-40 bg-white/5">
                    <Image src={p.coverImage} alt={p.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium group-hover:text-[#4DA3D4] transition-colors duration-200">
                      {p.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
