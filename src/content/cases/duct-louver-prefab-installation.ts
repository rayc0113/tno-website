import type { CaseProject } from "@/types/case";

/**
 * 風管、風箱與百葉窗的廠內預製與現場安裝
 *
 * 【第一筆依 TNO 正式工單撰寫的案例】2026-10-01
 *
 * 素材來源：欣展窗口 Lucy 提供的「風管案-完工報告」PDF（4 頁）。
 * 內文的每個日期與工序名稱都出自該份報告，沒有推測或補充：
 *   114/07/14 委託（風管／風箱／百葉窗／封板，廠內新製＋現場安裝）
 *   07/23     原材料陸續進廠加工
 *   09/08     在廠完成各項配件組合，備便待客戶通知施工日期進場
 *   10/20     進場（台中港 6 號碼頭）安裝、現場銲接
 *             施工完成，驗收結果「合格」
 *
 * 敘事選擇：報告裡 9/08 備便到 10/20 進場之間的那段空檔，是這個案子真正的
 * 重點——製作期完全沒有佔用到船。這一點產品頁寫不出來，只有工單的時間軸
 * 能證明，所以整篇圍繞它來寫。
 *
 * ⚠️ 三項待欣展確認（都已在下方標註）：
 *   1. client：完工報告通篇只寫「貴司」，第一頁上方的紅框是空的。
 *      需確認可否具名；不可具名就改中性寫法。目前沿用示意寫法。
 *   2. completedAt：報告只寫 10/20 進場安裝，最後「施工完成」沒有日期。
 *      暫填 2025-10-20（詳情頁只顯示到年月，畫面上是「2025 / 10」）。
 *   3. category：依「新製＋安裝」判斷為一般船舶工程，待確認。
 *
 * ⚠️ 照片：目前沿用產品頁「風管、百葉窗、封板」那 5 張，全部是完工狀態。
 *    完工報告裡還有「案廠施工前」4 張與廠內製作 9 張——那兩組才是本篇敘事
 *    真正需要的（施工前的原狀、廠內的焊接組裝），但 PDF 內的圖只有 440px 寬，
 *    放到 720px 的版面會模糊，須向欣展索取原始檔。
 *
 * 地點只寫到「台中港」，刻意不寫報告上的「6 號碼頭」——泊位對讀者沒有幫助，
 * 對客戶卻可能是不想公開的資訊，與產品文案不寫艦名、單位的標準一致。
 */
const ductLouverPrefabInstallation: CaseProject = {
  slug: "duct-louver-prefab-installation",
  title: "風管、風箱與百葉窗的廠內預製與現場安裝",
  titleEn: "Shop-Fabricated Ducting, Plenums and Louvres, Installed on Board",
  // 【待確認】完工報告通篇只寫「貴司」，未具名
  client: "XX 造船股份有限公司",
  clientEn: "XX Shipbuilding Co., Ltd.",
  // 【待確認】依「新製＋現場安裝」判斷
  category: "一般船舶工程",
  shortDescription:
    "通風構件在廠內完成製作、組裝與表面處理後備便待命，進場後只做定位與銲接，製作期間完全不佔用船期",
  shortDescriptionEn:
    "Ventilation components fabricated, assembled and finished in the workshop, then held ready — so that only positioning and welding remained to be done on board",
  description:
    "船上的通風構件數量多，形狀幾乎沒有一件相同——風管要繞過結構樑，風箱要貼合艙壁，百葉窗與封板各有各的開口尺寸。這些東西可以帶著材料上船慢慢量、慢慢做，也可以先在廠裡全部做完再帶上船。這個案子選的是後者，而選擇的理由，看工單的時間軸最清楚。",
  descriptionEn:
    "A vessel's ventilation components are many, and hardly any two are alike: ducts have to work their way around structural members, plenums have to sit flush against bulkheads, and every louvre and blanking plate answers to its own opening. Such work can be measured and made on board, a piece at a time, or it can be built complete in the workshop and brought aboard finished. This project took the second route — and the reason why is clearest in the dates.",
  coverImage: "/images/products/custom-engineering/duct-louver-panel-cover.webp",
  images: [
    {
      src: "/images/products/custom-engineering/duct-louver-panel-cover.webp",
      caption:
        "艙間內完工的通風機組與風管，由風箱向上接出後轉向艙頂配管，支架固定於艙壁結構。",
      captionEn:
        "The completed fan unit and ducting in the compartment, rising from the plenum and turning into the deckhead run, with brackets fixed to the bulkhead structure.",
    },
    {
      src: "/images/products/custom-engineering/duct-louver-panel-3.webp",
      caption:
        "艙頂下方的風管主幹與分歧接頭，吊架依既有結構樑的位置配置，末端接入艙壁上的風箱。",
      captionEn:
        "The main duct run and its branch beneath the deckhead. Hangers follow the existing beams, and the run terminates at the plenum on the bulkhead.",
    },
    {
      src: "/images/products/custom-engineering/duct-louver-panel-2.webp",
      caption:
        "舷側板上成排的管夾支架，銲接定位後即可承接後續的管路配置。",
      captionEn:
        "A row of pipe clamps welded to the shell plating, positioned ready to carry the runs that follow.",
    },
    {
      src: "/images/products/custom-engineering/duct-louver-panel-4.webp",
      caption:
        "舷外的通風出口，彎管與座板組立後銲接於外板開口，銲道周邊待後續塗裝。",
      captionEn:
        "The ventilation outlet outboard. The bend and its seating plate are welded into the shell opening, with the weld zone awaiting its coating.",
    },
    {
      src: "/images/products/custom-engineering/duct-louver-panel-1.webp",
      caption:
        "封板銲於既有開口上並已塗佈底漆，銲道連續環繞整圈以維持艙壁的完整性。",
      captionEn:
        "A blanking plate welded over an existing opening and primed. The weld runs continuously around it so the bulkhead keeps its integrity.",
    },
  ],
  // 註：services 目前全站沒有任何頁面渲染（與 closing 同樣是保留欄位），
  // 填寫僅為資料完整性，型別上也沒有 servicesEn
  services: [
    "風管與風箱製作",
    "百葉窗、封板製作",
    "廠內組裝與表面處理",
    "現場安裝與銲接",
  ],
  // 【待確認】報告只寫 10/20 進場安裝，完工日期未載明。詳情頁顯示到年月。
  completedAt: "2025-10-20",
  // 報告原文為「台中港 6 號碼頭」，泊位刻意不寫
  location: "台中港",
  locationEn: "Port of Taichung",
  tags: ["風管", "風箱", "百葉窗", "封板", "廠內預製", "現場安裝"],
  publishedAt: "2026-10-01",
  isPublished: true,
  sections: [
    {
      heading: "為什麼先在廠裡做完",
      paragraphs: [
        "船上的施工條件和廠內完全是兩回事。艙間窄、動線被既有管路和設備佔滿，動火作業要配合船上的管制與其他工班的進度，同一件事在船上做往往要花上好幾倍的時間。",
        "但真正的成本不在工時，而在船期。船停在碼頭的每一天都是帳面上的損失，所以這類工程的規劃重點只有一個：把能在廠裡完成的全部在廠裡完成，船上只留非得在船上做的部分——定位、銲接、開口收邊。",
      ],
    },
    {
      heading: "廠內的七週",
      paragraphs: [
        "原材料在委託後的第九天進廠，接著依各艙間的需求分件加工：風管彎製與銲接、風箱與百葉窗的框體組立、封板下料。配件逐一完成後進行整體組裝，再做表面處理。",
      ],
      bullets: [
        "從原材料進廠到全部備便，不到七週",
        "組裝與表面處理都在廠內完成，進場時是成品而非半成品",
        "完成後留在廠內待命，等船方排定施工日期",
      ],
      trailing: [
        "備便到進場之間還隔了六週。這段時間裡，船完全沒有因為這項工程而被佔用——這正是廠內預製的意義所在。",
      ],
    },
    {
      heading: "進場之後",
      paragraphs: [
        "接到通知後進場，現場作業集中在定位與銲接：風管依既有結構樑的位置吊掛固定，風箱與百葉窗銲入艙壁開口，封板環繞銲接以恢復艙壁的完整性，舷外的通風出口則銲於外板開口並做銲道周邊處理。",
        "工程完成後經驗收，結果為合格。",
      ],
    },
  ],
  sectionsEn: [
    {
      heading: "Why build it in the workshop first",
      paragraphs: [
        "Working on board and working in the shop are not the same trade. Compartments are tight, the routes through them are already taken up by existing pipework and equipment, and hot work has to fit around the vessel's own controls and the other trades on site. The same task done on board often takes several times as long.",
        "The real cost, though, is not labour but time alongside. Every day the vessel sits at the quay is a day she is not earning, so the planning for this kind of work comes down to one principle: finish everything that can be finished ashore, and leave on board only what must be done on board — positioning, welding, and making good around the openings.",
      ],
    },
    {
      heading: "Seven weeks in the workshop",
      paragraphs: [
        "Raw material arrived nine days after the order. Fabrication then proceeded compartment by compartment: ducts bent and welded, frames built up for the plenums and louvres, blanking plates cut. As each part was finished the assemblies were brought together and given their surface treatment.",
      ],
      bullets: [
        "Under seven weeks from material arriving to everything standing ready",
        "Assembly and finishing both completed ashore, so what went aboard was finished work, not parts",
        "Held in the workshop on completion, awaiting the vessel's installation date",
      ],
      trailing: [
        "Six more weeks passed between standing ready and going aboard — six weeks in which the vessel was not tied up by this work at all. That is the whole point of building it ashore.",
      ],
    },
    {
      heading: "Once on board",
      paragraphs: [
        "On being called in, the on-site work came down to positioning and welding: ducts hung and fixed to suit the existing beams, plenums and louvres welded into their bulkhead openings, blanking plates welded continuously around to restore the bulkhead, and the outboard ventilation outlets welded into the shell plating and made good around the welds.",
        "The completed work was inspected and passed.",
      ],
    },
  ],
};

export default ductLouverPrefabInstallation;
