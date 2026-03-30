export interface CaseProject {
  slug: string;
  title: string;
  client: string;
  category: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  images: string[];
  services: string[];
  completedAt: string;
  location: string;
  tags: string[];
  publishedAt: string;
  isPublished: boolean;
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
