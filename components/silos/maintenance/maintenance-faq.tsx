'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import {
  MAINTENANCE_FAQ_BY_TAB,
  MAINTENANCE_FAQ_TAB_LABELS,
  type MaintenanceFaqTabId,
} from '@/lib/constants/maintenance-pillar-premium';

import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

const TAB_ORDER: MaintenanceFaqTabId[] = ['offres', 'securite', 'process'];

export function MaintenanceFaq() {
  const [tab, setTab] = useState<MaintenanceFaqTabId>('offres');
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden bg-[oklch(0.09_0_0)] py-24 md:py-40 lg:py-48"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={36} className="opacity-[0.5]" interactive pointer={pointer} />
      <div className="relative z-10 si-shell-800">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">FAQ</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.2vw,2.85rem)] font-medium tracking-[-0.02em] text-white">
            Questions fréquentes — maintenance web
          </h2>
          <p className="mt-4 max-w-lg text-sm text-white/55 md:text-base">
            Forfaits, sécurité, contrats : le tout pour le référencement, sans jargon caché.
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
              {MAINTENANCE_FAQ_TAB_LABELS[id]}
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
            {MAINTENANCE_FAQ_BY_TAB[tab].map((item) => (
              <motion.div
                key={item.question}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 md:px-6 md:py-5"
                initial={false}
              >
                <p className="text-sm font-medium text-white md:text-base">{item.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
