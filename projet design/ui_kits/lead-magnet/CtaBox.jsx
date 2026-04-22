/** @jsx React.createElement */
const { useState, useEffect } = React;
const { BoltIcon, ArrowIcon, CopyIcon } = window.LM;

function useCountdown() {
  const [t, setT] = useState({ h: "02", m: "14", s: "38" });
  useEffect(() => {
    const tick = () => {
      const end = new Date();
      end.setHours(24, 0, 0, 0);
      const d = end.getTime() - Date.now();
      const h = String(Math.max(0, Math.floor(d / 3_600_000))).padStart(2, "0");
      const m = String(Math.max(0, Math.floor((d % 3_600_000) / 60_000))).padStart(2, "0");
      const s = String(Math.max(0, Math.floor((d % 60_000) / 1000))).padStart(2, "0");
      setT({ h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function Countdown() {
  const t = useCountdown();
  const Cell = ({ v }) => (
    <div style={{
      minWidth: 54, height: 52, borderRadius: 10,
      border: "1px solid rgba(255,255,255,.1)", background: "rgba(10,22,40,.85)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22,
      color: "#fff", fontVariantNumeric: "tabular-nums",
    }}>{v}</div>
  );
  const Sep = () => <span style={{ color: "#4d7cff", fontWeight: 700, fontSize: 20 }}>:</span>;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#94a3b8", fontSize: 11.5, fontWeight: 500 }}>
        <span style={{
          width: 7, height: 7, borderRadius: "50%", background: "#ef4444",
          animation: "mb-pulse 1s infinite",
        }} />
        Cette offre expire dans :
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Cell v={t.h}/><Sep/><Cell v={t.m}/><Sep/><Cell v={t.s}/>
      </div>
    </div>
  );
}

function PromoBox() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText("4K4MZMMS69");
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14,
      border: "1px solid rgba(77,124,255,.25)", background: "rgba(10,22,40,.75)",
      borderRadius: 12, padding: "10px 14px",
    }}>
      <div>
        <div style={{ fontSize: 10, color: "#4d7cff", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".12em" }}>
          20% de réduction avec le code
        </div>
        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18, letterSpacing: ".15em", marginTop: 3, color: "#fff" }}>
          4K4MZMMS69
        </div>
      </div>
      <button onClick={copy} style={{
        border: "1px solid rgba(77,124,255,.3)", background: "rgba(77,124,255,.1)",
        color: copied ? "#22c55e" : "#4d7cff", borderRadius: 8,
        padding: "7px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 6,
      }}>
        <CopyIcon size={12} /> {copied ? "Copié !" : "Copier"}
      </button>
    </div>
  );
}

function CtaBox() {
  const [hover, setHover] = useState(false);
  return (
    <section style={{ padding: "24px 24px 0" }}>
      <div style={{
        position: "relative", overflow: "hidden", borderRadius: 20,
        border: "1px solid rgba(77,124,255,.3)",
        background: "linear-gradient(135deg,rgba(77,124,255,.12),rgba(22,32,68,.6),rgba(124,92,255,.08))",
        padding: "22px 20px", textAlign: "center",
      }}>
        <div aria-hidden style={{
          position: "absolute", left: "50%", top: "40%", transform: "translate(-50%,-50%)",
          width: 300, height: 180, borderRadius: "50%", background: "rgba(77,124,255,.22)",
          filter: "blur(80px)", animation: "mb-pulse-glow 4s ease-in-out infinite",
        }} />
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
          <Countdown />
          <h3 style={{
            margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: 22, lineHeight: 1.2, color: "#fff",
          }}>
            Tes native ads ramènent du trafic.<br/>
            <span style={{
              backgroundImage: "linear-gradient(90deg,#4d7cff,#7c5cff)",
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            }}>Moonbundles le transforme en revenu.</span>
          </h3>
          <div style={{ width: "100%", maxWidth: 360 }}>
            <PromoBox />
          </div>
          <a href="#" 
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            style={{
              position: "relative", display: "inline-flex", alignItems: "center", gap: 10,
              background: "#fff", color: "#0a1628",
              borderRadius: 12, padding: "14px 24px",
              fontSize: 14.5, fontWeight: 700, textDecoration: "none",
              boxShadow: hover ? "0 0 50px rgba(255,255,255,.3)" : "0 0 30px rgba(255,255,255,.15)",
              transform: hover ? "scale(1.02)" : "scale(1)",
              transition: "all .3s cubic-bezier(.22,1,.36,1)",
          }}>
            <span style={{ color: "#4d7cff" }}><BoltIcon size={16} /></span>
            Je veux doubler mon AOV
            <ArrowIcon size={16} />
          </a>
          <div style={{ fontSize: 11.5, color: "#94a3b8", display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <span>Sans carte bancaire</span><span>·</span>
            <span>Plan gratuit</span><span>·</span>
            <span>Annulable à tout moment</span>
          </div>
          <div style={{ fontSize: 11, color: "#94a3b8", display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span style={{color:"#facc15"}}>★★★★★</span>
            <span>5.0/5 · 448+ avis · 1 200+ stores actifs</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.LM = Object.assign(window.LM || {}, { CtaBox });
