"use client";

import { motion } from "framer-motion";
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

export default function AffiliateCTA() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden px-7 py-16 sm:py-20">
      <motion.div
        className="relative mx-auto max-w-[980px] overflow-hidden rounded-3xl border px-7 py-[52px] text-center sm:px-10"
        style={{
          borderColor: "rgba(77,124,255,.25)",
          background:
            "linear-gradient(180deg, rgba(77,124,255,.08), rgba(255,255,255,.02))",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 560,
            height: 320,
            borderRadius: "50%",
            background: "rgba(77,124,255,.14)",
            filter: "blur(100px)",
          }}
        />

        <div className="relative">
          <h2
            className="m-0 text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.025em] text-white font-[family-name:var(--font-heading)]"
            style={{ textWrap: "balance" }}
          >
            {t.deserves.titleA} <span className="text-blue-accent">Moonbundles</span>.
            <br />
            {t.deserves.titleB} <span className="text-blue-accent">{t.deserves.rate}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-text-muted">
            {t.deserves.subtitle}
          </p>
          <div className="mt-[26px]">
            <a
              href="#"
              className="btn-shine group inline-flex items-center gap-2.5 rounded-full bg-white px-[26px] py-[14px] text-[14.5px] font-semibold text-navy-900 shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              {t.deserves.cta}
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-[3px]" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
