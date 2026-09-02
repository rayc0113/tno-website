import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-風管 百葉窗 封板 案
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，公司名只在最後一句出現，與材料類（岩棉等）同一個登記。
 * 刻意不寫管徑、風量、板厚與開口尺寸。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * shortDescription 的實際用途是詳情頁的 SEO／OG description，
 * 列表卡片只顯示圖／分類／名稱（見 ProductGrid.tsx），故以一句講完、
 * 關鍵詞完整為準。
 *
 * 依現場照片撰寫：艙內通風機與風管彎頭、方形風箱、艙頂管路的 U 形吊架、
 * 艙壁銲上的管路托架、艙壁開口的鋼板封板、舷外帶擋雨彎頭的通風口。
 */
const ductLouverPanel: Product = {
  slug: "duct-louver-panel",
  name: "風管、百葉窗、封板",
  nameEn: "Ducting, Louvers & Blanking Plates",
  category: "客製化工程",
  shortDescription: "船舶通風風管、通風口與艙壁開口封板的製作與安裝",
  shortDescriptionEn:
    "Fabrication and installation of marine ventilation ducting, vent openings, and bulkhead blanking plates",
  description:
    "艙內通風靠風管將空氣送至各艙區，管路須穿越艙壁與甲板，並在舷外設通風口。穿越處的開口在管路變更或設備移除後，須以鋼板封板復原，以維持艙壁的強度與水密。管路本身則須有足夠的支撐吊架，避免航行振動造成鬆動。\n\n" +
    "施工範圍涵蓋風管與風箱製作、通風口與擋雨彎頭安裝、管路支撐吊架設置，以及艙壁開口的封板銲接與表面處理。管徑、風量與開口位置須依艙區配置與既有結構設計；欣展可依現場條件提出施工方案，歡迎來電洽詢。",
  descriptionEn:
    "Ventilation air reaches each compartment through ducting that has to pass through bulkheads and decks and terminate in vent openings on the ship's side. Where a run is altered or equipment removed, the resulting opening is closed with a blanking plate so the bulkhead recovers its strength and watertightness. The ducting itself needs adequate supports and hangers so that vibration underway does not work it loose.\n\n" +
    "The scope of work covers fabrication of ducting and plenum boxes, installation of vent openings and weather elbows, provision of pipe supports and hangers, and the welding and surface treatment of bulkhead blanking plates. Duct sizes, air volumes, and opening positions are designed around the compartment layout and the existing structure. TNO can propose a method statement for your project — please contact us.",
  coverImage: "/images/products/custom-engineering/duct-louver-panel-cover.webp",
  images: [
    "/images/products/custom-engineering/duct-louver-panel-cover.webp",
    "/images/products/custom-engineering/duct-louver-panel-1.webp",
    "/images/products/custom-engineering/duct-louver-panel-2.webp",
    "/images/products/custom-engineering/duct-louver-panel-3.webp",
    "/images/products/custom-engineering/duct-louver-panel-4.webp",
  ],
  specs: [],
  features: [
    "風管與風箱依現場尺寸製作，貼合既有艙區結構",
    "舷外通風口設擋雨彎頭，避免海水與雨水侵入",
    "管路以支撐吊架固定，抑制航行振動造成的鬆動",
    "開口封板銲接後施作表面處理，維持艙壁強度與水密",
  ],
  featuresEn: [
    "Ducting and plenum boxes made to site dimensions, fitting the existing compartment structure",
    "Weather elbows on ship-side vents keep out sea spray and rain",
    "Runs secured with supports and hangers to resist loosening from vibration",
    "Blanking plates welded and surface-treated, restoring bulkhead strength and watertightness",
  ],
  applications: [
    "艙區通風系統的新設與變更",
    "設備移除後的艙壁開口封板",
    "既有風管的支撐補強",
  ],
  applicationsEn: [
    "New and altered compartment ventilation systems",
    "Blanking off bulkhead openings after equipment removal",
    "Reinforcing supports on existing ductwork",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default ductLouverPanel;
