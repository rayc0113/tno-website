import type { CaseProject } from "@/types/case";

/**
 * 彌陀漁港船台拆除與新製
 *
 * 【第二筆依 TNO 正式工單撰寫的案例】2026-10-13
 *
 * 素材來源：窗口提供的「1140051-20250917-彌陀漁港船台新製-交驗記錄」PDF（5 頁）。
 * 內文的每個日期與工序名稱都出自該份報告：
 *   114/06/23 委託「船台拆除新製工程」
 *   07/29     相關材料陸續進場加工
 *   09/08     在廠完成各項配件組合，備便後續於船台區現場組裝
 *   09/10     進場（彌陀漁港）進行舊船台拆除作業
 *   09/15-16  執行新船台安裝組合，並配合漁會人員完成船台調整完驗
 *   驗收日期 2025/09/16，結果「合格」
 *
 * 敘事選擇：報告的日期本身就是重點——廠內十一週、現場七天。舊船台拆除到
 * 新船台完驗之間這條上架線不能使用，這不是推測而是船台的功能決定的，因此
 * 全篇圍繞「為什麼工期要這樣排」來寫。
 *
 * ⚠️ 刻意不寫的（報告沒有、照片也看不出來）：
 *    - 舊船台為何需要汰換（磨損、損壞或噸位需求皆有可能，報告未載）
 *    - 影響多少漁船、漁港停擺多久
 *    - 台車尺寸、載重、木料樹種與鋼材規格
 *    張力來自日期的對比本身，不靠形容詞堆疊。
 *
 * ⚠️ client 留空：報告的驗收方為「鼎誠營造」（TNO 為其下包），但對外具名客戶
 *    的政策目前正由 TNO 內部（李總與主管）討論中，確認前一律不具名，與風管案
 *    的處理一致。地點「彌陀漁港」是公共設施，保留。
 *
 * ⚠️ 照片來源：報告 PDF 為 300dpi 整頁掃描，照片由頁面裁切而得（原圖約
 *    1000–1650px 寬），畫質可用但經過「拍照→列印→掃描」。已向窗口索取原始
 *    檔，取得後整批替換會更好。
 */
const mituoSlipwayReplacement: CaseProject = {
  slug: "mituo-slipway-replacement",
  title: "彌陀漁港船台拆除與新製",
  titleEn: "Slipway Cradle Replacement at Mituo Fishing Harbour",
  // 【待確認】驗收方為鼎誠營造，具名政策確認前留空
  // client: "",
  category: "港務工程",
  shortDescription:
    "漁港上架用船台的汰換，廠內完成全部製作與組裝後進場，現場七天內完成拆除、安裝與拉力測試",
  shortDescriptionEn:
    "Replacing a fishing harbour's slipway cradle — built and assembled complete in the workshop, then demolished, installed and load-tested on site in seven days",
  description:
    "漁港的船台是漁船上岸的途徑。船要修、要保養、要檢查船底，都得先靠這套台車沿著軌道被拉上岸。也正因為如此，舊船台拆掉之後、新的裝好之前，這條上架線是停著的——工期怎麼排，直接決定了漁港要停多久。",
  descriptionEn:
    "A slipway is how a fishing boat gets out of the water. Repairs, maintenance, anything that means looking at the hull below the waterline — all of it starts with the boat being drawn up the rails on a cradle. Which is also why, between the old cradle coming out and the new one going in, that slipway stands idle. How the work is scheduled decides how long the harbour goes without it.",
  coverImage: "/images/cases/mituo-slipway-replacement-cover.webp",
  images: [
    {
      src: "/images/cases/mituo-slipway-replacement-cover.webp",
      caption:
        "完成後的船台停在軌道上，前方即為下水的斜坡，兩側為彌陀漁港的泊區。",
      captionEn:
        "The completed cradle standing on its rails, the launching slope ahead of it and the harbour's berths to either side.",
    },
    {
      src: "/images/cases/mituo-slipway-replacement-1.webp",
      caption: "廠內的木料加工——大斷面硬木方材依尺寸下料與整平。",
      captionEn:
        "Timber work in the shop: large hardwood baulks cut to size and dressed flat.",
    },
    {
      src: "/images/cases/mituo-slipway-replacement-2.webp",
      caption:
        "廠內組裝完成的台車：硬木方材鋪於鋼構底盤上，成排的滾輪座已逐一定位固定。",
      captionEn:
        "The cradle assembled in the shop — hardwood baulks laid over the steel underframe, with the rows of roller mounts each set and fixed in place.",
    },
    {
      src: "/images/cases/mituo-slipway-replacement-3.webp",
      caption: "進場後拆除舊船台，軌道與斜坡維持原狀。",
      captionEn:
        "The old cradle being taken apart on arrival, with the rails and slope left as they were.",
    },
    {
      src: "/images/cases/mituo-slipway-replacement-4.webp",
      caption: "新船台就位於軌道上，木料與鋼構的接合處逐一鎖固。",
      captionEn:
        "The new cradle seated on the rails, every connection between timber and steelwork bolted down.",
    },
    {
      src: "/images/cases/mituo-slipway-replacement-5.webp",
      caption: "拉力測試：台車沿軌道下放入水，確認整套機構在實際狀態下的運行。",
      captionEn:
        "The pull test: the cradle run down the rails into the water to confirm how the whole assembly behaves in service.",
    },
  ],
  // 註：services 目前全站沒有任何頁面渲染（保留欄位）
  services: ["硬木方材下料與整平", "鋼構底盤製作", "滾輪座組立", "舊船台拆除", "現場安裝與調整"],
  completedAt: "2025-09-16",
  location: "彌陀漁港",
  locationEn: "Mituo Fishing Harbour, Kaohsiung",
  tags: ["船台", "漁港設施", "廠內預製", "硬木方材", "拉力測試"],
  publishedAt: "2026-10-13",
  isPublished: true,
  sections: [
    {
      heading: "為什麼工期要這樣排",
      paragraphs: [
        "這個案子的時間表，答案就寫在工單的日期裡：六月二十三日委託，七月二十九日材料進廠加工，九月八日在廠完成所有配件組合——然後停下來，等現場排定日期。九月十日才進漁港，開始拆除舊船台。",
        "從委託到廠內備便花了十一週，而真正佔用到漁港的，是最後那幾天。這不是巧合，是這類工程唯一合理的排法：能在廠裡做完的都先做完，現場只留非得在現場做的事。",
      ],
    },
    {
      heading: "廠內：把一台完整的台車做出來",
      paragraphs: [
        "船台不是單一構件，而是硬木方材、鋼構底盤與成排滾輪組的組合體。木料要依尺寸下料、整平，鋼構底盤要焊接成形，滾輪座要逐一定位後鎖固。",
      ],
      bullets: [
        "大斷面硬木承受船體重量，同時吸收上架過程中的衝擊",
        "鋼構底盤把分散的輪組串成一個整體，確保受力均勻",
        "滾輪座的位置關係到台車能不能順著軌道平穩運行",
      ],
      trailing: [
        "這些工序完成後，運到現場的是一台已經組裝好的台車，不是一堆零件。",
      ],
    },
    {
      heading: "現場：七天",
      paragraphs: [
        "九月十日進場拆除舊船台，軌道與斜坡維持原狀。九月十五至十六日安裝新台車並完成調整，由漁會人員一同完驗，結果合格。",
        "新船台裝上去之後沒有就此交差。最後還做了一趟拉力測試——台車沿軌道下放入水，在實際狀態下確認整套機構的運行，並由漁會人員一同完驗。結果合格。",
        "六月底委託，九月十六日完驗。十一週的準備，換來現場的七天。",
        "對一座仰賴這條上架線的漁港來說，交付的不只是一台新船台，還有「盡快能再用」這件事。做給誰用、誰要天天靠它過日子，從排工期的那一刻起就已經算在裡面了。",
      ],
    },
  ],
  sectionsEn: [
    {
      heading: "Why the schedule looks the way it does",
      paragraphs: [
        "The answer is in the dates on the work order: ordered on 23 June, material into the shop on 29 July, every component assembled and standing ready by 8 September — and then a pause, waiting on a date from the site. Only on 10 September did the crew go into the harbour and start taking the old cradle apart.",
        "Eleven weeks from order to ready; a handful of days actually spent occupying the harbour. That is not a coincidence but the only sensible way to run this kind of job: finish everything that can be finished ashore, and leave on site only what has to happen on site.",
      ],
    },
    {
      heading: "In the shop: building a complete cradle",
      paragraphs: [
        "A slipway cradle is not one component but an assembly — hardwood baulks, a welded steel underframe, and rows of rollers. The timber is cut to size and dressed, the underframe welded up, and each roller mount set in position and bolted down.",
      ],
      bullets: [
        "Large-section hardwood carries the weight of the hull and absorbs the shock of hauling out",
        "The steel underframe ties the separate roller sets into one structure, spreading the load",
        "Where the roller mounts sit decides whether the cradle runs true along the rails",
      ],
      trailing: [
        "What went to site at the end of all this was a finished cradle, not a pile of parts.",
      ],
    },
    {
      heading: "On site: seven days",
      paragraphs: [
        "The old cradle came out on 10 September, with the rails and slope left untouched. On 15 and 16 September the new cradle was installed and adjusted, and commissioned together with staff from the local fishermen's association. It passed.",
        "Fitting the new cradle was not where the job ended. It was then run down the rails into the water under a pull test, to confirm how the whole assembly behaved in service, and commissioned together with staff from the local fishermen's association. It passed.",
        "Ordered at the end of June, signed off on 16 September. Eleven weeks of preparation bought seven days on site.",
        "For a harbour that depends on this one slipway, what was delivered was not only a new cradle but the fact of having it back quickly. Who would be using it, and who relies on it to make a living, was part of the scheduling from the first day.",
      ],
    },
  ],
};

export default mituoSlipwayReplacement;
