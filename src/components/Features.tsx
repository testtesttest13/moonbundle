"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "./AnimatedText";

const features = [
  {
    title: "Bundles Fixes",
    tagline: "Groupez vos produits, boostez le panier",
    image: "/fixed-bundle.png",
    span: "col-span-1",
  },
  {
    title: "Remises Volume",
    tagline: "Plus ils achètent, plus ils économisent",
    image: "/quantity-breaks.png",
    span: "col-span-1",
  },
  {
    title: "Cart Drawer",
    tagline: "Un panier latéral qui vend pour vous",
    image: "/cart-drawer.webp",
    span: "col-span-1 sm:col-span-2 lg:col-span-1",
  },
  {
    title: "Mix & Match",
    tagline: "Vos clients composent leur bundle",
    image: "/bundle.webp",
    span: "col-span-1",
  },
  {
    title: "Post-Achat",
    tagline: "Upsell one-click après le paiement",
    image: "/one-click-upsell.webp",
    span: "col-span-1",
  },
  {
    title: "Barre & Cadeaux",
    tagline: "Progress bar et free gifts dans le panier",
    image: "/progress-gift.png",
    span: "col-span-1 sm:col-span-2 lg:col-span-1",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeInSection className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-accent/15 bg-violet-accent/5 px-3 py-1 text-xs font-medium text-violet-accent">
            Fonctionnalités
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
            Tout ce qu&apos;il faut pour{" "}
            <span className="bg-gradient-to-r from-violet-accent to-blue-accent bg-clip-text text-transparent">
              augmenter l&apos;AOV
            </span>
          </h2>
        </FadeInSection>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              className={`group ${feat.span}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              style={{ perspective: "800px" }}
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/[0.04] group-hover:[transform:rotateX(2deg)_rotateY(-2deg)_scale(1.02)]">
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-blue-accent/[0.04] to-violet-accent/[0.02]" />

                {/* Title */}
                <h3 className="relative z-10 text-base font-bold text-white font-[family-name:var(--font-heading)]">
                  {feat.title}
                </h3>

                {/* Image */}
                <div className="relative z-10 my-4 overflow-hidden rounded-xl border border-white/5 bg-navy-800/50">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Tagline */}
                <p className="relative z-10 text-sm text-text-muted">
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
