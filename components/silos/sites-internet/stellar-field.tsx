'use client';

import type { PointerEvent } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export type StellarPointer = { x: number; y: number } | null;

type Star = {
  leftPct: number;
  topPct: number;
  size: number;
  delay: number;
};

function buildStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    leftPct: ((i * 37) % 100) + (i % 3) * 0.4,
    topPct: ((i * 53) % 100) + ((i * 7) % 5) * 0.3,
    size: 1 + (i % 4),
    delay: (i % 9) * 0.35,
  }));
}

function repelOffset(
  starLeftPct: number,
  starTopPct: number,
  ptr: { x: number; y: number },
  minSide: number,
): { x: number; y: number } {
  const sx = starLeftPct / 100;
  const sy = starTopPct / 100;
  const vx = sx - ptr.x;
  const vy = sy - ptr.y;
  const dist = Math.hypot(vx, vy);
  if (dist < 1e-4) return { x: 0, y: 0 };
  const ux = vx / dist;
  const uy = vy / dist;
  const influence = Math.max(0, 1 - dist / 0.42);
  const mag = influence * minSide * 0.07;
  return { x: ux * mag, y: uy * mag };
}

type Props = {
  count?: number;
  className?: string;
  /** Pointeur normalisé (0–1) dans la section : repousse les étoiles */
  pointer?: StellarPointer;
  /** Active le déplacement (désactivé si `prefers-reduced-motion`) */
  interactive?: boolean;
};

/** Champ d’étoiles CSS (`.si-cta-star`) ; optionnellement repoussé par le pointeur / le doigt. */
export function StellarField({ count = 52, className = '', pointer = null, interactive = false }: Props) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 1, h: 1 });
  const stars = useMemo(() => buildStars(count), [count]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setSize({ w: Math.max(1, r.width), h: Math.max(1, r.height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const minSide = Math.min(size.w, size.h);
  const active = interactive && !reduce && pointer != null;

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {stars.map((s, i) => {
        const off =
          active && pointer ? repelOffset(s.leftPct, s.topPct, pointer, minSide) : { x: 0, y: 0 };
        return (
          <span
            key={i}
            className="si-cta-star absolute rounded-full bg-white"
            style={{
              left: `${s.leftPct}%`,
              top: `${s.topPct}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              transform: `translate(${off.x}px, ${off.y}px)`,
            }}
          />
        );
      })}
    </div>
  );
}

/** Lit la position du pointeur dans la section (`onPointerMoveCapture` pour capter au-dessus des enfants). */
export function useSectionStellarPointer() {
  const [pointer, setPointer] = useState<StellarPointer>(null);

  const onPointerMoveCapture = useCallback((e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / Math.max(1, r.width);
    const y = (e.clientY - r.top) / Math.max(1, r.height);
    setPointer({ x, y });
  }, []);

  const onPointerLeave = useCallback(() => setPointer(null), []);

  return { pointer, onPointerMoveCapture, onPointerLeave };
}
