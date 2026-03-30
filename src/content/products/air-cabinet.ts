import type { Product } from "@/types/product";

const airCabinet: Product = {
  slug: "air-cabinet",
  name: "船用空氣櫃、船用過濾器",
  category: "船用設備",
  shortDescription: "保障系統穩定與高效運行的船用空氣處理設備，通過多項國際船級社認證。",
  description:
    "欣展提供完整的船用空氣系統設備，包括空氣控制櫃、氣動控制元件及各式船用過濾器。產品依照 IMO、ABS 等國際規範設計製造，確保船舶氣動系統的穩定可靠。廣泛應用於船舶控制系統、壓縮空氣系統及各類船用設備的氣源處理。",
  coverImage: "/images/home/product_bg4.png",
  images: [
    "/images/products/air-cabinet-1.jpg",
    "/images/products/air-cabinet-2.jpg",
  ],
  specs: [
    { label: "工作壓力", value: "0.5 ~ 3.0 MPa（依型號）" },
    { label: "工作溫度", value: "-20°C ~ +60°C" },
    { label: "過濾精度", value: "0.01 μm ~ 50 μm" },
    { label: "材質", value: "316L 不鏽鋼 / 碳鋼（依規格）" },
    { label: "認證", value: "ABS、ClassNK、DNV、BV" },
  ],
  features: [
    "通過多項國際船級社認證",
    "高精度過濾，保護下游設備",
    "耐腐蝕，適應惡劣海洋環境",
    "模組化設計，維護便利",
    "可依系統需求客製規格",
  ],
  applications: ["船舶氣動控制系統", "壓縮空氣管路過濾", "甲板機械氣源處理", "機艙設備氣源供應"],
  publishedAt: "2024-02-15",
  isPublished: false,
};

export default airCabinet;
