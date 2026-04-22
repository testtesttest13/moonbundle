"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeInSection } from "../AnimatedText";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;
const MAX = 40;

function SplitBar({
  label,
  pct,
  color,
}: {
  label: string;
  pct: number;
  color: string;
}) {
  const w = (pct / MAX) * 100;
  return (
    <div>
      <div
        className="mb-1.5 flex items-baseline justify-between"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-text-muted">
          {label}
        </span>
        <span className="text-sm font-bold text-white font-[family-name:var(--font-heading)]">
          {pct}%
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={{ width: `${w}%` }}
          transition={{ duration: 0.45, ease }}
        />
      </div>
    </div>
  );
}

export default function Repartition() {
  const { t } = useTranslation();
  const [active, setActive] = useState(1);
  const scenarios = t.split.scenarios;

  return (
    <section className="relative px-7 py-20 sm:py-24">
      <div className="relative mx-auto max-w-[1080px]">
        <FadeInSection className="mb-10 text-center sm:mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-accent/25 bg-blue-accent/[0.12] px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-blue-accent">
              {t.split.badge}
            </span>
          </div>
          <h2
            className="m-0 text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.05] tracking-[-0.025em] text-white font-[family-name:var(--font-heading)]"
            style={{ textWrap: "balance" }}
          >
            {t.split.titleA} <span className="text-blue-accent">{t.split.titleB}</span>
          </h2>
          <p className="mx-auto mt-3.5 max-w-[520px] text-[15.5px] leading-relaxed text-text-muted">
            {t.split.subtitle}
          </p>
        </FadeInSection>

        <div className="grid gap-3.5 md:grid-cols-3">
          {scenarios.map((s, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`glass-card text-left p-6 transition-all ${
                  isActive ? "-translate-y-0.5 bg-white/[0.04]" : ""
                }`}
                style={
                  isActive
                    ? {
                        borderColor: "rgba(77,124,255,.25)",
                        background:
                          "linear-gradient(180deg, rgba(77,124,255,.08), rgba(255,255,255,.02))",
                        boxShadow: "0 16px 40px rgba(77,124,255,.18)",
                      }
                    : undefined
                }
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <div
                  className={`mb-3.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] ${
                    isActive ? "text-blue-accent" : "text-text-muted"
                  }`}
                >
                  {t.split.scenarioLabel} {i + 1}
                </div>
                <div className="mb-4 text-[17px] font-bold leading-snug text-white font-[family-name:var(--font-heading)]">
                  {s.label}
                </div>

                <div className="flex flex-col gap-2.5">
                  <SplitBar label={t.split.you} pct={s.you} color="#4d7cff" />
                  <SplitBar label={t.split.subs} pct={s.subs} color="#7c5cff" />
                </div>

                <div className="mt-4 border-t border-white/[0.06] pt-3.5 text-[12.5px] leading-relaxed text-text-muted">
                  {s.desc}
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-6 rounded-xl border border-white/[0.06] bg-navy-900/50 px-4 py-3.5 text-center text-[13px] leading-relaxed text-text-muted">
          {t.split.footerA}{" "}
          <span className="font-semibold text-white">{t.split.footerPct}</span>{" "}
          {t.split.footerB}
        </div>
      </div>
    </section>
  );
}
