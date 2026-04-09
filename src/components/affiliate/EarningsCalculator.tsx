"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { FadeInSection } from "../AnimatedText";

const AVG_SUBSCRIPTION = 25; // $/mois moyen
const COMMISSION_RATE = 0.4;
const ease = [0.22, 1, 0.36, 1] as const;

export default function EarningsCalculator() {
  const [referrals, setReferrals] = useState(50);

  const monthly = Math.round(referrals * AVG_SUBSCRIPTION * COMMISSION_RATE);
  const yearly = monthly * 12;

  // Smooth springs
  const monthlySpring = useSpring(monthly, { stiffness: 90, damping: 22 });
  const yearlySpring = useSpring(yearly, { stiffness: 90, damping: 22 });

  useEffect(() => {
    monthlySpring.set(monthly);
    yearlySpring.set(yearly);
  }, [monthly, yearly, monthlySpring, yearlySpring]);

  const monthlyDisplay = useTransform(monthlySpring, (v) =>
    `$${Math.round(v).toLocaleString()}`
  );
  const yearlyDisplay = useTransform(yearlySpring, (v) =>
    `$${Math.round(v).toLocaleString()}`
  );

  const progress = (referrals / 200) * 100;

  return (
    <section className="relative px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <FadeInSection className="mb-12 text-center sm:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-accent/15 bg-violet-accent/5 px-3 py-1 text-xs font-medium text-violet-accent">
            Calculateur de revenus
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
            Combien tu peux{" "}
            <span className="bg-gradient-to-r from-blue-accent to-violet-accent bg-clip-text text-transparent">
              gagner ?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-text-muted sm:text-base">
            Bouge le slider pour voir tes revenus estimés en temps réel.
          </p>
        </FadeInSection>

        <motion.div
          className="glass-card relative overflow-hidden p-6 sm:p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Subtle glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-accent/8 blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
            {/* Slider */}
            <div className="flex-1">
              <div className="mb-3 flex items-baseline justify-between">
                <label
                  htmlFor="referrals-slider"
                  className="text-xs font-medium uppercase tracking-wider text-text-muted"
                >
                  Filleuls actifs
                </label>
                <span className="text-2xl font-bold text-white sm:text-3xl font-[family-name:var(--font-heading)]">
                  {referrals}
                </span>
              </div>
              <input
                id="referrals-slider"
                type="range"
                className="range-slider w-full"
                value={referrals}
                min={0}
                max={200}
                step={1}
                onChange={(e) => setReferrals(Number(e.target.value))}
                style={{ ["--progress" as string]: `${progress}%` }}
                aria-label="Nombre de filleuls actifs"
              />
              <div className="mt-3 flex justify-between text-[11px] text-text-muted">
                <span>0</span>
                <span>50</span>
                <span>100</span>
                <span>150</span>
                <span>200+</span>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-text-muted">
                Basé sur un abonnement moyen de <span className="text-text-secondary">${AVG_SUBSCRIPTION}/mois</span> × <span className="text-text-secondary">40% commission</span>.
                Estimation indicative — les vrais montants varient selon le plan choisi par tes filleuls.
              </p>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 gap-4 lg:w-[340px] lg:shrink-0 lg:grid-cols-1 lg:gap-3">
              <div className="rounded-2xl border border-blue-accent/20 bg-gradient-to-br from-blue-accent/[0.08] to-transparent p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-accent">
                  Par mois
                </p>
                <motion.span className="mt-2 block bg-gradient-to-r from-white to-blue-light bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
                  {monthlyDisplay}
                </motion.span>
              </div>
              <div className="rounded-2xl border border-violet-accent/20 bg-gradient-to-br from-violet-accent/[0.08] to-transparent p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-accent">
                  Par an
                </p>
                <motion.span className="mt-2 block bg-gradient-to-r from-white to-violet-accent bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
                  {yearlyDisplay}
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
