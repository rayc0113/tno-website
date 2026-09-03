import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import CaseImageFigure from "@/components/case/CaseImageFigure";
import { getCaseBySlug, getAllCaseSlugs, getPublishedCases } from "@/content/cases";
import { localizeCase, localizeCaseSummary } from "@/lib/localize";
import { Link } from "@/i18n/navigation";
import ContactCTA from "@/components/ContactCTA";
import type { CaseSummary } from "@/types/case";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const raw = getCaseBySlug(slug);
  if (!raw) return {};
  const loc: "zh" | "en" = locale === "en" ? "en" : "zh";
  const caseItem = localizeCase(raw, loc);
  const ogSuffix = loc === "en" ? " | TNO Marine" : "｜TNO 欣展船舶";

  return {
    title: caseItem.title,
    description: caseItem.shortDescription,
    alternates: {
      canonical: `/${locale}/case/${slug}`,
      languages: {
        "zh-TW": `/zh/case/${slug}`,
        "en": `/en/case/${slug}`,
      },
    },
    openGraph: {
      title: `${caseItem.title}${ogSuffix}`,
      description: caseItem.shortDescription,
      images: [{ url: caseItem.coverImage, alt: caseItem.title }],
    },
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const raw = getCaseBySlug(slug);
  if (!raw) notFound();
  const loc: "zh" | "en" = locale === "en" ? "en" : "zh";
  const caseItem = localizeCase(raw, loc);

  const t = await getTranslations("case.detail");
  const tc = await getTranslations("categories");
  const translateCategory = (cat: string) => (tc.has(cat) ? tc(cat) : cat);
  const brandName = loc === "en" ? "TNO Marine" : "TNO 欣展";

  const relatedCases: CaseSummary[] = getPublishedCases()
    .filter((c) => c.slug !== slug)
    .sort((a, b) => b.completedAt.localeCompare(a.completedAt))
    .slice(0, 3)
    .map((c) => {
      const summary: CaseSummary = {
        slug: c.slug,
        title: c.title,
        client: c.client,
        category: c.category,
        shortDescription: c.shortDescription,
        coverImage: c.coverImage,
        completedAt: c.completedAt,
      };
      return localizeCaseSummary(summary, c, loc);
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseItem.title,
    description: caseItem.description,
    image: caseItem.images.map((img) => img.src),
    author: { "@type": "Organization", name: brandName },
    publisher: { "@type": "Organization", name: brandName },
    datePublished: caseItem.publishedAt,
  };

  const dateDisplay = caseItem.completedAt.substring(0, 7).replace("-", " / ");

  // 全頁照片共用同一個陣列與索引：封面、段落間插圖、文末照片牆點開後都在
  // 同一組裡前後移動，計數也以整組為準（例如 1 / 6）。
  // 封面通常也列在 images 裡（content 檔案照慣例把第一張同時當封面）；
  // 若沒列入，就把 coverImage 補成第一張，避免它無法點開放大。
  const coverIndex = caseItem.images.findIndex((img) => img.src === caseItem.coverImage);
  const gallery =
    coverIndex >= 0 ? caseItem.images : [{ src: caseItem.coverImage }, ...caseItem.images];
  const coverAt = coverIndex >= 0 ? coverIndex : 0;

  // 內文用的照片是「除封面以外」的那些，避免同一張在頁首與段落間各出現一次。
  // 每個段落之後插一張，段落用完還有剩的收進文末照片牆。
  // 照片只有 1 張時（例如登艦梯）bodyAt 為空，版面自動退化成只有封面，
  // 不會出現空的圖位。
  const bodyAt = gallery.map((_, i) => i).filter((i) => i !== coverAt);
  const sectionCount = caseItem.sections?.length ?? 0;
  const inlineAt = bodyAt.slice(0, Math.min(sectionCount, bodyAt.length));
  const restAt = bodyAt.slice(inlineAt.length);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-surface pt-[70px]">
        <div className="max-w-[840px] mx-auto px-[60px] max-lg:px-6 py-4">
          <nav className="text-sm text-body flex items-center gap-2">
            <Link href="/" className="hover:text-brand transition-colors">{t("home")}</Link>
            <span className="text-muted">/</span>
            <Link href="/case" className="hover:text-brand transition-colors">{t("cases")}</Link>
            <span className="text-muted">/</span>
            <span className="text-muted">{caseItem.title}</span>
          </nav>
        </div>
      </div>

      <div className="bg-white">
        {/* 內寬 720px：圖片與文字同寬，避免段落間寬窄交替造成伸縮感 */}
        <div className="max-w-[840px] mx-auto px-[60px] max-lg:px-6 pt-10">
          {/* Title + Date */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start md:gap-6">
            <h1 className="text-[28px] md:text-[40px] font-semibold text-title leading-snug">
              {caseItem.title}
            </h1>
            <span className="text-[14px] text-body whitespace-nowrap md:pt-3 shrink-0 mt-1 md:mt-0">
              {t("updatedAt")}{dateDisplay}
            </span>
          </div>

          {/* Client Meta Row */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-3 md:mt-4 text-[15px] md:text-[16px] text-title">
            <span className="flex items-center gap-1.5">
              <svg className="w-5 h-5 shrink-0 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z" clipRule="evenodd" />
              </svg>
              {caseItem.client}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-5 h-5 shrink-0 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
              </svg>
              {caseItem.location}
            </span>
          </div>

          {/* Cover Image（3:2，減少正方形施工照被裁切的比例）。
              與其他照片走同一個元件，所以同樣可以點開放大，規則一致。 */}
          <div className="mt-6 md:mt-8">
            <CaseImageFigure
              images={gallery}
              locale={locale}
              indexes={[coverAt]}
              layout="single"
              alt={caseItem.title}
              priority
            />
          </div>

          <p className="text-[16px] text-title leading-[30px] mt-10 text-pretty">{caseItem.description}</p>

          {/* Body Sections：每段之後依序插一張施工照，剩餘的收在文末照片牆 */}
          {caseItem.sections?.map((section, i) => (
            <div key={i}>
              <div className="mt-8">
                <h2 className="text-[24px] font-semibold text-title leading-[30px] mb-4">{section.heading}</h2>
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="text-[18px] text-title leading-[32px] mb-4 text-pretty">{p}</p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="text-[18px] text-title leading-[32px]">{b}</li>
                    ))}
                  </ul>
                )}
                {section.trailing?.map((p, j) => (
                  <p key={j} className="text-[18px] text-title leading-[32px] mb-4 text-pretty">{p}</p>
                ))}
              </div>
              {i < inlineAt.length && (
                <CaseImageFigure
                  images={gallery}
                  locale={locale}
                  indexes={[inlineAt[i]]}
                  layout="single"
                  alt={caseItem.title}
                />
              )}
            </div>
          ))}

          {/* 文末照片牆：段落沒用完的照片 */}
          {restAt.length > 0 && (
            <div className="mt-12">
              <h2 className="text-[24px] font-semibold text-title leading-[30px] mb-2">{t("gallery")}</h2>
              <CaseImageFigure
                images={gallery}
                locale={locale}
                indexes={restAt}
                layout="grid"
                alt={caseItem.title}
              />
            </div>
          )}

          {/* Closing Box */}
          <div className="bg-sky-light rounded-[15px] px-6 py-6 mt-10 mb-[80px]">
            <p className="text-[20px] font-semibold text-title mb-2">{t("closing")}</p>
            <p className="text-[18px] font-semibold text-title leading-[32px] text-pretty">
              {caseItem.closing ?? caseItem.shortDescription}
            </p>
          </div>
        </div>

        {/* More Cases */}
        {relatedCases.length > 0 && (
          <section className="bg-page py-12 md:py-[80px] mt-10 md:mt-[80px]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
              <h2 className="text-[24px] md:text-[32px] font-semibold text-title mb-8 md:mb-10">
                {t("moreCases")}
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
                    <span className="text-[14px] text-body">{translateCategory(c.category)}</span>
                    <h3 className="text-title font-semibold text-[18px] mt-1 group-hover:text-brand transition-colors duration-200">{c.title}</h3>
                    <p className="text-body text-[17px] mt-1 line-clamp-2">{c.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <ContactCTA locale={locale} />
    </>
  );
}
