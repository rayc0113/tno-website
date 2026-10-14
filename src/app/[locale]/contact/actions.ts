"use server";

import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

// Resend 的 constructor 在沒有金鑰時會直接 throw。原本寫在模組最外層，
// 等於環境變數一旦沒設，整個 action 模組載入就失敗——不是表單送不出，
// 是整頁掛掉（實測畫面顯示 "This page couldn't load"）。
// 改成在 action 內部建立，並先檢查金鑰，讓它退回成一則錯誤訊息。
function createResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "tno.tw@msa.hinet.net";

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const t = await getTranslations("contact.form");

  const company = formData.get("company")?.toString().trim() ?? "";
  const name = formData.get("name")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return { success: false, message: t("fieldRequired") };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: t("invalidEmail") };
  }

  const resend = createResendClient();
  if (!resend) {
    console.error("RESEND_API_KEY is not set — 無法寄出詢問信");
    return { success: false, message: t("errorMessage") };
  }

  try {
    const { error } = await resend.emails.send({
      from: "TNO 欣展詢問表單 <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `【欣展官網詢問】${company ? `${company}・` : ""}${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0c74b5; margin-bottom: 24px;">新詢問訊息</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #7e7e7e; width: 120px;">公司名稱</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${company || "（未填寫）"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #7e7e7e;">聯絡人姓名</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #7e7e7e;">聯絡電話</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone || "（未填寫）"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #7e7e7e;">聯絡信箱</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #0c74b5;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #7e7e7e; margin-bottom: 8px;">您的訊息</p>
            <div style="background: #f7f8fa; padding: 16px; border-radius: 6px; white-space: pre-wrap;">${message}</div>
          </div>
          <p style="margin-top: 32px; font-size: 12px; color: #aaa;">此信件由 TNO 欣展官方網站詢問表單自動發送</p>
        </div>
      `,
    });

    // Resend 的 send() 不會丟出例外，API 層的失敗（金鑰無效、網域未驗證、
    // 收件人未授權、超過額度）是用回傳的 error 表示的。不檢查這裡的話，
    // 信根本沒寄出，訪客仍會看到「感謝您的詢問」。
    if (error) {
      console.error("Email send failed:", error);
      return { success: false, message: t("errorMessage") };
    }

    return { success: true, message: t("successMessage") };
  } catch (error) {
    // 走到這裡的是網路層或其他未預期的例外
    console.error("Email send error:", error);
    return { success: false, message: t("errorMessage") };
  }
}
