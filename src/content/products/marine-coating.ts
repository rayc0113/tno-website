import type { Product } from "@/types/product";

const marineCoating: Product = {
  slug: "marine-coating",
  name: "船舶防腐塗料",
  category: "塗料",
  shortDescription: "高效能船舶防腐蝕塗料，延長船體使用壽命，適用於各類型海洋環境。",
  description:
    "我們的船舶防腐塗料採用最新材料科技研發，能有效阻絕海水侵蝕與生物附著，大幅延長船體壽命。通過 ABS、ClassNK 等國際船級社認證，品質有保障。",
  coverImage: "/images/products/marine-coating-cover.jpg",
  images: [
    "/images/products/marine-coating-1.jpg",
    "/images/products/marine-coating-2.jpg",
  ],
  specs: [
    { label: "適用基材", value: "鋼鐵、鋁合金" },
    { label: "耐鹽霧性", value: "≥ 1000 小時" },
    { label: "乾燥時間", value: "表乾 2 小時 / 實乾 24 小時" },
    { label: "塗裝方式", value: "噴塗、刷塗、滾塗" },
    { label: "認證", value: "ABS、ClassNK、BV" },
  ],
  features: [
    "優異的防腐蝕性能",
    "強力附著力，耐衝擊",
    "低 VOC 環保配方",
    "可在低溫環境施工",
    "通過多項國際認證",
  ],
  applications: ["船體外板", "壓載艙", "貨艙", "甲板", "上層結構"],
  publishedAt: "2024-01-01",
  isPublished: true,
};

export default marineCoating;
