"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export default function AffiliateFAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative px-7 py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1100px] items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-12 lg:gap-14">
        <div>
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-accent/25 bg-blue-accent/[0.12] px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-blue-accent">
              {t.faq.badge}
            </span>
          </div>
          <h2 className="m-0 text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-white font-[family-name:var(--font-heading)]">
            {t.faq.titleA}
            <br />
            <span className="text-blue-accent">{t.faq.titleB}</span>
          </h2>
          <p className="mt-3.5 text-[14.5px] leading-relaxed text-text-muted">
            {t.faq.subtitle}
          </p>
          <div className="mt-5">
            <a
              href="#"
              className="btn-shine group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-navy-900 shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              {t.faq.cta}
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-[3px]" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {t.faq.items.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                className="overflow-hidden rounded-2xl border transition-colors"
                style={{
                  background: isOpen ? "rgba(255,255,255,.03)" : "rgba(255,255,255,.02)",
                  borderColor: isOpen ? "rgba(77,124,255,.25)" : "rgba(255,255,255,.06)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.05, ease }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[14.5px] font-medium text-white"
                >
                  <span>{q}</span>
                  <motion.span
                    className="inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg transition-colors"
                    style={{
                      background: isOpen
                        ? "rgba(77,124,255,.12)"
                        : "rgba(255,255,255,.02)",
                      color: isOpen ? "#4d7cff" : "#94a3b8",
                    }}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      aria-hidden
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <p className="m-0 px-5 pb-[18px] text-[13.5px] leading-[1.6] text-text-muted">
                        {a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
