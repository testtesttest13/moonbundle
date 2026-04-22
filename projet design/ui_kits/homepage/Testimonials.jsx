/** @jsx React.createElement */
const { Pill } = window.HP;

const REVIEWS = [
  { name: "Pierre M.", role: "Dropshipper · FR", q: "Installé en 5 minutes. +32% d'AOV dès la première semaine. Le support WhatsApp est dingue.", flag: "fr" },
  { name: "Sarah K.", role: "DTC Beauté · FR", q: "Le cart drawer a remplacé 3 apps. Facture divisée par deux, conversion doublée.", flag: "fr" },
  { name: "James R.", role: "Apparel · UK", q: "One-click post-purchase is printing money. Literally paid for itself in 48h.", flag: "gb" },
  { name: "Léa D.", role: "Food & Supp · FR", q: "Le free gift à paliers a sauvé mon AOV de fin d'année. 8€ de plus par commande en moyenne.", flag: "fr" },
];

function Flag({ f }) {
  if (f === "fr") return <svg viewBox="0 0 60 40" style={{ width: "100%", height: "100%" }}><rect width="20" height="40" fill="#0055A4"/><rect x="20" width="20" height="40" fill="#fff"/><rect x="40" width="20" height="40" fill="#EF4135"/></svg>;
  return <svg viewBox="0 0 60 30" style={{ width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid slice">
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
    <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
  </svg>;
}

function Stars() {
  return (
    <div style={{ color: "#facc15", letterSpacing: "0.1em", fontSize: 13 }}>★★★★★</div>
  );
}

function ReviewCard({ r }) {
  return (
    <div style={{
      background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)",
      borderRadius: 22, padding: 22, backdropFilter: "blur(20px)",
      display: "flex", flexDirection: "column", gap: 14,
    }}>
      <Stars/>
      <p style={{ margin: 0, color: "#e2e8f0", fontSize: 14.5, lineHeight: 1.55 }}>"{r.q}"</p>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "auto", paddingTop: 4 }}>
        <div style={{ width: 30, height: 30, borderRadius: 9999, overflow: "hidden", border: "1px solid rgba(255,255,255,.1)", flex: "none" }}>
          <Flag f={r.flag}/>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", fontFamily: "var(--font-heading)" }}>{r.name}</div>
          <div style={{ fontSize: 11.5, color: "#94a3b8" }}>{r.role}</div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section style={{ padding: "60px 28px 80px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ marginBottom: 16 }}><Pill dot={false}>Témoignages</Pill></div>
          <h2 style={{
            margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.02em",
            color: "#fff",
          }}>
            Ce qu'en pensent <span style={{
              backgroundImage: "linear-gradient(90deg,#4d7cff,#7c5cff)",
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            }}>1 200+ marchands</span>
          </h2>
        </div>
        <div style={{
          display: "grid", gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}>
          {REVIEWS.map((r, i) => <ReviewCard key={i} r={r}/>)}
        </div>
      </div>
    </section>
  );
}

window.HP = Object.assign(window.HP || {}, { Testimonials });
