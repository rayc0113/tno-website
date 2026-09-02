import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-測桿預製及安裝工程
 *
 * ⚠️ 版面示意用內容 —— 名稱與分類是正確的，其餘文字與圖片皆為佔位。
 *
 * 素材到位後要替換的欄位（見 materials/01-產品-客製化工程D系列）：
 *   shortDescription / shortDescriptionEn  ← 卡片上的一句話
 *   description / descriptionEn            ← 詳情頁開頭段落
 *   features / applications（含 En）        ← 條列內容
 *   specs / specsEn                        ← 規格表，工程類若不適用可整個刪掉
 *   coverImage / images                    ← 換成 /images/products/sounding-rod-cover.webp 等
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
  coverImage: "/images/products/sounding-rod-cover.webp",
  images: [
    "/images/products/sounding-rod-cover.webp",
    "/images/products/sounding-rod-1.webp",
  ],
  specs: [
    { label: "【示意】規格項目一", value: "數值或說明待補" },
    { label: "【示意】規格項目二", value: "數值或說明待補" },
    { label: "【示意】適用規範", value: "待欣展確認" },
  ],
  specsEn: [
    { label: "[Placeholder] Spec 1", value: "Pending" },
    { label: "[Placeholder] Spec 2", value: "Pending" },
    { label: "[Placeholder] Standards", value: "Pending" },
  ],
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
