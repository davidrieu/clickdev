'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';

import { ServiceCardGlow } from '@/components/premium/service-card-glow';
import { categoryLabel, displayMetric, displayYear } from '@/components/silos/sites-internet/premium-cases';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  HOME_AUDIENCE_CARDS,
  HOME_CASE_PREVIEWS,
  HOME_FAQ_ITEMS,
  HOME_PROCESS_STEPS,
  HOME_SERVICE_CARDS,
  HOME_STACK_ITEMS,
  HOME_TESTIMONIALS,
  HOME_TRUST_MARQUEE_NAMES,
} from '@/lib/constants/home-content';
import type { HomeCasePreview } from '@/lib/constants/home-content';
import { SOCIAL_LINKS } from '@/lib/constants/site';
import { formatDateFr } from '@/lib/format/date';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';
import type { SanityPostTeaser } from '@/types/sanity-post';
import { PlusIcon } from 'lucide-react';

import { HpHero } from './hp-hero';
import { HomeTestimonialsSlider } from './home-testimonials-slider';
import { PremiumSectionDivider } from './premium-section-divider';

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

function HpTrustMarquee() {
  const row = useMemo(() => [...HOME_TRUST_MARQUEE_NAMES, ...HOME_TRUST_MARQUEE_NAMES], []);
  return (
    <div className="relative z-10 mt-14 border-y border-white/[0.07] bg-black md:mt-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 py-8 md:px-8 md:py-10">
        <h2 className="text-center font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">
          Ils me font confiance
        </h2>
        <div className="mt-6 w-full overflow-hidden mask-[linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
          <div className="si-marquee-l flex min-h-[52px] w-max flex-nowrap items-center gap-3 pr-3 md:min-h-[56px]">
            {row.map((label, i) => (
              <HeroClientPill key={`${label}-${i}`} label={label} subtle={i % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HpAudienceGrid() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  return (
    <section
      className="relative overflow-hidden bg-black py-24 md:py-32 lg:py-40"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={34} className="opacity-[0.48]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/50 uppercase">Pour vous</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.5vw,3rem)] font-medium tracking-[-0.03em] text-white">
            Pour qui je travaille
          </h2>
          <p className="mt-4 text-sm text-white/60 md:text-base">
            Des projets de 2 000 € à 200 000 €, avec la même exigence de qualité.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {HOME_AUDIENCE_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6%' }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="min-h-[268px] md:min-h-[288px]"
            >
              <motion.div
                className="h-full"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                <div className="group relative flex h-full min-h-[inherit] flex-col justify-center overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 p-6 transition duration-500 hover:border-white/[0.16]">
                  <ServiceCardGlow />
                  <div className="relative z-[2] flex flex-col justify-center">
                    <h3 className="text-lg font-semibold tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.75)] md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
                      {card.body}
                    </p>
                    <Link
                      href={card.href}
                      className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/60 uppercase transition group-hover:gap-3 group-hover:text-white"
                    >
                      {card.cta} <span aria-hidden>↗</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HpServices() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  return (
    <section
      className="relative overflow-hidden bg-black py-24 md:py-36 lg:py-44"
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
            Ce que je peux faire pour vous
          </h2>
          <p className="mt-4 text-sm text-white/60 md:text-base">
            Six manières de donner un coup d&apos;accélérateur à votre activité, selon vos besoins et votre budget.
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
              className="min-h-[268px] md:min-h-[288px]"
            >
              <motion.div
                className="h-full"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                <Link
                  href={card.href}
                  className="group relative flex h-full min-h-[inherit] flex-col justify-center overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 p-6 transition duration-500 hover:border-white/[0.16]"
                >
                  <ServiceCardGlow />
                  <div className="relative z-[2] flex flex-col justify-center">
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

type PortfolioGridItem =
  | { kind: 'sanity'; data: SanityCaseStudyTeaser }
  | { kind: 'static'; data: HomeCasePreview; index: number };

function buildPortfolioGridItems(teasers: SanityCaseStudyTeaser[]): PortfolioGridItem[] {
  if (teasers.length > 0) {
    return teasers.slice(0, 6).map((data) => ({ kind: 'sanity' as const, data }));
  }
  return Array.from({ length: 6 }, (_, i) => ({
    kind: 'static' as const,
    data: HOME_CASE_PREVIEWS[i % HOME_CASE_PREVIEWS.length],
    index: i,
  }));
}

function HpPortfolioGrid({ caseStudies }: { caseStudies: SanityCaseStudyTeaser[] }) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  const items = useMemo(() => buildPortfolioGridItems(caseStudies), [caseStudies]);
  const fromCms = caseStudies.length > 0;

  return (
    <section
      className="relative overflow-hidden bg-black py-24 md:py-40 lg:py-48"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={48} className="opacity-[0.68]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">Portfolio</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.5vw,3rem)] font-medium tracking-[-0.03em] text-white">
            Sélection de projets
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/58 md:text-base">
            {fromCms
              ? 'Création de sites internet, apps et outils : six projets récents. Je détaille captures et chiffres sur chaque fiche.'
              : 'Quelques exemples de création de sites et d’apps en attendant le catalogue à jour — tout le détail sur la page réalisations.'}
          </p>
        </motion.div>

        <ul className="mt-14 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map((item, index) =>
            item.kind === 'sanity' ? (
              <motion.li
                key={item.data._id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-6%' }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="min-h-0"
              >
                <motion.div
                  className="h-full"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                >
                  <Link
                    href={`/realisations/${item.data.slug}`}
                    className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 transition duration-500 hover:border-white/[0.16]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                      {item.data.thumbnail ? (
                        <Image
                          src={item.data.thumbnail}
                          alt={`Aperçu du projet ${item.data.title} — création site internet ou app`}
                          fill
                          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black"
                          aria-hidden
                        />
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                    </div>
                    <div className="relative z-[2] flex flex-1 flex-col p-6">
                      <span className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">
                        {categoryLabel(item.data)}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.75)] md:text-xl">
                        {item.data.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
                        {item.data.tagline?.trim() ||
                          (item.data.client
                            ? `Projet pour ${item.data.client}${item.data.year ? ` · ${item.data.year}` : ''}.`
                            : 'Voir la fiche pour le contexte et les résultats.')}
                      </p>
                      <p className="mt-3 font-mono text-[10px] tracking-wider text-white/45">
                        {displayMetric(item.data)} <span className="text-white/30">·</span> {displayYear(item.data)}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/60 uppercase transition group-hover:gap-3 group-hover:text-white">
                        Découvrir <span aria-hidden>↗</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </motion.li>
            ) : (
              <motion.li
                key={`${item.data.title}-${item.index}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-6%' }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="min-h-0"
              >
                <motion.div
                  className="h-full"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                >
                  <Link
                    href={item.data.href}
                    className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 transition duration-500 hover:border-white/[0.16]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black"
                        aria-hidden
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </div>
                    <div className="relative z-[2] flex flex-1 flex-col p-6">
                      <span className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">
                        {item.data.category}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.75)] md:text-xl">
                        {item.data.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
                        {item.data.description}
                      </p>
                      <p className="mt-3 font-mono text-[10px] tracking-wider text-white/45">
                        {item.data.metrics[0]?.value ?? '—'}{' '}
                        <span className="text-white/30">{item.data.metrics[0]?.label ?? ''}</span>
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/60 uppercase transition group-hover:gap-3 group-hover:text-white">
                        Découvrir <span aria-hidden>↗</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </motion.li>
            ),
          )}
        </ul>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.45 }}
        >
          <Link
            href="/realisations"
            className="si-btn-pill-shine relative isolate inline-flex overflow-hidden rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-sm transition duration-300 hover:border-white/35 hover:bg-white/[0.08]"
          >
            <span className="relative z-10">Voir toutes les réalisations</span>
          </Link>
        </motion.div>
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

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[oklch(0.09_0_0)] py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={36} className="opacity-[0.5]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8">
        <motion.h2
          className="si-serif-display text-balance text-center text-[clamp(1.85rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.03em] text-white"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Des promesses qu&apos;on tient (toujours).
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-center text-sm text-white/58 md:text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.06 }}
        >
          Trois chiffres qui résument mes 10 dernières années.
        </motion.p>
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
            <p className="mt-2 text-sm text-white/55">Score Lighthouse moyen sur les sites que je livre.</p>
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
            <p className="mt-2 text-sm text-white/55">De chargement, même sur la page la plus lourde.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">Sérieux</p>
            <p className="mt-3 text-5xl font-semibold tabular-nums tracking-tight text-white md:text-6xl">0</p>
            <p className="mt-2 text-sm text-white/55">Projet raté. Zéro. Je prends ça au sérieux.</p>
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
      className="relative overflow-hidden bg-black py-24 md:py-40 lg:py-48"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
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
    <section className="relative overflow-hidden bg-black py-24 md:py-36 lg:py-44">
      <PremiumSectionDivider />
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-center lg:gap-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">Stack</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.75rem,3vw,2.75rem)] font-medium tracking-[-0.02em] text-white">
            La bonne techno pour votre projet.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/58 md:text-base">
            Je ne tombe pas amoureux d&apos;une techno. Je choisis celle qui sert votre projet — pas l&apos;inverse.
          </p>
          <nav
            aria-label="Offres par expertise"
            className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/55 md:gap-x-5"
          >
            <Link href="/sites-internet" className="underline-offset-4 transition hover:text-white hover:underline">
              Sites internet
            </Link>
            <Link
              href="/applications-mobiles"
              className="underline-offset-4 transition hover:text-white hover:underline"
            >
              Applications mobiles
            </Link>
            <Link href="/ia" className="underline-offset-4 transition hover:text-white hover:underline">
              IA
            </Link>
            <Link href="/seo" className="underline-offset-4 transition hover:text-white hover:underline">
              {'SEO & GEO'}
            </Link>
            <Link href="/crm-outils-metiers" className="underline-offset-4 transition hover:text-white hover:underline">
              {'CRM & outils métiers'}
            </Link>
            <Link href="/maintenance" className="underline-offset-4 transition hover:text-white hover:underline">
              Maintenance
            </Link>
          </nav>
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
      className="relative overflow-hidden bg-[oklch(0.09_0_0)] py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
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
              Moi c&apos;est David. Je suis{' '}
              <strong className="font-medium text-white/90">développeur web freelance</strong> depuis 10 ans, basé en
              France, et je bosse avec des clients partout dans le monde. J&apos;ai eu la chance d&apos;accompagner des
              grands groupes comme Accor ou Greenweez, mais j&apos;aime tout autant travailler avec un artisan qui lance
              son site ou une PME qui veut passer un cap. Ma conviction : un bon produit digital, c&apos;est 30 % de
              technique, 30 % de design, et 40 % de compréhension de votre métier. Sur le terrain, ça veut dire du{' '}
              <Link href="/sites-internet" className="text-white/85 underline-offset-4 hover:text-white hover:underline">
                site internet
              </Link>
              , des{' '}
              <Link
                href="/applications-mobiles"
                className="text-white/85 underline-offset-4 hover:text-white hover:underline"
              >
                applications mobiles
              </Link>
              , du{' '}
              <Link href="/seo" className="text-white/85 underline-offset-4 hover:text-white hover:underline">
                référencement
              </Link>
              , de l&apos;
              <Link href="/ia" className="text-white/85 underline-offset-4 hover:text-white hover:underline">
                intégration IA
              </Link>{' '}
              et des{' '}
              <Link href="/crm-outils-metiers" className="text-white/85 underline-offset-4 hover:text-white hover:underline">
                outils sur mesure
              </Link>{' '}
              — toujours en restant joignable pour la{' '}
              <Link href="/maintenance" className="text-white/85 underline-offset-4 hover:text-white hover:underline">
                maintenance
              </Link>
              . Quelques exemples concrets sont sur la page{' '}
              <Link href="/realisations" className="text-white/85 underline-offset-4 hover:text-white hover:underline">
                réalisations
              </Link>
              .
            </p>
            <Link
              href="/a-propos"
              className="si-btn-pill-shine mt-8 inline-flex rounded-full border border-white/25 bg-white/[0.04] px-6 py-2.5 text-sm font-medium text-white/90 transition hover:border-white/40"
            >
              <span className="relative z-10">En savoir plus sur mon parcours →</span>
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
        <HomeTestimonialsSlider items={HOME_TESTIMONIALS} className="mt-10" />
        <p className="mt-8 text-center text-[11px] text-white/38">
          <a
            href={SOCIAL_LINKS.codeur}
            rel="me noopener noreferrer"
            target="_blank"
            className="text-white/45 underline-offset-2 transition-none hover:text-white/45"
          >
            Voir sur Codeur.com
          </a>
        </p>
      </div>
    </section>
  );
}

function HpFaq() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  return (
    <section
      className="relative overflow-hidden bg-black py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
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
          Les questions que je me pose souvent… avant même que vous les posiez.
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
    title: 'WordPress ou un site sur mesure : comment choisir sans se tromper ?',
    slug: 'wordpress-vs-nextjs',
    excerpt: 'Les vraies questions à vous poser avant de signer — budget, évolutions, qui met à jour le site.',
    publishedAt: null,
    coverImage: null,
  },
  {
    _id: 'ph-2',
    title: 'Combien coûte une boutique en ligne ou une marketplace ?',
    slug: 'cout-marketplace',
    excerpt: 'Ordres de grandeur, grandes étapes, et ce qui fait varier la facture — sans jargon inutile.',
    publishedAt: null,
    coverImage: null,
  },
  {
    _id: 'ph-3',
    title: 'Pourquoi mon site est lent (et quoi faire en premier) ?',
    slug: 'core-web-vitals',
    excerpt: 'Explications simples + les trois correctifs qui ont le plus d’impact pour vos visiteurs.',
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
      className="relative overflow-hidden bg-[oklch(0.09_0_0)] py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={40} className="opacity-[0.55]" interactive pointer={pointer} />
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
            ? 'Articles pour y voir clair : site web, budget, perf — sans jargon.'
            : 'Mes derniers articles publiés.'}
        </p>
        <ul className="mt-10 grid list-none gap-4 p-0 md:grid-cols-3 md:gap-5">
          {display.map((post, index) => {
            const dateLabel = formatDateFr(post.publishedAt);
            return (
              <motion.li
                key={post._id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-6%' }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                className="min-h-0"
              >
                <motion.div
                  className="h-full"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 transition duration-500 hover:border-white/[0.16]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={`Illustration — ${post.title}`}
                          fill
                          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                          sizes="(max-width:768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" aria-hidden />
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                      {isPlaceholder ? (
                        <span className="absolute left-3 top-3 z-[1] rounded-full border border-white/15 bg-zinc-950/75 px-2.5 py-1 text-[10px] font-medium uppercase text-white/85 backdrop-blur-sm">
                          Bientôt
                        </span>
                      ) : null}
                    </div>
                    <div className="relative z-[2] flex flex-1 flex-col p-6">
                      <span className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">
                        {dateLabel || 'Article'}
                      </span>
                      <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.75)] md:text-lg">
                        {post.title}
                      </h3>
                      {post.excerpt ? (
                        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
                          {post.excerpt}
                        </p>
                      ) : null}
                      <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/60 uppercase transition group-hover:gap-3 group-hover:text-white">
                        Lire l’article <span aria-hidden>↗</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
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
  featuredCaseStudies: SanityCaseStudyTeaser[];
};

export function HomePremiumView({ latestPosts, featuredCaseStudies }: HomePremiumViewProps) {
  return (
    <main className="bg-black text-white">
      <p className="sr-only">
        Je suis David Rieu, développeur web freelance en France. Je conçois des sites internet, des applications
        mobiles, j’intègre l’IA quand ça a du sens, je fais du SEO et de la GEO, et je développe des outils métiers sur
        mesure pour les TPE, PME et grands comptes. Basé en France, je travaille aussi à distance avec des clients en
        Europe et ailleurs.
      </p>
      <HpHero />
      <HpTrustMarquee />
      <HpServices />
      <HpAudienceGrid />
      <HpPortfolioGrid caseStudies={featuredCaseStudies} />
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
            <p>
              Décrivez votre contexte : retour sous{' '}
              <strong className="font-medium text-white/85">24h ouvrées</strong> avec périmètre, jalons et ordre de
              grandeur — sans engagement.
            </p>
            <p className="mt-4 text-white/75">
              30 minutes de discussion, zéro engagement. Vous repartez avec des conseils concrets, même si on ne travaille
              pas ensemble.
            </p>
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
