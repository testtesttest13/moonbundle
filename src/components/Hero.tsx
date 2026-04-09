"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedText";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const INSTALL_URL = "https://apps.shopify.com/moonbundle";
const ease = [0.22, 1, 0.36, 1] as const;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

const showcaseImages = [
  { src: "/fixed-bundle.png", alt: "Product Bundles", rotate: -8, mobileRotate: -5, x: -220, mx: -70, y: 20, my: 10, z: 1, floatDelay: 0 },
  { src: "/cart-drawer.webp", alt: "Cart Drawer", rotate: 0, mobileRotate: 0, x: 0, mx: 0, y: -10, my: -5, z: 3, floatDelay: 0.5 },
  { src: "/one-click-upsell.webp", alt: "Post-Purchase", rotate: 8, mobileRotate: 5, x: 220, mx: 70, y: 20, my: 10, z: 2, floatDelay: 1 },
];

export default function Hero() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  // Headline: 6 words, last one (étape/step) gets the gradient
  const headlineWords = t.hero.headline;
  const firstLine = headlineWords.slice(0, 3); // Boostez votre AOV / Boost your AOV
  const secondLineStart = headlineWords.slice(3, 5); // à chaque / at every
  const lastWord = headlineWords[5]; // étape / step
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      {/* Dot grid */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />

      {/* Animated gradient orbs - CSS animations for perf */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-accent/8 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 h-[300px] w-[400px] rounded-full bg-violet-accent/6 blur-[100px] animate-pulse-glow [animation-delay:2s]" />
      </div>

      {/* Decorative lines */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-transparent via-blue-accent/10 to-transparent" />
        <div className="absolute top-0 bottom-0 right-[10%] w-px bg-gradient-to-b from-transparent via-violet-accent/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8"
        >
          <span className="badge-glow inline-flex items-center gap-2 rounded-full border border-blue-accent/20 bg-blue-accent/5 px-4 py-1.5 text-xs font-medium text-blue-accent backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-accent" />
            </span>
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="max-w-4xl text-5xl leading-[1.1] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-[family-name:var(--font-heading)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {firstLine.map((word, i) => (
            <motion.span
              key={`l1-${i}`}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
            >
              {word}
            </motion.span>
          ))}
          <br />
          {secondLineStart.map((word, i) => (
            <motion.span
              key={`l2-${i}`}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.08, ease }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            className="inline-block bg-gradient-to-r from-blue-accent via-violet-accent to-blue-light bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
          >
            {lastWord}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease }}
        >
          <a
            href={INSTALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center"
          >
            {/* Pulsing glow */}
            <div className="absolute -inset-3 rounded-full bg-blue-accent/10 blur-xl animate-pulse-glow" />
            <span className="btn-shine relative z-10 flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-navy-900 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] group-hover:scale-[1.03]">
              {t.hero.ctaPrimary}
              <img src="/shopify.png" alt="Shopify" className="h-5 w-5 object-contain" />
            </span>
          </a>
          <a
            href="#features"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-text-secondary backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8"
          >
            {t.hero.ctaSecondary}
            <span className="inline-block text-xs transition-transform duration-300 group-hover:translate-x-0.5">
              ▶
            </span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-8 sm:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease }}
        >
          <div className="text-center">
            <AnimatedCounter
              target={1200}
              suffix="+"
              className="text-2xl font-bold text-white sm:text-3xl font-[family-name:var(--font-heading)]"
            />
            <p className="mt-1 text-xs text-text-muted sm:text-sm">{t.hero.stats.merchants}</p>
          </div>
          <div className="text-center">
            <AnimatedCounter
              target={250}
              suffix="+"
              className="text-2xl font-bold text-white sm:text-3xl font-[family-name:var(--font-heading)]"
            />
            <p className="mt-1 text-xs text-text-muted sm:text-sm">{t.hero.stats.reviews}</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-white sm:text-3xl font-[family-name:var(--font-heading)]">5.0</span>
            <p className="mt-1 text-xs text-text-muted sm:text-sm">{t.hero.stats.rating}</p>
          </div>
        </motion.div>

        {/* 3 images en éventail — stacked on mobile, fanned on desktop */}
        <div className="relative mt-16 w-full max-w-5xl sm:mt-20">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-72 w-[600px] rounded-full bg-blue-accent/8 blur-[100px] animate-pulse-glow" />
          </div>

          {/* Fanned layout — responsive sizes */}
          <div className="relative flex h-[280px] items-center justify-center sm:h-[420px] lg:h-[460px]">
            {showcaseImages.map((img, i) => {
              const targetX = isMobile ? img.mx : img.x;
              const targetY = isMobile ? img.my : img.y;
              const targetRotate = isMobile ? img.mobileRotate : img.rotate;
              return (
                <motion.div
                  key={img.src}
                  className="absolute w-[165px] sm:w-[250px] lg:w-[300px] will-change-transform cursor-pointer"
                  style={{ zIndex: img.z }}
                  initial={{ opacity: 0, x: 0, y: 80, rotate: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    x: targetX,
                    y: targetY,
                    rotate: targetRotate,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.0 + i * 0.15,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  whileHover={{
                    scale: 1.08,
                    zIndex: 10,
                    rotate: 0,
                    y: targetY - 15,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
                  }}
                >
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-navy-800 shadow-[0_12px_40px_rgba(0,0,0,0.4)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_30px_80px_rgba(77,124,255,0.15)] hover:border-white/20">
                    <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
