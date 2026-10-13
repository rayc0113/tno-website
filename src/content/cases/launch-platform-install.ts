import type { CaseProject } from "@/types/case";

/**
 * 發射平台新製與分階段上船安裝
 *
 * 【第三筆依 TNO 正式工單撰寫的案例】2026-10-13
 *
 * 素材來源：窗口提供的「H-發射平台新製-完工報告」PDF（1 頁）。
 * 報告原文：
 *   113/08/28 委託 LAUNCH PLATFORM 工程
 *   114/01/15 完成物料準備作業
 *   114/01/16 及 04/25 分別在船進行組裝作業
 *   114/04/29 完成組裝
 *   第三方驗收：船東代表　驗收日期 2025/04/29　結果「合格」
 *
 * 敘事選擇：這筆的特點是「組裝分兩次在船上進行，中間隔了三個多月」——
 * 這是報告明寫的事實。前兩筆（風管、船台）的主軸都是「廠內做完、壓縮現場
 * 工期」，再用第三次會重複，因此這篇改以「平台承受的是吊掛作業的動態荷重」
 * 與「分階段上船」為軸。
 *
 * ⚠️ 刻意不寫：
 *    - 船名（報告載有，依目前不具名政策省略）
 *    - 為什麼分兩次進場（報告只寫「分別」，原因未載。不臆測為配合船期）
 *    - 平台承載的設備是什麼、做什麼用（與產品頁 launch-platform 同一標準）
 *    - 尺寸、荷重、鋼材規格
 *
 * ⚠️ client / location 留空：報告的第三方驗收為「船東代表」而非具名公司，
 *    地點未載。與風管案、船台案的處理一致。
 *
 * 照片：
 *   cover 完工狀態——藍色門型架與斜撐，平台鋪設格柵板（產品頁原圖）
 *   -1    施工前的甲板——船上吊車正將鋼梁吊至定位，背景為碼頭與他船
 *         （由報告 PDF 的 300dpi 整頁掃描裁切，約 975px 寬）
 *   -2    廠內梁柱與斜撐製作（產品頁原圖）
 *   -3    碼頭邊的平台甲板依基座位置開孔（產品頁原圖）
 *   -4    夜間門型架立設、設備吊入定位（產品頁原圖）
 *   註：報告的「施工後」那張與 -4 是同一個畫面，產品頁的原圖畫質較好，故不另取。
 */
const launchPlatformInstall: CaseProject = {
  slug: "launch-platform-install",
  title: "發射平台新製與分階段上船安裝",
  titleEn: "Building a Launch Platform and Installing It in Stages",
  category: "船舶改裝",
  shortDescription:
    "承載吊放設備的門型鋼構平台，廠內完成製作後分兩次上船組裝，由船東代表驗收合格",
  shortDescriptionEn:
    "A portal-frame steel platform for launch and recovery gear — fabricated ashore, assembled on board in two separate visits, and accepted by the owner's representative",
  description:
    "船上多出一座平台，要回答的問題不是「放得下嗎」，而是「撐得住嗎」。\n\n" +
    "這座平台承載的設備要被吊起、放下、再收回，荷重會隨著吊掛角度與船身動作改變。欣展要處理的是變動的力，不是靜止的重量——而且這座平台不是裝在新船上，是加到一艘正在運作的船上。",
  descriptionEn:
    "When a platform is added to a vessel, the question is not whether it fits but whether it will hold.\n\n" +
    "The gear it carries is lifted, lowered and recovered, and through all of that the load shifts with the angle of the fall and the movement of the hull. What TNO had to design for was a changing force rather than a static weight — and it was going onto a working ship, not a new one.",
  coverImage: "/images/cases/launch-platform-install-cover.webp",
  images: [
    {
      src: "/images/cases/launch-platform-install-cover.webp",
      caption:
        "完工的門型架——交叉斜撐構成主結構，平台面鋪設格柵板，中央為承載的設備。",
      captionEn:
        "The finished portal frames, cross-braced, with grating laid over the platform and the mounted equipment between them.",
    },
    {
      src: "/images/cases/launch-platform-install-1.webp",
      caption:
        "施工前的甲板，船上吊車正將鋼梁吊至定位；背景為碼頭與停泊中的他船。",
      captionEn:
        "The deck before the work, with the ship's crane swinging a steel girder into position; the quay and other vessels lie beyond.",
    },
    {
      src: "/images/cases/launch-platform-install-2.webp",
      caption: "廠內製作的梁柱與斜撐，由天車吊掛準備出貨。",
      captionEn:
        "Girders and bracing made up in the workshop, slung from the overhead crane ready to go out.",
    },
    {
      src: "/images/cases/launch-platform-install-3.webp",
      caption: "碼頭邊的平台甲板，鋼板已依基座位置開出矩形孔。",
      captionEn:
        "The platform deck at the quayside, its plating already cut with rectangular openings to suit the base positions.",
    },
    {
      src: "/images/cases/launch-platform-install-4.webp",
      caption: "夜間門型架立設完成，設備吊入定位，人員於基座處進行固定作業。",
      captionEn:
        "The frames up at night and the equipment lowered into place, with the crew securing it at the base.",
    },
  ],
  // 註：services 目前全站沒有任何頁面渲染（保留欄位）
  services: ["門型架與斜撐製作", "平台甲板開口加工", "現場立設與銲接", "設備吊入定位", "表面處理"],
  completedAt: "2025-04-29",
  tags: ["發射平台", "門型鋼構", "船上安裝", "分階段施工"],
  publishedAt: "2026-10-13",
  isPublished: true,
  sections: [
    {
      heading: "先決定力怎麼走",
      paragraphs: [
        "設備的重量由基座承接，經門型架與斜撐傳到平台甲板，最後落到船體的主結構。這條路徑上任何一個接點處理不當，整座平台的剛性就打折，而且問題不會立刻出現——會從接點的疲勞慢慢開始。",
        "所以製作的順序是倒過來的：先確定基座要鎖在甲板的哪些位置，平台甲板的開口才跟著放樣，門型架的斷面與斜撐配置也才有依據。",
      ],
    },
    {
      heading: "物料準備：四個多月",
      paragraphs: [
        "工單上的日期是這樣的：八月二十八日委託，隔年一月十五日完成物料準備。期間在廠內完成梁柱與斜撐的下料、組立與銲接，平台甲板則依基座位置預先開孔。",
      ],
      bullets: [
        "構件在廠內做完，上船時是可以直接組立的成品",
        "甲板開口先行加工，現場不必再放樣切割",
        "表面處理同樣在廠內完成，減少船上的動火與塗裝作業",
      ],
    },
    {
      heading: "分兩次上船",
      paragraphs: [
        "組裝沒有一次做完。一月十六日第一次在船上作業，第二次要到四月二十五日，中間隔了三個多月；四月二十九日完成組裝，由船東代表驗收，結果合格。",
        "兩次上船，每一次都是一到就能動工——沒有在船上才發現少了一個件、或是漏掉一道工序。四月二十九日完成組裝，由船東代表到場驗收，合格。",
        "船什麼時候有空，不是欣展能決定的；能決定的，是那一天到來時東西是不是已經備好。那四個多月的物料準備，換的就是這件事。",
        "對船東而言，這代表兩次停靠都沒有白停。",
      ],
    },
  ],
  sectionsEn: [
    {
      heading: "Settling the load path first",
      paragraphs: [
        "The weight of the equipment is picked up by its base, carried through the portal frames and their bracing into the platform deck, and from there into the vessel's main structure. Any connection along that path that is not properly made costs the platform its stiffness — and the symptom does not show up at once, but creeps in as fatigue at the joints.",
        "So the work is planned backwards: where the bases will be bolted to the deck is fixed first, the openings in the platform deck are set out from that, and only then do the frame sections and the arrangement of the bracing follow.",
      ],
    },
    {
      heading: "Four months of preparation",
      paragraphs: [
        "The dates on the work order run like this: ordered on 28 August, materials complete by 15 January the following year. In between, the girders and bracing were cut, assembled and welded in the shop, and the platform deck was cut with its openings to suit the base positions.",
      ],
      bullets: [
        "Components finished ashore, so what went aboard could be assembled straight away",
        "Deck openings cut in advance, with no setting out or cutting left for site",
        "Surface treatment done in the shop too, reducing hot work and painting on board",
      ],
    },
    {
      heading: "Two visits to the ship",
      paragraphs: [
        "The assembly was not done in one go. The first session on board was on 16 January; the second not until 25 April, more than three months later. Assembly was completed on 29 April and accepted by the owner's representative. It passed.",
        "Two visits, and on each the crew could start the moment they were aboard — no discovering on board that a part was missing or a step had been skipped. Assembly was completed on 29 April and accepted by the owner's representative. It passed.",
        "When the ship has time was never TNO's to decide; whether the work was ready on the day it came, was. That is what four months of preparation bought.",
        "For the owner, it meant neither of those two calls was wasted.",
      ],
    },
  ],
};

export default launchPlatformInstall;
