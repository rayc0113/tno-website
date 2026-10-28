import type { Product } from "@/types/product";

/**
 * 港務工程 — DC-船台新製
 *
 * 文案基準（2026-09-02 撰寫）：
 * 內容為「工項層級的通用正確敘述」——只陳述這種工程本身成立的事實
 * （組成、用途、施作要點），刻意不寫承載噸數、台車尺寸與節數、木料樹種、
 * 鋼材規格、客戶名稱與完工年份，因為這些都沒有來源可查證。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * 2026-09-02 改寫為與海軍艤裝三支一致的規格書式登記：段中不出現公司名、
 * 移除能力宣稱（原「木料供應與金屬加工都是欣展本身的能力…同一支團隊完成」）。
 *
 * 原本待確認的「行走於岸邊既有軌道」已藉改寫迴避——軌道是既有或本案一併
 * 施作無法從照片判斷，故改為中性的「行走於港區軌道」，連帶把「不需變更
 * 原有軌距」改為「輪組與接頭依軌道軌距製作」，兩種情況都成立。
 *
 * 仍待欣展窗口確認：「分節編號製作」是依木樑上手寫的 C3／C4 編號推斷。
 *
 * 計畫將網站連結提供給窗口確認產品描述，屆時一併釐清該點。
 */
const slipwayConstruction: Product = {
  slug: "slipway-construction",
  name: "船台新製",
  nameEn: "Slipway Construction",
  category: "港務工程",
  shortDescription: "船台台車的製作與現場組立——船一離開水面，全部的重量就落在這套台車上",
  shortDescriptionEn:
    "Slipway cradles fabricated and assembled on site — the moment a hull leaves the water, its whole weight rests on them",
  description:
    "船浮在水上的時候，重量由整個船底分攤；一離開水面，這些重量就全部落在台車上。船台是船舶上架維修與下水作業的基礎設施，台車的結構強度，以及輪組與軌道之間的配合精度，直接決定作業能否安全進行。\n\n" +
    "台車主體以大斷面木料構成，搭配鋼製輪組、接頭與拖曳吊耳，分節製作後於現場組立，行走於港區軌道。尺寸、節數與承載條件依船型與既有軌道規格設計。船台撐住的不只是一艘船，還有在船底下工作的人。",
  descriptionEn:
    "While a vessel floats, her weight is shared across the whole of her bottom. The moment she leaves the water, all of it comes down on the cradle. A slipway is the basic infrastructure for hauling vessels out for repair and launching them again, and the structural strength of the cradle — together with the fit between its rollers and the rails — decides whether that can be done safely.\n\n" +
    "The cradle body is built from heavy timber beams, combined with steel roller assemblies, connectors and towing lugs, fabricated in numbered sections and assembled on site to run on the harbour rails. Dimensions, the number of sections and load conditions follow from the vessel type and the existing rail gauge. A slipway holds up more than a ship: it holds up the people working underneath her.",
  coverImage: "/images/products/port-engineering/slipway-construction-cover.webp",
  images: [
    "/images/products/port-engineering/slipway-construction-cover.webp",
    "/images/products/port-engineering/slipway-construction-1.webp",
    "/images/products/port-engineering/slipway-construction-2.webp",
  ],
  specs: [],
  features: [
    "台車主體採大斷面木料，局部磨損或損壞時可單根更換",
    "輪組與接頭依軌道軌距製作",
    "分節編號製作，便於運輸、現場組立與日後維護",
  ],
  featuresEn: [
    "Heavy timber beams carry the hull load, and individual beams can be replaced as they wear",
    "Rollers and connectors made to suit the rail gauge",
    "Fabricated in numbered sections for easier transport, on-site assembly, and later maintenance",
  ],
  applications: [
    "漁港與小型港區的船舶上架維修",
    "船舶下水作業",
    "既有船台的汰換與增設",
  ],
  applicationsEn: [
    "Hauling vessels out for repair at fishing harbours and smaller ports",
    "Vessel launching",
    "Replacing or adding to existing slipways",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default slipwayConstruction;
