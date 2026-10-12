import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-空橋鋁欄杆安裝工程
 *
 * 2026-10-12 依 TNO 窗口 Lucy 的產品調整清單：品名由「船上欄杆安裝」改為
 * 「空橋鋁欄杆安裝」，並補進三張照片。
 *
 * ⚠️ 這次不只是改名，文案整篇重寫。原本（2026-09-02）只有兩張特寫照片，當時
 *    判讀為「船上走道的鋼管欄杆現場銲接」，寫成船上結構的曲面與高低差。補進
 *    三張照片後才看出來是另一回事：
 *    - 施工位置不在船上，是臨水的空橋通道（照片 -1 下方可見海水）
 *    - 材料是鋁合金不是鋼管，照片 -2、-3 的銲接都是 TIG，母材呈亮銀色
 *    - 工序含「切除既有鏽蝕鋼構件」再換新（照片 -1），不是單純新設
 *    舊文案的三段敘述（曲面貼合、鋼管彎製、銲道防蝕）與實際工程不符，已全部
 *    替換。這是「照片不足時的判讀風險」的實例，值得記著。
 *
 * slug 維持 handrail-installation 不變：名稱雖改，工項本質仍是欄杆安裝，
 * 且可沿用既有的圖片檔名、不動窗口可能已經開過的網址。
 *
 * ⚠️ 封面照片由窗口指定（檔名 cover）。畫面中的伸縮式通道設備印有第三方
 *    廠牌字樣，而該設備不是本工項的產出——本工項的產出是欄杆。若不希望在
 *    產品封面出現他廠設備，改用 -3 或 -4（欄杆本身的照片）即可。
 *
 * 文案基準：與其他 17 支一致——規格書式的客觀陳述，第一段講工項本身（無主詞）、
 * 第二段講施工範圍與施工條件，全段不出現公司名。
 * 刻意不寫管徑、欄杆高度、立柱間距、鋁合金牌號與所在場站。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * 照片依施工順序：
 *   cover 夜間全景——通道設備以吊車吊掛就位，下方為鋼構塔架與平台
 *   -1    切除既有鏽蝕鋼製立柱，前景為已裝好的鋁製扶手管，下方可見海水
 *   -2    艙頂鋁構件的 TIG 銲接，人員繫全身式安全帶
 *   -3    鋁欄杆接點的 TIG 銲接，周邊設置黑色防護遮蔽
 *   -4    完工的鋁欄杆——扶手管、中間橫桿與立柱夾座
 */
const handrailInstallation: Product = {
  slug: "handrail-installation",
  name: "空橋鋁欄杆安裝",
  nameEn: "Aluminium Handrail Installation for Gangways",
  category: "客製化工程",
  shortDescription: "空橋通道的鋁合金欄杆現場施作，含既有鏽蝕鋼構件的切除與換新",
  shortDescriptionEn:
    "On-site aluminium handrail work on gangway walkways, including cutting out and replacing corroded steelwork",
  description:
    "空橋是活動結構——需要伸縮、旋轉，並隨潮位與船舶吃水調整高度，因此自重會直接反映在驅動機構的負荷與整體配重上。欄杆雖然不是主結構，但沿著整條通道累積起來的長度相當可觀，材料選擇就不只是防蝕的問題。鋁合金的比重約為鋼的三分之一，且在海風環境下不會像鋼材那樣從塗裝破口開始往內鏽蝕，是這類結構常見的選擇。\n\n" +
    "施工範圍涵蓋既有鏽蝕鋼構件的切除、鋁製立柱與扶手管的現場組立與銲接，以及與既有結構的接合處理。鋁合金導熱快、熱影響區的強度會下降，銲接順序與接點配置須一併控制變形量。作業位置多在高處且臨水，銲接周邊設置防護遮蔽，人員全程配戴全身式安全帶。",
  descriptionEn:
    "A gangway is a moving structure: it telescopes, slews, and follows the tide and the vessel's draught, so its own weight feeds directly into the loads on its drive machinery and into how the whole assembly is balanced. Handrails are not primary structure, but run the full length of the walkway and add up, which makes the choice of material more than a question of corrosion alone. Aluminium weighs about a third of what steel does, and in a salt-laden environment it does not rust inward from a break in the coating the way steel does — which is why it is the usual choice for structures of this kind.\n\n" +
    "The scope covers cutting out corroded steelwork, assembling and welding aluminium stanchions and rails in place, and making the connections to the existing structure. Aluminium conducts heat quickly and loses strength through the heat-affected zone, so the welding sequence and the placement of joints are planned together to keep distortion in check. The work is mostly at height and over water: welding is screened off, and full-body harnesses are worn throughout.",
  coverImage: "/images/products/custom-engineering/handrail-installation-cover.webp",
  images: [
    "/images/products/custom-engineering/handrail-installation-cover.webp",
    "/images/products/custom-engineering/handrail-installation-1.webp",
    "/images/products/custom-engineering/handrail-installation-2.webp",
    "/images/products/custom-engineering/handrail-installation-3.webp",
    "/images/products/custom-engineering/handrail-installation-4.webp",
  ],
  specs: [],
  features: [
    "鋁合金比重約為鋼的三分之一，減輕活動結構的自重負擔",
    "海風環境下不會從塗裝破口往內鏽蝕",
    "既有鏽蝕鋼製構件現場切除後換新，不需整段拆離",
    "銲接順序與接點配置一併控制鋁材的熱變形",
    "高處臨水作業設置防護遮蔽，人員配戴全身式安全帶",
  ],
  featuresEn: [
    "Aluminium weighs about a third of steel, easing the self-weight carried by a moving structure",
    "Does not rust inward from a break in the coating the way steel does in salt air",
    "Corroded steelwork cut out and replaced in place, with no need to remove whole sections",
    "Welding sequence and joint placement planned together to control distortion in aluminium",
    "Work at height and over water is screened, with full-body harnesses worn throughout",
  ],
  applications: [
    "空橋與登船通道的欄杆新設與汰換",
    "臨水結構既有鋼製欄杆的換材",
    "活動結構上的輕量化欄杆施作",
  ],
  applicationsEn: [
    "New and replacement handrails for gangways and boarding walkways",
    "Changing existing steel handrails on waterside structures to another material",
    "Lightweight handrail work on moving structures",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default handrailInstallation;
