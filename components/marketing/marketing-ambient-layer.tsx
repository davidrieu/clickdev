"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Fond marketing discret : grille légère + halos très atténués (lisibilité type doc produit).
 */
export function MarketingAmbientLayer() {
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/:/g, "");

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <svg
        className="absolute -left-[12%] top-0 h-full w-[min(140%,1200px)] opacity-[0.05] md:opacity-[0.07]"
        viewBox="0 0 600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid slice"
      >
        <defs>
          <linearGradient id={`${uid}-stroke`} x1="0" y1="0" x2="600" y2="900" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f26a06" stopOpacity="0" />
            <stop offset="0.35" stopColor="#d10a8a" stopOpacity="0.28" />
            <stop offset="0.7" stopColor="#2e08cf" stopOpacity="0.08" />
            <stop offset="1" stopColor="#f26a06" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 120 C180 40 320 200 600 80 M40 360 C220 280 380 440 560 320 M0 640 C200 520 400 720 600 600 M120 900 C300 760 480 860 520 780"
          stroke={`url(#${uid}-stroke)`}
          strokeWidth="1.1"
          vectorEffect="non-scaling-stroke"
        />
        <g opacity="0.22">
          {Array.from({ length: 14 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={42 + i * 42}
              y1="0"
              x2={42 + i * 42}
              y2="900"
              stroke="currentColor"
              className="text-line"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
      </svg>

      {!reduceMotion ? (
        <>
          <motion.div
            className="absolute -right-[18%] top-[8%] h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full bg-[#f26a06]/12 blur-[120px]"
            animate={{ opacity: [0.05, 0.12, 0.07], scale: [1, 1.06, 1], x: [0, 18, -10, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-[8%] bottom-[6%] h-[min(320px,48vw)] w-[min(320px,48vw)] rounded-full bg-[#2e08cf]/10 blur-[100px]"
            animate={{ opacity: [0.04, 0.1, 0.06], scale: [1, 1.04, 1], y: [0, -14, 8, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
        </>
      ) : (
        <div className="absolute -right-[18%] top-[8%] h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full bg-[#d10a8a]/10 blur-[110px]" />
      )}
    </div>
  );
}
