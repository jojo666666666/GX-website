"use client";

import { useSearchParams } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import type { Locale } from "@/lib/i18n";

export default function HomeInquiryForm({ lang }: { lang: Locale }) {
  const searchParams = useSearchParams();
  const requestedInquiry = searchParams.get("inquiry");
  const inquiryType =
    requestedInquiry === "dealer" || requestedInquiry === "oem"
      ? requestedInquiry
      : "product";

  return (
    <InquiryForm
      key={inquiryType}
      lang={lang}
      defaultInquiryType={inquiryType}
    />
  );
}
