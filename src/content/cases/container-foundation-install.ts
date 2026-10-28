import type { CaseProject } from "@/types/case";

/**
 * 貨櫃基座的廠內試裝與甲板安裝
 *
 * 【第七筆依 TNO 正式工單撰寫的案例】2026-10-22
 *
 * 素材來源：窗口 Lucy 提供的「【完工報告】貨櫃基座安裝(斜線符號)H BAR」PDF（2 頁）。
 * 報告原文：
 *   購案編號 1150048　工程名稱「東方建設者號貨櫃基座安裝工程」
 *   地點 台中港 43 號碼頭　驗收日期 2026/09/11　結果「合格」
 *   115/09/03 委託
 *   09/04     材料進廠
 *   09/09     完成組裝測試塗裝並裝車
 *   09/10     人員及機具進場
 *   09/11     完成
 *   報告分段：1 材料進廠　2 貨櫃基座廠內組裝測試塗裝並裝車　3 基座安裝作業
 *             4 基座完成定位、安裝及銲後檢驗　5 檢驗報告如附件
 *
 * 敘事選擇：七筆下來主軸不能重複。風管與船台是「廠內做完、壓縮現場工期」，
 * 設備平台是「分階段上船」，測量桿是「會動的東西先讓它動一次」。這筆的
 * 特點是**介面完全沒有調整餘地**——貨櫃角件的間距是固定的，扭鎖座對不上
 * 就不能用，不能墊也不能敲。報告第 2 段寫的是「組裝**測試**塗裝」，照片
 * 裡是廠內天車吊一只真的 20 呎櫃（FCIU 487742 5 / 22G1）試裝，那就是全篇
 * 的核心動作。整案九天，甲板上只用了兩天，是這個動作換來的結果。
 *
 * ⚠️ 待確認（已傳給窗口，未回覆前一律不具名）：
 *   1. client：報告寫明驗收方為「東方風能科技股份有限公司」。這是六份報告
 *      裡第一份把客戶寫明的，但全站目前是不具名政策（風管案 client 整個留空、
 *      測量桿案連泊位都砍掉），所以這裡也先留空，等窗口回覆可否具名。
 *   2. 船名：報告的工程名稱含「東方建設者號」，同上，先不寫。
 *   3. 泊位：報告寫「台中港 43 號碼頭」，依既有標準只保留「台中港」。
 *
 * ⚠️ 照片沿用產品頁同一組（2026-10-22 Ray 指示「沿用就好」）。完工報告內另有
 *    19 張涵蓋材料進廠、廠內施銲、裝車、夜間甲板安裝與銲後檢驗，但 PDF 內嵌
 *    圖僅約 350×510，放到 720px 版面會糊。材料進廠那組（角件、三角肋板、
 *    H 型鋼原料）與夜間安裝那組才是本篇敘事真正需要的，已併入向窗口索取
 *    原始檔的清單。
 *
 * ⚠️ 刻意不寫：梁長、櫃位數量、鋼材牌號、塗裝規範、扭鎖座型號。
 *    報告未載，照片也量不出來。
 */
const containerFoundationInstall: CaseProject = {
  slug: "container-foundation-install",
  title: "貨櫃基座的廠內試裝與甲板安裝",
  titleEn: "Container Foundations, Trial-Fitted Ashore and Welded on Deck",
  // 【待確認】見檔頭第 1、2 點——報告載明客戶與船名，但依現行不具名政策先留空
  // client: "",
  // clientEn: "",
  category: "船舶改裝",
  shortDescription:
    "委託到驗收九天，甲板上只用了最後兩天——因為出廠前已經用一只真的貨櫃把位置試過",
  shortDescriptionEn:
    "Nine days from order to acceptance, only the last two of them on deck — because the setting out had already been proved against a real container",
  description:
    "有些尺寸可以到現場再修，這個不行。\n\n" +
    "貨櫃四個角的角件間距是固定的，基座上的扭鎖座對得上就是對得上，對不上就不能用——不能墊、不能敲、不能將就一下。而偏差不一定來自放樣：鋼材被銲過之後會自己走位。所以這個案子真正要解決的問題是，怎麼在東西離開工廠之前，就確定它對得上。",
  descriptionEn:
    "Some dimensions can be adjusted on site. These cannot.\n\n" +
    "The spacing of a container's four corner castings is fixed. Either the twist-lock sockets on the foundation line up with them or the foundation is of no use — it cannot be packed, persuaded or made do with. And the error need not come from the setting out: steel moves once it has been welded. So the real problem in this job was how to know, before anything left the workshop, that it would line up.",
  coverImage: "/images/products/custom-engineering/container-foundation-cover.webp",
  images: [
    {
      src: "/images/products/custom-engineering/container-foundation-1.webp",
      caption:
        "廠內試裝：20 呎貨櫃由天車吊起，準備落在已組立完成的基座上；地面另有數條待組的 H 型鋼梁。",
      captionEn:
        "The trial fit in the workshop: a twenty-foot container on the overhead crane, about to be lowered onto the completed foundation, with further sections waiting on the floor.",
    },
    {
      src: "/images/products/custom-engineering/container-foundation-cover.webp",
      caption:
        "貨櫃下放到位，底部角件正落在 H 梁上翼板的扭鎖座；基座兩側以三角肋板支撐。",
      captionEn:
        "The container down on its seat, the bottom corner casting landing on the twist-lock socket on the top flange, the section braced each side by its gussets.",
    },
    {
      src: "/images/products/custom-engineering/container-foundation-2.webp",
      caption:
        "甲板上的基座端部：三角肋板與甲板的銲接處已補漆收邊，上翼板可見成對的扭鎖座。",
      captionEn:
        "The end of the foundation on deck, the gusset-to-deck welds made good and painted, with paired twist-lock sockets along the top flange.",
    },
    {
      src: "/images/products/custom-engineering/container-foundation-3.webp",
      caption:
        "基座縱貫整個貨物甲板，肋板沿梁身等距配置；甲板上另有既設的單體扭鎖座。",
      captionEn:
        "The foundation running the length of the cargo deck, gussets spaced evenly along it, with existing single twist-lock fittings set in the deck alongside.",
    },
    {
      src: "/images/products/custom-engineering/container-foundation-4.webp",
      caption:
        "自基座另一端回望，遠處為住艙與舷邊結構；銲後的甲板收邊漆已完成。",
      captionEn:
        "Looking back along the foundation from the other end, the accommodation and bulwark beyond, the deck made good and coated after welding.",
    },
    {
      src: "/images/products/custom-engineering/container-foundation-5.webp",
      caption:
        "住艙外側的基座，扭鎖座成對排列；右側為施工中的塗裝材料與覆蓋物，背景為台中港。",
      captionEn:
        "The foundation outboard of the accommodation, its sockets in pairs; coating materials and covers to the right, the Port of Taichung beyond.",
    },
  ],
  // 註：services 目前全站沒有任何頁面渲染（保留欄位）
  services: ["構件下料與加工", "扭鎖座定位銲接", "廠內組裝與試裝測試", "塗裝", "現場吊裝與甲板銲接", "銲後檢驗"],
  completedAt: "2026-09-11",
  // 報告原文為「台中港 43 號碼頭」，泊位刻意不寫
  location: "台中港",
  locationEn: "Port of Taichung",
  tags: ["貨櫃基座", "扭鎖座", "H型鋼", "廠內試裝", "甲板銲接", "銲後檢驗"],
  publishedAt: "2026-10-22",
  isPublished: true,
  sections: [
    {
      heading: "一個沒有調整餘地的介面",
      paragraphs: [
        "貨櫃不是放在甲板上，是鎖在甲板上。受力的只有底部四個角的角件，扭鎖穿過角件的孔、轉九十度卡住，貨櫃才算固定。",
        "麻煩在於角件的位置不是我們能決定的——它屬於貨櫃，是固定的。基座上的扭鎖座必須長在對應的位置上，差幾公釐，扭鎖就轉不進去。而這種時候沒有補救辦法：鋼製的角件不會讓步，貨櫃也不能挑一只間距剛好的來用。",
        "更麻煩的是，就算放樣是對的，銲接的熱仍然會讓鋼材收縮、讓梁身彎翹。也就是說，扭鎖座銲上去的那一刻位置是對的，不代表銲完之後還是對的。",
      ],
    },
    {
      heading: "在廠裡吊一只真的櫃子上去",
      paragraphs: [
        "九月三日委託，隔天材料就進廠——H 型鋼、三角肋板、扭鎖座與墊板。接著是梁體下料、扭鎖座依櫃位定位銲接、肋板組立。",
        "然後是這個案子最關鍵的一道工序：把廠裡的 20 呎櫃用天車吊起來，直接放到做好的基座上。",
      ],
      bullets: [
        "用實櫃驗證，而不是用尺量——對不對得上，扭鎖轉不轉得動，當場就知道",
        "銲接變形之後才測試，測的是成品的狀態而不是圖面的狀態",
        "有問題在廠裡改，廠裡有天車、有電源、有空間，也沒有船在等",
      ],
      trailing: [
        "九月九日完成組裝、測試、塗裝並裝車。從材料進廠算起是五天，全部在岸上。",
      ],
    },
    {
      heading: "甲板上的兩天",
      paragraphs: [
        "九月十日人員與機具進場，基座吊上甲板、依櫃位放樣定位、與甲板銲接固定。隔日完成定位、安裝與銲後檢驗，檢驗報告隨工程附上，驗收結果為合格。",
        "甲板上要做的，是把一個已經確認對得上的東西銲到正確的位置——而不是在船上一邊量一邊猜。前者需要兩天，後者需要多久沒有人說得準，因為那取決於第一次試鎖的結果。",
        "整案九天，船只讓出其中兩天。差別不在工班手腳快，在於那只櫃子是在工廠裡吊的，不是在甲板上。",
      ],
    },
  ],
  sectionsEn: [
    {
      heading: "An interface with no give in it",
      paragraphs: [
        "A container is not set down on a deck; it is locked to it. Everything is carried by the four castings at its bottom corners: the twist-lock passes through the aperture, turns ninety degrees, and only then is the container secured.",
        "The difficulty is that the positions of those castings are not ours to choose. They belong to the container, and they are fixed. The sockets on the foundation have to stand in exactly the corresponding places, and a few millimetres out is enough to stop a lock turning home. At that point there is no remedy: the castings will not yield, and one cannot go looking for a container whose spacing happens to suit.",
        "Worse, setting out correctly is not the end of it. The heat of welding shrinks steel and bows a section. The sockets being right at the moment they are welded on is no guarantee that they are still right once the welding is finished.",
      ],
    },
    {
      heading: "Lifting a real container onto it in the shop",
      paragraphs: [
        "The order came on 3 September and the material arrived the following day — H-section, gussets, twist-lock sockets and packing plates. Cutting followed, then the sockets set out and welded to the container positions, and the gussets assembled.",
        "Then came the operation this job turned on: a twenty-foot container was lifted on the shop crane and lowered straight onto the finished foundation.",
      ],
      bullets: [
        "Proved against a real container rather than a tape measure — whether it lines up, and whether the locks turn, is answered on the spot",
        "Tested after welding distortion, so what was checked was the finished article and not the drawing",
        "Anything wrong put right in the shop, where there is a crane, power, room to work — and no ship waiting",
      ],
      trailing: [
        "Assembly, testing, coating and loading out were complete on 9 September: five days from the material arriving, all of them ashore.",
      ],
    },
    {
      heading: "Two days on deck",
      paragraphs: [
        "The crew and their gear went aboard on 10 September. The foundations were lifted onto the deck, set out to the container positions and welded down. The following day saw positioning, installation and post-weld inspection completed, the inspection report supplied with the job, and the work passed.",
        "What was done on deck was the welding down of something already known to fit — not measuring and guessing in place. The first takes two days. How long the second takes, nobody can say, because it depends on what happens the first time somebody tries to turn a lock.",
        "Nine days for the job, two of them asked of the vessel. The difference is not that the gang worked faster, but that the container was lifted in the workshop rather than on the deck.",
      ],
    },
  ],
};

export default containerFoundationInstall;
