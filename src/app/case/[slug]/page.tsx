import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCaseBySlug, getAllCaseSlugs, getCaseSummaries } from "@/content/cases";
import ContactCTA from "@/components/ContactCTA";

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
    .filter((c) => c.slug !== slug)
    .sort(() => Math.random() - 0.5)
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

  const dateDisplay = caseItem.completedAt
    .substring(0, 7)
    .replace("-", " / ");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-surface pt-[70px]">
        <div className="max-w-[1080px] mx-auto px-[60px] max-lg:px-4 py-4">
          <nav className="text-sm text-body flex items-center gap-2">
            <Link href="/" className="hover:text-brand transition-colors">首頁</Link>
            <span className="text-muted">/</span>
            <Link href="/case" className="hover:text-brand transition-colors">實績案例</Link>
            <span className="text-muted">/</span>
            <span className="text-muted">{caseItem.title}</span>
          </nav>
        </div>
      </div>

      <div className="bg-white">
        {/* Main Content Column */}
        <div className="max-w-[1080px] mx-auto px-[60px] max-lg:px-4 pt-10">
          {/* Title + Date */}
          <div className="flex justify-between items-start gap-6">
            <h1 className="text-[40px] font-semibold text-title leading-snug">
              {caseItem.title}
            </h1>
            <span className="text-[14px] text-body whitespace-nowrap pt-3 shrink-0">
              更新日期：{dateDisplay}
            </span>
          </div>

          {/* Client Meta Row */}
          <div className="flex items-center gap-6 mt-4 text-[16px] text-title">
            <span className="flex items-center gap-1.5">
              {/* Building icon */}
              <svg className="w-5 h-5 shrink-0 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z" clipRule="evenodd" />
              </svg>
              {caseItem.client}
            </span>
            <span className="flex items-center gap-1.5">
              {/* Location pin icon */}
              <svg className="w-5 h-5 shrink-0 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
              </svg>
              {caseItem.location}
            </span>
          </div>

          {/* Cover Image */}
          <div className="relative w-full h-[470px] rounded-[15px] overflow-hidden mt-8">
            <Image
              src={caseItem.coverImage}
              alt={caseItem.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Description */}
          <p className="text-[16px] text-title leading-[30px] mt-10">
            {caseItem.description}
          </p>

          {/* Body Sections */}
          {caseItem.sections?.map((section, i) => (
            <div key={i} className="mt-8">
              <h2 className="text-[24px] font-semibold text-title leading-[30px] mb-4">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p, j) => (
                <p key={j} className="text-[16px] text-title leading-[30px] mb-4">
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="text-[16px] text-title leading-[30px]">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.trailing?.map((p, j) => (
                <p key={j} className="text-[16px] text-title leading-[30px] mb-4">
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* Quote / Closing Box */}
          <div className="bg-[#e4f1f9] rounded-[15px] px-6 py-6 mt-10 mb-[80px]">
            <p className="text-[20px] font-semibold text-title mb-2">結語</p>
            <p className="text-[16px] font-semibold text-title leading-[30px]">
              {caseItem.closing ?? caseItem.shortDescription}
            </p>
          </div>
        </div>

        {/* More Cases Section */}
        {relatedCases.length > 0 && (
          <section className="bg-page py-[80px] mt-[80px]">
            <div className="max-w-[1400px] mx-auto px-[60px] max-lg:px-4">
              <h2 className="text-[32px] font-semibold text-title mb-10">
                更多船舶案例
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCases.map((c) => (
                  <Link key={c.slug} href={`/case/${c.slug}`} className="group block">
                    <div className="relative h-[220px] bg-white rounded-[15px] overflow-hidden mb-4">
                      <Image
                        src={c.coverImage}
                        alt={c.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-[14px] text-body">{c.category}</span>
                    <h3 className="text-title font-semibold text-[18px] mt-1 group-hover:text-brand transition-colors duration-200">
                      {c.title}
                    </h3>
                    <p className="text-body text-[16px] mt-1 line-clamp-2">
                      {c.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <ContactCTA />
    </>
  );
}
