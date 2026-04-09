"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInSection } from "../AnimatedText";

const ease = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    q: "Comment sont faits les paiements ?",
    a: "Les paiements sont effectués chaque mois via Mantle. Tu suis tout depuis ton dashboard affilié, avec un historique complet de tes commissions.",
  },
  {
    q: "Comment je suis mes filleuls ?",
    a: "Tu as un dashboard dédié qui track chaque inscription, chaque paiement, et tes commissions en temps réel. Tu vois exactement qui s'est inscrit, quand, et combien tu as gagné.",
  },
  {
    q: "Le code promo tracke même sans le lien affilié ?",
    a: "Oui. Si ton filleul utilise ton code promo à l'inscription (même sans cliquer sur ton lien), la commission est automatiquement attribuée à ton compte affilié.",
  },
  {
    q: "Je peux faire de la pub avec mon lien ?",
    a: "Oui, tu peux promouvoir ton lien sur tous tes canaux : réseaux sociaux, email, YouTube, blog, communautés Discord/Skool, ou même en publicité payante.",
  },
  {
    q: "C'est vraiment à vie ?",
    a: "Oui. Tant que ton filleul reste abonné à Moonbundles, tu touches ta commission chaque mois. Pas de limite dans le temps, pas de plafond de gains.",
  },
];

export default function AffiliateFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeInSection className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-accent/15 bg-blue-accent/5 px-3 py-1 text-xs font-medium text-blue-accent">
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
            Questions{" "}
            <span className="bg-gradient-to-r from-blue-accent to-violet-accent bg-clip-text text-transparent">
              fréquentes
            </span>
          </h2>
        </FadeInSection>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-white/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {faq.q}
                  </span>
                  <motion.span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-blue-accent"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="h-3.5 w-3.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-text-muted">
                        {faq.a}
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
