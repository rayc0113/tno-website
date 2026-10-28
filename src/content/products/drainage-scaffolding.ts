import type { Product } from "@/types/product";

/**
 * 船舶維修 — 排水管修改及鷹架搭建工程
 *
 * 2026-10-12 依 TNO 窗口 Lucy 的產品調整清單，從「客製化工程」改列「船舶維修」
 * （欣展提供的原始資料夾是 D 系列，分類以窗口的歸類為準）。照片一併移至
 * public/images/products/ship-maintenance/。
 *
 * 文案基準（2026-09-02 撰寫）：
 * 採規格書式的客觀陳述——第一段講產品本身（無主詞）、第二段講施工範圍與
 * 選定原則，全段不出現公司名（2026-09-07 依珈汶要求移除原本的「欣展可依…
 * 歡迎來電洽詢」收句——每支都掛同一句像罐頭文字），只針對功能與工序描述。
 * 刻意不寫管徑、鷹架層數高度與艙室尺寸。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * 依現場照片撰寫：大型艙室內搭起三至四層可移動式鷹架（腳輪、踏板、爬梯、
 * 扶手橫桿），工人於鷹架上切割艙頂既有管路。鷹架搭建與排水管修改是同一
 * 個案子的兩個階段——鷹架是讓高處管路施工得以進行的前置作業。
 */
const drainageScaffolding: Product = {
  slug: "drainage-scaffolding",
  name: "排水管修改、鷹架搭建",
  nameEn: "Drainage Pipe Modification & Scaffolding",
  category: "船舶維修",
  shortDescription: "艙內既有排水管路的改接施作，連同作業鷹架搭設——管路在艙頂，所以第一件事是把人送上去",
  shortDescriptionEn:
    "Existing compartment drainage pipework altered and reconnected, with the working scaffolding to reach it — the runs are at the deckhead, so the access goes up first",
  description:
    "要改艙頂的管路，第一件事不是動管路，是先把人送上去。艙內排水管路多配置於艙頂與艙壁高處，地面構不著，必須先搭設作業平台。而既有管路的切割拆除會產生高溫與火花——作業高度的安全與周邊設備的防護，和管路本身的施工同等重要。\n\n" +
    "施工範圍涵蓋作業鷹架的搭設與拆除、既有管路切割拆除，以及新管路的製作與銲接改接。鷹架採可移動式框架搭配踏板與扶手，依艙高分層搭設。管徑、走向與坡度依排水需求與既有結構設計。鷹架不會出現在完工照片裡，但上面那些工序做不做得完，是它決定的。",
  descriptionEn:
    "Altering pipework at the deckhead does not begin with the pipework; it begins with getting people up to it. Drainage runs in a compartment are usually high along the deckhead and bulkheads, out of reach from floor level, so a working platform goes up first. Cutting and removing the existing runs generates heat and sparks — which makes safety at height and the protection of surrounding equipment as much a part of the job as the pipework itself.\n\n" +
    "The scope of work covers erection and removal of the working scaffolding, cutting and removal of existing pipework, and fabrication and welding of the new runs. The scaffolding uses mobile frames with platforms and guardrails, built up in tiers to suit the compartment height. Pipe sizes, routing and fall follow from the drainage requirements and the existing structure. Scaffolding never appears in the completion photographs, but whether the work above it can be finished is decided by it.",
  coverImage: "/images/products/ship-maintenance/drainage-scaffolding-cover.webp",
  images: [
    "/images/products/ship-maintenance/drainage-scaffolding-cover.webp",
    "/images/products/ship-maintenance/drainage-scaffolding-1.webp",
    "/images/products/ship-maintenance/drainage-scaffolding-2.webp",
    "/images/products/ship-maintenance/drainage-scaffolding-3.webp",
    "/images/products/ship-maintenance/drainage-scaffolding-4.webp",
  ],
  specs: [],
  features: [
    "鷹架採可移動式框架，依艙高分層搭設並配置踏板與扶手",
    "切割作業於鷹架平台上進行，周邊設備先行防護",
    "新舊管路以銲接改接，維持既有走向與坡度",
  ],
  featuresEn: [
    "Mobile scaffold frames built up in tiers to suit compartment height, with platforms and guardrails",
    "Cutting carried out from the scaffold platform, with surrounding equipment protected beforehand",
    "New pipework welded into the existing run, keeping the original routing and fall",
  ],
  applications: [
    "艙內既有排水管路的改接與延伸",
    "高處管路的檢修與更換",
    "艙內施工的作業平台搭設",
  ],
  applicationsEn: [
    "Altering and extending existing drainage pipework in compartments",
    "Inspection and replacement of pipework at height",
    "Erecting working platforms for work inside compartments",
  ],
  publishedAt: "2026-07-24",
  isPublished: true,
};

export default drainageScaffolding;
