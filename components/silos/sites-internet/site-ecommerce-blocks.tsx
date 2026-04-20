'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useReducedMotion, useScroll, useSpring } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { ServiceCardGlow } from '@/components/premium/service-card-glow';
import { StellarField, useSectionStellarPointer } from './stellar-field';

export type PremiumChildCompareRow = { label: string; c: readonly [boolean, boolean, boolean] };
type BenefitCard = { title: string; body: string };
type AudienceCard = { title: string; body: string };
type ProcessStep = { n: string; title: string; body: string };

export function SiteEcommerceBenefitsSection({
  kicker,
  title,
  subtitle,
  items,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  items: readonly BenefitCard[];
}) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-[oklch(0.11_0_0)] py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={38} className="opacity-[0.5]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">{kicker}</p>
          <h2 className="si-serif-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] font-medium tracking-[-0.03em] text-white">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">{subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6%' }}
              transition={{ delay: index * 0.07, duration: 0.48 }}
              className="min-h-[220px] md:min-h-[240px]"
            >
              <motion.div
                className="h-full min-h-[inherit]"
                whileHover={reduce ? undefined : { scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                <div className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 p-6 transition duration-500 hover:border-white/[0.16]">
                  <ServiceCardGlow />
                  <div className="relative z-[2] mt-auto flex flex-col pt-4">
                    <h3 className="text-lg font-semibold tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.75)] md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
                      {item.body}
                    </p>
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

export function SiteEcommerceAudienceSection({
  kicker,
  title,
  subtitle,
  cards,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  cards: readonly AudienceCard[];
}) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  const reduce = useReducedMotion();

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
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/50 uppercase">{kicker}</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.5vw,3rem)] font-medium tracking-[-0.03em] text-white">
            {title}
          </h2>
          <p className="mt-4 text-sm text-white/60 md:text-base">{subtitle}</p>
        </motion.div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {cards.map((card, index) => (
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
                whileHover={reduce ? undefined : { scale: 1.01 }}
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

export function SiteEcommerceCompareSection({
  kicker,
  title,
  subtitle,
  columns,
  rows,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  columns: readonly string[];
  rows: readonly PremiumChildCompareRow[];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-12%' });
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[oklch(0.11_0_0)] py-24 md:py-40 lg:py-48"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={36} className="opacity-[0.5]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/50 uppercase">{kicker}</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.5vw,3rem)] font-medium tracking-[-0.03em] text-white">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/55 md:text-base">{subtitle}</p>
        </motion.div>

        <div className="mt-16 overflow-x-auto">
          <div className="min-w-[640px] overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 md:min-w-0">
            <div className="grid grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,0.75fr))] gap-0 border-b border-white/[0.1] text-center text-[10px] font-medium tracking-wider text-white/50 uppercase sm:text-xs md:text-sm">
              <div className="px-2 py-4 text-left text-white/40 md:px-4 md:py-5">Critère</div>
              {columns.map((c) => (
                <div key={c} className="px-2 py-4 md:px-3 md:py-5">
                  {c}
                </div>
              ))}
            </div>
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                className="grid grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,0.75fr))] items-center border-b border-white/[0.08] last:border-0"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
              >
                <div className="px-3 py-3 text-left text-[11px] leading-snug text-white/75 sm:text-xs md:px-4 md:py-4 md:text-sm">
                  {row.label}
                </div>
                <CompareCell ok={row.c[0]} delay={i * 0.04} active={inView} />
                <CompareCell ok={row.c[1]} delay={i * 0.04 + 0.02} active={inView} />
                <CompareCell ok={row.c[2]} delay={i * 0.04 + 0.04} active={inView} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompareCell({ ok, delay, active }: { ok: boolean; delay: number; active: boolean }) {
  return (
    <div className="flex justify-center px-2 py-3 md:px-3 md:py-4">
      <span className="flex size-8 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] md:size-9">
        {ok ? (
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            initial={false}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay }}
          >
            <motion.path
              d="M5 13l4 4L19 7"
              stroke="rgba(255,255,255,0.88)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={active ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: delay + 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.svg>
        ) : (
          <span className="text-[10px] text-white/25">—</span>
        )}
      </span>
    </div>
  );
}

export function SiteEcommerceProcessSection({
  kicker,
  title,
  steps,
}: {
  kicker: string;
  title: string;
  steps: readonly ProcessStep[];
}) {
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
      <div className="relative z-10 mx-auto max-w-[900px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">{kicker}</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.8vw,3rem)] font-medium tracking-[-0.03em] text-white">
            {title}
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
            {steps.map((step, i) => (
              <EcommerceProcessStep key={step.n} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function EcommerceProcessStep({ step, index }: { step: ProcessStep; index: number }) {
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
      </div>
    </motion.li>
  );
}

export function SiteEcommerceStackSection({
  kicker,
  title,
  body,
  labels,
}: {
  kicker: string;
  title: string;
  body: string;
  labels: readonly string[];
}) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  const row = [...labels, ...labels];
  const rowB = [...[...labels].reverse(), ...[...labels].reverse()];

  return (
    <section
      className="relative overflow-hidden bg-black py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={40} className="opacity-[0.55]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-14 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">{kicker}</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-tight tracking-[-0.02em] text-white">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/58 md:text-base">{body}</p>
          <p className="mt-4 text-sm text-white/45">
            Enchaînements fréquents :{' '}
            <Link
              href="/sites-internet/site-sur-mesure"
              className="text-white/70 underline-offset-4 transition hover:text-white hover:underline"
            >
              sur mesure
            </Link>
            ,{' '}
            <Link
              href="/sites-internet/site-wordpress"
              className="text-white/70 underline-offset-4 transition hover:text-white hover:underline"
            >
              WordPress
            </Link>
            ,{' '}
            <Link href="/sites-internet" className="text-white/70 underline-offset-4 transition hover:text-white hover:underline">
              retour au pilier
            </Link>
            .
          </p>
        </motion.div>

        <div className="space-y-4 overflow-hidden">
          <div className="overflow-hidden mask-[linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="si-marquee-l flex w-max gap-3 pr-3">
              {row.map((label, i) => (
                <span
                  key={`a-${label}-${i}`}
                  className="shrink-0 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 font-mono text-[11px] tracking-wider text-white/70 uppercase"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden mask-[linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="si-marquee-r flex w-max gap-3 pr-3">
              {rowB.map((label, i) => (
                <span
                  key={`b-${label}-${i}`}
                  className="shrink-0 rounded-full border border-white/[0.07] bg-white/[0.02] px-5 py-2.5 font-mono text-[11px] tracking-wider text-white/45 uppercase"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteEcommerceFaqSection({
  kicker,
  title,
  subtitle,
  items,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  items: readonly { question: string; answer: string }[];
}) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden bg-[oklch(0.09_0_0)] py-24 md:py-40 lg:py-48"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={36} className="opacity-[0.5]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[800px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">{kicker}</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.2vw,2.85rem)] font-medium tracking-[-0.02em] text-white">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-sm text-white/55 md:text-base">{subtitle}</p>
        </motion.div>

        <div className="mt-10 space-y-2">
          {items.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
            >
              <details className="group rounded-xl border border-white/[0.08] bg-black/35 px-4 transition hover:border-white/15 md:px-5">
                <summary className="si-serif-display cursor-pointer list-none py-4 text-base font-medium tracking-tight text-white/95 md:py-5 md:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-3">
                    <span>{item.question}</span>
                    <span className="mt-0.5 shrink-0 font-mono text-sm text-white/35 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-white/[0.06] pb-4 pt-3 text-sm leading-relaxed text-white/65 md:text-base">
                  {item.answer}
                </p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiteEcommerceBudgetSection({ title, line, note }: { title: string; line: string; note: string }) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden bg-black py-16 md:py-20"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={24} className="opacity-[0.35]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[640px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-6 py-8 text-center md:px-10 md:py-10"
        >
          <p className="font-mono text-[10px] tracking-[0.28em] text-white/45 uppercase">{title}</p>
          <p className="si-serif-display mt-3 text-xl font-medium tracking-tight text-white md:text-2xl">{line}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/55 md:text-base">{note}</p>
        </motion.div>
      </div>
    </section>
  );
}
