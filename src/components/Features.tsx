"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "./AnimatedText";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

const featureMeta = [
  {
    image: "/fixed-bundle.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    highlighted: false,
  },
  {
    image: "/quantity-breaks.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    highlighted: false,
  },
  {
    image: "/cart-drawer.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    highlighted: true,
  },
  {
    image: "/bundle.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
      </svg>
    ),
    highlighted: false,
  },
  {
    image: "/one-click-upsell.webp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    highlighted: false,
  },
  {
    image: "/progress-gift.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
    highlighted: false,
  },
];

export default function Features() {
  const { t } = useTranslation();
  const features = featureMeta.map((meta, i) => ({
    ...meta,
    title: t.features.cards[i].title,
    tagline: t.features.cards[i].tagline,
  }));

  return (
    <section id="features" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeInSection className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-accent/15 bg-violet-accent/5 px-3 py-1 text-xs font-medium text-violet-accent">
            {t.features.badge}
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
            {t.features.titlePart1}{" "}
            <span className="bg-gradient-to-r from-violet-accent to-blue-accent bg-clip-text text-transparent">
              {t.features.titlePart2}
            </span>
          </h2>
        </FadeInSection>

        {/* Clean grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              className={`relative ${feat.highlighted ? "animated-border" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <div
                className={`glass-card group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 ${
                  feat.highlighted ? "bg-white/[0.04]" : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-accent/15 text-blue-accent">
                  {feat.icon}
                </div>

                {/* Title + tagline */}
                <h3 className="mt-5 text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                  {feat.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{feat.tagline}</p>

                {/* Image */}
                <div className="mt-6 overflow-hidden rounded-xl border border-white/5 bg-navy-800/50">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="block w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
