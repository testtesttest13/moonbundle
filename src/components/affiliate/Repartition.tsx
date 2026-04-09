"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "../AnimatedText";

const ease = [0.22, 1, 0.36, 1] as const;

const splits = [
  {
    title: "Tu gardes tout",
    description: "40% pour toi",
    subtext: "L'option par défaut. Simple et direct.",
    segments: [{ pct: 100, color: "from-blue-accent to-blue-light", label: "Toi" }],
  },
  {
    title: "Réseau de sous-affiliés",
    description: "30% pour toi · 10% sous-affiliés",
    subtext: "Crée ton propre réseau d'ambassadeurs.",
    segments: [
      { pct: 75, color: "from-blue-accent to-blue-light", label: "Toi" },
      { pct: 25, color: "from-violet-accent to-violet-accent/60", label: "Sous-affiliés" },
    ],
    highlighted: true,
  },
  {
    title: "Partenariat 50/50",
    description: "20% pour toi · 20% partenaire",
    subtext: "Splitte avec un collaborateur.",
    segments: [
      { pct: 50, color: "from-blue-accent to-blue-light", label: "Toi" },
      { pct: 50, color: "from-violet-accent to-violet-accent/60", label: "Partenaire" },
    ],
  },
];

export default function Repartition() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeInSection className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-accent/15 bg-blue-accent/5 px-3 py-1 text-xs font-medium text-blue-accent">
            Flexibilité
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
            Répartis tes 40%{" "}
            <span className="bg-gradient-to-r from-blue-accent to-violet-accent bg-clip-text text-transparent">
              comme tu veux
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-text-muted sm:text-base">
            C&apos;est toi qui décides comment ta commission est partagée.
          </p>
        </FadeInSection>

        <div className="grid gap-5 md:grid-cols-3">
          {splits.map((split, i) => (
            <motion.div
              key={split.title}
              className={`relative ${split.highlighted ? "animated-border" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <div className={`glass-card flex h-full flex-col p-7 ${split.highlighted ? "bg-white/[0.04]" : ""}`}>
                <h3 className="text-base font-bold text-white font-[family-name:var(--font-heading)]">
                  {split.title}
                </h3>
                <p className="mt-1 text-xs text-text-muted">{split.subtext}</p>

                {/* Visual progress bar with segments */}
                <div className="mt-6 flex h-3 overflow-hidden rounded-full border border-white/5 bg-white/[0.02]">
                  {split.segments.map((seg, si) => (
                    <motion.div
                      key={si}
                      className={`h-full bg-gradient-to-r ${seg.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${seg.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1 + si * 0.15, ease }}
                    />
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {split.segments.map((seg, si) => (
                    <div key={si} className="flex items-center gap-1.5 text-[11px] text-text-muted">
                      <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${seg.color}`} />
                      {seg.label} ({seg.pct}%)
                    </div>
                  ))}
                </div>

                <p className="mt-auto pt-6 text-sm font-semibold text-blue-accent">
                  {split.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-text-muted">
          Configurable depuis ton dashboard Mantle.
        </p>
      </div>
    </section>
  );
}
