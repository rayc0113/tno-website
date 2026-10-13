import type { CaseProject } from "@/types/case";

/**
 * 主機與電機排煙管的改裝與保溫材包覆
 *
 * 【第五筆依 TNO 正式工單撰寫的案例】2026-10-13
 *
 * 素材來源：窗口提供的「1150022-01.02…排煙管及保溫材完工報告」PDF（2 頁）。
 * 報告原文的時間軸：
 *   2026/04/28 進場執行主機及電機排煙管拆除
 *   04/29      吊離
 *   04/30      主機及電機排煙管開始定位及點焊
 *   05/07      完成滿焊、焊道鈍化、保溫材角鐵焊接並鎖至部位
 *   05/11      開始左舷主、電機排煙管保溫材鋪設
 *   05/14      開始右舷主機排煙管保溫材鐵皮安裝
 *   05/16      完成左、右舷主、電機排煙管保溫材安裝
 *   05/20      主、電機排煙管工程全部完工
 *   05/21      機具吊離
 *   驗收日期 2026/05/20　結果「合格」
 *
 * ⚠️ 不具名處理（2026-10-13 珈汶確認照既有規則）：報告載有艦名、舷號與
 *    軍港名稱，全部省略，與產品頁「彈藥庫改裝」「碟盤」「發射平台」同一標準。
 *    client 與 location 均留空。TNO 內部（李總與主管）關於公家／軍方客戶
 *    具名政策的討論若有結論，再決定是否補上。
 *
 * 敘事選擇：前四筆的主軸都是「廠內做完、壓縮現場工期」。這份工單記錄的
 * 全是船上的那一段（新管段在進場前就已備妥，報告未涵蓋廠內階段），所以
 * 改以另一種壓縮方式為軸——左右兩舷的工序交疊推進。這在日期上看得出來：
 * 5/11 左舷開始鋪保溫材，5/14 右舷鐵皮就開工，5/16 保溫材才全部完成，
 * 中間有幾天是兩舷同時進行。
 *
 * ⚠️ 刻意不寫：艦名、舷號、地點、管徑、保溫材厚度與材質牌號、主機型號。
 *    「焊道鈍化」的敘述停在「銲接高溫會使銲道附近的抗蝕性下降」這個通用
 *    層級，不宣稱母材是哪一種鋼。
 *
 * ⚠️ 照片：報告內的照片一排四張，由 300dpi 整頁掃描換算僅約 500px 寬，
 *    放到 720px 版面會糊，因此改用產品頁「排煙管改裝、保溫材包覆」的五張
 *    原圖（914×914），依工序重新排序。已列入向窗口索取報告原始照片的清單。
 */
const exhaustPipeRenewal: CaseProject = {
  slug: "exhaust-pipe-renewal",
  title: "主機與電機排煙管的改裝與保溫材包覆",
  titleEn: "Renewing Main Engine and Generator Exhaust Pipework, with Insulation and Cladding",
  category: "船舶改裝",
  shortDescription:
    "船上二十四天完成拆除、新管段定位銲接、焊道鈍化與保溫材包覆，左右兩舷工序交疊推進",
  shortDescriptionEn:
    "Twenty-four days on board: old sections out, new ones welded in, welds passivated and the run insulated and clad — with port and starboard overlapping",
  description:
    "排煙管改裝沒有「廠裡做完再帶上船」這個選項。\n\n" +
    "新管段確實能預先備妥，但拆除、定位、滿焊、包覆到最後收邊，全部得在機艙裡完成——而且主機與電機兩套管路、左右兩舷都要做。欣展在這艘船上的時間，是二十四天。",
  descriptionEn:
    "With exhaust pipework there is no option of finishing the job ashore.\n\n" +
    "The new sections can be made up in advance, but removing the old run, positioning, welding out, insulating and finishing the cladding all have to happen in the engine room — and for two sets of pipework, main engine and generator, on both sides of the ship. TNO's time on board came to twenty-four days.",
  coverImage: "/images/cases/exhaust-pipe-renewal-cover.webp",
  images: [
    {
      src: "/images/cases/exhaust-pipe-renewal-cover.webp",
      caption:
        "新管段以鏈條吊具吊至定位，兩名人員扶正對位；甲板上散置拆下的法蘭盤。",
      captionEn:
        "A new section brought into position on chain blocks, two of the crew steadying it as it lines up; the flanges taken off the old run lie about the deck.",
    },
    {
      src: "/images/cases/exhaust-pipe-renewal-1.webp",
      caption:
        "彎管段就位，下方為已鎖固的法蘭座；吊具維持受力直到點焊完成。",
      captionEn:
        "The bend landed over its bolted flange seat, the lift still taking the weight until the tacks are in.",
    },
    {
      src: "/images/cases/exhaust-pipe-renewal-2.webp",
      caption: "管段接縫的銲接作業，銲道須環繞整圈連續。",
      captionEn:
        "Welding the joint between sections — the run has to go continuously right around.",
    },
    {
      src: "/images/cases/exhaust-pipe-renewal-3.webp",
      caption:
        "機艙內狹窄處的法蘭作業，人員繫全身式安全帶；上方可見已完成包覆的管路。",
      captionEn:
        "Working the flange in a tight corner of the engine room, full-body harness on, with pipework already lagged overhead.",
    },
    {
      src: "/images/cases/exhaust-pipe-renewal-4.webp",
      caption:
        "完工的管段——保溫層外覆金屬護皮，環向接縫以螺絲固定並收邊。",
      captionEn:
        "A finished section: insulation under metal cladding, the circumferential joints screwed down and closed off.",
    },
  ],
  // 註：services 目前全站沒有任何頁面渲染（保留欄位）
  services: ["既有管段拆除與吊離", "新管段定位與銲接", "焊道鈍化", "保溫材包覆", "金屬護皮安裝"],
  completedAt: "2026-05-20",
  tags: ["排煙管", "保溫材包覆", "金屬護皮", "焊道鈍化", "機艙作業"],
  publishedAt: "2026-10-13",
  isPublished: true,
  sections: [
    {
      heading: "二十四天裡要做完的事",
      paragraphs: [
        "四月二十八日進場拆除既有管段，隔天吊離。四月三十日新管段開始定位、點焊，五月七日完成滿焊、焊道鈍化，以及保溫材角鐵的銲接固定。接著是保溫材鋪設與外覆鐵皮，五月二十日全部完工，隔天機具吊離。",
        "這段期間機艙是工作面，不是通道。排煙管鄰近人員活動範圍與電纜設備，拆除與銲接都伴隨高溫與火花，周邊的防護得先做好，作業才排得下去。",
      ],
    },
    {
      heading: "兩舷同時推進",
      paragraphs: [
        "工期能壓在二十四天，關鍵不在單一工序做得多快，而在工序排得重不重疊。",
        "五月十一日開始鋪左舷的保溫材；十四日，右舷的鐵皮安裝就先開工了；十六日，左右兩舷的保溫材才全部完成。也就是說中間有幾天，是一邊在包覆、另一邊在收尾，兩舷同時進行。",
      ],
      trailing: [
        "這種排法的前提是材料、人力與作業面都已經就位——任何一項慢了，交疊就變成互相卡住。",
      ],
    },
    {
      heading: "看不見的那一道",
      paragraphs: [
        "滿焊之後，工單上接著寫的是「焊道鈍化」。",
        "銲接的高溫會讓銲道附近的表面狀態改變，抗蝕性隨之下降。不處理的話，整條管路最先鏽的往往就是銲道——而銲道外面還要再包上保溫材與護皮，等到從外觀看得出問題，通常已經是裡面爛了一段時間之後。",
        "這道工序做完，外觀上看不出任何差別。做了沒做，當下沒有人分辨得出來——只有做的人自己知道。",
        "五月二十日，主機與電機排煙管工程全部完工，隔天機具吊離，驗收合格。",
        "二十四天的工期是靠工序交疊排出來的，這看得見；而工期結束之後的那幾年，靠的是包進保溫層裡、再也看不到的那一道。一條排煙管要算真的換好，兩件都得做到——欣展交出去的是兩件都做到的那種。",
      ],
    },
  ],
  sectionsEn: [
    {
      heading: "What had to fit into twenty-four days",
      paragraphs: [
        "The old sections came out on 28 April and were lifted off the next day. On 30 April the new pipework began to be positioned and tacked; by 7 May it was fully welded, the welds passivated, and the angle supports for the insulation welded on. Lagging and metal cladding followed, all of it complete on 20 May, with the gear lifted off the day after.",
        "For that stretch the engine room was a working face rather than a passage. Exhaust pipework runs close to where people work and to cabling and equipment, and both removal and welding bring heat and sparks with them, so the protection around the area has to be in place before any of it can be scheduled.",
      ],
    },
    {
      heading: "Port and starboard, overlapping",
      paragraphs: [
        "Holding the job to twenty-four days came less from doing any one operation quickly than from how far the operations were allowed to overlap.",
        "Lagging on the port side began on 11 May; by the 14th, cladding on the starboard side had already started; and it was the 16th before the insulation on both sides was finished. For several days in the middle, one side was being wrapped while the other was being closed up.",
      ],
      trailing: [
        "Running the work that way assumes material, labour and working space are all ready. Let any one of them fall behind and the overlap turns into one trade blocking another.",
      ],
    },
    {
      heading: "The step that does not show",
      paragraphs: [
        "After the welding is complete, the next entry on the work order is passivation of the welds.",
        "The heat of welding changes the condition of the surface around the weld, and its resistance to corrosion drops with it. Left alone, the weld is often the first part of the whole run to rust — and the weld then disappears under insulation and cladding, so by the time anything shows on the outside, it has usually been going on inside for a while.",
        "Done properly, this step leaves nothing visible to show for it. Whether it was done at all, nobody can tell by looking — only the people who did the work know.",
        "On 20 May the main engine and generator exhaust work was complete; the gear came off the next day, and the job was accepted.",
        "The twenty-four days came from letting the operations overlap, and that part shows. The years that follow come from the step that disappears under the lagging and is never seen again. An exhaust run is only properly renewed when both have been done — and both were.",
      ],
    },
  ],
};

export default exhaustPipeRenewal;
