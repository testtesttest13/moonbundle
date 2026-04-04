"use client";

export default function FloatingBubbles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Quadrillage subtil */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbs - CSS only, pas de framer-motion = 0 JS pour le fond */}
      <div className="absolute top-[5%] left-[10%] h-72 w-72 rounded-full bg-blue-accent/5 blur-[100px] animate-pulse-glow" />
      <div className="absolute top-[30%] right-[15%] h-56 w-56 rounded-full bg-violet-accent/4 blur-[100px] animate-pulse-glow [animation-delay:3s]" />
      <div className="absolute top-[60%] left-[20%] h-64 w-64 rounded-full bg-blue-light/4 blur-[100px] animate-pulse-glow [animation-delay:5s]" />
      <div className="absolute top-[80%] right-[10%] h-48 w-48 rounded-full bg-blue-accent/4 blur-[100px] animate-pulse-glow [animation-delay:2s]" />
    </div>
  );
}
