'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { SITES_INTERNET_STACK } from '@/lib/constants/sites-internet-premium';

import { StellarField, useSectionStellarPointer } from './stellar-field';

export function PremiumStackMarquee() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  const row = [...SITES_INTERNET_STACK, ...SITES_INTERNET_STACK];
  const rowB = [...[...SITES_INTERNET_STACK].reverse(), ...[...SITES_INTERNET_STACK].reverse()];

  return (
    <section
      className="relative overflow-hidden bg-black py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={40} className="opacity-[0.55]" interactive pointer={pointer} />
      <div className="relative z-10 si-shell-1400 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">Stack</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-tight tracking-[-0.02em] text-white">
            La techno au service du produit — pas l’inverse.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/58 md:text-base">
            Je ne suis pas fan d&apos;une techno en particulier. Je choisis celle qui sert votre projet — pas l&apos;
            inverse.{' '}
            <Link
              href="/sites-internet/site-sur-mesure"
              className="text-white/70 underline-offset-4 transition hover:text-white hover:underline"
            >
              Next.js
            </Link>{' '}
            pour un site ultra rapide,{' '}
            <Link
              href="/sites-internet/site-ecommerce"
              className="text-white/70 underline-offset-4 transition hover:text-white hover:underline"
            >
              Shopify
            </Link>{' '}
            pour un e-commerce qui doit scaler,{' '}
            <Link
              href="/sites-internet/site-wordpress"
              className="text-white/70 underline-offset-4 transition hover:text-white hover:underline"
            >
              WordPress
            </Link>{' '}
            quand ça a du sens. La bonne techno, pour le bon besoin.
          </p>
        </motion.div>

        <div className="space-y-4 overflow-hidden">
          <div className="overflow-hidden mask-[linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="si-marquee-l flex w-max gap-3 pr-3">
              {row.map((label, i) => (
                <TechPill key={`a-${label}-${i}`} label={label} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden mask-[linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="si-marquee-r flex w-max gap-3 pr-3">
              {rowB.map((label, i) => (
                <TechPill key={`b-${label}-${i}`} label={label} subtle />
              ))}
            </div>
          </div>
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
