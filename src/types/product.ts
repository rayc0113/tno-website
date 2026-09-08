export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductSpecRow {
  typeImage: string;
  model: string;
  thickness: string;
  fireClass: string;
  soundReduction: string;
  weight: string;
}

export interface Product {
  slug: string;
  name: string;
  nameEn?: string;
  category: string;
  shortDescription: string;
  shortDescriptionEn?: string;
  description: string;
  descriptionEn?: string;
  coverImage?: string;
  images: string[];
  specs: ProductSpec[];
  specsEn?: ProductSpec[];
  specRows?: ProductSpecRow[];
  features: string[];
  featuresEn?: string[];
  systemDescription?: string;
  systemDescriptionEn?: string;
  applications: string[];
  applicationsEn?: string[];
  publishedAt: string;
  isPublished: boolean;
}

export interface ProductSummary {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  coverImage: string;  // 首頁用（指定封面圖）
  listImage: string;   // 列表頁用（畫廊第一張）
}

/**
 * 產品頁篩選列的一個分類鈕
 *
 * pending = true 代表「分類已確定要有，但還沒有任何品項」——
 * 篩選列會顯示但不可點按（見 ProductGrid），避免點進去空無一物。
 */
export interface ProductFilterCategory {
  name: string;
  pending: boolean;
}
