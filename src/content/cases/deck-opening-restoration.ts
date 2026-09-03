import type { CaseProject } from "@/types/case";

/**
 * 【版面範例】機艙設備吊換的甲板開孔與復原
 *
 * ⚠️ 這一筆是 2026-09-02 為了讓珈汶檢視「案例內頁多圖編排」而建的範例，
 *    不是欣展提供的正式案例。
 *
 * 照片：沿用產品頁「開艙工程」那 6 張（三大類工程照片中數量最多的一組），
 *      每張的 caption 是依照片內容寫的「這張在拍什麼」，屬可查證的描述。
 *
 * 文案：內文敘事為我方草稿，寫作標準與產品文案一致——只講工序與工程邏輯，
 *      不寫船名、客戶、設備型號、尺寸板厚與工期數字。
 *      client / location / completedAt 三個欄位在型別上是必填，但實際值
 *      欣展還沒提供，故填「待欣展提供」而非編造。正式案例素材到位後整筆汰換。
 */
const deckOpeningRestoration: CaseProject = {
  slug: "deck-opening-restoration",
  title: "機艙設備吊換的甲板開孔與復原",
  titleEn: "Deck Opening and Restoration for Engine-Room Equipment Replacement",
  client: "待欣展提供",
  clientEn: "To be provided",
  category: "船舶維修",
  shortDescription: "在甲板上開設臨時開口吊換機艙大型設備，並以封板與加強肋復原甲板強度與水密",
  shortDescriptionEn:
    "Cutting a temporary deck opening to lift out engine-room equipment, then restoring the deck's strength and watertightness with an insert plate and stiffeners",
  description:
    "機艙裡的大型設備一旦到了必須更換的時候，最先遇到的問題往往不是設備本身，而是「它出不來」。既有的艙口與通道是為人員與零件設計的，不是為整台設備設計的。這個案子要處理的就是這件事：在甲板上開一個臨時開口讓設備進出，再把甲板恢復到原來的狀態。",
  descriptionEn:
    "When a large item of engine-room equipment finally has to be replaced, the first problem is usually not the equipment itself but the fact that it cannot get out. Existing hatches and passageways are sized for people and spare parts, not for a complete machine. That is what this project addressed: cutting a temporary opening in the deck so the equipment could pass through, and then returning the deck to its original condition.",
  coverImage: "/images/products/custom-engineering/hatch-opening-cover.webp",
  images: [
    {
      src: "/images/products/custom-engineering/hatch-opening-cover.webp",
      caption: "甲板已切出方形開口並裝上加強框，大型設備由船上吊車吊過開口上方，開口下方可見機艙內部。",
      captionEn:
        "The square opening has been cut and framed. The equipment is lifted over it by the ship's crane, with the engine room visible below.",
    },
    {
      src: "/images/products/custom-engineering/hatch-opening-1.webp",
      caption: "開口周邊的放樣與切割作業，位置須避開甲板的主要結構構件。",
      captionEn:
        "Marking out and cutting around the opening. The position has to avoid the deck's primary structural members.",
    },
    {
      src: "/images/products/custom-engineering/hatch-opening-2.webp",
      caption: "復原用的封板已銲上加強肋，正由船上吊車吊起就位。",
      captionEn:
        "The insert plate, already fitted with stiffeners, being lifted into position by the ship's crane.",
    },
    {
      src: "/images/products/custom-engineering/hatch-opening-3.webp",
      caption: "設備吊運期間的甲板作業面，法蘭盤與索具集中放置以便隨時取用。",
      captionEn:
        "The working area during the lift, with flanges and rigging laid out close at hand.",
    },
    {
      src: "/images/products/custom-engineering/hatch-opening-4.webp",
      caption: "封板就位後進行銲接復原，銲道須讓甲板恢復原有的強度與水密。",
      captionEn:
        "Welding up once the plate is seated. The welds have to restore the deck's original strength and watertightness.",
    },
    {
      src: "/images/products/custom-engineering/hatch-opening-5.webp",
      caption: "夜間施工的甲板全景，作業配合船期進行以縮短停泊時間。",
      captionEn:
        "The deck at night. The work is scheduled around the vessel's port call to keep her alongside for as little time as possible.",
    },
  ],
  services: ["甲板放樣與切割", "設備吊運配合", "封板與加強肋製作", "銲接復原", "表面處理"],
  completedAt: "2026-01-01",
  location: "待欣展提供",
  locationEn: "To be provided",
  tags: ["開艙工程", "甲板復原", "設備吊換", "夜間施工"],
  publishedAt: "2026-09-02",
  isPublished: true,
  sections: [
    {
      heading: "為什麼要開艙？",
      paragraphs: [
        "設備要換，但既有通道不夠大——這是機艙設備更換最常見的起點。硬拆通道、或把設備在艙內解體再搬出，往往比在甲板上開一個開口更費工，也更容易傷到周邊的管路與電纜。",
        "開艙的代價是甲板的連續性會被切斷。甲板是船體結構的一部分，也是水密的界面，所以「怎麼開」和「怎麼補回去」必須在同一份施工規劃裡一起決定，不能等設備出去了才想。",
      ],
    },
    {
      heading: "怎麼做？",
      paragraphs: [
        "開口位置先依甲板結構放樣，避開主要結構構件，讓補強的範圍與難度降到最低。切割前周邊設備與管路先行防護，切下的鋼板保留備用。",
      ],
      bullets: [
        "開口尺寸依設備外型決定，預留吊運時的擺盪空間",
        "封板與加強肋在切割階段同步備製，設備一出去就能接著復原",
        "銲接後施作表面處理，避免銲道成為日後的腐蝕起點",
      ],
      trailing: [
        "整段作業與船上吊車、船期安排配合，多在夜間進行，目的是把船停泊的時間壓到最短。",
      ],
    },
    {
      heading: "完工的狀態",
      paragraphs: [
        "設備換新之後，甲板恢復到看不出開過的狀態——這是這類工程的驗收標準：不只是把洞補起來，而是讓封板連同加強肋一起承擔原本那塊甲板的角色。",
        "對船東來說，真正的價值在於整件事在一個停泊週期內完成，船能按原定船期離港。",
      ],
    },
  ],
  closing: "「開艙工程的成果，是讓人看不出這裡曾經開過一個洞。」",
  closingEn:
    "\"The mark of this work is that you cannot tell the deck was ever opened.\"",
  sectionsEn: [
    {
      heading: "Why open the deck?",
      paragraphs: [
        "The equipment has to come out, but the existing route is too small — that is where most engine-room replacements begin. Dismantling the access route, or breaking the equipment down inside the compartment and carrying it out piece by piece, usually costs more labour than cutting a single opening in the deck, and puts surrounding pipework and cabling at greater risk.",
        "The price of opening the deck is that its continuity is broken. The deck is part of the hull structure and also a watertight boundary, so how it is opened and how it is closed again have to be decided together in one method statement — not worked out after the equipment is already out.",
      ],
    },
    {
      heading: "How it was done",
      paragraphs: [
        "The opening was first marked out from the deck structure so that primary members were avoided, keeping the extent and difficulty of the reinforcement to a minimum. Surrounding equipment and pipework were protected before cutting began, and the plate that was cut out was kept for reuse.",
      ],
      bullets: [
        "Opening sized around the equipment, with clearance for swing during the lift",
        "Insert plate and stiffeners prepared while cutting was under way, so closing could begin as soon as the equipment was clear",
        "Surface treatment applied after welding, so the welds do not become the starting point for corrosion",
      ],
      trailing: [
        "The whole operation was run in step with the ship's crane and her schedule, largely at night, to keep her alongside for as little time as possible.",
      ],
    },
    {
      heading: "On completion",
      paragraphs: [
        "With the new equipment in place, the deck was returned to a condition that gives no sign of having been opened. That is the acceptance standard for this kind of work: not simply filling the hole, but making the insert plate and its stiffeners take on the role of the original deck.",
        "For the owner, the value lies in the whole job being completed within a single port call, so the vessel sails on her original schedule.",
      ],
    },
  ],
};

export default deckOpeningRestoration;
