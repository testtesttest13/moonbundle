"use client";

import { useMemo } from "react";

type Star = { x: number; y: number; s: number; o: number; delay: number; dur: number };

function buildStars(count: number): Star[] {
  let seed = 1337;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const out: Star[] = [];
  for (let i = 0; i < count; i++) {
    const size = rand() < 0.85 ? 1 : rand() < 0.6 ? 1.5 : 2.5;
    out.push({
      x: rand() * 100,
      y: rand() * 100,
      s: size,
      o: 0.25 + rand() * 0.6,
      delay: rand() * 6,
      dur: 3 + rand() * 5,
    });
  }
  return out;
}

export default function StarfieldBg({ count = 140 }: { count?: number }) {
  const stars = useMemo(() => buildStars(count), [count]);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.s,
            height: s.s,
            opacity: s.o,
            boxShadow: s.s >= 2 ? `0 0 ${s.s * 3}px rgba(255,255,255,.6)` : undefined,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
