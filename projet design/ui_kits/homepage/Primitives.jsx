/** @jsx React.createElement */
const { useState, useEffect } = React;

const HP = {};

// -------- Shared primitives --------
function Logo({ size = 28 }) {
  return (
    <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
      <img src="../../assets/logo.png" alt="" style={{ width: size, height: size, borderRadius: 8 }} />
      <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em", color: "#fff" }}>Moonbundles</span>
    </a>
  );
}

function Pill({ children, dot = true }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      border: "1px solid rgba(77,124,255,.2)", background: "rgba(77,124,255,.05)",
      color: "#4d7cff", borderRadius: 9999, padding: "6px 14px",
      fontSize: 10.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".12em",
    }}>
      {dot && (
        <span style={{ position: "relative", display: "inline-flex", width: 6, height: 6 }}>
          <span style={{ position: "absolute", inset: -2, borderRadius: "50%", background: "#4d7cff", opacity: .4, animation: "mb-ping 1.4s infinite" }} />
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4d7cff" }} />
        </span>
      )}
      {children}
    </span>
  );
}

function PrimaryCta({ children, href = "#" }) {
  const [h, setH] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        position: "relative", display: "inline-flex", alignItems: "center", gap: 10,
        background: "#fff", color: "#0a1628",
        borderRadius: 12, padding: "14px 26px",
        fontSize: 14.5, fontWeight: 700, textDecoration: "none",
        boxShadow: h ? "0 0 50px rgba(255,255,255,.32)" : "0 0 30px rgba(255,255,255,.18)",
        transform: h ? "scale(1.02)" : "scale(1)",
        transition: "all .3s cubic-bezier(.22,1,.36,1)",
        overflow: "hidden",
      }}>
      <img src="../../assets/shopify.png" alt="" style={{ width: 18, height: 18 }} />
      {children}
    </a>
  );
}

function GhostCta({ children, href = "#" }) {
  return (
    <a href={href} style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      color: "#e2e8f0", border: "1px solid rgba(255,255,255,.1)",
      background: "rgba(255,255,255,.03)", borderRadius: 12,
      padding: "13px 22px", fontSize: 14, fontWeight: 500, textDecoration: "none",
      transition: "all .3s cubic-bezier(.22,1,.36,1)",
    }}>{children} →</a>
  );
}

window.HP = Object.assign(window.HP || {}, { Logo, Pill, PrimaryCta, GhostCta });
