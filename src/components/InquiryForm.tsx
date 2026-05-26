"use client";

import { useActionState, useEffect, useRef } from "react";
import type { Locale } from "@/lib/i18n";
import { sendInquiry, type InquiryState } from "@/app/actions/sendInquiry";

const initialState: InquiryState = { status: "idle" };

export default function InquiryForm({ lang }: { lang: Locale }) {
  const isZh = lang === "zh";
  const [state, formAction, isPending] = useActionState(
    sendInquiry,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form fields on success
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  // ── Success card ──────────────────────────────────────────────────────────
  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 shadow-xl shadow-neutral-950/5 md:p-10 flex flex-col items-center text-center gap-4">
        {/* Checkmark icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-neutral-950">
          {isZh ? "询盘已发送！" : "Inquiry Sent!"}
        </h3>
        <p className="max-w-sm text-neutral-600 leading-relaxed">
          {isZh
            ? "感谢您的询盘！我们的销售团队将在 1 个工作日内与您联系。"
            : "Thank you for reaching out! Our sales team will get back to you within 1 business day."}
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-2 rounded-full border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950"
        >
          {isZh ? "再次发送" : "Send Another Inquiry"}
        </button>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <form
      ref={formRef}
      action={formAction}
      className="rounded-lg border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-950/5 md:p-8"
    >
      <h3 className="text-2xl font-semibold text-neutral-950">
        {isZh ? "发送询盘" : "Send an Inquiry"}
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Full Name */}
        <label className="text-sm font-medium text-neutral-600">
          {isZh ? "姓名 *" : "Full Name *"}
          <input
            name="name"
            required
            className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-600"
            placeholder={isZh ? "您的姓名" : "Your name"}
          />
        </label>

        {/* Company */}
        <label className="text-sm font-medium text-neutral-600">
          {isZh ? "公司名称" : "Company"}
          <input
            name="company"
            className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-600"
            placeholder={isZh ? "公司名称" : "Company name"}
          />
        </label>

        {/* Phone */}
        <label className="text-sm font-medium text-neutral-600">
          {isZh ? "联系电话 *" : "Phone *"}
          <input
            name="phone"
            required
            type="tel"
            className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-600"
            placeholder="+86 / +1 ..."
          />
        </label>

        {/* Email */}
        <label className="text-sm font-medium text-neutral-600">
          {isZh ? "电子邮箱 *" : "Email *"}
          <input
            name="email"
            required
            type="email"
            className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-600"
            placeholder="name@company.com"
          />
        </label>

        {/* Inquiry Type */}
        <label className="text-sm font-medium text-neutral-600 sm:col-span-2">
          {isZh ? "询问类型" : "Inquiry Type"}
          <select
            name="inquiryType"
            className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-600"
          >
            <option>{isZh ? "产品采购" : "Product procurement"}</option>
            <option>{isZh ? "经销合作" : "Dealership partnership"}</option>
            <option>OEM / ODM</option>
          </select>
        </label>

        {/* Message */}
        <label className="text-sm font-medium text-neutral-600 sm:col-span-2">
          {isZh ? "需求描述" : "Message"}
          <textarea
            name="message"
            className="mt-2 min-h-32 w-full rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-600"
            placeholder={
              isZh
                ? "请描述您的产品需求、数量、目标市场等..."
                : "Please describe your product requirements, quantity, target market, etc."
            }
          />
        </label>
      </div>

      {/* Error message */}
      {state.status === "error" && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <svg
            className="mt-0.5 h-4 w-4 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <span>{state.message}</span>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isPending}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? (
          <>
            {/* Spinner */}
            <svg
              className="h-4 w-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            {isZh ? "发送中…" : "Sending…"}
          </>
        ) : isZh ? (
          "提交询盘"
        ) : (
          "Submit Inquiry"
        )}
      </button>
    </form>
  );
}
