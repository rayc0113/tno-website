import type { Product } from "@/types/product";

/**
 * 海軍艤裝工程（L 系列）— L-登艦梯
 *
 * ⚠️ 暫定代表項目，文案與圖片待欣展提供（見 materials/02-產品-海軍艤裝工程L系列）。
 * 素材到位後：填入 description／images／specs／features／applications，
 * 並將 isPublished 改為 true。
 *
 * 註：這 6 項是「湊滿 12 筆產品」的暫定名單，尚待欣展窗口確認，
 *    可能整批或個別替換成其他工程項目。
 */
const accommodationLadder: Product = {
  slug: "accommodation-ladder",
  name: "登艦梯",
  nameEn: "Accommodation Ladders",
  category: "海軍艤裝工程",
  shortDescription: "（待欣展提供文案）",
  shortDescriptionEn: "(Copy pending from client)",
  description: "（待欣展提供文案）",
  descriptionEn: "(Copy pending from client)",
  images: [],
  specs: [],
  features: [],
  applications: [],
  publishedAt: "2026-07-24",
  isPublished: false,
};

export default accommodationLadder;
