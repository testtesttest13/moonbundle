"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import type { Language } from "@/lib/i18n/translations";

const ease = [0.22, 1, 0.36, 1] as const;

type AnswerKey = "revenue" | "market" | "ads";
type Answers = Record<AnswerKey, string>;

function formatMoney(n: number) {
  if (!Number.isFinite(n) || n <= 0) return "0";
  const rounded = Math.round(n * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
}

function FrFlag() {
  return (
    <svg viewBox="0 0 60 40" className="h-full w-full">
      <rect width="20" height="40" fill="#0055A4" />
      <rect x="20" width="20" height="40" fill="#FFFFFF" />
      <rect x="40" width="20" height="40" fill="#EF4135" />
    </svg>
  );
}

function EnFlag() {
  return (
    <svg viewBox="0 0 60 30" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <clipPath id="uk-onboard">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-onboard)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function OnboardingModal({ onComplete }: { onComplete: () => void }) {
  const { t, lang, setLang } = useTranslation();
  const tr = t.valueOffer.onboarding;

  // step 0: lang, 1: revenue, 2: market, 3: ads, 4: aov, 5: done
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ revenue: "", market: "", ads: "" });
  const [aov, setAov] = useState("");
  const aovNum = Math.max(0, parseFloat(aov.replace(",", ".")) || 0);
  const projected = aovNum * 1.5;
  const gain = projected - aovNum;

  // Lock page scroll while modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Send answers when reaching "done" (step 5)
  useEffect(() => {
    if (step !== 5) return;
    if (!answers.revenue || !answers.market || !answers.ads) return;
    fetch("/api/onboarding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...answers, aov: aovNum, page: "value-offer" }),
    }).catch(() => {});
  }, [step, answers, aovNum]);

  const pickLang = (l: Language) => {
    setLang(l);
    setStep(1);
  };

  const pickAnswer = (key: AnswerKey, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((s) => s + 1);
  };

  const goBack = () => setStep((s) => Math.max(0, s - 1));

  const finish = () => onComplete();

  // Progress: 5 steps with dots (lang + 4), step 5 = done (no dot)
  const totalSteps = 5;
  const currentDot = Math.min(step, totalSteps - 1);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease }}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-900/90 backdrop-blur-md" />

      {/* Card */}
      <motion.div
        className="relative w-full max-w-lg"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-blue-accent/15 blur-2xl animate-pulse-glow" />

        <div className="animated-border">
          <div className="relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 p-6 sm:p-8">
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />

            <div className="relative z-10">
              {/* Progress dots (hide on done) */}
              {step < 5 && (
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentDot
                            ? "w-6 bg-blue-accent"
                            : i < currentDot
                              ? "w-1.5 bg-blue-accent/60"
                              : "w-1.5 bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  {step > 0 && (
                    <button
                      onClick={goBack}
                      className="text-[11px] font-medium text-text-muted transition-colors hover:text-white"
                    >
                      ← {tr.back}
                    </button>
                  )}
                </div>
              )}

              {/* Step content */}
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="lang"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease }}
                    className="text-center"
                  >
                    <span className="badge-glow inline-flex rounded-full border border-blue-accent/20 bg-blue-accent/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-accent">
                      {tr.langWelcome}
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl font-[family-name:var(--font-heading)]">
                      {tr.langTitle}
                    </h2>
                    <p className="mt-2 text-sm text-text-muted">{tr.langSubtitle}</p>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {(
                        [
                          { code: "fr" as const, name: "Français", flag: <FrFlag /> },
                          { code: "en" as const, name: "English", flag: <EnFlag /> },
                        ]
                      ).map((l) => (
                        <motion.button
                          key={l.code}
                          onClick={() => pickLang(l.code)}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-blue-accent/40 hover:bg-white/[0.06]"
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <div className="mx-auto h-14 w-20 overflow-hidden rounded-md border border-white/10 shadow-lg">
                            {l.flag}
                          </div>
                          <p className="mt-3 text-base font-bold text-white font-[family-name:var(--font-heading)]">
                            {l.name}
                          </p>
                        </motion.button>
                      ))}
                    </div>

                    <p className="mt-6 text-[11px] text-text-muted/60">{tr.privacy}</p>
                  </motion.div>
                )}

                {step === 1 && (
                  <StepQcm
                    key="revenue"
                    counter={`${tr.stepLabel} 1/4`}
                    title={tr.revenueTitle}
                    subtitle={tr.revenueSubtitle}
                    options={tr.revenueOptions}
                    onPick={(v) => pickAnswer("revenue", v)}
                  />
                )}

                {step === 2 && (
                  <StepQcm
                    key="market"
                    counter={`${tr.stepLabel} 2/4`}
                    title={tr.marketTitle}
                    subtitle={tr.marketSubtitle}
                    options={tr.marketOptions}
                    onPick={(v) => pickAnswer("market", v)}
                    twoColsOnMobile
                  />
                )}

                {step === 3 && (
                  <StepQcm
                    key="ads"
                    counter={`${tr.stepLabel} 3/4`}
                    title={tr.adsTitle}
                    subtitle={tr.adsSubtitle}
                    options={tr.adsOptions}
                    onPick={(v) => pickAnswer("ads", v)}
                  />
                )}

                {step === 4 && (
                  <motion.div
                    key="aov"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
                      {tr.stepLabel} 4/4
                    </p>
                    <h2 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl font-[family-name:var(--font-heading)]">
                      {tr.aovTitle}
                    </h2>
                    <p className="mt-1.5 text-sm text-text-muted">{tr.aovSubtitle}</p>

                    <div className="relative mt-5">
                      <input
                        autoFocus
                        type="text"
                        inputMode="decimal"
                        value={aov}
                        onChange={(e) => setAov(e.target.value.replace(/[^0-9.,]/g, ""))}
                        placeholder={tr.aovPlaceholder}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && aovNum > 0) setStep(5);
                        }}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-2xl font-bold text-white placeholder:text-text-muted/30 outline-none transition-all focus:border-blue-accent/50 focus:bg-white/[0.06] sm:text-3xl font-[family-name:var(--font-heading)]"
                      />
                      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-sm font-semibold text-text-muted">
                        {tr.aovInputSuffix}
                      </span>
                    </div>
                    <p className="mt-2 text-[11px] text-text-muted/60">{tr.aovHint}</p>

                    {/* Live projection */}
                    <motion.div
                      className="mt-5 overflow-hidden rounded-xl border border-blue-accent/25 bg-gradient-to-br from-blue-accent/[0.08] to-violet-accent/[0.04] p-4 sm:p-5"
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: aovNum > 0 ? 1 : 0.4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-text-muted">
                            {tr.aovCurrentLabel}
                          </p>
                          <p className="mt-1 text-2xl font-bold text-white font-[family-name:var(--font-heading)] tabular-nums">
                            {tr.aovInputSuffix}{formatMoney(aovNum)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-wider text-blue-accent">
                            <span className="rounded bg-blue-accent/15 px-1.5 py-0.5 text-[9px] font-bold">
                              {tr.aovBadge}
                            </span>
                            {tr.aovProjectedLabel}
                          </p>
                          <p className="mt-1 bg-gradient-to-r from-blue-accent to-violet-accent bg-clip-text text-2xl font-bold text-transparent font-[family-name:var(--font-heading)] tabular-nums">
                            {tr.aovInputSuffix}{formatMoney(projected)}
                          </p>
                        </div>
                      </div>
                      {aovNum > 0 && (
                        <motion.div
                          className="mt-3 flex items-center justify-between border-t border-white/5 pt-3"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <span className="text-[11px] text-text-muted">{tr.aovGainLabel}</span>
                          <span className="text-sm font-bold text-green-400 tabular-nums">
                            +{tr.aovInputSuffix}{formatMoney(gain)}
                          </span>
                        </motion.div>
                      )}
                    </motion.div>

                    <button
                      onClick={() => setStep(5)}
                      disabled={aovNum <= 0}
                      className="btn-shine mt-5 flex w-full items-center justify-center gap-2.5 rounded-xl bg-blue-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-light hover:shadow-[0_0_30px_rgba(77,124,255,0.25)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-blue-accent disabled:hover:shadow-none"
                    >
                      <span className="relative z-10">{tr.aovContinue}</span>
                      <ArrowIcon />
                    </button>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="text-center"
                  >
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-accent/15 text-blue-accent">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl font-[family-name:var(--font-heading)]">
                      {tr.doneTitle}
                    </h2>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
                      {tr.doneSubtitle}
                    </p>

                    {aovNum > 0 && (
                      <motion.div
                        className="mt-5 rounded-xl border border-blue-accent/30 bg-gradient-to-br from-blue-accent/[0.12] to-violet-accent/[0.05] p-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-accent">
                          {tr.doneProjectionLabel}
                        </p>
                        <div className="mt-2 flex items-baseline justify-center gap-3 font-[family-name:var(--font-heading)]">
                          <span className="text-xl font-bold text-text-muted line-through tabular-nums">
                            {tr.aovInputSuffix}{formatMoney(aovNum)}
                          </span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-accent">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                          <span className="bg-gradient-to-r from-blue-accent to-violet-accent bg-clip-text text-3xl font-bold text-transparent tabular-nums">
                            {tr.aovInputSuffix}{formatMoney(projected)}
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] text-green-400">
                          +{tr.aovInputSuffix}{formatMoney(gain)} · {tr.aovGainLabel}
                        </p>
                      </motion.div>
                    )}

                    <button
                      onClick={finish}
                      className="btn-shine mt-6 inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
                    >
                      <span className="relative z-10">{tr.doneCta}</span>
                      <ArrowIcon />
                    </button>

                    <p className="mt-5 text-[11px] text-text-muted/60">
                      {lang === "fr" ? "Calibré pour :" : "Calibrated for:"}{" "}
                      {labelFor(tr.revenueOptions, answers.revenue)} ·{" "}
                      {labelFor(tr.marketOptions, answers.market)} ·{" "}
                      {labelFor(tr.adsOptions, answers.ads)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function labelFor(options: { key: string; label: string }[], key: string) {
  return options.find((o) => o.key === key)?.label ?? key;
}

function StepQcm({
  counter,
  title,
  subtitle,
  options,
  onPick,
  twoColsOnMobile = false,
}: {
  counter: string;
  title: string;
  subtitle: string;
  options: { key: string; label: string }[];
  onPick: (key: string) => void;
  twoColsOnMobile?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
        {counter}
      </p>
      <h2 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl font-[family-name:var(--font-heading)]">
        {title}
      </h2>
      <p className="mt-1.5 text-sm text-text-muted">{subtitle}</p>

      <div
        className={`mt-6 grid gap-2.5 ${
          twoColsOnMobile ? "grid-cols-2" : "grid-cols-1"
        } sm:grid-cols-2`}
      >
        {options.map((opt) => (
          <motion.button
            key={opt.key}
            onClick={() => onPick(opt.key)}
            className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-left text-sm font-medium text-text-secondary transition-all duration-200 hover:border-blue-accent/40 hover:bg-white/[0.06] hover:text-white"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{opt.label}</span>
            <span className="text-blue-accent/40 transition-colors duration-200 group-hover:text-blue-accent">
              →
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
