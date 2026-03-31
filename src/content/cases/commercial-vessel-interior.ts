import type { CaseProject } from "@/types/case";

const commercialVesselInterior: CaseProject = {
  slug: "commercial-vessel-interior",
  title: "艙室空間優化：讓航行更舒適的秘密",
  client: "XX 航運股份有限公司",
  category: "船艙內裝",
  shortDescription: "完整的船員起居與操作空間解決方案，打造舒適與高效的工作環境。",
  description:
    "在長途航行中，艙室的舒適度往往被忽略，但它卻直接影響著船員的休息品質與工作效率。這次，我們接到一個挑戰——如何在有限工期內，改善船員艙室的隔熱與隔音問題，讓長時間待在船上的他們，也能擁有安靜、舒適的生活空間。",
  coverImage: "/images/home/case_bg2.png",
  images: [
    "/images/cases/commercial-vessel-interior-1.jpg",
    "/images/cases/commercial-vessel-interior-2.jpg",
    "/images/cases/commercial-vessel-interior-3.jpg",
  ],
  sections: [
    {
      heading: "為什麼要改造？",
      paragraphs: [
        "過去的艙室因為隔熱材老化，加上長時間使用，房間裡常出現悶熱與噪音問題。",
        "船員反映「睡眠品質不好」、「休息時間總是被干擾」，這些問題不僅影響日常生活，也可能對長途航行的專注力造成隱憂。",
      ],
    },
    {
      heading: "我們怎麼做？",
      paragraphs: [
        "為了解決這些挑戰，我們重新設計了艙室牆面與天花板的隔熱結構：",
      ],
      bullets: [
        "採用了高效能的玻璃棉與 PU 板，強化隔熱效果。",
        "增加隔音層，降低外部噪音，讓休息時更加安靜。",
        "使用模組化施工方式，在保證品質的同時，也縮短了安裝工期。",
      ],
      trailing: [
        "這些做法，不僅提升了施工效率，也避免了因船隻停工而造成的額外成本。",
      ],
    },
    {
      heading: "帶來的改變",
      paragraphs: [
        "工程完成後，船員的第一個反饋就是：「房間變得更安靜也更涼快了！」",
        "實際測量數據也證實了這些改變：",
      ],
      bullets: [
        "平均艙室溫度降低 2–3°C",
        "噪音值下降 10 dB",
        "工期縮短 15%，比預期快完成",
      ],
      trailing: [
        "對船員來說，這不只是環境改善，更是生活品質的提升。",
        "而對船東來說，這樣的改造也意味著更長遠的效益——減少能源消耗、延長材料壽命，以及更高效的航行運營。",
      ],
    },
  ],
  closing: "「這不只是一次艙室翻新，而是我們對船員舒適與航行效率的承諾。」",
  services: ["隔間系統安裝", "船員艙房翻新", "防火天花板施工", "地板材料更換", "燈光系統升級"],
  completedAt: "2023-10-01",
  location: "A 品牌船型艙室",
  tags: ["商業貨輪", "船艙內裝", "船員宿舍", "SOLAS認證"],
  publishedAt: "2023-11-01",
  isPublished: true,
};

export default commercialVesselInterior;
