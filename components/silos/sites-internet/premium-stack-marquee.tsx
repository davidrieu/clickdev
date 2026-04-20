'use client';

import { motion } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { SITES_INTERNET_STACK } from '@/lib/constants/sites-internet-premium';

export function PremiumStackMarquee() {
  const row = [...SITES_INTERNET_STACK, ...SITES_INTERNET_STACK];
  const rowB = [...[...SITES_INTERNET_STACK].reverse(), ...[...SITES_INTERNET_STACK].reverse()];

  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-36 lg:py-44">
      <PremiumSectionDivider />
      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-14 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center lg:gap-16 lg:px-8">
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
            Next.js, WordPress, Shopify, headless CMS… Je choisis ce qui maximise vos chances de livrer vite, proprement,
            et sans vous enfermer.
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
