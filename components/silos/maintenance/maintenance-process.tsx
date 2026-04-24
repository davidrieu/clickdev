'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { MAINTENANCE_PROCESS_STEPS } from '@/lib/constants/maintenance-pillar-premium';

import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

const STEPS = MAINTENANCE_PROCESS_STEPS;

export function MaintenanceProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.25', 'end 0.65'],
  });

  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-24 md:py-40 lg:py-48"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={44} className="opacity-[0.65]" interactive pointer={pointer} />
      <div className="relative z-10 si-shell-900">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">Process</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.8vw,3rem)] font-medium tracking-[-0.03em] text-white">
            Cinq étapes pour une prod qui respire
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-14 max-w-2xl">
          <div className="absolute bottom-2 left-[13px] top-2 w-px bg-white/[0.08] md:left-[16px]" aria-hidden />
          <motion.div
            className="absolute bottom-2 left-[13px] top-2 w-px origin-top bg-gradient-to-b from-white/55 via-white/35 to-white/10 md:left-[16px]"
            style={{ scaleY: lineScale }}
            aria-hidden
          />

          <ol className="relative space-y-10 md:space-y-12">
            {STEPS.map((step, i) => (
              <ProcessStep key={step.n} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const ref = useRef(null);
  const lit = useInView(ref, { amount: 0.45, margin: '-5% 0px' });

  return (
    <motion.li
      ref={ref}
      className="relative grid grid-cols-[26px_1fr] gap-4 md:grid-cols-[32px_1fr] md:gap-8"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
    >
      <div className="relative z-10 flex justify-center pt-0.5">
        <span
          className={`flex size-5 items-center justify-center rounded-full border text-[9px] font-medium tabular-nums transition md:size-6 md:text-[10px] ${
            lit
              ? 'border-white/40 bg-black text-white shadow-[0_0_16px_-4px_rgba(255,255,255,0.2)]'
              : 'border-white/15 bg-black text-white/40'
          }`}
        >
          {index + 1}
        </span>
      </div>
      <div className="border-b border-white/[0.06] pb-10 md:pb-12">
        <p className="si-serif-display text-2xl font-medium italic leading-none text-white/15 md:text-3xl">
          {step.n}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-white md:text-xl">{step.title}</h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60 md:text-base">{step.body}</p>
        <GeoArt seed={index} />
      </div>
    </motion.li>
  );
}

function GeoArt({ seed }: { seed: number }) {
  const patterns = [
    <div key="a" className="mt-4 flex gap-2" aria-hidden>
      <div className="h-12 w-12 rotate-12 rounded-sm border border-white/15 bg-white/[0.03]" />
      <div className="h-12 w-20 -rotate-6 rounded-sm border border-white/15 bg-white/[0.04]" />
    </div>,
    <div key="b" className="mt-4 flex items-end gap-2" aria-hidden>
      <div className="h-8 w-24 rounded-full border border-white/12" />
      <div className="h-14 w-14 rounded-full border border-white/10" />
    </div>,
    <div key="c" className="mt-4 flex gap-1" aria-hidden>
      {[0, 1, 2, 3, 4].map((j) => (
        <div key={j} className="h-10 w-1.5 rounded-full bg-white/[0.08]" style={{ opacity: 1 - j * 0.15 }} />
      ))}
    </div>,
    <div key="d" className="mt-4" aria-hidden>
      <div className="h-14 max-w-[200px] skew-x-[-8deg] rounded-lg border border-white/10 bg-gradient-to-r from-white/[0.06] to-transparent" />
    </div>,
    <div key="e" className="mt-4 flex gap-3" aria-hidden>
      <div className="size-14 rounded-md border border-white/12" />
      <div className="h-14 flex-1 max-w-[160px] rounded-md border border-white/8 bg-white/[0.02]" />
    </div>,
  ];
  return patterns[seed % patterns.length];
}
