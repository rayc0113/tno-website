export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  images: string[];
  specs: ProductSpec[];
  features: string[];
  applications: string[];
  publishedAt: string;
  isPublished: boolean;
}

export interface ProductSummary {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  coverImage: string;
}
