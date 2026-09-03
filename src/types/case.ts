export interface CaseSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  trailing?: string[];
}

/**
 * 案例照片
 *
 * caption 為該張照片的說明，顯示於圖片下方；未填則不顯示說明列。
 * 說明是「這張照片在拍什麼」，不是文案——內文敘事由 sections 負責。
 */
export interface CaseImage {
  src: string;
  caption?: string;
  captionEn?: string;
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
  /** 施工照片。詳情頁會依序插在各段之間，剩餘的收在文末照片牆 */
  images: CaseImage[];
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
  /**
   * 結語引言。
   * ⚠️ 2026-09-02 起詳情頁不再渲染結語區塊（珈汶要求統一移除），
   *    欄位保留是為了不刪掉已寫好的文字，日後若要恢復可直接沿用。
   */
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
