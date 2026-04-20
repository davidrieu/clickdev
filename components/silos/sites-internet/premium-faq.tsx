'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import {
  SITES_INTERNET_FAQ_BY_TAB,
  SITES_INTERNET_FAQ_TAB_LABELS,
  type SitesInternetFaqTabId,
} from '@/lib/constants/sites-internet-premium';

import { StellarField, useSectionStellarPointer } from './stellar-field';

const TAB_ORDER: SitesInternetFaqTabId[] = ['budget', 'tech', 'process'];

export function PremiumFaq() {
  const [tab, setTab] = useState<SitesInternetFaqTabId>('budget');
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
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">FAQ</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.2vw,2.85rem)] font-medium tracking-[-0.02em] text-white">
            Questions fréquentes
          </h2>
          <p className="mt-4 max-w-lg text-sm text-white/55 md:text-base">
            Budget, technique, process : tout est regroupé ici pour le référencement et la lecture.
          </p>
        </motion.div>

        <div
          className="mt-10 flex flex-wrap gap-2 border-b border-white/10 pb-4"
          role="tablist"
          aria-label="Catégories de la FAQ"
        >
          {TAB_ORDER.map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                tab === id
                  ? 'bg-white text-black'
                  : 'border border-white/15 bg-white/[0.04] text-white/75 hover:border-white/25 hover:text-white'
              }`}
            >
              {SITES_INTERNET_FAQ_TAB_LABELS[id]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            role="tabpanel"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 space-y-2"
          >
            {SITES_INTERNET_FAQ_BY_TAB[tab].map((item, i) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
