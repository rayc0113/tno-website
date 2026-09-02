import type { Product } from "@/types/product";

/**
 * 海軍艤裝工程（L 系列）— L-彈藥庫改裝案
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，公司名只在最後一句出現，與材料類（岩棉等）同一個登記。
 *
 * ⚠️ 這是軍方案子，文案刻意停在「艙內儲放架系統」的工程邏輯層級：
 *    不寫存放物、艦名、單位、艙室位置、層數格距與尺寸數量。
 *
 * ⚠️ 待欣展窗口確認：「彈藥庫改裝」這個案名是否適合公開露出。
 *    - 可以公開 → 維持現名
 *    - 不宜公開 → 改為中性名稱（例如「艙內儲放架系統」），並一併確認
 *      照片是否也要撤下
 *    此項須在網站正式上線前得到答覆。
 */
const magazineConversion: Product = {
  slug: "magazine-conversion",
  name: "彈藥庫改裝",
  nameEn: "Magazine Conversion",
  category: "海軍艤裝工程",
  shortDescription: "艙內儲放架系統的設計製作與現場組裝",
  shortDescriptionEn: "Design, fabrication, and on-site assembly of onboard storage rack systems",
  description:
    "艦艇於航行中持續承受搖晃與振動，艙內儲放架除容納物件外，須確保物件不位移、不碰撞，並維持人員取放的安全空間。架體剛性、固定方式與緩衝設計為主要設計重點。\n\n" +
    "架體採金屬擠型骨架螺栓組立，適用於既有艙室的有限施工空間；各格位設弧形托座貼合物件外形，並以可調夾具與緩衝元件抑制位移。層數、格距與固定方式須依艙室尺寸與使用需求設計；欣展可依現場條件提出配置方案，歡迎來電洽詢。",
  descriptionEn:
    "A vessel underway is subject to continuous roll and vibration, so onboard storage racks must do more than hold their contents: items have to stay put, avoid contact with one another, and remain safely accessible to the crew. Frame rigidity, the method of restraint, and cushioning are therefore the primary design considerations.\n\n" +
    "Racks are built from bolted metal extrusion frames, which suits the limited working space of an existing compartment. Each position carries a contoured saddle matched to the shape of its contents, with adjustable clamps and cushioning elements to restrain movement. The number of tiers, spacing, and restraint method are designed around compartment dimensions and how the rack will be used. TNO can propose a layout for your compartment — please contact us.",
  coverImage: "/images/products/naval-outfitting/magazine-conversion-cover.webp",
  images: [
    "/images/products/naval-outfitting/magazine-conversion-cover.webp",
    "/images/products/naval-outfitting/magazine-conversion-1.webp",
    "/images/products/naval-outfitting/magazine-conversion-2.webp",
  ],
  specs: [],
  features: [
    "金屬擠型骨架螺栓組立，適用有限施工空間",
    "弧形托座貼合物件外形，減少接觸面應力集中",
    "可調夾具與緩衝元件抑制航行中的位移",
    "分層配置依取放動線與艙高規劃",
  ],
  featuresEn: [
    "Bolted metal extrusion frame, suited to confined working spaces",
    "Contoured saddles matched to the shape of the contents, reducing stress concentration at contact points",
    "Adjustable clamps and cushioning elements restrain movement underway",
    "Tier layout planned around access routes and compartment height",
  ],
  applications: [
    "艦艇艙內儲放架的新製與汰換",
    "既有艙室的空間重新規劃",
    "需要固定與緩衝的艙內設備置放",
  ],
  applicationsEn: [
    "New and replacement storage racks in vessel compartments",
    "Reconfiguring the space in an existing compartment",
    "Onboard stowage that requires restraint and cushioning",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default magazineConversion;
