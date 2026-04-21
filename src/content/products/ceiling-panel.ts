import type { Product } from "@/types/product";

const ceilingPanel: Product = {
  slug: "ceiling-panel",
  name: "Ceiling Panel－天花板系統",
  nameEn: "Ceiling Panel System",
  category: "金屬隔間板",
  shortDescription:
    "專為船艙設計的輕量化天花板系統，防火認證、易維護，提供整潔美觀的艙室空間。",
  shortDescriptionEn:
    "A lightweight ceiling system designed for ship cabins — fire-certified, easy to maintain, and delivering clean, refined interiors.",
  description:
    "欣展代理之船用 Ceiling Panel 天花板系統以輕量化鋁合金或鋼製骨架搭配防火板材構成，通過 IMO FTP Code 認證。系統化格柵設計便於管線佈設與日後維修，廣泛應用於客輪、貨輪及工作船的艙室天花板工程。",
  descriptionEn:
    "TNO's marine ceiling panel system uses lightweight aluminum or steel framing paired with fire-rated panels, certified to the IMO FTP Code. The modular grid layout simplifies pipework routing and future maintenance, making it widely suitable for passenger ships, cargo vessels, and workboat cabin ceilings.",
  images: [
    "/images/products/metal-panel/ceiling-panel/ceiling-panel01.webp",
    "/images/products/metal-panel/ceiling-panel/ceiling-panel02.webp",
    "/images/products/metal-panel/ceiling-panel/ceiling-panel03.webp",
  ],
  specs: [
    { label: "材質", value: "鋁合金骨架 / 防火板材" },
    { label: "防火等級", value: "A-0 / B-15" },
    { label: "格柵尺寸", value: "600×600mm / 依客製規格" },
    { label: "表面處理", value: "烤漆 / 木紋覆膜" },
    { label: "認證", value: "ABS、ClassNK、BV" },
  ],
  specsEn: [
    { label: "Material", value: "Aluminum framing / Fire-rated panels" },
    { label: "Fire Class", value: "A-0 / B-15" },
    { label: "Grid Size", value: "600×600mm / Custom sizes available" },
    { label: "Surface Finish", value: "Baked enamel / Wood-grain laminate" },
    { label: "Certifications", value: "ABS, ClassNK, BV" },
  ],
  features: [
    "輕量化設計，降低船體重量",
    "通過 IMO FTP Code 防火認證",
    "格柵系統便於管線維修",
    "多種飾面選擇",
    "快速拆裝，縮短施工時間",
  ],
  featuresEn: [
    "Lightweight design that reduces overall hull weight",
    "Certified to the IMO FTP Code for fire safety",
    "Grid system simplifies pipework maintenance",
    "Multiple surface finishes to choose from",
    "Quick installation and removal, shortening build time",
  ],
  applications: ["客輪艙室天花板", "貨輪生活區", "工作船艙房", "走廊與公共區域"],
  applicationsEn: [
    "Passenger ship cabin ceilings",
    "Cargo vessel living quarters",
    "Workboat crew cabins",
    "Corridors and public areas",
  ],
  publishedAt: "2024-01-01",
  isPublished: true,
};

export default ceilingPanel;
