"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "./AnimatedText";

const reviews = [
  {
    text: "Très intuitif, le fait que l'app regroupe le cart et les upsells est incroyable.",
    author: "Marchand Shopify",
    flag: "🇫🇷",
    highlight: false,
  },
  {
    text: "Moon Bundles is absolutely worth every penny. Easy to use, works smoothly with Shopify.",
    author: "Marchand Shopify",
    flag: "🇬🇧",
    highlight: true,
  },
  {
    text: "Un must-have franchement !! L'interface est hyper simple d'utilisation, le rendu est hyper qualitatif.",
    author: "Marchand Shopify",
    flag: "🇫🇷",
    highlight: false,
  },
  {
    text: "Great team and great product. Setting up the bundles is intuitive with many good options.",
    author: "Marchand Shopify",
    flag: "🇺🇸",
    highlight: false,
  },
  {
    text: "L'application est vraiment plus complète que toutes les autres du marché.",
    author: "Marchand Shopify",
    flag: "🇫🇷",
    highlight: true,
  },
  {
    text: "Support is quick, responsive, and professional, often resolving issues swiftly, even on weekends.",
    author: "Marchand Shopify",
    flag: "🇺🇸",
    highlight: false,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  return (
    <section id="reviews" className="relative px-6 py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-violet-accent/5 blur-[150px]" aria-hidden="true" />

      <div className="mx-auto max-w-6xl">
        <FadeInSection className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/15 bg-yellow-400/5 px-3 py-1 text-xs font-medium text-yellow-400">
            ★ Note 5.0/5
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
            Adorée par les marchands{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              du monde entier
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-text-muted">
            Notée 5.0/5 sur le Shopify App Store avec 250+ avis.
          </p>
        </FadeInSection>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="mb-5 break-inside-avoid"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <div
                className={`glass-card group relative p-6 ${
                  review.highlight ? "animated-border" : ""
                }`}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <motion.span
                      key={si}
                      className="text-sm text-yellow-400"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + i * 0.08 + si * 0.04,
                        ease: [0.34, 1.35, 0.64, 1] as const,
                      }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  &laquo; {review.text} &raquo;
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm">
                    {review.flag}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-secondary">
                      {review.author}
                    </p>
                    <p className="text-[10px] text-text-muted">Marchand Shopify Vérifié</p>
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
