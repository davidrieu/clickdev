'use client';

import type { PointerEvent } from 'react';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export type StellarPointer = { x: number; y: number } | null;

type Star = {
  leftPct: number;
  topPct: number;
  size: number;
  delay: number;
};

type ShootBurst = {
  key: number;
  leftPct: number;
  topPct: number;
  angleDeg: number;
  distPx: number;
  durationMs: number;
  streakW: number;
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
  /**
   * Trait lumineux aléatoire toutes les ~2–3 s (un seul champ actif évite la surcharge si plusieurs sections).
   * @default false
   */
  shootingMeteors?: boolean;
  /**
   * Frappe des météores : facteur d’espace sur les délais (plus bas = météores plus fréquents, ex. 0,45 pour CTA nav).
   * @default 1
   */
  shootingIntervalScale?: number;
};

/** Champ d’étoiles CSS (`.si-cta-star`) ; optionnellement repoussé par le pointeur / le doigt. */
export function StellarField({
  count = 52,
  className = '',
  pointer = null,
  interactive = false,
  shootingMeteors = false,
  shootingIntervalScale = 1,
}: Props) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 1, h: 1 });
  const sizeRef = useRef({ w: 1, h: 1 });
  useLayoutEffect(() => {
    sizeRef.current = size;
  }, [size]);
  const [shootBurst, setShootBurst] = useState<ShootBurst | null>(null);
  const shootKeyRef = useRef(0);
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

  /** Étoiles filantes : tir aléatoire toutes les 2–3 s (désactivé si reduced motion ou si `shootingMeteors` est false). */
  useEffect(() => {
    if (reduce || !shootingMeteors) {
      const t = setTimeout(() => {
        setShootBurst(null);
      }, 0);
      return () => {
        clearTimeout(t);
      };
    }
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const fire = () => {
      const { w, h } = sizeRef.current;
      const diagonal = Math.hypot(w, h);
      const distPx = Math.min(Math.max(180, diagonal * (0.82 + Math.random() * 0.45)), 980);
      const angleDeg = 18 + Math.random() * 52;
      const leftPct = -12 + Math.random() * 52;
      const topPct = -14 + Math.random() * 48;
      /* Total long : phase trajet ~16 % du keyframe, le reste = traînée qui s’estompe. */
      const durationMs = Math.round(3200 + Math.random() * 1400);
      const streakW = Math.round(Math.min(240, Math.max(110, diagonal * 0.17)));

      shootKeyRef.current += 1;
      setShootBurst({
        key: shootKeyRef.current,
        leftPct,
        topPct,
        angleDeg,
        distPx,
        durationMs,
        streakW,
      });
    };

    const s = Math.max(0.15, Math.min(1.2, shootingIntervalScale));

    const schedule = (isFirst = false) => {
      /* Tir suivant après la fin approx. de la traînée (anim ~3,2–4,6 s) pour limiter les chevauchements. */
      const base = isFirst ? 450 + Math.random() * 1300 : 3200 + Math.random() * 1400;
      const waitMs = base * s;
      timeoutId = setTimeout(() => {
        if (cancelled) return;
        fire();
        schedule(false);
      }, waitMs);
    };

    schedule(true);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [reduce, shootingMeteors, shootingIntervalScale]);

  const minSide = Math.min(size.w, size.h);
  const active = interactive && !reduce && pointer != null;

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {shootBurst ? (
        <div
          key={shootBurst.key}
          className="absolute z-[2]"
          style={{ left: `${shootBurst.leftPct}%`, top: `${shootBurst.topPct}%` }}
        >
          <div
            className="si-stellar-shoot-inner h-[2px]"
            style={{
              width: shootBurst.streakW,
              ['--shoot-a' as string]: `${shootBurst.angleDeg}deg`,
              ['--shoot-d' as string]: `${shootBurst.distPx}px`,
              animationDuration: `${shootBurst.durationMs}ms`,
            }}
          />
        </div>
      ) : null}
      {stars.map((s, i) => {
        const off =
          active && pointer ? repelOffset(s.leftPct, s.topPct, pointer, minSide) : { x: 0, y: 0 };
        // Le translate du pointeur doit rester sur un parent : l’animation `.si-cta-star` (keyframes)
        // pilote aussi `transform` (scale) et écraserait un translate sur le même nœud.
        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${s.leftPct}%`,
              top: `${s.topPct}%`,
              width: s.size,
              height: s.size,
              transform: `translate(${off.x}px, ${off.y}px)`,
            }}
          >
            <span
              className="si-cta-star block size-full rounded-full bg-white"
              style={{ animationDelay: `${s.delay}s` }}
            />
          </span>
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

/**
 * Pointeur 0–1 sur une hauteur de ciel = `heightVh` vh (aligné sur un Stellar en absolu du même
 * hauteur), y = (scrollY + clientY) / (heightVh × 1px par vh).
 */
export function useSkyStellarPointer(heightVh: number) {
  const [pointer, setPointer] = useState<StellarPointer>(null);

  useEffect(() => {
    const onMove = (e: globalThis.PointerEvent) => {
      const w = document.documentElement.clientWidth;
      if (w < 1) return;
      const vh = window.innerHeight;
      const fieldH = Math.max(1, (heightVh * vh) / 100);
      const y = (window.scrollY + e.clientY) / fieldH;
      setPointer({
        x: e.clientX / w,
        y: Math.min(1, Math.max(0, y)),
      });
    };
    const listener = (ev: globalThis.Event) => {
      onMove(ev as globalThis.PointerEvent);
    };
    window.addEventListener('pointermove', listener, { passive: true });
    return () => {
      window.removeEventListener('pointermove', listener);
    };
  }, [heightVh]);

  return { pointer };
}
