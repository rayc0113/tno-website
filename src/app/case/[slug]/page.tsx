import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCaseBySlug, getAllCaseSlugs, getCaseSummaries } from "@/content/cases";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseItem = getCaseBySlug(slug);
  if (!caseItem) return {};

  return {
    title: caseItem.title,
    description: caseItem.shortDescription,
    alternates: { canonical: `/case/${slug}` },
    openGraph: {
      title: `${caseItem.title}｜TNO 欣展船舶`,
      description: caseItem.shortDescription,
      images: [{ url: caseItem.coverImage, alt: caseItem.title }],
    },
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const caseItem = getCaseBySlug(slug);
  if (!caseItem) notFound();

  const relatedCases = getCaseSummaries()
    .filter((c) => c.slug !== slug && c.category === caseItem.category)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseItem.title,
    description: caseItem.description,
    image: caseItem.images,
    author: { "@type": "Organization", name: "TNO 欣展" },
    publisher: { "@type": "Organization", name: "TNO 欣展" },
    datePublished: caseItem.publishedAt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Image */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D1B2A] z-10" />
        <Image
          src={caseItem.coverImage}
          alt={caseItem.title}
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-[#0A1520] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors">首頁</Link>
            <span className="mx-2">/</span>
            <Link href="/case" className="hover:text-white transition-colors">成功案例</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">{caseItem.title}</span>
          </nav>
        </div>
      </section>

      {/* Case Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <span className="text-xs text-[#4DA3D4] mb-3 block">{caseItem.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{caseItem.title}</h1>
              <p className="text-white/70 leading-relaxed text-lg mb-10">{caseItem.description}</p>

              {/* Image Gallery */}
              {caseItem.images.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">工程實景</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {caseItem.images.map((img, i) => (
                      <div key={i} className="relative h-52 rounded-lg overflow-hidden bg-white/5">
                        <Image
                          src={img}
                          alt={`${caseItem.title} 工程實景 ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 sticky top-24">
                <h2 className="font-semibold mb-4">專案資訊</h2>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-white/40 mb-1">客戶</dt>
                    <dd className="text-white/90">{caseItem.client}</dd>
                  </div>
                  <div>
                    <dt className="text-white/40 mb-1">施工地點</dt>
                    <dd className="text-white/90">{caseItem.location}</dd>
                  </div>
                  <div>
                    <dt className="text-white/40 mb-1">完工日期</dt>
                    <dd className="text-white/90">{caseItem.completedAt}</dd>
                  </div>
                  <div>
                    <dt className="text-white/40 mb-2">服務項目</dt>
                    <dd>
                      <ul className="space-y-1">
                        {caseItem.services.map((service) => (
                          <li key={service} className="flex items-center gap-2 text-white/80">
                            <span className="w-1.5 h-1.5 bg-[#4DA3D4] rounded-full flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-white/40 mb-2">標籤</dt>
                    <dd className="flex flex-wrap gap-2">
                      {caseItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 text-white/60 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="block text-center bg-[#1E6FBA] hover:bg-[#1a5f9e] text-white font-medium py-2.5 rounded transition-colors duration-200 text-sm"
                  >
                    詢問類似工程
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="py-16 bg-[#0A1520]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">相關案例</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/case/${c.slug}`}
                  className="group block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#4DA3D4]/40 transition-colors duration-200"
                >
                  <div className="relative h-40 bg-white/5">
                    <Image src={c.coverImage} alt={c.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium group-hover:text-[#4DA3D4] transition-colors duration-200">
                      {c.title}
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
