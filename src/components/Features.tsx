"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInSection } from "./AnimatedText";

const features = [
  {
    id: "bundles",
    label: "Bundles Fixes",
    title: "Vendez des lots de produits sélectionnés",
    description:
      "Créez des bundles qui ont du sens pour vos clients avec des remises automatiques. Groupez des produits complémentaires et regardez votre panier moyen décoller.",
    badge: "Populaire",
    image: "/fixed-bundle.png",
  },
  {
    id: "volume",
    label: "Remises Volume",
    title: "Plus ils achètent, plus ils économisent",
    description:
      "Affichez des paliers de prix qui encouragent vos clients à ajouter plus d'articles. Les remises visuelles par quantité rendent les économies évidentes et irrésistibles.",
    badge: null,
    image: "/quantity-breaks.png",
  },
  {
    id: "mixmatch",
    label: "Mix & Match",
    title: "Laissez vos clients composer leur bundle",
    description:
      "Donnez à vos clients la liberté de choisir leurs produits préférés tout en contrôlant la structure de remise. Flexibilité maximale, conversions maximales.",
    badge: null,
    image: "/bundle.webp",
  },
  {
    id: "bogo",
    label: "BOGO",
    title: "Le mécanisme promo le plus puissant",
    description:
      "Configurez des offres achetez-en-un-obtenez-en-un, achetez-2-le-3ème-offert, et toute combinaison Buy X Get Y. Le moteur promotionnel du e-commerce.",
    badge: null,
    image: "/bundle.webp",
  },
  {
    id: "cart",
    label: "Cart Drawer",
    title: "Un panier latéral magnifique",
    description:
      "Suggestions d'upsell intelligentes, cross-sell de produits complémentaires, cadeaux gratuits et barre de progression — le tout dans un panier latéral élégant.",
    badge: "Exclusif",
    image: "/cart-drawer.webp",
  },
  {
    id: "postpurchase",
    label: "Post-Achat",
    title: "Offres one-click après le paiement",
    description:
      "Captez du revenu additionnel sur la page de remerciement et de statut de commande, sans friction. Vos clients achètent en un clic — sans re-saisir leurs infos.",
    badge: "Exclusif",
    image: "/one-click-upsell.webp",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative px-6 py-24 sm:py-32">
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
          <p className="mx-auto mt-5 max-w-lg text-base text-text-muted">
            Six outils puissants, une seule expérience fluide. Plus besoin de jongler entre plusieurs apps.
          </p>
        </FadeInSection>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Tab buttons */}
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:w-64 lg:shrink-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
            {features.map((feat, i) => (
              <button
                key={feat.id}
                onClick={() => setActive(i)}
                className={`group relative flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? "bg-white/[0.06] text-white"
                    : "text-text-muted hover:bg-white/[0.03] hover:text-text-secondary"
                }`}
              >
                {active === i && (
                  <motion.div
                    className="absolute left-0 top-1/2 hidden h-6 w-0.5 -translate-y-1/2 rounded-full bg-blue-accent lg:block"
                    layoutId="activeTab"
                    transition={{ duration: 0.3, ease }}
                  />
                )}
                <span className="relative z-10">{feat.label}</span>
                {feat.badge && (
                  <span className="rounded-full bg-blue-accent/10 px-2 py-0.5 text-[10px] font-semibold text-blue-accent">
                    {feat.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Feature content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12, scale: 0.97, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, scale: 0.97, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease }}
                className="glass-card overflow-hidden"
              >
                <div className="p-8 sm:p-10">
                  <div className="flex items-start justify-between">
                    <div>
                      {features[active].badge && (
                        <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-blue-accent/15 to-violet-accent/15 px-3 py-1 text-xs font-semibold text-blue-accent">
                          {features[active].badge}
                        </span>
                      )}
                      <h3 className="text-2xl font-bold text-white sm:text-3xl font-[family-name:var(--font-heading)]">
                        {features[active].title}
                      </h3>
                    </div>
                    <span className="hidden text-5xl opacity-5 sm:block font-[family-name:var(--font-heading)]">
                      0{active + 1}
                    </span>
                  </div>
                  <p className="mt-4 max-w-lg leading-relaxed text-text-muted">
                    {features[active].description}
                  </p>
                </div>

                {/* Screenshot - taille contenue */}
                <div className="relative mx-6 mb-6 sm:mx-8 sm:mb-8">
                  <div className="relative overflow-hidden rounded-xl border border-white/5">
                    <img
                      src={features[active].image}
                      alt={features[active].label}
                      className="w-full max-h-[320px] object-contain object-center"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
