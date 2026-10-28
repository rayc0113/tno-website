import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-設備平台新製（原名：發射平台新製）
 *
 * 2026-10-12 依 TNO 窗口 Lucy 的產品調整清單新增。
 *
 * ✅ 2026-10-15 窗口 Lucy 回覆：案名改為「設備平台新製」。
 *    原名「發射平台」在船舶工程脈絡下容易被讀成軍事用途（此疑慮 2026-10-12
 *    建檔時即記在這裡），窗口確認改用中性名稱。產品與案例兩邊、以及其他
 *    檔案裡所有指稱本項的「發射平台」字樣一併更名。
 *    照片維持不變（窗口未要求撤下）。
 *
 *    slug 維持 launch-platform，URL 與圖檔名不動（2026-10-15 珈汶決定：
 *    「不影響的就不用改」）。更名的目的是對外顯示的文字，網址不是客戶
 *    在讀的東西，為它重新命名十張圖與處理轉址不划算。此事已結案，
 *    日後不必再提。
 *
 *    ⚠️ TNO 原始工單的名稱就是「發射平台新製」（完工報告寫 LAUNCH PLATFORM），
 *       檔頭引用報告原文處**刻意保留原名**，那是來源紀錄不是對外文字。
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
  name: "設備平台新製",
  nameEn: "Equipment Platform Fabrication",
  category: "客製化工程",
  shortDescription: "承載設備的門型鋼構平台，基座、甲板與斜撐的製作與現場組立——結構真正在處理的，是力要往哪裡走",
  shortDescriptionEn:
    "Portal-frame steel platforms for mounted equipment: base, deck and bracing fabricated and erected on site — what the structure really handles is where the loads go",
  description:
    "平台不是用來放東西的，是用來把力送走的。設備的自重與作業荷重先由基座承接，再經門型架與斜撐傳到平台甲板，最後落到下方的主結構。這條路徑上任何一個接合處理不當，整體剛性就會打折；而長期使用下來，疲勞也會從那個接點開始。\n\n" +
    "施工分為廠內與現場兩個階段。廠內完成梁柱與斜撐的下料、組立與銲接，現場則進行平台甲板鋪設、依基座位置的開口加工、門型架立設與銲接，以及表面處理與格柵板鋪裝。構件斷面、斜撐配置與基座固定方式依承載設備的規格與作業荷重設計。鋼構的毛病很少一次發作，多半是從某一個接點安靜地開始的。",
  descriptionEn:
    "A platform is not there to hold something up; it is there to take the load away. The weight of the equipment and the loads it generates in use are picked up by the base, passed through the portal frames and their bracing into the platform deck, and from there into the main structure below. Any joint along that path that is not properly handled costs the assembly its stiffness — and in time, fatigue begins at that joint.\n\n" +
    "The work falls into a workshop stage and a site stage. Beams, columns and bracing are cut, assembled and welded in the shop; on site the platform deck is laid, openings are cut to suit the positions of the bases, the portal frames are erected and welded, and the surfaces are treated and the grating laid. Member sizes, the arrangement of the bracing and the method of fixing the bases follow from the specification of the equipment carried and the loads it imposes. Steelwork rarely fails all at once; it usually begins, quietly, at one connection.",
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
