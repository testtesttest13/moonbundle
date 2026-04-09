"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "./AnimatedText";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const featureMeta = [
  { image: "/fixed-bundle.png", rotate: -3, offsetY: 0 },
  { image: "/quantity-breaks.png", rotate: 2, offsetY: 30 },
  { image: "/cart-drawer.webp", rotate: -1.5, offsetY: -10 },
  { image: "/bundle.webp", rotate: 3, offsetY: 20 },
  { image: "/one-click-upsell.webp", rotate: -2.5, offsetY: -15 },
  { image: "/progress-gift.png", rotate: 2, offsetY: 10 },
];

const ease = [0.22, 1, 0.36, 1] as const;

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
        <FadeInSection className="mb-14 text-center sm:mb-20">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-accent/15 bg-violet-accent/5 px-3 py-1 text-xs font-medium text-violet-accent">
            {t.features.badge}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
            {t.features.titlePart1}{" "}
            <span className="bg-gradient-to-r from-violet-accent to-blue-accent bg-clip-text text-transparent">
              {t.features.titlePart2}
            </span>
          </h2>
        </FadeInSection>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              className="group relative"
              style={{ marginTop: `${feat.offsetY}px` }}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: feat.rotate,
              }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.34, 1.56, 0.64, 1] as const,
              }}
              whileHover={{
                rotate: 0,
                scale: 1.04,
                transition: { duration: 0.3, ease },
              }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_16px_60px_rgba(77,124,255,0.1)]">
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="block w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="mt-4 px-1">
                <h3 className="text-base font-bold text-white sm:text-lg font-[family-name:var(--font-heading)]">
                  {feat.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  {feat.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
