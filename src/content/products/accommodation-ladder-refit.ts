import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-登艦梯
 *
 * 2026-10-12 依 TNO 窗口 Lucy 的產品調整清單新增。先前（2026-08-31）刻意沒有
 * 替 D-登艦梯 單獨開卡，理由是它與 L-登艦梯 同名，兩張卡片並列會像貼重複；
 * 窗口既然要求客製化工程也要有這一項，改以名稱區隔解決。
 *
 * ⚠️ 命名待確認：窗口的原話是「客製化工程也要有登艦梯」，此處取名為
 *    「登艦梯改修」而非「登艦梯」，是為了和海軍艤裝工程那支（廠內整體預製的
 *    成品梯）在列表上分得開，而且這個名稱有照片支持——四張照片拍的都是既有
 *    梯體的現場切割作業，不是新製。若窗口堅持用「登艦梯」三個字，改 name
 *    與 slug 即可。
 *
 * ⚠️ 施工範圍待確認：照片只拍到「切」，沒有拍到切完之後的處理。因此文案一律
 *    停在「切除劣化管件」這個可查證的層級，不宣稱換了新管、也不宣稱整座汰換。
 *    向窗口問清楚之後，再把第二段補完整會更有說服力。
 *
 * 文案基準：與其他 15 支一致——規格書式的客觀陳述，第一段講工項本身（無主詞）、
 * 第二段講施工範圍與判定原則，全段不出現公司名，刻意不寫管徑、梯長與材質。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * 依現場照片撰寫：大型黃色塗裝的鋼管桁架梯體，扶手配網狀護板，表面已有鏽蝕與
 * 補漆痕跡；夜間以研磨機與氧乙炔切割管件，切口可見管材為中空圓管；梯體置於
 * 木質甲板面上，背景為港區起重機與船舶。
 */
const accommodationLadderRefit: Product = {
  slug: "accommodation-ladder-refit",
  name: "登艦梯改修",
  nameEn: "Accommodation Ladder Refit",
  category: "客製化工程",
  shortDescription: "既有登艦梯的現場切割與鋼構改修，無須將整座梯體拆離",
  shortDescriptionEn:
    "On-site cutting and structural refit of existing accommodation ladders, without removing the whole structure",
  description:
    "登艦梯長期暴露在海上環境，桁架管件與扶手承受鹽霧、雨水與反覆踩踏，塗裝一旦破損，鏽蝕就會從破口往管壁內部發展。表面補漆能處理的只是外觀，受力管件的斷面一旦減損，就必須把劣化的部分切除後重新接合。\n\n" +
    "梯體多為整體銲接的鋼管桁架，無法整座拆離送廠，施工須在梯體所在位置進行。施工範圍涵蓋現場勘查與劣化範圍判定、管件切除、接合與銲道處理，以及切割面的防蝕處理。切除範圍與接點位置須依桁架的受力路徑決定，避免在同一斷面上同時削弱多根構件。",
  descriptionEn:
    "An accommodation ladder lives outdoors at sea. Its tubular members and handrails take salt spray, rain and constant foot traffic, and once the coating is broken, corrosion works inward from the break into the wall of the tube. Touching up the paint addresses only the surface; once a load-bearing member has lost section, the affected part has to be cut out and the structure made good again.\n\n" +
    "These ladders are generally welded tubular trusses that cannot be lifted away to the workshop as a unit, so the work is carried out where the ladder stands. The scope covers survey and assessment of the affected extent, cutting out of members, rejoining and treatment of the welds, and corrosion protection of the cut surfaces. How much is cut and where the joints fall are decided from the load paths through the truss, so that several members are not weakened across the same section at once.",
  coverImage: "/images/products/custom-engineering/accommodation-ladder-refit-cover.webp",
  images: [
    "/images/products/custom-engineering/accommodation-ladder-refit-cover.webp",
    "/images/products/custom-engineering/accommodation-ladder-refit-1.webp",
    "/images/products/custom-engineering/accommodation-ladder-refit-2.webp",
    "/images/products/custom-engineering/accommodation-ladder-refit-3.webp",
  ],
  specs: [],
  features: [
    "於梯體所在位置施工，不需將整座梯體拆離",
    "切除範圍依桁架受力路徑判定，避免同一斷面多根構件同時削弱",
    "切割與銲接作業可於夜間進行，配合碼頭調度",
    "切割面與銲道施作防蝕處理",
  ],
  featuresEn: [
    "Carried out where the ladder stands, with no need to remove the whole structure",
    "Extent of cutting judged from the load paths through the truss, so that several members are not weakened across one section",
    "Cutting and welding can be done at night to suit berth scheduling",
    "Cut surfaces and welds given corrosion protection",
  ],
  applications: [
    "既有登艦梯鏽蝕管件的切除與改修",
    "桁架梯體的現場結構處理",
    "碼頭固定式登船設施的維護",
  ],
  applicationsEn: [
    "Cutting out and refitting corroded members in existing accommodation ladders",
    "On-site structural work on tubular truss gangways",
    "Maintenance of fixed boarding structures at the quayside",
  ],
  publishedAt: "2026-10-12",
  isPublished: true,
};

export default accommodationLadderRefit;
