/** @jsx React.createElement */
const { useState, useEffect } = React;
const { Logo, Badge } = window.LM;

function Header() {
  return (
    <header style={{ padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Logo />
      <div style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 36, height: 36, borderRadius: 9999,
        border: "1px solid rgba(255,255,255,.1)", background: "rgba(255,255,255,.05)",
      }}>
        <svg viewBox="0 0 60 40" style={{ width: 18, height: 18, borderRadius: 9999 }}>
          <rect width="20" height="40" fill="#0055A4" />
          <rect x="20" width="20" height="40" fill="#FFFFFF" />
          <rect x="40" width="20" height="40" fill="#EF4135" />
        </svg>
      </div>
    </header>
  );
}

function Hero() {
  const words = ["Tes", "native ads", "ramènent du", "trafic.", "Moonbundles", "le transforme"];
  return (
    <section style={{ padding: "28px 24px 20px", textAlign: "left" }}>
      <div style={{ marginBottom: 20 }}>
        <Badge color="blue">Guide Gratuit · Native Ads</Badge>
      </div>
      <h1 style={{
        margin: 0, fontFamily: "var(--font-heading)", fontWeight: 700,
        fontSize: "clamp(32px, 7vw, 46px)", lineHeight: 1.05, letterSpacing: "-0.02em",
        color: "#fff",
      }}>
        Crée des publicités <br/>
        <span style={{
          backgroundImage: "linear-gradient(90deg,#4d7cff,#7c5cff,#5b8def)",
          WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
        }}>qui scalent</span> en 2026.
      </h1>
      <p style={{
        marginTop: 16, marginBottom: 0, color: "#94a3b8",
        fontSize: 15, lineHeight: 1.6, maxWidth: "62ch",
      }}>
        5 étapes pour générer des visuels natifs avec Nanobanana, <span style={{color:"#4d7cff",fontWeight:600}}>sans designer</span>, sans Photoshop. Les mêmes prompts qu'on utilise en interne.
      </p>
    </section>
  );
}

window.LM = Object.assign(window.LM || {}, { Header, Hero });
