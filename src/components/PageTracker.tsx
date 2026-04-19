"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PATH_TO_PAGE: Record<string, string> = {
  "/": "home",
  "/affiliate": "affiliate",
  "/checklist": "checklist",
  "/native-ads-guide": "native-ads",
  "/prompts": "prompts",
  "/value-offer": "value-offer",
  "/2026": "quiz-2026",
};

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const page = PATH_TO_PAGE[pathname];
    if (!page) return;

    fetch("/api/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page }),
    }).catch(() => {});
  }, [pathname]);

  return null;
}
