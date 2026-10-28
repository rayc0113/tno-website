import type { Product } from "@/types/product";

/**
 * 各式不鏽鋼廚具
 *
 * 內容基準（2026-08-31 修訂）：
 * 舊官網的產品文案已無法取得（Wayback 只存到首頁／關於我們／聯絡我們，
 * 產品頁未被存檔），原本的敘述與規格為早期架構階段的暫時性內容，
 * 其中含有未經查證的數字與逐產品船級社宣稱，已全部移除。
 *
 * 現行文字為「材料層級的通用正確敘述」——只陳述這類材料本身成立的事實，
 * 不宣稱本公司特定批次的規格、密度、耐溫值或個別船級社認證。
 * 規格表（specs）刻意留空，詳情頁會自動隱藏整個區塊。
 *
 * 待欣展提供材料商型錄／技術資料表（TDS）／船級社證書後，
 * 再補回 specs 與更精確的敘述。
 *
 * ⚠️ 2026-10-12 文案重寫。原因有二：
 *   1. 換上窗口提供的新照片後，照片比文案豐富太多。舊照片只有廠內堆放的
 *      水槽台半成品，文案因此只寫到「料理台、水槽、層架與各式儲物設備」，
 *      讀起來像一般商用廚具；新照片是船上完成的整間廚房，看得到排油煙罩、
 *      吊櫃、不鏽鋼壁板、嵌入式把手、百葉通風門與門栓扣——這些細節才是
 *      船用廚具與陸上廚具的真正差別，全部補進文案。
 *   2. 舊文案以「欣展提供…」起句，文案裡出現公司名，與後來 10 支工程產品
 *      確立的標準（全段不出現公司名、規格書式客觀陳述）不一致。
 *      「自有金屬加工設備一貫作業」這類設備宣稱也一併移除。
 *
 * 新文案的立論：船用廚具與商用廚具的差別不在材質，而在細節——把手嵌入
 * （通道窄）、門片有栓扣（航行搖晃）、櫃門百葉（艙內濕氣）。這三點都在
 * 照片上看得到，是可查證的敘述。
 */
const stainlessKitchen: Product = {
  slug: "stainless-kitchen",
  name: "各式不鏽鋼廚具",
  nameEn: "Marine Stainless Steel Galley Equipment",
  category: "不鏽鋼廚具",
  shortDescription: "船上沒有標準尺寸——檯面、櫃體、壁板與儲物櫃，依艙間實際放樣製作",
  shortDescriptionEn:
    "No standard sizes aboard ship — counters, cabinets, wall panels and storage, each set out from the compartment itself",
  description:
    "船上的廚房空間比陸上緊湊，而且整個艙間都隨著船在晃。這使得船用廚具與商用廚具的差別不在材質，而在細節：把手必須嵌入門片，不能凸出到本就狹窄的通道；門片要有栓扣，航行中才不會自己彈開；櫃體要留通風，艙間的濕氣才不會積在裡面。\n\n" +
    "不鏽鋼在高濕含鹽的環境下耐蝕、表面也容易清潔，是艙間廚房的主要材料。製作範圍涵蓋檯面、水槽、吊櫃、下櫃、壁板與儲物櫃，並以整合的方式施作，減少積水與藏污的縫隙。船上沒有標準尺寸，每一組都須依艙間的實際尺寸與作業動線放樣。材質等級與表面處理依使用部位選定——不過讓一套船用廚具撐得住的，往往是這些不會寫進規格書的細節。",
  descriptionEn:
    "A galley at sea is tighter than one ashore, and the whole compartment moves with the ship. What separates marine galley equipment from commercial kitchen equipment is therefore not the material but the detailing: handles are recessed into the doors so they do not project into an already narrow passage; doors carry latches so they cannot swing open underway; and cabinets are ventilated so the moisture in the compartment does not sit inside them.\n\n" +
    "Stainless steel resists corrosion in humid, salt-laden air and wipes down easily, which makes it the material of choice for a galley. The work covers counters, sinks, upper and lower cabinets, wall panelling and storage units, built as an integrated fit-out so there are fewer joints for water and soil to collect in. There are no standard sizes aboard ship: every set is laid out from the actual dimensions of the compartment and the way it will be worked in. Stainless grade and surface finish are chosen to suit each location — though what makes a galley fit-out last at sea is usually the detailing that never reaches a specification.",
  // 2026-10-12 依窗口提供的新照片整批汰換。舊照片是廠內堆放的水槽台半成品，
  // 新的兩張是船上實際完成的廚房與儲物櫃，說服力差很多。
  coverImage: "/images/products/stainless-kitchen/stainless-kitchen-cover.webp",
  images: [
    "/images/products/stainless-kitchen/stainless-kitchen-cover.webp",
    "/images/products/stainless-kitchen/stainless-kitchen-1.webp",
  ],
  // 規格待欣展提供 TDS／證書後再補；空陣列時詳情頁不顯示規格表
  specs: [],
  features: [
    "把手嵌入門片，不佔用本就狹窄的通道",
    "門片附栓扣，航行搖晃中不會自行開啟",
    "儲物櫃門設百葉，維持艙內通風",
    "檯面、壁板與櫃體整合施作，減少積水與藏污的縫隙",
    "依艙間實際尺寸與作業動線放樣製作",
  ],
  featuresEn: [
    "Handles recessed into the doors, keeping a narrow passage clear",
    "Latched doors that stay shut underway",
    "Louvred storage doors, keeping air moving inside the compartment",
    "Counters, panelling and cabinets built as one, with fewer joints to trap water and soil",
    "Laid out from the compartment's real dimensions and the way it will be worked in",
  ],
  applications: [
    "船員廚房的檯面、水槽與櫃體",
    "艙間儲物櫃與層架",
    "廚房相關不鏽鋼金屬件客製",
  ],
  applicationsEn: [
    "Counters, sinks and cabinets for crew galleys",
    "Storage cabinets and shelving in compartments",
    "Custom stainless steel fittings for galley use",
  ],
  publishedAt: "2024-02-01",
  isPublished: true,
};

export default stainlessKitchen;
