"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "raychen0113@gmail.com";

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const company = formData.get("company")?.toString().trim() ?? "";
  const name = formData.get("name")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return { success: false, message: "請填寫必填欄位（聯絡人姓名、信箱、訊息）。" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "請輸入有效的電子信箱格式。" };
  }

  try {
    await resend.emails.send({
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

    return { success: true, message: "感謝您的詢問！我們將於工作日 24 小時內回覆。" };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, message: "訊息傳送失敗，請稍後再試或直接來電聯繫。" };
  }
}
