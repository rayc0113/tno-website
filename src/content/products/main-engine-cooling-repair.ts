import type { Product } from "@/types/product";

/**
 * 船舶維修 — 主機冷卻系統維修
 *
 * 2026-10-12 依 TNO 窗口 Lucy 的產品調整清單新增。
 *
 * ⚠️ 名稱已縮短並移除客戶資訊。窗口提供的原始案名是
 *    「CGA-海巡署35噸巡防艇主機引擎冷卻(淡水 海水)系統維修」，那是內部案名，
 *    包含客戶單位（海巡署／CGA）與船型噸數。改為「主機冷卻系統維修」的理由：
 *    1. 其餘 19 支產品一律不寫艦名、單位與艙室位置（見彈藥庫改裝、碟盤、
 *       設備平台的檔頭），這支若具名會是全站唯一點名政府機關的一筆
 *    2. 公家案件不一定同意承包商對外具名客戶
 *    「淡水／海水」兩套迴路的技術重點移到 description 裡，沒有漏掉。
 *
 *    ⚠️ 待珈汶與窗口確認：TNO 若希望保留「海巡署」作為業績背書（政府機關
 *       客戶確實是很強的信任背書），需先確認該單位同意具名，並決定是否要
 *       調整其餘產品不具名的既有標準。確認後把 name 改回即可。
 *
 * ⚠️ 全站第一支「維修」性質的產品。其餘品項都是製作或安裝，敘事邏輯不同——
 *    這支講的是既有設備的劣化與處理，不是新造。
 *
 * 文案基準：與其他 19 支一致——規格書式的客觀陳述，第一段講系統本身（無主詞）、
 * 第二段講維修範圍與作業條件，全段不出現公司名。
 * 刻意不寫主機型號、缸數、功率、熱交換器規格與管徑。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * 依現場照片撰寫：
 *   cover 技師於機艙內拆解冷卻迴路，可見熱交換器殼體與法蘭接頭、已鬆脫的
 *         黑色軟管接頭，上方掛有吊鏈與吊具
 *   -1    同一作業的近景，軟管接頭已完全脫開
 *   -2    已拆出的圓筒狀冷卻器本體，以繩索綑綁後置於兩部主機之間的走道上，
 *         地面為格紋鋼板
 */
const mainEngineCoolingRepair: Product = {
  slug: "main-engine-cooling-repair",
  name: "主機冷卻系統維修",
  nameEn: "Main Engine Cooling System Repair",
  category: "船舶維修",
  shortDescription: "主機淡水與海水兩側冷卻迴路的拆檢、熱交換器清洗或更換與管路汰換",
  shortDescriptionEn:
    "Inspection and overhaul of both the fresh-water and sea-water sides of main engine cooling, covering heat exchangers and pipework",
  description:
    "船用主機的冷卻分為兩套迴路：封閉的淡水迴路直接帶走引擎本體的熱，再經熱交換器把這些熱傳給自舷外抽取的海水迴路排放。兩側的劣化方式並不相同——淡水側是封閉循環，問題多來自冷卻液本身的老化；海水側長期接觸海水與其中的雜質，管內容易積垢與腐蝕。海水側的熱傳一旦變差，淡水側的水溫就下不來，最後反映在引擎的工作溫度上。\n\n" +
    "維修範圍涵蓋兩側迴路的拆解檢查、熱交換器與管件的清洗或更換、軟管與接頭等易劣化件的汰換，以及復原後的運轉確認。拆裝在機艙既有空間內進行，較重的構件須以吊具移至通道處理，作業期間周邊設備與管路先行防護。更換或清洗的判定依各構件的積垢與腐蝕程度決定。",
  descriptionEn:
    "Cooling on a marine main engine runs in two circuits. A closed fresh-water circuit takes the heat directly off the engine, and a heat exchanger passes that heat to a sea-water circuit drawn from outboard and discharged again. The two sides fail in different ways: the fresh-water side is a closed loop, where trouble usually traces back to the condition of the coolant itself, while the sea-water side is in constant contact with seawater and what it carries, so its passages foul and corrode. Once heat transfer on the sea-water side falls off, the fresh-water side can no longer shed its heat, and the engine's working temperature rises in consequence.\n\n" +
    "The work covers stripping and inspecting both circuits, cleaning or replacing heat exchangers and pipework, renewing hoses, couplings and other items that degrade in service, and confirming operation once everything is back together. The work is carried out in the space the engine room already has; heavier components are moved out to the walkway with lifting gear before being worked on, and surrounding equipment and pipework are protected beforehand. Whether a component is cleaned or replaced is decided from how far fouling and corrosion have gone.",
  coverImage: "/images/products/ship-maintenance/main-engine-cooling-repair-cover.webp",
  images: [
    "/images/products/ship-maintenance/main-engine-cooling-repair-cover.webp",
    "/images/products/ship-maintenance/main-engine-cooling-repair-1.webp",
    "/images/products/ship-maintenance/main-engine-cooling-repair-2.webp",
  ],
  specs: [],
  features: [
    "淡水與海水兩側迴路分別拆檢，劣化成因不同、處理方式也不同",
    "熱交換器與管件拆出後視積垢與腐蝕程度清洗或更換",
    "軟管、接頭等易劣化件一併汰換",
    "較重構件以吊具移至通道處理，減少對機艙其他設備的干擾",
    "復原後確認運轉狀況",
  ],
  featuresEn: [
    "Fresh-water and sea-water sides stripped and inspected separately — they degrade differently and are treated differently",
    "Heat exchangers and pipework cleaned or replaced according to how far fouling and corrosion have gone",
    "Hoses, couplings and other wear items renewed at the same time",
    "Heavier components moved out to the walkway with lifting gear, keeping disturbance to surrounding equipment down",
    "Operation confirmed once reassembled",
  ],
  applications: [
    "主機冷卻系統的定期檢修與零件更換",
    "熱交換器積垢與腐蝕的處理",
    "冷卻管路、軟管與接頭的汰換",
  ],
  applicationsEn: [
    "Scheduled inspection and parts renewal on main engine cooling systems",
    "Dealing with fouling and corrosion in heat exchangers",
    "Renewal of cooling pipework, hoses and couplings",
  ],
  publishedAt: "2026-10-12",
  isPublished: true,
};

export default mainEngineCoolingRepair;
