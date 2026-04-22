"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "../AnimatedText";
import { BrandChip, type BrandName } from "./BrandChip";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Targets() {
  const { t } = useTranslation();
  return (
    <section className="relative px-7 py-16 sm:py-20">
      <div className="mx-auto max-w-[1180px]">
        <FadeInSection className="mb-11 text-center">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-accent/25 bg-blue-accent/[0.12] px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-blue-accent">
              {t.targets.badge}
            </span>
          </div>
          <h2 className="m-0 text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-white font-[family-name:var(--font-heading)]">
            {t.targets.title}
          </h2>
          <p className="mx-auto mt-3.5 max-w-[520px] text-[15.5px] text-text-muted">
            {t.targets.subtitle}
          </p>
        </FadeInSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.targets.items.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card flex flex-col gap-3 p-5 sm:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease }}
            >
              <div className="flex gap-1.5">
                {item.icons.map((n) => (
                  <BrandChip key={n} name={n as BrandName} size={34} />
                ))}
              </div>
              <div>
                <div className="mb-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-blue-accent">
                  {item.tag}
                </div>
                <h3 className="mb-1.5 text-[18px] font-bold leading-tight text-white font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="m-0 text-[13.5px] leading-relaxed text-text-muted">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
