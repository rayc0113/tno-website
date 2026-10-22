import type { CaseProject } from "@/types/case";

/**
 * 測量桿的廠內預製與單日上船安裝
 *
 * 【第四筆依 TNO 正式工單撰寫的案例】2026-10-13
 *
 * 素材來源：窗口提供的「D-測桿預製及安裝工程-完工報告」PDF（2 頁）。
 * 報告原文：
 *   購案編號 1150013　工程名稱「Survey pole 預製及安裝工程」
 *   115/03/12 委託
 *   03/13     相關材料陸續進廠加工
 *   03/25     人員及機具進場安裝，並於 03/25 完成
 *   報告分段：1 施工材料進場　2 材料加工　3 廠內組裝及測試
 *             4 案場施工中　5 案場施工後　6 材質證明如附件
 *   驗收日期 2026/03/25　結果「合格」
 *
 * 敘事選擇：三筆下來主軸不能重複。風管與船台是「廠內做完、壓縮現場工期」，
 * 設備平台是「分階段上船」，這筆的特點是整案只有十三天、現場只有一天。
 * 機制寫在報告裡——第 3 段是「廠內組裝**及測試**」，先在廠裡組起來測過，
 * 現場才敢排一天。因此全篇以「為什麼現場只要一天」為軸。
 *
 * ✅ 品名定案：2026-10-22 窗口 Lucy 轉達客戶意見「需要多一個字」，中文由
 *    「測桿」改為「測量桿」，與報告的英文原名 Survey pole 一致。
 *
 * ⚠️ 這份報告當初解決了產品頁的一個疑問：「測桿」是 Survey pole（測量桿），
 *    不是我們當初從照片推測的測深桿。src/content/products/sounding-rod.ts
 *    的文案需要據此修正，已另列待辦。
 *
 * ⚠️ 刻意不寫：
 *    - 船名與客戶名（報告載有，依目前不具名政策省略）
 *    - 碼頭泊位（報告載明為台中港 45 號碼頭，僅保留「台中港」）
 *    - 測量設備是什麼、量什麼（報告未載，照片也看不出來）
 *    - 桿長、重量、材質與樞軸規格
 *
 * ⚠️ 照片只有兩張：報告內嵌照片每張僅約 550px 寬（一排五張），放到 720px
 *    版面會糊，因此改用產品頁的兩張原圖（914×914）。報告中另有 28 張涵蓋
 *    進料、加工、廠內組裝測試、現場安裝與完工，已列入向窗口索取原始檔的
 *    清單，取得後補齊。珈汶 2026-10-13 決定先以現有素材讓 TNO 看整體架構。
 */
const surveyPoleInstall: CaseProject = {
  slug: "survey-pole-install",
  title: "測量桿的廠內預製與單日上船安裝",
  titleEn: "A Survey Pole, Prefabricated Ashore and Fitted in a Single Day",
  category: "船舶改裝",
  shortDescription:
    "從委託到驗收十三天，現場安裝只用一天——關鍵在於廠內已經組裝並測試過",
  shortDescriptionEn:
    "Thirteen days from order to acceptance, with a single day on board — because it had already been assembled and tested in the workshop",
  description:
    "這不是一個支架，是一個會動的東西。\n\n" +
    "會動的結構比不會動的難交代——它的失效不是一次斷掉，是慢慢走樣，而且走樣到什麼程度才算壞，沒有人說得準。所以欣展在它離開工廠之前，先讓它動過一次。",
  descriptionEn:
    "This is not a bracket. It is something that has to move.\n\n" +
    "A moving structure is harder to answer for than a fixed one. It does not fail all at once; it drifts out of true, and nobody can say precisely how far is too far. So before it left the workshop, TNO made it move.",
  coverImage: "/images/cases/survey-pole-install-cover.webp",
  images: [
    {
      src: "/images/cases/survey-pole-install-cover.webp",
      caption:
        "基座已吊至甲板定位，桿體置於其後待組；背景為台中港的碼頭與工作船。",
      captionEn:
        "The base landed and positioned on deck, the pole itself lying behind it ready to go on; the quay and working vessels of Taichung Port beyond.",
    },
    {
      src: "/images/cases/survey-pole-install-1.webp",
      caption:
        "基座的樞軸部位——桿體由此轉動收放，兩側以肋板補強並與甲板鎖固。",
      captionEn:
        "The pivot in the base, about which the pole swings in and out, stiffened each side by gussets and bolted down to the deck.",
    },
  ],
  // 註：services 目前全站沒有任何頁面渲染（保留欄位）
  services: ["構件下料與加工", "廠內組裝與測試", "現場吊裝定位", "甲板固定與銲接"],
  completedAt: "2026-03-25",
  location: "台中港",
  locationEn: "Port of Taichung",
  tags: ["測量桿", "Survey pole", "廠內預製", "單日安裝", "船上設備基座"],
  publishedAt: "2026-10-13",
  isPublished: true,
  sections: [
    {
      heading: "一個會動的結構",
      paragraphs: [
        "測量桿是把測量設備送到船體之外的支撐結構。它和一般的固定支架不同之處在於：桿體必須能收放——作業時伸出，不作業時收起，不能一直占著船舷。",
        "所以基座的核心是樞軸。它要承受桿體伸出時的彎矩，也要在反覆轉動幾百次之後仍然保持間隙不走樣——一旦間隙跑掉，桿體的指向就跟著偏，而裝在上面的測量設備最怕的就是這個。",
        "結構上真正要處理的不是桿子，是這個轉點；而承接這些力的，是基座與甲板之間的那幾道銲道與螺栓。",
      ],
    },
    {
      heading: "在廠裡先讓它動一次",
      paragraphs: [
        "委託的隔天材料就進廠。接著是下料加工、廠內組裝，最後一道是測試——把組好的機構實際動過一遍。",
      ],
      bullets: [
        "出廠前已經組立完成，到現場不是一堆零件",
        "轉動機構在廠內先測過，問題在廠裡解決而不是在船上",
        "隨工程附上材質證明，材料來源可追溯",
      ],
      trailing: [
        "這三件事決定了現場能排幾天。少了任何一件，一天都是賭的。",
      ],
    },
    {
      heading: "一天，而且不是賭的",
      paragraphs: [
        "人員與機具當天進場，基座吊至甲板定位、與船體固定，桿體組上——同日完成，同日通過驗收。",
        "會動的東西，不應該等到裝上船才第一次動。欣展在廠裡就讓它動過，所以船上那一天做的，只是把一個已經確認過的機構裝上去——十三天的案子，船只需要讓出其中一天。",
      ],
    },
  ],
  sectionsEn: [
    {
      heading: "A structure that has to move",
      paragraphs: [
        "A survey pole carries measuring equipment out clear of the hull. What sets it apart from an ordinary fixed bracket is that it has to stow: out when it is working, back in when it is not, rather than permanently occupying the ship's side.",
        "That makes the pivot the heart of the base. It has to carry the bending moment of the pole when deployed, and still hold its clearances after being swung in and out hundreds of times — once those clearances open up, the pole no longer points where it should, and that is precisely what the equipment on the end of it cannot tolerate.",
        "The real structural problem is not the pole but this one turning point — and the forces behind it all run into the welds and bolts between the base and the deck.",
      ],
    },
    {
      heading: "Made to move before it ever left",
      paragraphs: [
        "Material arrived the day after the order. Cutting and machining followed, then assembly in the workshop, and finally a test — the completed mechanism put through its movement for real.",
      ],
      bullets: [
        "Fully assembled before it left, so what arrived was not a box of parts",
        "The moving parts proved in the shop, where problems can be solved, rather than on board",
        "Material certificates supplied with the job, so the stock can be traced",
      ],
      trailing: [
        "Those three things are what let the site work be scheduled as a single day. Without any one of them, that day would have been a gamble.",
      ],
    },
    {
      heading: "One day — and not a gamble",
      paragraphs: [
        "The crew and their gear went aboard that morning. The base was lifted onto the deck, positioned and secured to the hull, the pole fitted — finished and accepted the same day.",
        "Something that has to move should not be moving for the first time once it is bolted to a ship. TNO had already worked it in the shop, so the day on board was spent fitting a mechanism that was known to be sound — thirteen days for the job, and one of them asked of the vessel.",
      ],
    },
  ],
};

export default surveyPoleInstall;
