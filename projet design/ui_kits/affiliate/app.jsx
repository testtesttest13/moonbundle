/** @jsx React.createElement */
// Moonbundles — Affiliate sections (hero + simulator + split + steps + ai + targets + faq + cta + footer)
// Single sober theme. DA of "Comment ça marche".

const {
  C, BRAND, AOV, RATE, fmt, DICT, useT, useCountUp, Pill, Cta,
  BrandIcon, BrandChip, LangProvider, Navbar,
} = window.__aff_base;
const { useState, useEffect, useRef } = React;

// ==================== Starfield background ====================
function StarfieldBg() {
  // Deterministic pseudo-random star field. Tiny twinkling dots.
  const stars = React.useMemo(() => {
    const arr = [];
    let seed = 1337;
    const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 140; i++) {
      const size = rand() < 0.85 ? 1 : rand() < 0.6 ? 1.5 : 2.5;
      arr.push({
        x: rand() * 100,
        y: rand() * 100,
        s: size,
        o: 0.25 + rand() * 0.6,
        delay: rand() * 6,
        dur: 3 + rand() * 5,
      });
    }
    return arr;
  }, []);
  return (
    <div aria-hidden style={{
      position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden",
    }}>
      {stars.map((st, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${st.x}%`, top: `${st.y}%`,
          width: st.s, height: st.s, borderRadius: "50%",
          background: "#fff",
          opacity: st.o,
          boxShadow: st.s >= 2 ? `0 0 ${st.s * 3}px rgba(255,255,255,.6)` : "none",
          animation: `mb-twinkle ${st.dur}s ease-in-out ${st.delay}s infinite`,
        }}/>
      ))}
    </div>
  );
}

// ==================== Hero ====================
function Hero() {
  const { t } = useT();
  return (
    <section style={{ position: "relative", padding: "48px 28px 72px", overflow: "hidden" }}>
      {/* Ambient radial */}
      <div aria-hidden style={{
        position: "absolute", left: "50%", top: "20%", transform: "translate(-50%,-50%)",
        width: 900, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(77,124,255,.14), transparent 65%)",
        filter: "blur(80px)", pointerEvents: "none",
      }}/>

      <div style={{ position: "relative", maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: 22 }}><Pill dot>{t.pill}</Pill></div>

        <h1 style={{
          margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700,
          fontSize: "clamp(44px, 6.6vw, 82px)", lineHeight: 1.02, letterSpacing: "-0.035em",
          color: "#fff", textWrap: "balance",
        }}>
          {t.h1a}<br/>
          <span style={{ color: C.muted }}>{t.h1b}</span>
        </h1>

        <p style={{ margin: "22px auto 0", color: C.ink2, fontSize: 17, lineHeight: 1.55, maxWidth: 520 }}>{t.sub}</p>

        <div style={{ marginTop: 30, display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <Cta size="lg">{t.cta}</Cta>
          <Cta size="lg" secondary>{t.ctaSecondary}</Cta>
        </div>

        {/* Trust row */}
        <div style={{
          marginTop: 28, display: "flex", gap: 22, justifyContent: "center",
          flexWrap: "wrap", fontSize: 12.5, color: C.muted2,
        }}>
          {t.trust.map((x, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {x}
            </span>
          ))}
        </div>

        {/* Simulator card — matches "Comment ça marche" card DA */}
        <div style={{ marginTop: 54 }}>
          <div style={{
            padding: "28px 26px 24px", borderRadius: 22,
            background: C.bgSoft, border: `1px solid ${C.border}`,
            boxShadow: "0 24px 60px rgba(0,0,0,.3)",
            textAlign: "left",
          }}>
            <Simulator/>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== Simulator (clean, no buggy animation) ====================
function Simulator() {
  const { t } = useT();
  const [referrals, setReferrals] = useState(100);
  const monthly = referrals * AOV * RATE;
  const mUp = useCountUp(monthly);
  const yUp = useCountUp(monthly * 12);
  const pct = (referrals / 500) * 100;

  return (
    <div style={{ width: "100%" }}>
      {/* Readouts */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        flexWrap: "wrap", gap: 16, marginBottom: 28,
      }}>
        <div>
          <div style={{ fontSize: 10.5, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: ".14em", marginBottom: 6 }}>Simulateur</div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700, color: "#fff", fontVariantNumeric: "tabular-nums" }}>
            {referrals} <span style={{ color: C.muted, fontWeight: 500, fontSize: 14 }}>{t.refs}</span>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{
            fontFamily: "var(--font-heading)", fontVariantNumeric: "tabular-nums",
            fontSize: "clamp(40px, 5.5vw, 64px)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em",
            color: "#fff",
          }}>{fmt(mUp)}</div>
          <div style={{ color: C.muted, fontSize: 13, marginTop: 6, fontVariantNumeric: "tabular-nums" }}>
            {t.perMonth} · soit <span style={{ color: "#e2e8f0", fontWeight: 600 }}>{fmt(yUp)}</span> {t.perYear}
          </div>
        </div>
      </div>

      {/* Clean bar */}
      <div style={{ position: "relative", height: 36 }}>
        {/* Track */}
        <div style={{
          position: "absolute", left: 0, right: 0, top: "50%", transform: "translateY(-50%)",
          height: 10, borderRadius: 9999,
          background: "rgba(255,255,255,.06)",
          border: `1px solid ${C.border}`,
          overflow: "hidden",
        }}>
          {/* Fill — width follows slider directly, no easing fight */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0,
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${C.accent}, #7c5cff)`,
            borderRadius: 9999,
            boxShadow: "0 0 16px rgba(77,124,255,.35)",
          }}/>
        </div>

        {/* Range input */}
        <input type="range" min={0} max={500} step={1} value={referrals}
          onChange={e => setReferrals(parseInt(e.target.value, 10))}
          className="mb-range"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            margin: 0, padding: 0, background: "transparent",
            WebkitAppearance: "none", appearance: "none",
          }}/>
      </div>

      {/* Tick labels under the bar */}
      <div style={{
        marginTop: 10, display: "flex", justifyContent: "space-between",
        fontSize: 11, color: C.muted2, fontVariantNumeric: "tabular-nums",
      }}>
        <span>0</span><span>125</span><span>250</span><span>375</span><span>500</span>
      </div>

      {/* Preset chips */}
      <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
        {[10, 50, 100, 250, 500].map(n => {
          const active = referrals === n;
          return (
            <button key={n} onClick={() => setReferrals(n)} style={{
              cursor: "pointer",
              border: `1px solid ${active ? C.accentLine : C.border}`,
              background: active ? C.accentSoft : C.bgSofter,
              color: active ? C.accent : C.muted,
              padding: "7px 14px", borderRadius: 9999, fontSize: 12, fontWeight: 600,
              fontFamily: "var(--font-body)", transition: "all .2s",
            }}>{n} parrainages</button>
          );
        })}
      </div>
    </div>
  );
}

// ==================== Ask AI (compact — title + buttons only) ====================
function AskAi() {
  const { lang, t } = useT();
  const prompt = lang === "fr"
    ? "Dis-moi pourquoi l'app Shopify Moonbundles est faite pour moi (j'ai une boutique Shopify, je veux augmenter mon panier moyen et mes revenus). Moonbundles fait bundles, cart drawer, post-purchase, free gifts et volume discounts — tout dans une seule app. Donne-moi des raisons concrètes."
    : "Tell me why the Moonbundles Shopify app is made for me (I run a Shopify store and want to boost my AOV and revenue). Moonbundles does bundles, cart drawer, post-purchase, free gifts and volume discounts — all in one app. Give me concrete reasons.";
  const q = encodeURIComponent(prompt);

  const services = [
    { name: "ChatGPT", url: `https://chatgpt.com/?q=${q}`, accent: "#10a37f", glyph: "◐" },
    { name: "Claude",  url: `https://claude.ai/new?q=${q}`, accent: "#d97757", glyph: "✦" },
    { name: "Gemini",  url: `https://gemini.google.com/app?q=${q}`, accent: "#4285f4", glyph: "✧" },
  ];

  return (
    <section style={{ position: "relative", padding: "72px 28px" }}>
      <div style={{ position: "relative", maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: 16 }}><Pill dot>{t.aiPill}</Pill></div>
        <h2 style={{
          margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700,
          fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.025em",
          color: "#fff", textWrap: "balance",
        }}>
          {t.aiTitleA} <span style={{ color: C.accent }}>Moonbundles</span> {t.aiTitleB}
        </h2>

        <div style={{ marginTop: 28, display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          {services.map(s => <AskButton key={s.name} service={s} label={t.aiAsk}/>)}
        </div>
      </div>
    </section>
  );
}

function AskButton({ service, label }) {
  const [h, setH] = useState(false);
  return (
    <a href={service.url} target="_blank" rel="noopener"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "11px 18px", borderRadius: 9999,
        background: h ? "rgba(22,32,68,.95)" : "rgba(10,22,40,.7)",
        border: `1px solid ${h ? service.accent : C.borderStrong}`,
        color: "#fff", textDecoration: "none", fontSize: 13.5, fontWeight: 600,
        transition: "all .25s cubic-bezier(.22,1,.36,1)",
        transform: h ? "translateY(-1px)" : "none",
        boxShadow: h ? `0 8px 24px rgba(0,0,0,.4)` : "0 3px 10px rgba(0,0,0,.25)",
      }}>
      <span style={{
        width: 22, height: 22, borderRadius: 6,
        background: `${service.accent}18`, color: service.accent,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 700,
      }}>{service.glyph}</span>
      <span>{label} <span style={{ color: service.accent }}>{service.name}</span></span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ opacity: .6, transform: h ? "translate(2px,-2px)" : "none", transition: "transform .25s" }}>
        <path d="M7 17L17 7M7 7h10v10"/>
      </svg>
    </a>
  );
}

// ==================== Split (scenario cards — no slider) ====================
function SplitSection() {
  const { t } = useT();
  const [active, setActive] = useState(1); // 0, 1, 2
  const scenarios = [
    { label: t.splitScenarioA, you: 40, subs: 0,
      desc: t.splitDescA },
    { label: t.splitScenarioB, you: 20, subs: 20,
      desc: t.splitDescB },
    { label: t.splitScenarioC, you: 8,  subs: 32,
      desc: t.splitDescC },
  ];

  return (
    <section style={{ position: "relative", padding: "80px 28px" }}>
      <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 42 }}>
          <div style={{ marginBottom: 16 }}><Pill>{t.splitPill}</Pill></div>
          <h2 style={{
            margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "#fff",
            textWrap: "balance",
          }}>
            {t.splitTitleA} <span style={{ color: C.accent }}>{t.splitTitleB}</span>
          </h2>
          <p style={{ margin: "14px auto 0", color: C.muted, fontSize: 15.5, lineHeight: 1.55, maxWidth: 520 }}>{t.splitSub}</p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid", gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        }}>
          {scenarios.map((s, i) => {
            const isActive = active === i;
            return (
              <button key={i} onClick={() => setActive(i)} style={{
                cursor: "pointer", textAlign: "left",
                padding: "24px 22px", borderRadius: 20,
                border: `1px solid ${isActive ? C.accentLine : C.border}`,
                background: isActive ? `linear-gradient(180deg, rgba(77,124,255,.08), ${C.bgSofter})` : C.bgSoft,
                boxShadow: isActive ? "0 16px 40px rgba(77,124,255,.18)" : "0 8px 24px rgba(0,0,0,.2)",
                transition: "all .3s cubic-bezier(.22,1,.36,1)",
                transform: isActive ? "translateY(-2px)" : "none",
                color: "inherit", fontFamily: "inherit",
              }}>
                <div style={{ fontSize: 10.5, fontWeight: 600, color: isActive ? C.accent : C.muted, textTransform: "uppercase", letterSpacing: ".14em", marginBottom: 14 }}>
                  Scénario {i + 1}
                </div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 18, lineHeight: 1.25 }}>
                  {s.label}
                </div>
                {/* Bars */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <SplitBar label={t.splitYour} pct={s.you} max={40} accent={C.accent}/>
                  <SplitBar label={t.splitSubs} pct={s.subs} max={40} accent="#7c5cff"/>
                </div>
                <div style={{
                  marginTop: 16, paddingTop: 14, borderTop: `1px solid ${C.border}`,
                  fontSize: 12.5, color: C.muted, lineHeight: 1.5,
                }}>{s.desc}</div>
              </button>
            );
          })}
        </div>

        <div style={{
          marginTop: 22, padding: "14px 18px", borderRadius: 12,
          background: "rgba(10,22,40,.5)", border: `1px solid ${C.border}`,
          fontSize: 13, color: C.muted, lineHeight: 1.55, textAlign: "center",
        }}>
          Total garanti : <span style={{ color: "#fff", fontWeight: 600 }}>40%</span> à vie sur chaque abonnement. Tu décides comment le découper.
        </div>
      </div>
    </section>
  );
}

function SplitBar({ label, pct, max, accent }) {
  const w = (pct / max) * 100;
  return (
    <div>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        fontSize: 11.5, marginBottom: 5, fontVariantNumeric: "tabular-nums",
      }}>
        <span style={{ color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".08em", fontSize: 10.5 }}>{label}</span>
        <span style={{ color: "#fff", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14 }}>{pct}%</span>
      </div>
      <div style={{
        height: 6, borderRadius: 9999,
        background: "rgba(255,255,255,.08)", overflow: "hidden",
      }}>
        <div style={{
          width: `${w}%`, height: "100%", borderRadius: 9999,
          background: accent,
          transition: "width .5s cubic-bezier(.22,1,.36,1)",
        }}/>
      </div>
    </div>
  );
}

// ==================== Steps mocks ====================
function LinkMock() {
  return (
    <div style={{
      width: "100%", aspectRatio: "16/9", borderRadius: 14,
      background: `radial-gradient(circle at 50% 30%, ${C.accentSoft}, transparent 60%), ${C.bgSofter}`,
      border: `1px dashed ${C.accentLine}`,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14,
      padding: 16,
    }}>
      <div style={{
        padding: "10px 16px", borderRadius: 10,
        background: "rgba(10,22,40,.6)", border: `1px solid ${C.accentLine}`,
        fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 600,
        color: "#fff", letterSpacing: "-0.01em",
      }}>
        moonbundles.io/<span style={{ color: C.accent }}>?via=toi</span>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {["youtube","instagram","tiktok","x","linkedin"].map(n => <BrandChip key={n} name={n} size={26}/>)}
      </div>
    </div>
  );
}
function ShareMock() {
  const spots = [
    { x: "18%", y: "20%", name: "youtube" },
    { x: "80%", y: "22%", name: "instagram" },
    { x: "82%", y: "72%", name: "x" },
    { x: "18%", y: "74%", name: "tiktok" },
  ];
  return (
    <div style={{
      position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 14,
      background: `radial-gradient(circle at 50% 50%, ${C.accentSoft}, transparent 60%), ${C.bgSofter}`,
      border: `1px solid ${C.border}`,
    }}>
      <div style={{
        position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)",
        width: 44, height: 44, borderRadius: 12, background: "#0a1628",
        border: `1px solid ${C.accentLine}`, boxShadow: `0 0 36px rgba(77,124,255,.45)`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <img src="../../assets/logo.png" alt="" style={{ width: 24, height: 24 }}/>
      </div>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {spots.map((s, i) => (
          <line key={i} x1="50%" y1="50%" x2={s.x} y2={s.y} stroke="rgba(77,124,255,.28)" strokeWidth="1" strokeDasharray="3 3"/>
        ))}
      </svg>
      {spots.map((s, i) => (
        <div key={i} style={{
          position: "absolute", left: s.x, top: s.y, transform: "translate(-50%,-50%)",
        }}>
          <BrandChip name={s.name} size={30}/>
        </div>
      ))}
    </div>
  );
}
function PayoutMock() {
  // Step 3 = sub-affiliates. Schema: you → 3 sub-affiliates. Lifetime commission on their sales too.
  const subs = [
    { x: "18%", y: "78%", name: "instagram" },
    { x: "50%", y: "86%", name: "youtube" },
    { x: "82%", y: "78%", name: "tiktok" },
  ];
  return (
    <div style={{
      position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 14,
      background: `radial-gradient(circle at 50% 30%, ${C.accentSoft}, transparent 60%), ${C.bgSofter}`,
      border: `1px solid ${C.border}`, overflow: "hidden",
    }}>
      {/* You (top center) */}
      <div style={{
        position: "absolute", left: "50%", top: "22%", transform: "translate(-50%,-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
      }}>
        <div style={{
          width: 42, height: 42, borderRadius: 12, background: "#0a1628",
          border: `1px solid ${C.accentLine}`, boxShadow: `0 0 28px rgba(77,124,255,.45)`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <img src="../../assets/logo.png" alt="" style={{ width: 22, height: 22 }}/>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: "#fff", letterSpacing: ".08em", textTransform: "uppercase" }}>Toi</div>
      </div>

      {/* Connectors */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden>
        {subs.map((s, i) => (
          <line key={i} x1="50%" y1="22%" x2={s.x} y2={s.y}
            stroke="rgba(77,124,255,.35)" strokeWidth="1.25" strokeDasharray="3 3"/>
        ))}
      </svg>

      {/* Sub-affiliates */}
      {subs.map((s, i) => (
        <div key={i} style={{
          position: "absolute", left: s.x, top: s.y, transform: "translate(-50%,-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
        }}>
          <BrandChip name={s.name} size={30}/>
          <div style={{ fontSize: 9, fontWeight: 600, color: C.muted, letterSpacing: ".06em", textTransform: "uppercase" }}>Sub</div>
        </div>
      ))}
    </div>
  );
}
const MOCKS = [LinkMock, ShareMock, PayoutMock];

function HowItWorks() {
  const { t } = useT();
  return (
    <section style={{ padding: "80px 28px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ marginBottom: 16 }}><Pill>{t.stepsPill}</Pill></div>
          <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff" }}>{t.stepsTitle}</h2>
        </div>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {t.steps.map(([tag, title, desc], i) => {
            const M = MOCKS[i];
            return (
              <div key={i} style={{ padding: 22, background: C.bgSoft, border: `1px solid ${C.border}`, borderRadius: 22 }}>
                <M/>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 10, marginTop: 18,
                  color: C.accent, fontFamily: "var(--font-heading)", fontSize: 12, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: ".14em",
                }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: 6,
                    background: C.accentSoft, border: `1px solid ${C.accentLine}`,
                    display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11,
                  }}>{i + 1}</span>
                  {tag}
                </div>
                <h3 style={{ margin: "10px 0 6px", fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>{title}</h3>
                <p style={{ margin: 0, color: C.muted, fontSize: 13.5, lineHeight: 1.55 }}>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ==================== Targets (real brand icons) ====================
function Targets() {
  const { t } = useT();
  return (
    <section style={{ padding: "60px 28px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ marginBottom: 16 }}><Pill>{t.targetsPill}</Pill></div>
          <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff" }}>{t.targetsTitle}</h2>
          <p style={{ margin: "14px auto 0", color: C.muted, fontSize: 15.5, maxWidth: 520 }}>{t.targetsSub}</p>
        </div>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {t.targets.map(([tag, title, desc, icons], i) => (
            <div key={i} style={{
              padding: 22, borderRadius: 22,
              background: C.bgSoft, border: `1px solid ${C.border}`,
              display: "flex", flexDirection: "column", gap: 12,
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                {icons.map(n => <BrandChip key={n} name={n} size={34}/>)}
              </div>
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 600, color: C.accent, textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 6 }}>{tag}</div>
                <h3 style={{ margin: "0 0 6px", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18, color: "#fff", lineHeight: 1.2 }}>{title}</h3>
                <p style={{ margin: 0, color: C.muted, fontSize: 13.5, lineHeight: 1.55 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FAQ ====================
function Faq() {
  const { t } = useT();
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: "80px 28px" }}>
      <div className="aff-faq-grid" style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.5fr)",
        gap: 48, alignItems: "start",
      }}>
        <div>
          <div style={{ marginBottom: 16 }}><Pill>{t.faqPill}</Pill></div>
          <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(28px, 3.6vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff" }}>
            {t.faqTitleA}<br/><span style={{ color: C.accent }}>{t.faqTitleB}</span>
          </h2>
          <p style={{ color: C.muted, fontSize: 14.5, marginTop: 14, lineHeight: 1.55 }}>{t.faqSub}</p>
          <div style={{ marginTop: 22 }}><Cta>{t.cta}</Cta></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {t.faqs.map(([q, a], i) => (
            <div key={i} style={{
              borderRadius: 14, overflow: "hidden",
              background: open === i ? C.bgSoft : C.bgSofter,
              border: `1px solid ${open === i ? C.accentLine : C.border}`,
              transition: "all .3s",
            }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: "100%", border: "none", background: "transparent", cursor: "pointer",
                padding: "16px 20px", textAlign: "left",
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
                fontFamily: "var(--font-body)", color: "#fff", fontSize: 14.5, fontWeight: 500,
              }}>
                <span>{q}</span>
                <span style={{
                  width: 26, height: 26, borderRadius: 8,
                  background: open === i ? C.accentSoft : C.bgSofter,
                  color: open === i ? C.accent : C.muted,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  flex: "none", transition: "all .3s",
                  transform: open === i ? "rotate(45deg)" : "rotate(0)",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </span>
              </button>
              <div style={{ maxHeight: open === i ? 300 : 0, overflow: "hidden", transition: "max-height .35s cubic-bezier(.22,1,.36,1)" }}>
                <div style={{ padding: "0 20px 18px", color: C.muted, fontSize: 13.5, lineHeight: 1.6 }}>{a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeservesBlock() {
  const { t } = useT();
  return (
    <section style={{ padding: "60px 28px" }}>
      <div style={{
        position: "relative", overflow: "hidden", maxWidth: 980, margin: "0 auto",
        borderRadius: 24, border: `1px solid ${C.accentLine}`,
        background: `linear-gradient(180deg, rgba(77,124,255,.08), ${C.bgSofter})`,
        padding: "52px 28px", textAlign: "center",
      }}>
        <div aria-hidden style={{
          position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)",
          width: 560, height: 320, borderRadius: "50%",
          background: "rgba(77,124,255,.14)", filter: "blur(100px)",
        }}/>
        <div style={{ position: "relative" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.025em", color: "#fff", textWrap: "balance" }}>
            {t.deservesA} <span style={{ color: C.accent }}>Moonbundles</span>.<br/>
            {t.deservesB} <span style={{ color: C.accent }}>{t.deservesRate}</span>
          </h2>
          <p style={{ margin: "16px auto 0", color: C.muted, fontSize: 15, maxWidth: 520, lineHeight: 1.55 }}>{t.deservesSub}</p>
          <div style={{ marginTop: 26 }}><Cta size="lg">{t.cta}</Cta></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t, lang, setLang } = useT();
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: "60px 28px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div className="aff-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32, alignItems: "start" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <img src="../../assets/logo.png" alt="" style={{ width: 28, height: 28, borderRadius: 8 }}/>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: "#fff" }}>Moonbundles</span>
            </div>
            <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.6, marginTop: 14, maxWidth: 260 }}>{t.footerTag}</p>
            <button onClick={() => setLang(lang === "fr" ? "en" : "fr")} style={{
              marginTop: 16, display: "inline-flex", alignItems: "center", gap: 8,
              padding: "8px 12px", borderRadius: 9999, cursor: "pointer",
              border: `1px solid ${C.borderStrong}`, background: "rgba(255,255,255,.04)",
              color: "#e2e8f0", fontSize: 12, fontFamily: "var(--font-body)",
            }}>
              {lang === "fr" ? "Français → English" : "English → Français"}
            </button>
          </div>
          {[["Produit",["Bundles","Cart Drawer","Post-Purchase","Free Gifts","Volume"]],
            ["Ressources",["Guide Native Ads","Checklist CRO","Blog","Prompts Claude"]],
            ["Entreprise",["Affiliation","Support WhatsApp","Confidentialité","CGU"]]].map(([title, items]) => (
            <div key={title}>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.accent, textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 14 }}>{title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                {items.map(x => (
                  <li key={x}><a href="#" style={{ color: C.muted, textDecoration: "none", fontSize: 13 }}>{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 40, paddingTop: 20, borderTop: `1px solid ${C.border}`,
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10,
          color: C.muted, fontSize: 12,
        }}>
          <span>{t.footerCopy}</span>
          <span>Built for Shopify · 5.0/5 · 448+ avis</span>
        </div>
      </div>
    </footer>
  );
}

// ==================== App ====================
function App() {
  return (
    <LangProvider>
      <StarfieldBg/>
      <Navbar/>
      <Hero/>
      <AskAi/>
      <SplitSection/>
      <HowItWorks/>
      <Targets/>
      <Faq/>
      <DeservesBlock/>
      <Footer/>
    </LangProvider>
  );
}

window.AffApp = App;
