"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SocialProof() {
  const logos = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section className="relative py-14 overflow-hidden">
      <div className="section-divider" />

      <motion.p
        className="mb-10 text-center text-xs font-medium tracking-[0.2em] text-text-muted uppercase"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        Utilisé par 1 200+ marchands Shopify dans le monde
      </motion.p>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-14 px-7">
          {logos.map((i) => (
            <div
              key={`a-${i}`}
              className="flex h-10 w-[130px] shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-xs text-text-muted/50 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-white/[0.04]"
            >
              {/* TODO: Remplacer par le vrai logo */}
              Logo {i}
            </div>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-14 px-7" aria-hidden="true">
          {logos.map((i) => (
            <div
              key={`b-${i}`}
              className="flex h-10 w-[130px] shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-xs text-text-muted/50"
            >
              Logo {i}
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a1628] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a1628] to-transparent" />

      <div className="section-divider mt-14" />
    </section>
  );
}
