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
