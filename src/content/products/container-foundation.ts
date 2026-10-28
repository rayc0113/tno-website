import type { Product } from "@/types/product";

/**
 * 客製化工程 — 貨櫃基座安裝（H Bar）
 *
 * 2026-10-22 依 TNO 窗口 Lucy 提供的素材新增。
 *
 * 素材來源：
 *   資料夾「【新增案件】產品-客製化工程-案名：貨櫃基座安裝(斜線符號)H BAR」
 *   （資料夾名稱的「(斜線符號)」是因為檔名不能用 /，案名原文為
 *     「貨櫃基座安裝 / H BAR」）
 *   精選照片 6 張，另有同一工程的完工報告 PDF，已另建案例
 *   src/content/cases/container-foundation-install.ts。
 *
 * 文案基準：與其他客製化工程品項一致——規格書式的客觀陳述，
 * 第一段講工項本身（無主詞），第二段講結構與施工範圍，全段不出現公司名，
 * 也不出現日期、客戶、船名（那些屬於案例頁）。
 *
 * ⚠️ 刻意不寫：尺寸、荷重、鋼材牌號、櫃位數量、塗裝規範。
 *    照片看得出扭鎖座的形式與肋板配置，看不出規格，specs 留空（詳情頁會
 *    自動隱藏規格表）。照片裡的油漆桶標示為 Jotamastic，廠牌不寫進文案。
 *
 * ⚠️「位置精度」這個主軸是從照片推出來的，但推得很硬：貨櫃角件的間距是
 *    ISO 固定值，基座上的扭鎖座對不上就完全無法使用，這是這個工項與一般
 *    甲板鋼構最不一樣的地方。完工報告第 2 段「廠內組裝**測試**」並附有
 *    吊真櫃試裝的照片，佐證了這點。若窗口認為講法不妥再調整。
 *
 * 依現場照片撰寫：
 *   cover 廠內試裝——20 呎櫃由天車吊放，角件落在 H 梁上的扭鎖座
 *   -1    廠內試裝全景——天車吊櫃，地面另有數條待組的 H 型鋼梁
 *   -2    甲板完工近景——梁端的三角肋板與甲板銲接收邊，上翼板的扭鎖座
 *   -3    甲板完工全景——基座縱貫整個貨物甲板，背景為港區
 *   -4    甲板完工——另一角度，可見甲板上既有的單體扭鎖座
 *   -5    住艙外側的基座——成對扭鎖座與連續肋板，背景為港區與工作船
 */
const containerFoundation: Product = {
  slug: "container-foundation",
  name: "貨櫃基座安裝",
  nameEn: "Container Foundation Installation",
  category: "客製化工程",
  shortDescription:
    "甲板貨櫃基座的設計、製作與安裝——扭鎖座的位置在廠內以實櫃驗證，上船只做定位與銲接",
  shortDescriptionEn:
    "Container deck foundations designed, built and installed — the setting out proved against a real container ashore, so that only positioning and welding remain on board",
  description:
    "貨櫃基座沒有公差可言。角件的間距由貨櫃決定，基座只能去遷就它——扭鎖座差上幾公釐，扭鎖就轉不進去，而鋼材一旦銲過就會自己走位。所以這類結構的成敗不在強度，在位置：在熱變形之後仍然精準的位置。\n\n" +
    "以 H 型鋼為縱向主梁，上翼板依櫃位銲接扭鎖座，兩側三角肋板將船舶橫搖、縱搖時的慣性力分散傳入甲板結構。關鍵工序全部留在廠內完成——下料、扭鎖座定位銲接、組裝測試與塗裝；上船只做吊裝定位、銲接固定與銲後檢驗。驗證做在岸上，船期才不必替誤差買單。",
  descriptionEn:
    "A container foundation has no tolerance to work with. The spacing of the corner castings belongs to the container, and the foundation has to meet it — a few millimetres out and the twist-lock will not turn home, and steel moves of its own accord once it has been welded. What decides this kind of structure is therefore not strength but position: position that still holds after the distortion of welding.\n\n" +
    "An H-section spine carries twist-lock sockets welded to the top flange at the container positions, with triangular gussets each side spreading the inertial loads of rolling and pitching into the deck structure. Everything that matters is finished ashore — cutting, setting out and welding the sockets, trial assembly, coating — leaving only lifting, positioning, welding down and post-weld inspection to be done on board. Prove it in the workshop, and the vessel's schedule never has to pay for an error.",
  coverImage: "/images/products/custom-engineering/container-foundation-cover.webp",
  images: [
    "/images/products/custom-engineering/container-foundation-cover.webp",
    "/images/products/custom-engineering/container-foundation-1.webp",
    "/images/products/custom-engineering/container-foundation-2.webp",
    "/images/products/custom-engineering/container-foundation-3.webp",
    "/images/products/custom-engineering/container-foundation-4.webp",
    "/images/products/custom-engineering/container-foundation-5.webp",
  ],
  specs: [],
  features: [
    "扭鎖座依貨櫃角件間距定位銲接，銲接變形後再行確認",
    "出廠前以實際貨櫃試裝，位置在廠內驗證而非到甲板上才發現",
    "H 型鋼主梁配合三角肋板，將貨櫃的慣性力分散傳入甲板結構",
    "現場銲接完成後施作銲後檢驗與補漆，因應海上環境的腐蝕條件",
  ],
  featuresEn: [
    "Twist-lock sockets set out and welded to the container's corner-casting spacing, then checked again once welding distortion has taken effect",
    "Trial-fitted to an actual container before leaving the workshop, so the setting out is proved ashore rather than discovered on deck",
    "An H-section spine with triangular gussets, spreading the container's inertial loads into the deck structure",
    "Post-weld inspection and touch-up coating after site welding, for the corrosion conditions of service at sea",
  ],
  applications: [
    "工作船、平台船甲板的貨櫃固定基座",
    "甲板設備與貨物固定座的製作與安裝",
    "既有甲板增設櫃位的基座加裝",
  ],
  applicationsEn: [
    "Container securing foundations on the decks of work vessels and platform vessels",
    "Fabrication and installation of securing seats for deck equipment and cargo",
    "Additional foundations where new container positions are added to an existing deck",
  ],
  publishedAt: "2026-10-22",
  isPublished: true,
};

export default containerFoundation;
