import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-發射平台新製
 *
 * 2026-10-12 依 TNO 窗口 Lucy 的產品調整清單新增。
 *
 * ⚠️ 案名是否適合公開露出待確認（與「彈藥庫改裝」同一類問題）：
 *    「發射平台」四個字放在船舶工程的脈絡下，容易被讀成軍事用途。
 *    - 可以公開 → 維持現名
 *    - 不宜公開 → 改中性名稱（例如「設備承載平台新製」），並一併確認照片
 *      是否也要撤下
 *    此項須在網站正式上線前得到答覆。建議與彈藥庫改裝一起問。
 *
 * 文案基準：與其他 16 支一致——規格書式的客觀陳述，第一段講工項本身（無主詞）、
 * 第二段講施工範圍與設計原則，全段不出現公司名。
 *
 * ⚠️ 敘事刻意只停在「鋼構」層級：寫門型架、斜撐、基座、甲板開口與組立工序，
 *    完全不寫平台承載的是什麼設備、用途為何、裝在哪裡。照片中那台黃色設備是
 *    平台承載的對象，不是本工項的產出——本工項的產出是藍色鋼構本體。
 *    刻意不寫尺寸、荷重、鋼材牌號。specs 留空，詳情頁會自動隱藏規格表。
 *
 * 依現場照片撰寫：
 *   cover 完工狀態——藍色塗裝的門型架以交叉斜撐構成，平台甲板鋪設黃色格柵板，
 *         中央為承載的設備，背景為港區與停泊漁船
 *   -1    廠內製作——灰色底漆的長梁與兩支方管斜撐，由廠內天車吊掛
 *   -2    基座組立——碼頭邊的平台甲板，鋼板已依基座位置開矩形孔，工人研磨中
 *   -3    夜間立架——門型架已立起（尚未塗裝），設備吊入定位，工人於基座處作業
 */
const launchPlatform: Product = {
  slug: "launch-platform",
  name: "發射平台新製",
  nameEn: "Launch Platform Fabrication",
  category: "客製化工程",
  shortDescription: "承載設備的門型鋼構平台，含基座、甲板與斜撐的製作與現場組立",
  shortDescriptionEn:
    "Portal-frame steel platforms for mounted equipment, covering base, deck and bracing fabrication and on-site erection",
  description:
    "承載設備的平台，結構上要處理的是力的傳遞路徑：設備的自重與作業荷重先由基座承接，再經由門型架與斜撐傳到平台甲板，最後落到下方的主結構。任一段接合處理不當，整體剛性就會打折，長期使用下來也容易從接點開始出現疲勞。\n\n" +
    "施工分為廠內與現場兩個階段。廠內完成梁柱與斜撐的下料、組立與銲接，現場則進行平台甲板鋪設、依基座位置的開口加工、門型架立設與銲接，以及表面處理與格柵板鋪裝。構件斷面、斜撐配置與基座固定方式須依承載設備的規格與作業荷重設計。",
  descriptionEn:
    "For a platform that carries equipment, the structural question is the path the loads take: the weight of the equipment and the loads it generates in use are picked up by the base, passed through the portal frames and their bracing into the platform deck, and from there into the main structure below. Any joint along that path that is not properly handled costs the assembly its stiffness, and over time the connections are where fatigue begins.\n\n" +
    "The work falls into a workshop stage and a site stage. Beams, columns and bracing are cut, assembled and welded in the shop; on site the platform deck is laid, openings are cut to suit the positions of the bases, the portal frames are erected and welded, and the surfaces are treated and the grating laid. Member sizes, the arrangement of the bracing and the method of fixing the bases are designed around the specification of the equipment carried and the loads it imposes.",
  coverImage: "/images/products/custom-engineering/launch-platform-cover.webp",
  images: [
    "/images/products/custom-engineering/launch-platform-cover.webp",
    "/images/products/custom-engineering/launch-platform-1.webp",
    "/images/products/custom-engineering/launch-platform-2.webp",
    "/images/products/custom-engineering/launch-platform-3.webp",
  ],
  specs: [],
  features: [
    "梁柱與斜撐於廠內預製，運至現場組立，縮短現場作業時間",
    "門型架以交叉斜撐構成，承受設備吊掛與定位時的側向力",
    "平台甲板依基座位置開孔，人員通行處鋪設格柵板",
    "現場銲接完成後施作表面處理，延長海邊環境的使用年限",
  ],
  featuresEn: [
    "Beams, columns and bracing prefabricated in the workshop and erected on site, shortening the time spent working in place",
    "Cross-braced portal frames, taking the lateral loads of lifting and positioning the equipment",
    "Deck openings cut to suit the base positions, with grating laid where people walk",
    "Surface treatment applied after site welding, for a longer life in the coastal environment",
  ],
  applications: [
    "設備承載平台的新製",
    "門型架與設備基座的鋼構製作",
    "既有平台的結構補強與改造",
  ],
  applicationsEn: [
    "New platforms built to carry mounted equipment",
    "Fabrication of portal frames and equipment bases",
    "Strengthening and alteration of existing platforms",
  ],
  publishedAt: "2026-10-12",
  isPublished: true,
};

export default launchPlatform;
