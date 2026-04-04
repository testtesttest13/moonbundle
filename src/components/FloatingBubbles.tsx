"use client";

import { motion } from "framer-motion";

const bubbles = [
  { size: 300, x: "10%", y: "5%", color: "bg-blue-accent/6", duration: 18, delay: 0 },
  { size: 200, x: "80%", y: "15%", color: "bg-violet-accent/5", duration: 22, delay: 3 },
  { size: 350, x: "50%", y: "35%", color: "bg-blue-accent/4", duration: 25, delay: 1 },
  { size: 250, x: "20%", y: "55%", color: "bg-violet-accent/5", duration: 20, delay: 5 },
  { size: 180, x: "75%", y: "50%", color: "bg-blue-light/4", duration: 16, delay: 2 },
  { size: 280, x: "40%", y: "75%", color: "bg-blue-accent/5", duration: 24, delay: 4 },
  { size: 220, x: "90%", y: "80%", color: "bg-violet-accent/4", duration: 19, delay: 6 },
  { size: 160, x: "5%", y: "85%", color: "bg-blue-light/5", duration: 21, delay: 1.5 },
];

export default function FloatingBubbles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Grid / quadrillage */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${b.color} blur-[100px]`}
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
          }}
          animate={{
            y: [0, -40, 0, 30, 0],
            x: [0, 20, 0, -15, 0],
            scale: [1, 1.1, 1, 0.95, 1],
            opacity: [0.4, 0.7, 0.4, 0.6, 0.4],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
