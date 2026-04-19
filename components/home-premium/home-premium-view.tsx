'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';

import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { HomeCasePreview } from '@/lib/constants/home-content';
import {
  HOME_FAQ_ITEMS,
  HOME_PROCESS_STEPS,
  HOME_SERVICE_CARDS,
  HOME_STACK_ITEMS,
  HOME_TESTIMONIALS,
} from '@/lib/constants/home-content';
import { SITES_INTERNET_MARQUEE_CLIENTS } from '@/lib/constants/sites-internet-premium';
import type { SanityPostTeaser } from '@/types/sanity-post';
import { PlusIcon } from 'lucide-react';

import { HpHero } from './hp-hero';

const logos = [
  '/assets/company-logo-1.svg',
  '/assets/company-logo-2.svg',
  '/assets/company-logo-3.svg',
  '/assets/company-logo-4.svg',
  '/assets/company-logo-5.svg',
] as const;

function useAnimatedMetric(from: number, target: number, suffix = '', decimals = 0, enabled: boolean) {
  const [v, setV] = useState(from);
  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1350;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - (1 - t) ** 3;
      const val = from + (target - from) * eased;
      setV(val);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [from, target, enabled]);
  const formatted = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString();
  return `${formatted}${suffix}`;
}

function HeroClientPill({ label, subtle }: { label: string; subtle?: boolean }) {
  return (
    <span
      className={`shrink-0 rounded-full border px-5 py-2.5 font-mono text-[11px] tracking-wider uppercase transition ${
        subtle
          ? 'border-white/[0.07] bg-white/[0.02] text-white/45'
          : 'border-white/12 bg-white/[0.04] text-white/70'
      }`}
    >
      {label}
    </span>
  );
}

function HpClientMarquee() {
  const row = useMemo(() => [...SITES_INTERNET_MARQUEE_CLIENTS, ...SITES_INTERNET_MARQUEE_CLIENTS], []);
  return (
    <div className="relative z-10 mt-14 border-y border-white/[0.07] md:mt-20">
      <div className="mx-auto flex w-full max-w-[1400px] min-h-[100px] items-center justify-center px-4 py-8 md:min-h-[112px] md:px-8 md:py-10">
        <div className="w-full overflow-hidden mask-[linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
          <div className="si-marquee-l flex w-max flex-nowrap items-center gap-3 pr-3">
            {row.map((label, i) => (
              <HeroClientPill key={`${label}-${i}`} label={label} subtle={i % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HpLogos() {
  return (
    <section className="border-t border-white/[0.06] bg-black py-14 md:py-16">
      <div className="mx-auto max-w-[1100px] px-4 md:px-8">
        <p className="text-center font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">
          Ils m’ont fait confiance
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-10 md:justify-between">
          {logos.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={140}
              height={28}
              className="h-7 w-auto opacity-55 transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceNightGlow() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.65] transition duration-500 group-hover:opacity-[0.82]"
        style={{
          background:
            'radial-gradient(ellipse 22% 18% at 96% 6%, rgba(46, 8, 207, 0.58), transparent 68%), radial-gradient(ellipse 16% 14% at 8% 88%, rgba(36, 6, 160, 0.42), transparent 72%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black via-black/85 to-transparent" />
    </div>
  );
}

function HpServices() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  return (
    <section
      className="relative overflow-hidden border-t border-white/[0.06] bg-black py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={40} className="opacity-[0.55]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/50 uppercase">Expertises</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.9rem,3.6vw,3.1rem)] font-medium tracking-[-0.03em] text-white">
            Six façons d’accélérer votre produit digital
          </h2>
          <p className="mt-4 text-sm text-white/60 md:text-base">
            Du site vitrine à l’IA en production — une entrée par silo, le même niveau d’exigence.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {HOME_SERVICE_CARDS.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6%' }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="min-h-[220px]"
            >
              <motion.div
                className="h-full"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                <Link
                  href={card.href}
                  className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-black to-neutral-950 p-6 transition duration-500 hover:border-white/[0.14]"
                >
                  <ServiceNightGlow />
                  <div className="relative z-[2] mt-auto">
                    <span className="font-mono text-[10px] text-white/40">{card.number}</span>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.75)] md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
                      {card.description}
                    </p>
                    <p className="mt-3 font-mono text-[10px] tracking-wider text-white/45">{card.tags.join(' · ')}</p>
                    <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/60 uppercase transition group-hover:gap-3 group-hover:text-white">
                      Découvrir <span aria-hidden>↗</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HpCases({ previews, intro }: { previews: HomeCasePreview[]; intro?: string }) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  return (
    <section
      className="relative overflow-hidden border-t border-white/[0.06] bg-black py-24 md:py-40 lg:py-48"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={48} className="opacity-[0.68]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">Réalisations</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.5vw,3rem)] font-medium tracking-[-0.03em] text-white">
            Études de cas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/58 md:text-base">
            {intro ??
              'Projets représentatifs — métriques et récit détaillés sur chaque fiche réalisation.'}
          </p>
        </motion.div>
        <div className="mt-14 space-y-12 border-t border-white/10 pt-12">
          {previews.map((c, index) => (
            <motion.div
              key={`${c.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="grid gap-8 border-b border-white/[0.07] pb-12 last:border-0 last:pb-0 md:grid-cols-2 md:items-start"
            >
              <div>
                <p className="font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">{c.category}</p>
                <h3 className="si-serif-display mt-2 text-2xl font-medium tracking-tight text-white md:text-3xl">
                  <Link href={c.href} className="transition hover:text-white/90 hover:underline hover:underline-offset-4">
                    {c.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{c.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 text-center md:p-4"
                  >
                    <p className="text-base font-semibold tabular-nums text-white/90 md:text-lg">{m.value}</p>
                    <p className="mt-1 text-[10px] text-white/50 md:text-xs">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/realisations"
            className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase transition hover:text-white/90"
          >
            Voir toutes les réalisations →
          </Link>
        </p>
      </div>
    </section>
  );
}

function HpMetrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-12%' });
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  const lh = useAnimatedMetric(0, 100, '', 0, inView);
  const speed = useAnimatedMetric(2.4, 0.9, '', 1, inView);
  const zero = useAnimatedMetric(3, 0, '', 0, inView);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.06] bg-[oklch(0.09_0_0)] py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={36} className="opacity-[0.5]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8">
        <motion.h2
          className="si-serif-display text-balance text-center text-[clamp(1.85rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Chaque livraison est une promesse tenue : perf, SEO technique, accessibilité — et conversion.
        </motion.h2>
        <div className="mt-16 grid gap-12 border-t border-white/10 pt-14 md:grid-cols-3 md:gap-8 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="relative md:border-r md:border-white/10 md:pr-8"
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">Perf</p>
            <p className="mt-3 text-5xl font-semibold tabular-nums tracking-tight text-white md:text-6xl">
              {lh}
              <span className="text-white/50">/100</span>
            </p>
            <p className="mt-2 text-sm text-white/55">Lighthouse — objectif mobile.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.14, duration: 0.55 }}
            className="relative md:border-r md:border-white/10 md:px-2 md:pr-8"
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">Vitesse</p>
            <p className="mt-3 text-5xl font-semibold tabular-nums tracking-tight text-white md:text-6xl">
              {'< '}
              {speed}
              <span className="text-white/50">s</span>
            </p>
            <p className="mt-2 text-sm text-white/55">Chargement perçu cible sur vitrine cadrée.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">Sérieux</p>
            <p className="mt-3 text-5xl font-semibold tabular-nums tracking-tight text-white md:text-6xl">{zero}</p>
            <p className="mt-2 text-sm text-white/55">Objectif zéro abandon de projet.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const PROCESS_STEPS_UI = HOME_PROCESS_STEPS.map((s, i) => ({
  n: String(i + 1).padStart(2, '0'),
  title: s.title,
  body: s.description,
}));

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
  ];
  return patterns[seed % patterns.length];
}

function HomeProcessStep({ step, index }: { step: (typeof PROCESS_STEPS_UI)[number]; index: number }) {
  const r = useRef(null);
  const lit = useInView(r, { amount: 0.45, margin: '-5% 0px' });
  return (
    <motion.li
      ref={r}
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
        <p className="si-serif-display text-2xl font-medium italic leading-none text-white/15 md:text-3xl">{step.n}</p>
        <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-white md:text-xl">{step.title}</h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60 md:text-base">{step.body}</p>
        <GeoArt seed={index} />
      </div>
    </motion.li>
  );
}

function HpProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.25', 'end 0.65'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/[0.06] bg-black py-24 md:py-40 lg:py-48"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={44} className="opacity-[0.65]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[900px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">Process</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.8vw,3rem)] font-medium tracking-[-0.03em] text-white">
            Cinq étapes, zéro boîte noire
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
            {PROCESS_STEPS_UI.map((step, i) => (
              <HomeProcessStep key={`${step.n}-${step.title}`} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TechPill({ label, subtle }: { label: string; subtle?: boolean }) {
  return (
    <span
      className={`shrink-0 rounded-full border px-5 py-2.5 font-mono text-[11px] tracking-wider uppercase transition ${
        subtle
          ? 'border-white/[0.07] bg-white/[0.02] text-white/45'
          : 'border-white/12 bg-white/[0.04] text-white/70'
      }`}
    >
      {label}
    </span>
  );
}

function HpStackMarquee() {
  const rowA = useMemo(() => [...HOME_STACK_ITEMS, ...HOME_STACK_ITEMS], []);
  const rowBseq = useMemo(() => {
    const mid = Math.ceil(HOME_STACK_ITEMS.length / 2);
    const shifted = [...HOME_STACK_ITEMS.slice(mid), ...HOME_STACK_ITEMS.slice(0, mid)];
    return [...shifted, ...shifted];
  }, []);

  return (
    <section className="border-t border-white/[0.06] bg-black py-24 md:py-36 lg:py-44">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-center lg:gap-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">Stack</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.75rem,3vw,2.75rem)] font-medium tracking-[-0.02em] text-white">
            La techno au service du produit
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/58 md:text-base">
            Expertises documentées — pages dédiées pour approfondir avant de choisir.
          </p>
        </motion.div>
        <div className="space-y-4 overflow-hidden">
          <div className="overflow-hidden mask-[linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="si-marquee-l flex w-max gap-3 pr-3">
              {rowA.map((item, i) => (
                <TechPill key={`a-${item.slug}-${i}`} label={item.name} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden mask-[linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="si-marquee-r flex w-max gap-3 pr-3">
              {rowBseq.map((item, i) => (
                <TechPill key={`b-${item.slug}-${i}`} label={item.name} subtle />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HpAbout() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  return (
    <section
      className="relative overflow-hidden border-t border-white/[0.06] bg-[oklch(0.09_0_0)] py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={38} className="opacity-[0.55]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.08] to-white/[0.02] lg:mx-0"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            aria-hidden
          />
          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">À propos</p>
            <h2 className="si-serif-display mt-3 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium tracking-[-0.02em] text-white">
              Derrière Clickdev, <span className="text-white/85">David Rieu</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/72 md:text-base">
              Une décennie de projets web, mobile et outils métiers. J’aime les équipes exigeantes, les sujets
              techniques sérieux, et les livrables qui tiennent dans le temps.
            </p>
            <Link
              href="/a-propos"
              className="si-btn-pill-shine mt-8 inline-flex rounded-full border border-white/25 bg-white/[0.04] px-6 py-2.5 text-sm font-medium text-white/90 transition hover:border-white/40"
            >
              <span className="relative z-10">En savoir plus</span>
            </Link>
          </div>
        </div>

        <motion.h3
          className="si-serif-display mt-20 text-center text-2xl font-medium tracking-tight text-white md:mt-24 md:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Témoignages
        </motion.h3>
        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          {HOME_TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/[0.08] bg-black/40 p-6"
            >
              <p className="text-sm leading-relaxed text-white/80 md:text-base">« {t.quote} »</p>
              <footer className="mt-5 border-l-2 border-white/30 pl-4">
                <cite className="not-italic text-sm font-medium text-white/90">{t.name}</cite>
                <p className="mt-1 text-xs tracking-wider text-white/45 uppercase">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function HpFaq() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  return (
    <section
      className="relative overflow-hidden border-t border-white/[0.06] bg-black py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={32} className="opacity-[0.45]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-2xl px-4 md:px-8">
        <motion.h2
          className="si-serif-display text-center text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium tracking-[-0.02em] text-white"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          FAQ
        </motion.h2>
        <p className="mx-auto mt-4 text-center text-sm text-white/58 md:text-base">
          Les questions les plus fréquentes avant de lancer un projet.
        </p>
        <div className="mt-10">
          <Accordion multiple={false} defaultValue={[]} className="space-y-2">
            {HOME_FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-1 data-[state=open]:bg-white/[0.05]"
              >
                <AccordionTrigger className="px-4 py-4 text-left text-sm font-medium hover:no-underline md:text-base [&_[data-slot=accordion-trigger-icon]]:hidden">
                  <span className="flex flex-1 items-start gap-3 pr-2">
                    <PlusIcon className="mt-0.5 size-4 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pl-11 text-sm leading-relaxed text-white/75">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const BLOG_PLACEHOLDERS: SanityPostTeaser[] = [
  {
    _id: 'ph-1',
    title: 'WordPress vs Next.js en 2026 : lequel choisir ?',
    slug: 'wordpress-vs-nextjs',
    excerpt: 'Comparatif orienté décideurs : coûts, SEO, performances et équipes.',
    publishedAt: null,
    coverImage: null,
  },
  {
    _id: 'ph-2',
    title: 'Combien coûte une marketplace ?',
    slug: 'cout-marketplace',
    excerpt: 'Budgets réalistes, phases de delivery et pièges à éviter.',
    publishedAt: null,
    coverImage: null,
  },
  {
    _id: 'ph-3',
    title: 'Core Web Vitals : pourquoi votre site rame',
    slug: 'core-web-vitals',
    excerpt: 'LCP, INP, CLS expliqués simplement — et quoi corriger en priorité.',
    publishedAt: null,
    coverImage: null,
  },
];

function HpBlog({ posts }: { posts: SanityPostTeaser[] }) {
  const display = posts.length > 0 ? posts.slice(0, 3) : BLOG_PLACEHOLDERS;
  const isPlaceholder = posts.length === 0;
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden border-t border-white/[0.06] bg-[oklch(0.09_0_0)] py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={28} className="opacity-[0.4]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8">
        <motion.h2
          className="si-serif-display text-center text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium tracking-[-0.02em] text-white"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Blog
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/58 md:text-base">
          {isPlaceholder
            ? 'Articles à venir — SEO, e-commerce, IA et retours de terrain.'
            : 'Derniers articles publiés.'}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {display.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-black/30 transition hover:border-white/[0.12]"
            >
              <div className="relative aspect-[16/10] bg-white/5">
                {post.coverImage ? (
                  <Image src={post.coverImage} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" aria-hidden />
                )}
                {isPlaceholder && (
                  <span className="absolute left-3 top-3 rounded bg-black/60 px-2 py-0.5 text-[10px] font-medium uppercase text-white/80 backdrop-blur-sm">
                    Bientôt
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Article</p>
                <h3 className="mt-2 text-base font-semibold leading-snug">
                  <Link href={`/blog/${post.slug}`} className="transition hover:text-white/90 hover:underline">
                    {post.title}
                  </Link>
                </h3>
                {post.excerpt && <p className="mt-2 line-clamp-3 flex-1 text-sm text-white/65">{post.excerpt}</p>}
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link href="/blog" className="text-sm font-medium text-white/70 underline-offset-4 transition hover:text-white hover:underline">
            Voir tous les articles →
          </Link>
        </p>
      </div>
    </section>
  );
}

export type HomePremiumViewProps = {
  latestPosts: SanityPostTeaser[];
  casePreviews: HomeCasePreview[];
  casesFromSanity: boolean;
};

export function HomePremiumView({ latestPosts, casePreviews, casesFromSanity }: HomePremiumViewProps) {
  const intro = casesFromSanity
    ? 'Sélection issue du portfolio (Sanity) — métriques et récit détaillés sur chaque page projet.'
    : undefined;

  return (
    <main className="bg-black text-white">
      <HpHero />
      <HpClientMarquee />
      <HpLogos />
      <HpServices />
      <HpCases previews={casePreviews} intro={intro} />
      <HpMetrics />
      <HpProcess />
      <HpStackMarquee />
      <HpAbout />
      <HpFaq />
      <HpBlog posts={latestPosts} />
      <PremiumFinalCta
        title="Un projet en tête ? Parlons-en maintenant."
        description={
          <>
            Décrivez votre contexte : retour sous <strong className="font-medium text-white/85">24h ouvrées</strong>{' '}
            avec périmètre, jalons et ordre de grandeur — sans engagement.
          </>
        }
        primaryHref="/devis"
        primaryLabel="Demander un devis"
        secondaryHref="/contact"
        secondaryLabel="Réserver un appel"
      />
    </main>
  );
}
