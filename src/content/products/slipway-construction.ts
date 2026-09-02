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
 * 兩處是從現場照片推斷、尚待欣展窗口確認：
 *   1.「行走於岸邊既有軌道」——照片中軌道已鋪設，但也可能是本案一併施作。
 *      若軌道也是欣展做的，需改為含軌道舖設，並調整「不需變更原有軌距」那條
 *   2.「分節編號製作」——依木樑上手寫的 C3／C4 編號推斷
 *
 * 計畫將網站連結提供給窗口確認產品描述，屆時一併釐清上述兩點。
 */
const slipwayConstruction: Product = {
  slug: "slipway-construction",
  name: "船台新製",
  nameEn: "Slipway Construction",
  category: "港務工程",
  shortDescription: "以大斷面木料與鋼製輪組構成的船台台車，供船舶上架維修與下水作業使用",
  shortDescriptionEn:
    "Slipway cradles built from heavy timber beams and steel roller assemblies, for hauling vessels out and launching them",
  description:
    "船台是船舶上架維修與下水作業的基礎設施。船體離水之後的全部重量都由船台承載，因此台車的結構強度、輪組與軌道的配合精度，直接決定作業能否安全進行。\n\n" +
    "欣展承製的船台以大斷面木料構成台車主體，搭配鋼製輪組、接頭與拖曳吊耳，分節製作後於現場組立，行走於岸邊既有軌道。木料供應與金屬加工都是欣展本身的能力，從料件備製到現場組裝可由同一支團隊完成。實際尺寸、節數與承載條件須依船型與港區軌道規格設計，歡迎來電洽詢。",
  descriptionEn:
    "A slipway is the basic infrastructure for hauling vessels out of the water for repair and for launching them again. Once a hull leaves the water its entire weight rests on the slipway, so the structural strength of the cradle and the fit between its rollers and the rails determine whether the operation can be carried out safely.\n\n" +
    "TNO builds slipway cradles around a body of heavy timber beams, combined with steel roller assemblies, connectors, and towing lugs. The cradles are fabricated in numbered sections, assembled on site, and run on the existing rails along the quay. Both timber supply and metal fabrication are in-house capabilities at TNO, so everything from material preparation to on-site assembly can be handled by one team. Dimensions, the number of sections, and load conditions are designed around the vessel type and the existing rail gauge — please contact us to discuss your requirements.",
  coverImage: "/images/products/port-engineering/slipway-construction-cover.webp",
  images: [
    "/images/products/port-engineering/slipway-construction-cover.webp",
    "/images/products/port-engineering/slipway-construction-1.webp",
    "/images/products/port-engineering/slipway-construction-2.webp",
  ],
  specs: [],
  features: [
    "以大斷面木料承載船體重量，局部磨損或損壞時可單根更換",
    "鋼製輪組與接頭配合港區既有軌道，不需變更原有軌距",
    "分節編號製作，便於運輸、現場組裝與日後維護",
    "木料與金屬加工由同一家承接，減少介面協調",
  ],
  featuresEn: [
    "Heavy timber beams carry the hull load, and individual beams can be replaced as they wear",
    "Steel rollers and connectors are matched to the existing rails, so the original gauge stays unchanged",
    "Fabricated in numbered sections for easier transport, on-site assembly, and later maintenance",
    "Timber supply and metal fabrication handled by one contractor, reducing coordination between trades",
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
