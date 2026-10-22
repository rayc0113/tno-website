import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-測量桿預製與安裝（工單原名：D-測桿預製及安裝工程）
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，全段不出現公司名（2026-09-07 依珈汶要求移除原本的「欣展可依…
 * 歡迎來電洽詢」收句——每支都掛同一句像罐頭文字），只針對功能與工序描述。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * ✅ 2026-10-14 已查明用途，整段重寫。
 *    依窗口提供的「D-測桿預製及安裝工程-完工報告」（購案編號 1150013），
 *    工程名稱原文是 **Survey pole 預製及安裝工程**——是測量桿，不是先前
 *    從照片推測的測深桿（sounding rod）。nameEn 原本寫 Sounding Rod，錯誤，
 *    已改為 Survey Pole。
 *
 *    文案據此補上功能：桿件承載測量設備、基座設樞軸可轉動收放。樞軸在
 *    案例頁的照片上看得到（基座弧形凹槽兩側以肋板補強）。報告第 3 段寫的是
 *    「廠內組裝**及測試**」，所以「出廠前先讓轉動機構動過一次」是報告載明的
 *    工序，不是推測。報告另載「材質證明如附件」。
 *
 *    ⚠️ 仍刻意不寫：測量設備是什麼、量什麼（報告未載，照片也看不出來）、
 *       桿長、重量、材質牌號與樞軸規格。
 *
 *    slug 維持 sounding-rod，URL 與圖檔名不動——同設備平台的處理原則
 *    （2026-10-15 珈汶：「不影響的就不用改」）。對外顯示的名稱已正確，
 *    網址沿用不影響閱讀。此事已結案，日後不必再提。
 *
 *    同一個案子另有案例頁 src/content/cases/survey-pole-install.ts，
 *    兩邊文字刻意不重複（避免站內重複內容）。
 */
const soundingRod: Product = {
  slug: "sounding-rod",
  name: "測量桿預製與安裝",
  nameEn: "Survey Pole Prefabrication & Installation",
  category: "客製化工程",
  shortDescription: "承載測量設備的測量桿與可收放基座，廠內預製測試後上船安裝",
  shortDescriptionEn:
    "Survey poles and their stowable bases — prefabricated and tested in the workshop, then installed on board",
  description:
    "測量桿是將測量設備支撐至船體之外的桿件結構，以基座固定於甲板。基座設有樞軸，桿體可轉動收放——作業時伸出，不作業時收起，不必長時間占用船舷。樞軸同時是整組結構的受力核心：桿體伸出時所產生的彎矩由此傳入基座，再經甲板的銲道與螺栓傳至船體，因此基座兩側以肋板補強。樞軸的間隙若在反覆收放後走樣，桿體的指向會跟著偏移，而這正是桿上的測量設備最不能接受的。\n\n" +
    "施工範圍涵蓋材料加工、廠內組裝與測試、運送至現場，以及吊裝定位與甲板固定。轉動機構在出廠前即於廠內組裝並實際動作測試，確認無誤才運往現場；接合面的尺寸亦在預製階段控制，減少現場調整。桿長、基座形式與固定方式須依甲板結構與使用需求設計，工程並隨附材質證明。",
  descriptionEn:
    "A survey pole carries measuring equipment out clear of the hull, supported on a base fixed to the deck. The base carries a pivot so that the pole can be deployed and stowed — out when it is working, back in when it is not, rather than permanently occupying the ship\u2019s side. That pivot is also where the structure takes its load: the bending moment of the deployed pole passes through it into the base, and from there into the hull by way of the welds and bolts at the deck, which is why the base is stiffened with gussets on both sides. Should the pivot clearances open up after repeated use, the pole no longer points true — precisely what the equipment mounted on it cannot tolerate.\n\n" +
    "The scope of work covers material preparation, workshop assembly and testing, delivery to site, and lifting into position and securing to the deck. The moving assembly is built up and actually worked in the workshop before it leaves, and the mating faces are dimensioned under workshop control, so little adjustment is needed on site. Pole length, base design and the method of fixing follow from the deck structure and the intended use, and material certificates are supplied with the work.",
  coverImage: "/images/products/custom-engineering/sounding-rod-cover.webp",
  images: [
    "/images/products/custom-engineering/sounding-rod-cover.webp",
    "/images/products/custom-engineering/sounding-rod-1.webp",
  ],
  specs: [],
  features: [
    "基座設樞軸，桿體可轉動收放，不作業時不占用船舷",
    "轉動機構於廠內組裝後先行測試，確認動作正常才出廠",
    "基座兩側以肋板補強，承接桿體伸出時的彎矩",
    "接合面於預製階段控制尺寸，現場僅需吊掛就位與固定",
    "隨工程提供材質證明，材料來源可追溯",
  ],
  featuresEn: [
    "A pivoting base lets the pole stow away, so it need not occupy the ship\u2019s side when idle",
    "The moving assembly is worked and tested in the workshop before it ever leaves",
    "Gussets either side of the base carry the bending moment of the deployed pole",
    "Mating faces dimensioned under workshop control, so site work is lifting and fixing only",
    "Material certificates supplied with the work, so the stock can be traced",
  ],
  applications: [
    "船上測量設備支撐桿件與基座的新製安裝",
    "既有基座的補強與汰換",
    "可收放式甲板結構件的預製與現場吊裝",
  ],
  applicationsEn: [
    "New survey poles and bases installed on board",
    "Reinforcement and replacement of existing bases",
    "Prefabrication and on-site lifting of stowable deck structures",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default soundingRod;
