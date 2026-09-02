import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-測桿預製及安裝工程
 *
 * ⚠️ 文案仍為佔位內容 —— 名稱、分類與照片都已是正式的，只有文字待替換。
 *
 * 素材到位後要替換的欄位（見 materials/01-產品-客製化工程D系列）：
 *   shortDescription / shortDescriptionEn  ← 詳情頁的 SEO／OG description
 *                                          （列表卡片只顯示圖／分類／名稱，不顯示這句）
 *   description / descriptionEn            ← 詳情頁開頭段落
 *   features / applications（含 En）        ← 條列內容
 *   （coverImage / images 已於 2026-09-01 換成欣展提供的實照，
 *    位於 /images/products/custom-engineering/，不需再動）
 *
 * 註：本項是「湊滿 16 筆產品」的暫定名單之一，尚待欣展窗口確認，
 *    可能整批或個別替換成其他工程項目。
 */
const soundingRod: Product = {
  slug: "sounding-rod",
  name: "測桿預製與安裝",
  nameEn: "Sounding Rod Prefabrication & Installation",
  category: "客製化工程",
  shortDescription: "【示意文字】此處放本項工程的一句話說明，正式文案待欣展提供後替換。",
  shortDescriptionEn: "[Placeholder] A one-line summary of this service, pending final copy.",
  description:
    "【示意文字】此處為本項工程的完整說明段落，將描述施作範圍、使用材料、工法特點與品質管控方式。" +
    "實際內容待欣展提供原始資訊後，由我們整理撰寫成正式文案。",
  descriptionEn:
    "[Placeholder] A full description of this service will go here, covering scope of work, " +
    "materials used, construction methods, and quality control. Final copy pending client input.",
  coverImage: "/images/products/custom-engineering/sounding-rod-cover.webp",
  images: [
    "/images/products/custom-engineering/sounding-rod-cover.webp",
    "/images/products/custom-engineering/sounding-rod-1.webp",
  ],
  specs: [],
  features: [
    "【示意】工程特點一，待正式文案替換",
    "【示意】工程特點二，待正式文案替換",
    "【示意】工程特點三，待正式文案替換",
  ],
  featuresEn: [
    "[Placeholder] Feature one, pending final copy",
    "[Placeholder] Feature two, pending final copy",
    "[Placeholder] Feature three, pending final copy",
  ],
  applications: [
    "【示意】應用場景一",
    "【示意】應用場景二",
  ],
  applicationsEn: [
    "[Placeholder] Application one",
    "[Placeholder] Application two",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default soundingRod;
