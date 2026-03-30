"use client";

import { useActionState, useState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const fields = [
  { id: "company", name: "company", label: "公司名稱", type: "text" },
  { id: "name",    name: "name",    label: "聯絡人姓名", type: "text" },
  { id: "phone",   name: "phone",   label: "聯絡電話",   type: "tel" },
  { id: "email",   name: "email",   label: "聯絡信箱",   type: "email" },
] as const;

function inputClass(hasError: boolean) {
  return [
    "w-full border rounded-md px-4 py-3 text-sm text-title focus:outline-none transition-colors duration-200 bg-white",
    hasError
      ? "border-red-500 focus:border-red-500"
      : "border-[#d0d9e8] focus:border-brand",
  ].join(" ");
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    null
  );

  // Track which fields have been blurred and are empty
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (!e.target.value.trim()) {
      setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    } else {
      setTouched((prev) => ({ ...prev, [e.target.name]: false }));
    }
  }

  return (
    <form action={formAction} className="space-y-5">
      {fields.map(({ id, name, label, type }) => (
        <div key={id}>
          <label htmlFor={id} className="block text-sm font-medium text-title mb-1.5">
            {label} <span className="text-red-500">*</span>
          </label>
          <input
            type={type}
            id={id}
            name={name}
            required
            onBlur={handleBlur}
            className={inputClass(!!touched[name])}
          />
          {touched[name] && (
            <p className="mt-1 text-xs text-red-500">必填</p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-title mb-1.5">
          您的訊息 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          onBlur={handleBlur}
          className={`${inputClass(!!touched["message"])} resize-none`}
        />
        {touched["message"] && (
          <p className="mt-1 text-xs text-red-500">必填</p>
        )}
      </div>

      {state && (
        <div
          className={`rounded-md px-4 py-3 text-sm ${
            state.success
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-brand hover:bg-brand-hover disabled:opacity-60 text-white font-medium py-3 rounded-md transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
      >
        {isPending ? "傳送中…" : "提交"}
      </button>
    </form>
  );
}
