import type { Product, ProductSummary } from "@/types/product";
import type { CaseProject, CaseSummary } from "@/types/case";

type Locale = "zh" | "en";

function pickLocalized(en: string | undefined, zh: string, locale: Locale): string {
  return locale === "en" && en ? en : zh;
}

export function localizeProduct(product: Product, locale: Locale): Product {
  if (locale !== "en") return product;
  return {
    ...product,
    name: pickLocalized(product.nameEn, product.name, locale),
    shortDescription: pickLocalized(product.shortDescriptionEn, product.shortDescription, locale),
    description: pickLocalized(product.descriptionEn, product.description, locale),
    features: product.featuresEn ?? product.features,
    systemDescription: product.systemDescriptionEn ?? product.systemDescription,
    applications: product.applicationsEn ?? product.applications,
    specs: product.specsEn ?? product.specs,
  };
}

export function localizeProductSummary(summary: ProductSummary, product: Product, locale: Locale): ProductSummary {
  if (locale !== "en") return summary;
  return {
    ...summary,
    name: pickLocalized(product.nameEn, summary.name, locale),
    shortDescription: pickLocalized(product.shortDescriptionEn, summary.shortDescription, locale),
  };
}

export function localizeCase(caseItem: CaseProject, locale: Locale): CaseProject {
  if (locale !== "en") return caseItem;
  return {
    ...caseItem,
    title: pickLocalized(caseItem.titleEn, caseItem.title, locale),
    shortDescription: pickLocalized(caseItem.shortDescriptionEn, caseItem.shortDescription, locale),
    description: pickLocalized(caseItem.descriptionEn, caseItem.description, locale),
    client: pickLocalized(caseItem.clientEn, caseItem.client, locale),
    location: pickLocalized(caseItem.locationEn, caseItem.location, locale),
    sections: caseItem.sectionsEn ?? caseItem.sections,
    closing: caseItem.closingEn ?? caseItem.closing,
  };
}

export function localizeCaseSummary(summary: CaseSummary, caseItem: CaseProject, locale: Locale): CaseSummary {
  if (locale !== "en") return summary;
  return {
    ...summary,
    title: pickLocalized(caseItem.titleEn, summary.title, locale),
    shortDescription: pickLocalized(caseItem.shortDescriptionEn, summary.shortDescription, locale),
  };
}
