import type { CaseProject } from "@/types/case";

/**
 * 艙內高處作業的鷹架搭設
 *
 * 【第六筆、也是窗口提供的六份報告中最後一筆】2026-10-13
 *
 * 素材來源：窗口提供的「D-排水管修改及鷹架搭建工程-(原本在客製化工程)-
 * 完工報告」PDF（1 頁）。
 *
 * ⚠️ 檔名與內容不一致，以內容為準（2026-10-13 珈汶裁示）：
 *    檔名寫「排水管修改及鷹架搭建」，但報告的工程名稱是「鷹架搭設工程」，
 *    購案編號 1150019-**02**，內容與照片全部只有鷹架。排水管修改那半
 *    應為 -01，窗口未提供。因此本篇只寫鷹架，不宣稱管路工程屬於這張工單。
 *
 * 報告原文：
 *   115/03/31 委託鷹架搭設工程乙案
 *   04/01     人員及機具進場，並於 04/01 完成
 *   報告分段：1 鷹架進場　2 鷹架搭設中　3 鷹架搭設完成
 *   驗收日期 2026/04/01　結果「合格」
 *
 * 敘事選擇：六筆下來主軸都不重複。這筆的特點是「鷹架這個工項的價值不在
 * 自己身上」——它排在所有工序最前面，後面的人都在等它，所以委託隔天就得
 * 完成。結尾點出鷹架最後會被拆掉、不留痕跡，留下的是它撐住的那段時間裡
 * 別人完成的事。
 *
 * ⚠️ 照片來源與範圍（珈汶 2026-10-13 選擇「照實際工程」）：
 *    報告內的照片由 300dpi 掃描換算僅約 460px 寬，放大會糊，因此改用產品頁
 *    「排水管修改、鷹架搭建」的五張原圖（914×914）。已比對確認是**同一個
 *    艙間、同一個案子**——白色艙壁上那排橢圓減輕孔與背後透出的燈光完全吻合。
 *    五張中 cover 與 -1 是鷹架本身，-2／-3／-4 是鷹架搭好後在頂層進行的
 *    艙頂管路作業。內文只把後三張描述為「鷹架完成後在上面進行的作業」，
 *    不宣稱那些工序屬於這張工單的範圍。
 *
 * ⚠️ 不具名：報告載有客戶公司名、船名與碼頭泊位，一律省略，僅保留「台中港」。
 */
const compartmentScaffolding: CaseProject = {
  slug: "compartment-scaffolding",
  title: "艙內高處作業的鷹架搭設",
  titleEn: "Erecting Access Scaffolding for Overhead Work in a Compartment",
  category: "船舶維修",
  shortDescription:
    "艙間內三層可移動鷹架的搭設，委託隔天進場、當日完成——後面所有工序都在等這一步",
  shortDescriptionEn:
    "A three-tier mobile scaffold erected inside a compartment, on site the day after the order and finished the same day — because everything that follows is waiting on it",
  description:
    "鷹架不是任何人真正要的東西。沒有人為了鷹架發包，完工之後也不會有人特地回來看它。要的是它搭好以後，艙頂那些原本搆不到的位置，有人站得上去。\n\n" +
    "也因為它排在所有工序的最前面，它的工期從來就不只是它自己的工期。",
  descriptionEn:
    "Nobody actually wants scaffolding. No one places an order for its own sake, and when the job is over nobody comes back to look at it. What is wanted is what it makes possible: that the places overhead, out of reach until now, can be stood on.\n\n" +
    "And because it comes first in the sequence, how long it takes was never only its own business.",
  coverImage: "/images/cases/compartment-scaffolding-cover.webp",
  images: [
    {
      src: "/images/cases/compartment-scaffolding-cover.webp",
      caption:
        "三層鷹架在艙間內搭設完成，各層鋪設踏板並設扶手橫桿，底部裝腳輪可整座推移。",
      captionEn:
        "The three-tier scaffold complete inside the compartment — boarded out at each level with guardrails, and on castors so the whole frame can be moved.",
    },
    {
      src: "/images/cases/compartment-scaffolding-1.webp",
      caption: "人員於各層之間移動作業，層與層以爬梯連通。",
      captionEn:
        "The crew moving between levels, each tier reached by ladder from the one below.",
    },
    {
      src: "/images/cases/compartment-scaffolding-2.webp",
      caption:
        "鷹架完成後於頂層進行的艙頂作業，人員全程配戴全身式安全帶。",
      captionEn:
        "Work at the deckhead from the top tier once the scaffold was up, full-body harnesses worn throughout.",
    },
    {
      src: "/images/cases/compartment-scaffolding-3.webp",
      caption: "艙頂管路的切割作業，火花自架體邊緣落下。",
      captionEn:
        "Cutting pipework at the deckhead, the sparks falling away past the edge of the staging.",
    },
    {
      src: "/images/cases/compartment-scaffolding-4.webp",
      caption:
        "以往復鋸處理艙頂既有管路，作業面即為鷹架頂層的踏板。",
      captionEn:
        "A reciprocating saw taken to the existing deckhead pipework, worked from the boards of the top tier.",
    },
  ],
  // 註：services 目前全站沒有任何頁面渲染（保留欄位）
  services: ["鷹架進場", "分層搭設與踏板鋪設", "扶手與爬梯配置", "可移動式架體組立"],
  completedAt: "2026-04-01",
  location: "台中港",
  locationEn: "Port of Taichung",
  tags: ["作業鷹架", "艙內施工", "高處作業", "可移動式架體"],
  publishedAt: "2026-10-13",
  isPublished: true,
  sections: [
    {
      heading: "委託隔天，當天完成",
      paragraphs: [
        "工單上的日期只有兩天：三月三十一日委託，四月一日人員與機具進場，同日完成並通過驗收。",
        "這個速度不是因為鷹架簡單，而是因為它站在整個案子的最前面。鷹架沒搭好，後面的工班就只能等——所以它趕的從來不是自己的進度。",
      ],
    },
    {
      heading: "在艙間裡搭起三層",
      paragraphs: [
        "這個艙間的高度足以分三層。每一層鋪設踏板、配置扶手橫桿，層與層之間以爬梯連通；底部裝設腳輪，整座架體可以推移到下一個作業位置，不必拆掉重搭。",
      ],
      bullets: [
        "分層搭設，讓艙頂的每個位置都有對應高度的作業面",
        "踏板與扶手同步配置，上去的人不必再自己想辦法",
        "可移動式架體，換位置時省下拆裝的時間",
      ],
    },
    {
      heading: "鷹架搭好之後",
      paragraphs: [
        "照片的後半段，是鷹架完成之後在上面進行的作業——人員站在頂層處理艙頂的既有管路，切割的火花從架體邊緣落下。",
        "四月一日當天完成，通過驗收。後面的工班隔天就能站上去開工。",
        "一座搭得好的鷹架，最後會被拆掉、運走，現場不會留下任何痕跡。留下來的，是它撐住的那段時間裡，別人完成的事。",
      ],
    },
  ],
  sectionsEn: [
    {
      heading: "Ordered one day, finished the next",
      paragraphs: [
        "There are only two dates on the work order: ordered on 31 March, crew and equipment on site on 1 April, and the job finished and accepted the same day.",
        "That pace is not because scaffolding is simple. It is because scaffolding stands at the head of the sequence. Until it is up, every trade behind it waits — so the schedule it is keeping was never its own.",
      ],
    },
    {
      heading: "Three tiers inside the compartment",
      paragraphs: [
        "The compartment was tall enough to take three levels. Each was boarded out and fitted with guardrails, with ladders between them; castors underneath let the whole frame be pushed to the next working position rather than struck and built again.",
      ],
      bullets: [
        "Built in tiers, so every point on the deckhead has a working level to match it",
        "Boards and guardrails fitted as it went up, so no one arriving has to improvise",
        "A mobile frame, saving the time it would take to dismantle and re-erect",
      ],
    },
    {
      heading: "Once it was up",
      paragraphs: [
        "The later photographs show what went on from the scaffold once it was finished — the crew on the top tier working the existing pipework at the deckhead, sparks falling away past the edge of the staging.",
        "Finished and accepted on 1 April. The trades behind it could be standing on it the next morning.",
        "Scaffolding that has done its job is taken down and carried away, leaving nothing behind on site. What remains is what other people managed to finish in the time it held them up there.",
      ],
    },
  ],
};

export default compartmentScaffolding;
