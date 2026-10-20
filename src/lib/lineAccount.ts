/**
 * LINE 官方帳號
 *
 * 原本寫在 contact/page.tsx 裡，2026-10-16 footer 也要放 QR Code
 * （TNO 團隊驗收回饋：希望不用進到聯絡我們才看得到），抽出來共用。
 *
 * QR 圖供桌機掃碼，url 供行動裝置直接點擊加好友——手機沒辦法掃自己
 * 螢幕上的 QR，所以兩者都要有，QR 本身也要是可點的連結。
 * 圖用 lossless webp 保留黑白邊緣，避免有損壓縮影響掃描辨識。
 * ⚠️ 兩處的 <Image> 都要帶 unoptimized——Next.js 的圖片最佳化預設會以
 *    quality=75 重新編碼，等於把上面那個 lossless 的用意抵銷掉。原檔
 *    540×540、只有 15KB，直接原樣送出沒有任何代價。
 *
 * qrImage 設為 null 可讓聯絡頁與 footer 的 QR 區塊一起隱藏。
 *
 * 註：/contact 會同時出現兩個 QR（頁面中段的 LINE 區塊 + footer），
 *    2026-10-20 珈汶決定「就重複吧」——footer 本來就每頁都有，不是 bug，
 *    不用再提出來改。
 */
export const LINE_ACCOUNT: { qrImage: string | null; id: string; url: string } = {
  qrImage: "/images/common/line-qr.webp",
  id: "@252zcdqr",
  url: "https://line.me/R/ti/p/@252zcdqr",
};
