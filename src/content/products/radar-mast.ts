import type { Product } from "@/types/product";

/**
 * 客製化工程（D 系列）— D-雷達桅桿
 *
 * 2026-10-12 依 TNO 窗口 Lucy 的產品調整清單新增，分類照她的歸類放在客製化工程。
 *
 * 文案基準：與其他 17 支一致——規格書式的客觀陳述，第一段講工項本身（無主詞）、
 * 第二段講施工範圍與設計原則，全段不出現公司名。
 * 刻意不寫桅高、管徑、平台層數、材質與搭載的設備型號。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * ⚠️ 與「燈塔座」的區隔：兩支都是塔架類、都有爬梯護籠與設備安裝座，文案若寫得
 *    太像會讓列表看起來重複。此篇刻意把重點放在燈具塔架沒有的那一點——桅體的
 *    變形與晃動會直接反映在雷達與天線的指向上，剛性要求因此不同；外加多層
 *    作業平台（燈塔座是單柱）。燈塔座那篇的重點則是風壓、斜撐與甲板固定。
 *
 * ⚠️ 不寫搭載設備的細節：照片看得到雷達天線架、航行燈具與鞭狀天線，但設備型號、
 *    用途與所屬船舶一律不寫，與彈藥庫改裝、設備平台的處理標準一致。
 *
 * 依現場照片撰寫：白色塗裝的管構桁架桅桿，分層設置格柵作業平台與管狀欄杆，
 * 爬梯全程配置安全護籠，桅體各處伸出安裝座搭載圓筒狀燈具，另有鞭狀天線與
 * 後方紅色的雷達天線架。照片兩張皆為完工狀態的仰角全景。
 */
const radarMast: Product = {
  slug: "radar-mast",
  name: "雷達桅桿",
  nameEn: "Radar Mast",
  category: "客製化工程",
  shortDescription: "搭載雷達、天線與航行燈號的桁架桅桿，含分層作業平台與安全護籠爬梯",
  shortDescriptionEn:
    "Truss masts carrying radar, antennas and navigation lights, with working platforms at each level and a caged access ladder",
  description:
    "雷達、通訊天線與航行燈號必須架設在不受上層結構遮蔽的高度，桅桿因此同時是結構件，也是設備的載台。它承受高處的風壓與航行中的振動，而桅體本身的變形與晃動會直接反映在雷達與天線的指向上——這使得桅桿的剛性要求，比單純用來支撐重量的塔架更高。\n\n" +
    "桅體以管件組成桁架並配置斜撐，在兼顧剛性的同時控制受風面積；各層設置作業平台與欄杆，讓設備能就近檢修，爬梯則全程配置安全護籠。設備安裝座的位置須一併考量各設備之間的遮蔽與相互干擾，並預留維護時的操作空間。桅體尺寸、平台層數與安裝座配置須依設備組成與船艛結構設計。",
  descriptionEn:
    "Radar, communications antennas and navigation lights have to stand clear of the superstructure, which makes a mast both a structural member and a mounting platform. It takes wind load at height and vibration underway, and any deflection or sway in the mast itself shows up directly in where the radar and antennas are pointing — so a mast is held to a higher standard of stiffness than a tower that merely carries weight.\n\n" +
    "The mast is built up as a braced tubular truss, stiff enough while keeping the area presented to the wind in check. Working platforms and guardrails at each level put the equipment within reach for maintenance, and the access ladder is caged for its full height. Mounting positions are set with an eye to how the equipment items shadow and interfere with one another, and to leaving room to work during servicing. Mast dimensions, the number of platform levels and the arrangement of the mountings are designed around the equipment fit and the structure of the deckhouse below.",
  coverImage: "/images/products/custom-engineering/radar-mast-cover.webp",
  images: [
    "/images/products/custom-engineering/radar-mast-cover.webp",
    "/images/products/custom-engineering/radar-mast-1.webp",
  ],
  specs: [],
  features: [
    "管構桁架配置斜撐，兼顧剛性與受風面積",
    "分層設置格柵作業平台與欄杆，設備可就近檢修",
    "爬梯全程配置安全護籠",
    "安裝座位置考量設備之間的遮蔽與相互干擾",
    "鋼構表面施作防蝕處理",
  ],
  featuresEn: [
    "Braced tubular truss, stiff while keeping the area presented to the wind in check",
    "Grated working platforms and guardrails at each level, putting equipment within reach",
    "Access ladder caged for its full height",
    "Mounting positions set to limit shadowing and interference between equipment",
    "Steelwork given corrosion protection",
  ],
  applications: [
    "雷達與通訊天線的桅桿新製",
    "航行燈號與號誌設備的架設",
    "既有桅桿的汰換與設備增設",
  ],
  applicationsEn: [
    "New masts for radar and communications antennas",
    "Mounting of navigation lights and signalling equipment",
    "Replacement of existing masts and addition of further equipment",
  ],
  publishedAt: "2026-10-12",
  isPublished: true,
};

export default radarMast;
