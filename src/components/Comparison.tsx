"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "./AnimatedText";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

type CellValue = boolean | "separateApp" | "fiveApps" | string;

const competitorsRaw: { name: string; values: Record<string, CellValue> }[] = [
  {
    name: "FastBundle",
    values: {
      bundles: true,
      volume: true,
      cart: false,
      postPurchase: false,
      freeGifts: false,
      allInOne: false,
      rating: "4.9",
    },
  },
  {
    name: "AOV.ai",
    values: {
      bundles: true,
      volume: true,
      cart: "separateApp",
      postPurchase: "separateApp",
      freeGifts: "separateApp",
      allInOne: "fiveApps",
      rating: "5.0",
    },
  },
  {
    name: "Kaching",
    values: {
      bundles: true,
      volume: true,
      cart: false,
      postPurchase: false,
      freeGifts: true,
      allInOne: false,
      rating: "4.9",
    },
  },
];

export default function Comparison() {
  const { t } = useTranslation();

  // Resolve special string values to localized text
  const resolveValue = (val: CellValue): boolean | string => {
    if (val === "separateApp") return t.comparison.separateApp;
    if (val === "fiveApps") return t.comparison.fiveApps;
    return val;
  };

  return (
    <section id="compare" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeInSection className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/15 bg-green-400/5 px-3 py-1 text-xs font-medium text-green-400">
            {t.comparison.badge}
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
            {t.comparison.titlePart1}{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-accent bg-clip-text text-transparent">
              {t.comparison.titlePart2}
            </span>{" "}
            {t.comparison.titleEnd}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-text-muted">
            {t.comparison.subtitle}
          </p>
        </FadeInSection>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Moonbundles card - hero card */}
          <motion.div
            className="animated-border lg:row-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="relative h-full rounded-[1.25rem] bg-gradient-to-br from-blue-accent/[0.08] to-violet-accent/[0.03] p-8 sm:p-10">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-accent/40 to-transparent" />

              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-accent/15 text-sm font-bold text-blue-accent">
                  M
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">Moonbundles</h3>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-yellow-400">★</span>
                    <span className="text-text-muted">{t.comparison.reviewsCount}</span>
                  </div>
                </div>
              </div>

              <ul className="flex flex-col gap-3.5">
                {t.comparison.features.map((feat, i) => (
                  <motion.li
                    key={feat.key}
                    className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05, ease }}
                  >
                    <span className="text-sm text-text-secondary">{feat.label}</span>
                    {feat.key === "rating" ? (
                      <span className="rounded-full bg-green-400/10 px-2.5 py-0.5 text-xs font-semibold text-green-400">5.0 ★</span>
                    ) : (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400/15 text-xs text-green-400">✓</span>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-white/5 text-center">
                <span className="rounded-full bg-blue-accent/10 px-4 py-1.5 text-xs font-semibold text-blue-accent">
                  {t.comparison.allInOne}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Competitors stack */}
          <div className="flex flex-col gap-4">
            {competitorsRaw.map((comp, ci) => (
              <motion.div
                key={comp.name}
                className="glass-card p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: ci * 0.1, ease }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-text-secondary">{comp.name}</h4>
                  <span className="text-xs text-text-muted">{t.comparison.ratingLabel} {comp.values.rating as string}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {t.comparison.features.slice(0, -1).map((feat) => {
                    const rawVal = comp.values[feat.key];
                    const val = resolveValue(rawVal);
                    const isGood = val === true;
                    const isBad = val === false;
                    return (
                      <div
                        key={feat.key}
                        className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] ${
                          isGood
                            ? "bg-green-400/5 text-green-400/70"
                            : isBad
                            ? "bg-white/[0.02] text-white/20 line-through"
                            : "bg-yellow-400/5 text-yellow-400/60"
                        }`}
                      >
                        {isGood && "✓"}
                        {isBad && "✗"}
                        {typeof val === "string" && "~"}
                        {" "}{feat.label}
                        {typeof val === "string" && (
                          <span className="text-[9px] opacity-60">({val})</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
