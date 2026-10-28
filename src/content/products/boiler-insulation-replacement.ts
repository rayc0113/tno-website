import type { Product } from "@/types/product";

/**
 * 船舶維修 — 船上鍋爐隔熱材更換
 *
 * 2026-10-12 依 TNO 窗口 Lucy 的產品調整清單新增。名稱沿用窗口給的原名。
 *
 * ⚠️ 與「排煙管改裝、保溫材包覆」（海軍艤裝工程）的區隔：兩支都講保溫／隔熱
 *    包覆，文案若寫得太像會讓列表看起來重複。差別在問題的起點——
 *    - 排煙管那支是**新製**：既有管段達使用年限後更換，連帶重做保溫與護皮
 *    - 這支是**汰換**：鍋爐本體沒動，劣化的是隔熱層本身（塌陷、粉化、受潮）
 *    所以此篇的第一段寫隔熱層為什麼會失效、失效後外觀看不出來，排煙管那篇
 *    則維持以管段本身的高溫與腐蝕為起點。
 *
 * 文案基準：與其他 20 支一致——規格書式的客觀陳述，第一段講系統本身（無主詞）、
 * 第二段講施工範圍與選定原則，全段不出現公司名。
 * 刻意不寫鍋爐型式、蒸汽壓力、表面溫度、隔熱材厚度與材質牌號。
 * specs 留空，詳情頁會自動隱藏規格表區塊。
 *
 * 依現場照片撰寫：
 *   cover 施工中的鍋爐區——鋁箔面隔熱毯已有破損塌陷，閥件處套有白色軟質護套，
 *         右側為帶固定釘的爐體護皮
 *   -1    兩名人員更換礦纖毯，開口內可見已劣化發黑的舊材；上方人員配戴防護
 *         頭罩（拆除舊隔熱材會產生大量纖維粉塵）
 *   -2    新鋪設的鋁箔面隔熱毯與軟質護套
 *   -3    以電動起子固定金屬護皮鈑件
 *   -4    完工狀態——護皮鈑件已收邊，圓形貫穿處另行收口
 */
const boilerInsulationReplacement: Product = {
  slug: "boiler-insulation-replacement",
  name: "船上鍋爐隔熱材更換",
  nameEn: "Shipboard Boiler Insulation Replacement",
  category: "船舶維修",
  shortDescription: "既有鍋爐隔熱層的拆除與汰換，金屬護皮重做、閥件改用可拆式護套——塌陷看不出來，表面溫度會說實話",
  shortDescriptionEn:
    "Boiler insulation stripped out and renewed, with new metal cladding and removable jackets at the valves — slumped insulation shows nothing from outside, but the surface temperature tells",
  description:
    "鍋爐外壁的隔熱層同時承擔三件事：把表面溫度降到人員不致燙傷的範圍、減少熱往艙間散失，以及保護周邊的管路與電纜。這層材料長期承受熱循環與船體振動，又可能因洩漏的水氣而受潮，久了會塌陷、粉化或鬆脫。一旦局部塌陷，該處就形成熱橋，表面溫度跟著升高——但從外面的護皮看過去，外觀上不一定看得出來。\n\n" +
    "更換範圍涵蓋既有隔熱材的拆除、爐壁狀況檢視、新隔熱材的鋪設與固定，以及外覆金屬護皮的裁切、成形與收邊。人孔、閥件與量測點等需要定期拆裝的部位改用可拆式軟質護套，避免每次維護都得破壞護皮。拆除舊材會產生大量纖維粉塵，作業人員全程配戴防護頭罩與口罩，周邊設備先行覆蓋。隔熱材的種類與厚度依該部位的表面溫度與艙間規範選定，但真正決定成效的是鋪設時的貼合與固定——日後那些從外面看不出來的塌陷，是在施工當下就決定的。",
  descriptionEn:
    "The insulation on a boiler's outer casing does three things at once: it brings the surface temperature down to where it will not burn anyone, it keeps heat from being lost into the compartment, and it shields the pipework and cabling around it. That material spends its life under thermal cycling and the vibration of the hull, and may take on moisture from a leak, so in time it slumps, breaks down, or works loose. Where it slumps, a thermal bridge forms and the surface temperature over that spot rises — yet from outside the cladding there may be nothing to see.\n\n" +
    "The work covers stripping out the existing insulation, inspecting the casing beneath, laying and securing the new material, and cutting, forming and finishing the metal cladding over it. Manholes, valves and measuring points — anything that has to come apart regularly — are given removable soft jackets instead, so the cladding need not be broken open at every service. Stripping old material releases a great deal of fibre dust, so protective hoods and masks are worn throughout and the surrounding equipment is covered beforehand. Insulation type and thickness are selected according to the surface temperature at each location and the applicable shipboard requirements — but what decides the result is how closely the material is fitted and how well it is held: the slump nobody can see from outside begins on the day it is installed.",
  coverImage: "/images/products/ship-maintenance/boiler-insulation-replacement-cover.webp",
  images: [
    "/images/products/ship-maintenance/boiler-insulation-replacement-cover.webp",
    "/images/products/ship-maintenance/boiler-insulation-replacement-1.webp",
    "/images/products/ship-maintenance/boiler-insulation-replacement-2.webp",
    "/images/products/ship-maintenance/boiler-insulation-replacement-3.webp",
    "/images/products/ship-maintenance/boiler-insulation-replacement-4.webp",
  ],
  specs: [],
  features: [
    "既有隔熱材拆除後先檢視爐壁狀況，再鋪設新材",
    "外覆金屬護皮裁切成形並收邊，貫穿處另行收口",
    "人孔、閥件與量測點改用可拆式軟質護套，維護時不必破壞護皮",
    "拆除作業全程防護纖維粉塵，周邊設備先行覆蓋",
  ],
  featuresEn: [
    "Casing inspected once the old insulation is out, before the new material goes on",
    "Metal cladding cut, formed and finished, with penetrations closed off separately",
    "Removable soft jackets at manholes, valves and measuring points, so the cladding survives each service",
    "Fibre dust controlled throughout the strip-out, with surrounding equipment covered first",
  ],
  applications: [
    "船上鍋爐既有隔熱層的汰換",
    "隔熱材塌陷造成表面溫度升高的改善",
    "高溫設備護皮的重做與收邊",
  ],
  applicationsEn: [
    "Renewal of existing insulation on shipboard boilers",
    "Addressing hot spots caused by slumped insulation",
    "Re-cladding and finishing of hot equipment",
  ],
  publishedAt: "2026-10-12",
  isPublished: true,
};

export default boilerInsulationReplacement;
