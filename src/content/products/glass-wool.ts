import type { Product } from "@/types/product";

/**
 * 玻璃棉
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
 */
const glassWool: Product = {
  slug: "glass-wool",
  name: "玻璃棉",
  nameEn: "Glass Wool",
  category: "隔熱絕緣材",
  shortDescription: "輕量無機玻璃纖維隔熱材，適用於住艙、走道壁板與管路保溫",
  shortDescriptionEn: "Lightweight inorganic glass-fiber insulation for accommodation, corridors, and pipework",
  description:
    "玻璃棉由玻璃原料經高溫熔融後成纖製成，屬無機纖維隔熱材料，重量輕、施工性佳，是船舶住艙區域常用的隔熱與吸音材料。相較於岩（礦）棉，玻璃棉密度較低、對船體荷重的負擔小，適合壁板、天花與風管等大面積部位。\n\n" +
    "船舶用隔熱材依 SOLAS 公約與 IMO FTP Code 對不燃性與防火試驗有明確要求，實際採用的密度、厚度與適用等級須依安裝部位與船級社要求選定。欣展可依專案需求提供對應規格與相關證明文件。",
  descriptionEn:
    "Glass wool is made by melting glass raw materials at high temperature and forming them into fibers. This inorganic fiber insulation is light and easy to install, making it a common choice for thermal and acoustic insulation in accommodation areas. Compared with rock wool it has a lower density and adds less load to the hull, which suits large areas such as wall panels, ceilings, and ventilation ducting.\n\n" +
    "Marine insulation is subject to clear non-combustibility and fire-test requirements under the SOLAS Convention and the IMO FTP Code. The density, thickness, and rating actually used must be selected according to the installation location and the requirements of the classification society. TNO can supply matching specifications and supporting documentation on a project basis.",
  images: [
    "/images/products/glass-wool-cover.webp",
    "/images/products/glass-wool-1.webp",
    "/images/products/glass-wool-2.webp",
    "/images/products/glass-wool-3.webp",
    "/images/products/glass-wool-4.webp",
    "/images/products/glass-wool-5.webp",
    "/images/products/glass-wool-6.webp",
  ],
  // 規格待欣展提供 TDS／證書後再補；空陣列時詳情頁不顯示規格表
  specs: [],
  features: [
    "無機玻璃纖維，質量輕、不增加船體負擔",
    "隔熱同時具吸音效果",
    "可現場裁切，施工便利",
    "適合壁板、天花板等大面積部位",
  ],
  featuresEn: [
    "Inorganic glass fiber — light, with minimal added load to the hull",
    "Provides sound absorption alongside thermal insulation",
    "Cuts on site for straightforward installation",
    "Suited to large areas such as wall panels and ceilings",
  ],
  applications: [
    "船員住艙與走道壁板隔熱",
    "天花板與艙間隔音",
    "風管與管路保溫",
  ],
  applicationsEn: [
    "Crew accommodation and corridor panel insulation",
    "Ceiling and compartment sound insulation",
    "Ventilation duct and pipe lagging",
  ],
  publishedAt: "2024-01-20",
  isPublished: true,
};

export default glassWool;
