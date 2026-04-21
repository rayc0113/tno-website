export interface CaseSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  trailing?: string[];
}

export interface CaseProject {
  slug: string;
  title: string;
  titleEn?: string;
  client: string;
  clientEn?: string;
  category: string;
  shortDescription: string;
  shortDescriptionEn?: string;
  description: string;
  descriptionEn?: string;
  coverImage: string;
  images: string[];
  services: string[];
  completedAt: string;
  location: string;
  locationEn?: string;
  tags: string[];
  publishedAt: string;
  isPublished: boolean;
  /** 結構化內文段落（選填） */
  sections?: CaseSection[];
  /** 英文版結構化內文段落（選填，與 sections 對應） */
  sectionsEn?: CaseSection[];
  /** 結語引言，顯示於內文末尾的 highlight 框（選填，預設使用 shortDescription） */
  closing?: string;
  closingEn?: string;
}

export interface CaseSummary {
  slug: string;
  title: string;
  client: string;
  category: string;
  shortDescription: string;
  coverImage: string;
  completedAt: string;
}
