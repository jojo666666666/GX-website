"use client";

import type { Locale } from "@/lib/i18n";

export default function InquiryForm({ lang }: { lang: Locale }) {
  const isZh = lang === "zh";

  return (
    <form className="rounded-lg border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-950/5 md:p-8">
      <h3 className="text-2xl font-semibold text-neutral-950">{isZh ? "发送询盘" : "Send an Inquiry"}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-neutral-600">
          {isZh ? "姓名 *" : "Full Name *"}
          <input className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-600" placeholder={isZh ? "您的姓名" : "Your name"} />
        </label>
        <label className="text-sm font-medium text-neutral-600">
          {isZh ? "公司名称" : "Company"}
          <input className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-600" placeholder={isZh ? "公司名称" : "Company name"} />
        </label>
        <label className="text-sm font-medium text-neutral-600">
          {isZh ? "联系电话 *" : "Phone *"}
          <input className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-600" placeholder="+86 / +1 ..." />
        </label>
        <label className="text-sm font-medium text-neutral-600">
          {isZh ? "电子邮箱 *" : "Email *"}
          <input className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-600" placeholder="name@company.com" />
        </label>
        <label className="text-sm font-medium text-neutral-600 sm:col-span-2">
          {isZh ? "询问类型" : "Inquiry Type"}
          <select className="mt-2 w-full rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-600">
            <option>{isZh ? "产品采购" : "Product procurement"}</option>
            <option>{isZh ? "经销合作" : "Dealership partnership"}</option>
            <option>OEM / ODM</option>
          </select>
        </label>
        <label className="text-sm font-medium text-neutral-600 sm:col-span-2">
          {isZh ? "需求描述" : "Message"}
          <textarea className="mt-2 min-h-32 w-full rounded-lg border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-600" />
        </label>
      </div>
      <button type="button" className="mt-6 w-full rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700">
        {isZh ? "提交询盘" : "Submit Inquiry"}
      </button>
    </form>
  );
}
