"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "./AnimatedText";

const cards = [
  {
    icon: "📦",
    title: "Page Produit",
    subtitle: "Convertissez les visiteurs en acheteurs",
    features: [
      "Bundles Fixes",
      "Remises Volume",
      "Mix & Match",
      "BOGO",
      "Paliers de Quantité",
    ],
    gradient: "from-blue-accent/10 to-blue-accent/[0.02]",
    glowColor: "rgba(77, 124, 255, 0.08)",
    highlighted: false,
  },
  {
    icon: "🛒",
    title: "Cart Drawer",
    subtitle: "Maximisez chaque panier",
    features: [
      "Upsell Panier",
      "Cross-sell",
      "Cadeau Gratuit",
      "Barre de Progression",
      "Codes Promo",
    ],
    gradient: "from-violet-accent/10 to-violet-accent/[0.02]",
    glowColor: "rgba(124, 92, 255, 0.08)",
    highlighted: true,
  },
  {
    icon: "🎯",
    title: "Post-Achat",
    subtitle: "Captez la dernière opportunité",
    features: [
      "Upsell One-Click",
      "Page de Remerciement",
      "Offres Statut Commande",
    ],
    gradient: "from-blue-light/10 to-blue-light/[0.02]",
    glowColor: "rgba(91, 141, 239, 0.08)",
    highlighted: false,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function FunnelSection() {
  return (
    <section id="features" className="relative px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-accent/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl">
        <FadeInSection className="mb-20 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-accent/15 bg-blue-accent/5 px-3 py-1 text-xs font-medium text-blue-accent">
            Funnel AOV
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
            Une seule app.{" "}
            <span className="bg-gradient-to-r from-blue-accent to-violet-accent bg-clip-text text-transparent">
              Chaque point de contact.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-text-muted">
            Moonbundles couvre l&apos;intégralité de votre funnel AOV — de la page produit au post-achat.
          </p>
        </FadeInSection>

        {/* Funnel line */}
        <div className="relative mb-12 hidden items-center justify-center md:flex">
          <motion.div
            className="h-px w-full max-w-3xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(77,124,255,0.3), rgba(124,92,255,0.3), rgba(91,141,239,0.3))",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          />
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute h-3 w-3 rounded-full border-2 border-blue-accent/40 bg-navy-900"
              style={{ left: `${i * 50}%` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.15, ease }}
            />
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`group relative ${card.highlighted ? "animated-border" : ""}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
            >
              <div
                className={`glass-card relative flex h-full flex-col p-8 ${
                  card.highlighted ? "bg-white/[0.04] border-white/10" : ""
                }`}
              >
                <div
                  className="pointer-events-none absolute -inset-px rounded-[1.25rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${card.glowColor}, transparent 60%)`,
                  }}
                />

                {card.highlighted && (
                  <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-accent/50 to-transparent" />
                )}

                <div className="relative z-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl">
                    {card.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-muted">{card.subtitle}</p>

                  <ul className="mt-6 flex flex-col gap-3">
                    {card.features.map((feat, fi) => (
                      <motion.li
                        key={feat}
                        className="flex items-center gap-2.5 text-sm text-text-secondary"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + fi * 0.06, ease }}
                      >
                        <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-blue-accent/60" />
                        {feat}
                      </motion.li>
                    ))}
                  </ul>

                  <div className={`gradient-line mt-8 flex h-44 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient}`}>
                    {/* TODO: Remplacer par une vraie capture */}
                    <span className="text-xs text-text-muted/60">Capture d&apos;écran</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
