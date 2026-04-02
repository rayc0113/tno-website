import type { Product } from "@/types/product";

const anchorFittings: Product = {
  slug: "anchor-fittings",
  name: "導纜孔、繫纜樁、錨座",
  category: "造船用甲板上艤品、錨座配件",
  shortDescription: "高強度船用錨座配件，確保錨泊系統安全可靠",
  description:
    "欣展提供完整的船用錨座配件系列，包括錨鏈艙口、錨機座板、止鏈器、錨鏈導向器及相關緊固配件。採用高強度船用鋼材製造，依照 IACS 及各船級社規範設計，確保錨泊作業的安全性與可靠性，適用於各型商業船舶。",
  images: [
    "/images/products/deck-fittings/mooring-fittings/mooring-fittings01.webp",
  ],
  specs: [
    { label: "材質", value: "高強度船用鋼 / 鑄鐵" },
    { label: "表面處理", value: "熱浸鍍鋅 / 防腐底漆" },
    { label: "設計規範", value: "依各船級社規格" },
    { label: "試驗壓力", value: "依 IACS 規定荷載測試" },
    { label: "認證", value: "ABS、ClassNK、DNV、LR" },
  ],
  features: [
    "高強度鑄造或鍛造製程，承載能力強",
    "符合 IACS 錨泊設備設計規範",
    "完善的防腐處理，延長使用壽命",
    "通過多國主要船級社認證",
    "可依船型噸位客製化規格",
  ],
  applications: ["錨鏈艙口蓋", "錨機座板系統", "止鏈及導鏈設備", "船舶錨泊系統配套"],
  publishedAt: "2024-03-01",
  isPublished: true,
};

export default anchorFittings;
