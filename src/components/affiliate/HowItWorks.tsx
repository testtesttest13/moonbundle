"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "../AnimatedText";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

const stepIcons = [
  (
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  (
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  (
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
];

const stepNums = ["01", "02", "03"];
const stepHighlighted = [false, true, false];

export default function HowItWorks() {
  const { t } = useTranslation();
  const steps = t.howItWorks.steps.map((s, i) => ({
    num: stepNums[i],
    title: s.title,
    desc: s.desc,
    icon: stepIcons[i],
    highlighted: stepHighlighted[i],
  }));
  return (
    <section id="how-it-works" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeInSection className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-accent/15 bg-blue-accent/5 px-3 py-1 text-xs font-medium text-blue-accent">
            {t.howItWorks.badge}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
            {t.howItWorks.titlePart1}{" "}
            <span className="bg-gradient-to-r from-blue-accent to-violet-accent bg-clip-text text-transparent">
              {t.howItWorks.titlePart2}
            </span>
          </h2>
        </FadeInSection>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className={`relative ${step.highlighted ? "animated-border" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
            >
              <div className={`glass-card relative h-full overflow-hidden p-8 ${step.highlighted ? "bg-white/[0.04]" : ""}`}>
                {/* Big number */}
                <span className="absolute right-6 top-6 text-5xl font-bold text-white/[0.05] font-[family-name:var(--font-heading)]">
                  {step.num}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-accent/15 text-blue-accent">
                  {step.icon}
                </div>

                <h3 className="relative z-10 mt-6 text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                  {step.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-text-muted">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
