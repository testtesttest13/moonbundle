/** @jsx React.createElement */

const ease = [0.22, 1, 0.36, 1];

// -------- Small primitives --------
function Logo({ size = 28 }) {
  return (
    <a href="#" className="lm-logo" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
      <img src="../../assets/logo.png" alt="" style={{ width: size, height: size, borderRadius: 8 }} />
      <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em", color: "#fff" }}>Moonbundles</span>
    </a>
  );
}

function Badge({ children, color = "blue", ping = true }) {
  const colorMap = {
    blue: { b: "rgba(77,124,255,.2)", bg: "rgba(77,124,255,.05)", c: "#4d7cff" },
    red: { b: "rgba(239,68,68,.2)", bg: "rgba(239,68,68,.05)", c: "#ef4444" },
    green: { b: "rgba(34,197,94,.2)", bg: "rgba(34,197,94,.05)", c: "#22c55e" },
  };
  const k = colorMap[color];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      border: `1px solid ${k.b}`, background: k.bg, color: k.c,
      borderRadius: 9999, padding: "6px 14px",
      fontSize: 10.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".12em",
    }}>
      {ping && (
        <span style={{ position: "relative", display: "inline-flex", width: 6, height: 6 }}>
          <span style={{ position: "absolute", inset: -2, borderRadius: "50%", background: k.c, opacity: .4, animation: "mb-ping 1.4s infinite" }} />
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: k.c }} />
        </span>
      )}
      {children}
    </span>
  );
}

function GlassCard({ children, style }) {
  return (
    <div className="lm-glass" style={{
      background: "rgba(255,255,255,.03)",
      border: "1px solid rgba(255,255,255,.06)",
      borderRadius: 20,
      backdropFilter: "blur(20px)",
      padding: "24px 22px",
      transition: "all .4s cubic-bezier(.22,1,.36,1)",
      ...style,
    }}>{children}</div>
  );
}

function Counter({ n }) {
  return <div style={{
    fontFamily: "var(--font-heading)", fontWeight: 600,
    fontSize: 10.5, color: "#4d7cff", textTransform: "uppercase", letterSpacing: ".12em",
    marginBottom: 10,
  }}>{String(n).padStart(2, "0")} · Étape</div>;
}

function BoltIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-1.8-.9-3-1.7-4.2-3.8-.3-.5.3-.5.9-1.7.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5H7.2c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.9 5.2 2.2.9 3 1 4.1.8.7-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5 0-.2-.3-.3-.6-.5zM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2z"/>
    </svg>
  );
}

function CopyIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

window.LM = Object.assign(window.LM || {}, {
  Logo, Badge, GlassCard, Counter,
  BoltIcon, ArrowIcon, CheckIcon, WhatsAppIcon, CopyIcon,
});
