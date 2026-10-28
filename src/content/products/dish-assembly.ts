import type { Product } from "@/types/product";

/**
 * 海軍艤裝工程（L 系列）— L-碟盤
 *
 * 2026-10-12 依 TNO 窗口 Lucy 的產品調整清單新增，分類照她的歸類放在海軍艤裝工程。
 *
 * ⚠️ 敘事刻意只停在「鈑金結構」層級：寫曲面成形、背面補強、輪轂接合與熱變形
 *    控制，完全不寫這面碟盤搭載什麼系統、工作頻段或裝在哪艘船上。本工項的
 *    產出是碟盤本體與其轉動介面，不是上面的設備。
 *    與彈藥庫改裝、設備平台、雷達桅桿的處理標準一致。
 *
 * 文案基準：與其他 18 支一致——規格書式的客觀陳述，第一段講工項本身（無主詞）、
 * 第二段講施工範圍與判定原則，全段不出現公司名。
 * 刻意不寫口徑、板厚、曲面公差數值與材質牌號。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * 依現場照片撰寫：廠內拍攝的大型碟型鈑金件，軍艦灰塗裝，碟面上另設一片圓形
 * 蓋板（附兩只提把），背面可見鉚釘列與補強痕跡；碟盤經輪轂與螺栓法蘭接到
 * 驅動軸系，下方為俯仰齒輪箱與迴轉座。照片中有人員入鏡，可判斷直徑約兩公尺
 * 以上——文案刻意不寫這個推估值。
 */
const dishAssembly: Product = {
  slug: "dish-assembly",
  name: "碟盤",
  nameEn: "Dish Assembly",
  category: "海軍艤裝工程",
  shortDescription: "大型碟型曲面鈑金件的成形、補強與輪轂組立——精度在成形階段就決定了，成形之後補不回來",
  shortDescriptionEn:
    "Forming, stiffening and hub assembly of large dished sheet-metal structures — accuracy is settled at the forming stage, and cannot be recovered after it",
  description:
    "碟盤是大型的曲面鈑金結構，製作上同時受兩個條件牽制。一是曲面的成形精度：碟面只要有局部偏差，整體的聚焦特性就會跟著改變，而這種偏差在成形之後很難補救。二是重量：碟盤安裝在俯仰與迴轉機構上，自重與受風面積都會回頭成為驅動機構的負荷，所以背面的補強不能一味加厚，必須在「夠剛」與「夠輕」之間取捨。\n\n" +
    "施工範圍涵蓋曲面鈑件的下料與成形、背面補強的組立與銲接、輪轂與法蘭接合面的加工，以及整體表面處理。銲接帶來的熱變形須以銲接順序與夾持方式控制，避免已經成形好的曲面在組立階段走樣。這類結構沒有標準品，曲面公差、補強配置與輪轂接合都得依設備規格與轉動機構的承載能力重新算過——碟面的精度是做出來的，不是事後修出來的。",
  descriptionEn:
    "A dish is a large formed sheet-metal structure, and its fabrication is pulled in two directions at once. The first is the accuracy of the curve: a local deviation anywhere on the face changes how the dish focuses, and once the panel is formed such a deviation is difficult to put right. The second is weight — the dish sits on elevation and slew machinery, so both its mass and the area it presents to the wind come back as load on that machinery. The stiffening on the back cannot simply be made heavier; it has to be traded off between stiffness and weight.\n\n" +
    "The scope covers cutting and forming the dished panels, assembling and welding the backing structure, machining the hub and flange faces, and the overall surface treatment. Distortion from welding is kept in check through the welding sequence and the way the work is clamped, so that a curve already formed does not go out of shape during assembly. There is no standard article here: surface tolerance, the arrangement of the stiffening and the method of connecting the hub are each worked out afresh from the equipment specification and from what the rotating machinery is rated to carry — the accuracy of a dish face is built into it, not corrected afterwards.",
  coverImage: "/images/products/naval-outfitting/dish-assembly-cover.webp",
  images: [
    "/images/products/naval-outfitting/dish-assembly-cover.webp",
    "/images/products/naval-outfitting/dish-assembly-1.webp",
  ],
  specs: [],
  features: [
    "曲面鈑件成形後以背面補強維持剛性",
    "補強配置在剛性與重量之間取捨，減輕轉動機構的負荷",
    "輪轂與法蘭接合面經加工後與驅動軸系組合",
    "以銲接順序與夾持控制熱變形，維持成形曲面的精度",
    "整體施作表面處理",
  ],
  featuresEn: [
    "Formed panels stiffened from behind to hold their shape",
    "Stiffening traded off between rigidity and weight, easing the load on the rotating machinery",
    "Hub and flange faces machined before assembly to the drive shaft",
    "Welding sequence and clamping used to control distortion and preserve the formed curve",
    "Surface treatment applied throughout",
  ],
  applications: [
    "艦上碟型結構的新製",
    "大型曲面鈑金件的成形與補強",
    "既有碟盤的汰換與修復",
  ],
  applicationsEn: [
    "New dished structures for naval vessels",
    "Forming and stiffening of large curved sheet-metal components",
    "Replacement and repair of existing dishes",
  ],
  publishedAt: "2026-10-12",
  isPublished: true,
};

export default dishAssembly;
