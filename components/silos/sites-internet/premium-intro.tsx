'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';

import { StellarField, useSectionStellarPointer } from './stellar-field';

function useAnimatedMetric(
  from: number,
  target: number,
  suffix = '',
  decimals = 0,
  enabled: boolean,
) {
  const [v, setV] = useState(from);
  useEffect(() => {
    if (!enabled) return;
    const controls = animate(from, target, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setV(latest),
    });
    return () => controls.stop();
  }, [from, target, enabled]);
  const formatted = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString();
  return `${formatted}${suffix}`;
}

export function PremiumIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-12%' });
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  const lh = useAnimatedMetric(0, 100, '', 0, inView);
  const speed = useAnimatedMetric(2.4, 0.9, '', 1, inView);
  const zero = useAnimatedMetric(3, 0, '', 0, inView);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[oklch(0.11_0_0)] py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={38} className="opacity-[0.5]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8">
        <motion.h2
          className="si-serif-display text-balance text-[clamp(1.85rem,4.2vw,3.75rem)] leading-[1.12] font-medium tracking-[-0.03em] text-white"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Chaque site que je construis est une promesse tenue : performant, pérenne, et pensé pour convertir.
        </motion.h2>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-16 md:grid-cols-3 md:gap-8 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="relative md:border-r md:border-white/10 md:pr-8"
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">Perf</p>
            <p className="mt-3 text-5xl font-semibold tabular-nums tracking-tight text-white md:text-6xl lg:text-7xl">
              {lh}
              <span className="text-white/50">/100</span>
            </p>
            <p className="mt-2 text-sm text-white/55">Lighthouse — objectif mobile.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.55 }}
            className="relative md:border-r md:border-white/10 md:px-2 md:pr-8"
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">Vitesse</p>
            <p className="mt-3 text-5xl font-semibold tabular-nums tracking-tight text-white md:text-6xl lg:text-7xl">
              {'< '}
              {speed}
              <span className="text-white/50">s</span>
            </p>
            <p className="mt-2 text-sm text-white/55">Chargement perçu cible sur vitrine cadrée.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.26, duration: 0.55 }}
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">Sérieux</p>
            <p className="mt-3 text-5xl font-semibold tabular-nums tracking-tight text-white md:text-6xl lg:text-7xl">
              {zero}
            </p>
            <p className="mt-2 text-sm text-white/55">Site web livré sans être laissé en plan — objectif zéro abandon.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
