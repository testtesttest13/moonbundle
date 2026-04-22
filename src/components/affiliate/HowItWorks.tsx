"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInSection } from "../AnimatedText";
import { BrandChip, type BrandName } from "./BrandChip";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

// Step 1 — personal link
function LinkMock() {
  const nets: BrandName[] = ["youtube", "instagram", "tiktok", "x", "linkedin"];
  return (
    <div
      className="flex aspect-video w-full flex-col items-center justify-center gap-3.5 rounded-2xl p-4"
      style={{
        background:
          "radial-gradient(circle at 50% 30%, rgba(77,124,255,.12), transparent 60%), rgba(255,255,255,.02)",
        border: "1px dashed rgba(77,124,255,.25)",
      }}
    >
      <div className="rounded-[10px] border border-blue-accent/25 bg-navy-900/60 px-4 py-2.5 text-sm font-semibold tracking-tight text-white font-[family-name:var(--font-heading)]">
        moonbundles.io/<span className="text-blue-accent">?via=toi</span>
      </div>
      <div className="flex gap-1.5">
        {nets.map((n) => (
          <BrandChip key={n} name={n} size={26} />
        ))}
      </div>
    </div>
  );
}

// Step 2 — share to networks
function ShareMock() {
  const spots: { x: string; y: string; name: BrandName }[] = [
    { x: "18%", y: "20%", name: "youtube" },
    { x: "80%", y: "22%", name: "instagram" },
    { x: "82%", y: "72%", name: "x" },
    { x: "18%", y: "74%", name: "tiktok" },
  ];
  return (
    <div
      className="relative aspect-video w-full rounded-2xl border border-white/[0.06]"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(77,124,255,.12), transparent 60%), rgba(255,255,255,.02)",
      }}
    >
      <div
        className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-accent/25 bg-navy-900"
        style={{ boxShadow: "0 0 36px rgba(77,124,255,.45)" }}
      >
        <Image src="/logo.png" alt="" width={24} height={24} />
      </div>
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
        {spots.map((s, i) => (
          <line
            key={i}
            x1="50%"
            y1="50%"
            x2={s.x}
            y2={s.y}
            stroke="rgba(77,124,255,.28)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        ))}
      </svg>
      {spots.map((s, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: s.x, top: s.y }}
        >
          <BrandChip name={s.name} size={30} />
        </div>
      ))}
    </div>
  );
}

// Step 3 — sub-affiliate network
function PayoutMock() {
  const subs: { x: string; y: string; name: BrandName }[] = [
    { x: "18%", y: "78%", name: "instagram" },
    { x: "50%", y: "86%", name: "youtube" },
    { x: "82%", y: "78%", name: "tiktok" },
  ];
  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.06]"
      style={{
        background:
          "radial-gradient(circle at 50% 30%, rgba(77,124,255,.12), transparent 60%), rgba(255,255,255,.02)",
      }}
    >
      <div
        className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
        style={{ top: "22%", transform: "translate(-50%, -50%)" }}
      >
        <div
          className="flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-blue-accent/25 bg-navy-900"
          style={{ boxShadow: "0 0 28px rgba(77,124,255,.45)" }}
        >
          <Image src="/logo.png" alt="" width={22} height={22} />
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-white">
          Toi
        </div>
      </div>

      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
        {subs.map((s, i) => (
          <line
            key={i}
            x1="50%"
            y1="22%"
            x2={s.x}
            y2={s.y}
            stroke="rgba(77,124,255,.35)"
            strokeWidth="1.25"
            strokeDasharray="3 3"
          />
        ))}
      </svg>

      {subs.map((s, i) => (
        <div
          key={i}
          className="absolute flex flex-col items-center gap-1"
          style={{ left: s.x, top: s.y, transform: "translate(-50%, -50%)" }}
        >
          <BrandChip name={s.name} size={30} />
          <div className="text-[9px] font-semibold uppercase tracking-[0.06em] text-text-muted">
            Sub
          </div>
        </div>
      ))}
    </div>
  );
}

const MOCKS = [LinkMock, ShareMock, PayoutMock] as const;

export default function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section id="how-it-works" className="relative px-7 py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px]">
        <FadeInSection className="mb-11 text-center">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-accent/25 bg-blue-accent/[0.12] px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-blue-accent">
              {t.howItWorks.badge}
            </span>
          </div>
          <h2 className="m-0 text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-white font-[family-name:var(--font-heading)]">
            {t.howItWorks.title}
          </h2>
        </FadeInSection>

        <div className="grid gap-4 md:grid-cols-3">
          {t.howItWorks.steps.map((step, i) => {
            const Mock = MOCKS[i];
            return (
              <motion.div
                key={i}
                className="glass-card p-5 sm:p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <Mock />
                <div className="mt-[18px] inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-accent font-[family-name:var(--font-heading)]">
                  <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-md border border-blue-accent/25 bg-blue-accent/[0.12] text-[11px]">
                    {i + 1}
                  </span>
                  {step.tag}
                </div>
                <h3 className="mt-2.5 mb-1.5 text-[19px] font-bold leading-tight text-white font-[family-name:var(--font-heading)]">
                  {step.title}
                </h3>
                <p className="m-0 text-[13.5px] leading-relaxed text-text-muted">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
