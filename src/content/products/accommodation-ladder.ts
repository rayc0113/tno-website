import type { Product } from "@/types/product";

/**
 * 海軍艤裝工程（L 系列）— L-登艦梯
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，公司名只在最後一句出現，與材料類（岩棉等）同一個登記。
 * 刻意不寫尺寸、階數、載重與材質。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * ⚠️ 材質待欣展窗口確認：照片中踏面有熱浸鍍鋅特有的斑紋，但立柱與邊樑
 *    看起來像鋁擠型，無法從照片分辨是鋁合金或熱浸鍍鋅鋼，因此文案一律
 *    不提材質。確認後可補上「鋁合金製」或「熱浸鍍鋅鋼製」，說服力會更強。
 *
 * 註：本項照片僅 1 張。D 系列另有一批「D-登艦梯」照片（與本項同品項、
 *    不同客戶），欣展尚未提供，可再向窗口索取併入本項照片牆。
 */
const accommodationLadder: Product = {
  slug: "accommodation-ladder",
  name: "登艦梯",
  nameEn: "Accommodation Ladder",
  category: "海軍艤裝工程",
  shortDescription: "廠內整體預製的登艦梯，含防滑踏面與鋼索扶手",
  shortDescriptionEn:
    "Accommodation ladders prefabricated as complete units, with anti-slip treads and wire rope handrails",
  description:
    "登艦梯為人員上下船的主要通道，使用頻繁並承受活載重，傾角隨潮位與吃水變動。踏面須具防滑性能，扶手須連續且張力可調，端部與舷側的固定方式則決定梯身在潮位變化下能否保持貼合。\n\n" +
    "梯體於廠內整體預製後交付現場吊掛安裝，端部設固定與滾動機構。尺寸、階數、載重與傾角範圍須依船型與舷側高度設計；欣展可依專案條件提出規格建議，歡迎來電洽詢。",
  descriptionEn:
    "An accommodation ladder is the main route for people boarding and leaving a vessel. It is in constant use, carries live loads, and changes angle with the tide and the vessel's draught. The treads must resist slipping, the handrail must be continuous and adjustable in tension, and the way the ends attach to the ship's side determines whether the ladder stays seated as the water level changes.\n\n" +
    "Ladders are prefabricated as complete units in the workshop and delivered for lifting into place on site, with fixing and rolling arrangements at the ends. Dimensions, the number of steps, load rating, and the range of working angles are designed around the vessel type and freeboard height. TNO can advise on specification for your project — please contact us.",
  coverImage: "/images/products/naval-outfitting/accommodation-ladder-cover.webp",
  images: ["/images/products/naval-outfitting/accommodation-ladder-cover.webp"],
  specs: [],
  features: [
    "廠內整體預製，到場吊掛即可安裝",
    "防滑踏面，適用濕滑與傾斜狀態",
    "鋼索扶手張力可調，長期使用後仍能保持繃緊",
    "端部設固定與滾動機構，隨潮位變化維持貼合",
  ],
  featuresEn: [
    "Prefabricated as a complete unit, ready to be lifted into place on arrival",
    "Anti-slip treads suited to wet and inclined conditions",
    "Wire rope handrail with adjustable tension, staying taut over years of use",
    "Fixing and rolling arrangements at the ends keep the ladder seated as the tide changes",
  ],
  applications: [
    "艦艇與商船的人員上下船通道",
    "碼頭停靠期間的臨時登船設施",
    "既有登艦梯的汰換",
  ],
  applicationsEn: [
    "Crew and visitor access for naval and commercial vessels",
    "Temporary boarding access while alongside",
    "Replacement of existing accommodation ladders",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default accommodationLadder;
