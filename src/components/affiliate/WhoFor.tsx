"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "../AnimatedText";

const ease = [0.22, 1, 0.36, 1] as const;

const personas = [
  {
    title: "Créateurs de contenu",
    desc: "Tu crées du contenu autour du e-commerce, des ads ou de Shopify ? Parle de Moonbundles dans tes vidéos et gagne des commissions à vie sur chaque abonné.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Coachs & formateurs",
    desc: "Tu accompagnes des e-commerçants ? Recommande Moonbundles dans tes formations et gagne 40% récurrent sur chaque inscription.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "E-commerçants",
    desc: "Tu utilises déjà Moonbundles ? Partage ce qui marche pour toi avec ton réseau et sois payé chaque mois.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: "Communautés Ecom",
    desc: "Tu gères un Discord, un groupe Skool ou un Telegram ? Intègre Moonbundles dans ta stack d'outils recommandés et transforme ton influence en revenu récurrent.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function WhoFor() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeInSection className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-accent/15 bg-violet-accent/5 px-3 py-1 text-xs font-medium text-violet-accent">
            Pour qui ?
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
            Le programme Moonbundles est fait{" "}
            <span className="bg-gradient-to-r from-violet-accent to-blue-accent bg-clip-text text-transparent">
              pour toi si...
            </span>
          </h2>
        </FadeInSection>

        <div className="grid gap-5 md:grid-cols-2">
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass-card group relative p-7 transition-transform duration-300 hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-accent/15 text-blue-accent">
                {p.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
