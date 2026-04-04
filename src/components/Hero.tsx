"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedText";

const INSTALL_URL = "https://apps.shopify.com/moonbundle";
const ease = [0.22, 1, 0.36, 1] as const;

function OrbitingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Ring 1 */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 sm:h-[400px] sm:w-[400px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-accent/50 shadow-[0_0_12px_rgba(77,124,255,0.6)]" />
        <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-violet-accent/40 shadow-[0_0_10px_rgba(124,92,255,0.5)]" />
      </motion.div>
      {/* Ring 2 */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-[220px] w-[500px] -translate-x-1/2 -translate-y-1/2 sm:h-[280px] sm:w-[650px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/4 h-1 w-1 rounded-full bg-blue-light/60 shadow-[0_0_8px_rgba(91,141,239,0.5)]" />
        <div className="absolute bottom-0 right-1/4 h-1.5 w-1.5 rounded-full bg-blue-accent/30" />
        <div className="absolute top-1/2 right-0 h-1 w-1 rounded-full bg-violet-accent/20" />
      </motion.div>
      {/* Ring 3 - elliptical */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-[180px] w-[700px] -translate-x-1/2 -translate-y-1/2 sm:h-[200px] sm:w-[900px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/3 h-0.5 w-0.5 rounded-full bg-white/30" />
        <div className="absolute bottom-0 right-1/3 h-1 w-1 rounded-full bg-blue-accent/20" />
      </motion.div>
    </div>
  );
}

function AnimatedCTAButton() {
  return (
    <a
      href={INSTALL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center"
    >
      {/* Animated glow ring */}
      <motion.div
        className="absolute -inset-1 rounded-full opacity-60"
        style={{
          background: "conic-gradient(from var(--shimmer-angle, 0deg), transparent 50%, rgba(77,124,255,0.4) 55%, rgba(124,92,255,0.4) 60%, transparent 65%)",
        }}
        animate={{
          "--shimmer-angle": ["0deg", "360deg"],
        } as Record<string, string[]>}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      {/* Pulsing outer glow */}
      <motion.div
        className="absolute -inset-3 rounded-full bg-blue-accent/10 blur-xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Button body */}
      <span className="btn-shine relative z-10 flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-navy-900 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] group-hover:scale-[1.03]">
        Installer Gratuitement sur Shopify
        <img src="/shopify.png" alt="Shopify" className="h-5 w-5 object-contain" />
      </span>
    </a>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      {/* Dot grid background */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />

      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-accent/8 blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 h-[300px] w-[400px] rounded-full bg-violet-accent/6 blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Decorative animated vertical lines (TrendTrack style) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-transparent via-blue-accent/10 to-transparent" />
        <div className="absolute top-0 bottom-0 right-[10%] w-px bg-gradient-to-b from-transparent via-violet-accent/10 to-transparent" />
        <motion.div
          className="absolute left-[10%] top-[20%] h-20 w-px bg-gradient-to-b from-blue-accent/40 to-transparent"
          animate={{ y: [0, 200, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[10%] top-[40%] h-16 w-px bg-gradient-to-b from-violet-accent/30 to-transparent"
          animate={{ y: [0, 150, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Orbiting particles around hero */}
      <OrbitingParticles />

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
            Built for Shopify · Noté 5.0/5
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
            className="max-w-4xl text-5xl leading-[1.1] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-[family-name:var(--font-heading)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {["Boostez", "votre", "AOV"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {["à", "chaque"].map((word, i) => (
              <motion.span
                key={word}
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
              étape
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease }}
        >
          L&apos;app Shopify tout-en-un pour les Bundles, Cart Upsell &amp;
          Post-Purchase. Configurez en 5 minutes. Adorée par 250+ marchands.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease }}
        >
          <AnimatedCTAButton />
          <a
            href="#features"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-text-secondary backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8"
          >
            Voir la démo
            <span className="inline-block text-xs transition-transform duration-300 group-hover:translate-x-0.5">
              ▶
            </span>
          </a>
        </motion.div>

        {/* Stats row */}
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
            <p className="mt-1 text-xs text-text-muted sm:text-sm">Marchands Actifs</p>
          </div>
          <div className="text-center">
            <AnimatedCounter
              target={250}
              suffix="+"
              className="text-2xl font-bold text-white sm:text-3xl font-[family-name:var(--font-heading)]"
            />
            <p className="mt-1 text-xs text-text-muted sm:text-sm">Avis 5 étoiles</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-white sm:text-3xl font-[family-name:var(--font-heading)]">5.0</span>
            <p className="mt-1 text-xs text-text-muted sm:text-sm">Note App Store</p>
          </div>
        </motion.div>

        {/* Screenshot placeholder with animated border */}
        <motion.div
          className="relative mt-20 w-full max-w-4xl"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
        >
          <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-b from-blue-accent/10 via-violet-accent/5 to-transparent blur-2xl animate-pulse-glow" />
          <div className="animated-border">
            <div className="relative flex h-[350px] items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 sm:h-[450px] lg:h-[500px]">
              <div className="dot-grid absolute inset-0 rounded-[1.25rem] opacity-40" />
              {/* TODO: Replace with actual app screenshot */}
              <div className="relative flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                  <span className="text-2xl">📱</span>
                </div>
                <span className="text-sm font-medium text-text-muted">
                  Capture d&apos;écran de l&apos;app
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
