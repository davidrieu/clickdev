'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';

const STEPS = [
  {
    n: '01',
    title: 'Cadrage',
    body: 'Objectifs business, risques, SEO et contraintes éditoriales — priorisation par valeur.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'Parcours, contenu, composants — le design sert la conversion et la vitesse perçue.',
  },
  {
    n: '03',
    title: 'Développement',
    body: 'Implémentation propre, revues, CI, préproduction réaliste — dette maîtrisée.',
  },
  {
    n: '04',
    title: 'Tests',
    body: 'Devices réels, accessibilité, perf, cas limites — rien n’atteint la prod par surprise.',
  },
  {
    n: '05',
    title: 'Lancement',
    body: 'Mise en ligne, redirections, monitoring — et une feuille de route post go-live.',
  },
] as const;

export function PremiumProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.25', 'end 0.65'],
  });

  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-white/[0.06] bg-[oklch(0.09_0_0)] py-24 md:py-40 lg:py-48"
    >
      <div className="mx-auto max-w-[900px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">Process</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.8vw,3rem)] font-medium tracking-[-0.03em] text-white">
            Cinq étapes, zéro boîte noire
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-20 max-w-2xl">
          <div className="absolute bottom-2 left-[11px] top-2 w-px bg-white/[0.08] md:left-[15px]" aria-hidden />
          <motion.div
            className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-gradient-to-b from-[#F26A06] via-[#F26A06]/70 to-[#F26A06]/15 md:left-[15px]"
            style={{ scaleY: lineScale }}
            aria-hidden
          />

          <ol className="relative space-y-16 md:space-y-20">
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
      className="relative grid grid-cols-[32px_1fr] gap-6 md:grid-cols-[40px_1fr] md:gap-10"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
    >
      <div className="relative z-10 flex justify-center pt-1">
        <span
          className={`flex size-6 items-center justify-center rounded-full border text-[10px] font-medium tabular-nums transition md:size-8 md:text-xs ${
            lit
              ? 'border-[#F26A06]/50 bg-black text-[#F26A06] shadow-[0_0_20px_-4px_rgba(242,106,6,0.4)]'
              : 'border-white/15 bg-black text-white/40'
          }`}
        >
          {index + 1}
        </span>
      </div>
      <div className="border-b border-white/[0.06] pb-16 md:pb-20">
        <p className="si-serif-display text-5xl font-medium italic leading-none text-white/15 md:text-7xl">
          {step.n}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">{step.title}</h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60 md:text-base">{step.body}</p>
        <GeoArt seed={index} />
      </div>
    </motion.li>
  );
}

function GeoArt({ seed }: { seed: number }) {
  const patterns = [
    <div key="a" className="mt-6 flex gap-2" aria-hidden>
      <div className="h-12 w-12 rotate-12 rounded-sm border border-white/15 bg-white/[0.03]" />
      <div className="h-12 w-20 -rotate-6 rounded-sm border border-[#F26A06]/20 bg-[#F26A06]/5" />
    </div>,
    <div key="b" className="mt-6 flex items-end gap-2" aria-hidden>
      <div className="h-8 w-24 rounded-full border border-white/12" />
      <div className="h-14 w-14 rounded-full border border-white/10" />
    </div>,
    <div key="c" className="mt-6 flex gap-1" aria-hidden>
      {[0, 1, 2, 3, 4].map((j) => (
        <div key={j} className="h-10 w-1.5 rounded-full bg-white/[0.08]" style={{ opacity: 1 - j * 0.15 }} />
      ))}
    </div>,
    <div key="d" className="mt-6" aria-hidden>
      <div className="h-14 max-w-[200px] skew-x-[-8deg] rounded-lg border border-white/10 bg-gradient-to-r from-white/[0.06] to-transparent" />
    </div>,
    <div key="e" className="mt-6 flex gap-3" aria-hidden>
      <div className="size-14 rounded-md border border-white/12" />
      <div className="h-14 flex-1 max-w-[160px] rounded-md border border-white/8 bg-white/[0.02]" />
    </div>,
  ];
  return patterns[seed % patterns.length];
}
