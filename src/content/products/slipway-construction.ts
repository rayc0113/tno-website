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
  shortDescription: "船台台車的製作與現場組立，供船舶上架維修與下水作業使用",
  shortDescriptionEn:
    "Fabrication and on-site assembly of slipway cradles, for hauling vessels out and launching them",
  description:
    "船台為船舶上架維修與下水作業的基礎設施。船體離水後的全部重量由船台承載，台車的結構強度與輪組、軌道的配合精度，直接決定作業能否安全進行。\n\n" +
    "台車主體以大斷面木料構成，搭配鋼製輪組、接頭與拖曳吊耳，分節製作後於現場組立，行走於港區軌道。尺寸、節數與承載條件須依船型與既有軌道規格設計；欣展可依現場條件提出製作與組立方案，歡迎來電洽詢。",
  descriptionEn:
    "A slipway is the basic infrastructure for hauling vessels out of the water for repair and for launching them again. Once a hull leaves the water its entire weight rests on the slipway, so the structural strength of the cradle and the fit between its rollers and the rails determine whether the operation can be carried out safely.\n\n" +
    "The cradle body is built from heavy timber beams, combined with steel roller assemblies, connectors, and towing lugs, fabricated in numbered sections and assembled on site to run on the harbour rails. Dimensions, the number of sections, and load conditions are designed around the vessel type and the existing rail gauge. TNO can propose a fabrication and assembly approach for your site — please contact us.",
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
