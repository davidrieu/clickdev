'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import {
  SITES_INTERNET_COMPARE_MATRIX,
  SITES_INTERNET_COMPARE_ROWS,
} from '@/lib/constants/sites-internet-premium';

export function PremiumCompare() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-12%' });

  return (
    <section
      ref={ref}
      className="border-t border-white/[0.06] bg-[oklch(0.11_0_0)] py-24 md:py-40 lg:py-48"
    >
      <div className="mx-auto max-w-[960px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-[#F26A06] uppercase">Décision</p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,3rem)] font-medium tracking-[-0.03em] text-white [font-family:var(--font-instrument),ui-serif,Georgia,serif]">
            WordPress vs sur mesure
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/55 md:text-base">
            La plupart des équipes hésitent entre autonomie éditoriale et contrôle produit. Voici un repère — la bonne
            réponse dépend de votre contexte, pas d’un dogme.
          </p>
        </motion.div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-0 border-b border-white/10 text-center text-xs font-medium tracking-wider text-white/50 uppercase md:text-sm">
            <div className="px-4 py-5 md:px-6">WordPress</div>
            <div className="flex items-center justify-center border-x border-white/10 bg-white/[0.02] px-2 py-5 text-[10px] text-white/35 md:text-xs">
              vs
            </div>
            <div className="px-4 py-5 md:px-6">Sur mesure</div>
          </div>

          {SITES_INTERNET_COMPARE_ROWS.map((row, i) => {
            const cell = SITES_INTERNET_COMPARE_MATRIX[i];
            return (
              <motion.div
                key={row.label}
                className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-white/[0.06] last:border-0"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
              >
                <div className="flex justify-center px-3 py-4 md:px-6 md:py-5">
                  <CheckMark show={cell?.wp ?? false} delay={i * 0.05} active={inView} />
                </div>
                <div className="border-x border-white/[0.06] bg-white/[0.02] px-2 py-4 text-center text-xs text-white/70 md:px-4 md:text-sm">
                  {row.label}
                </div>
                <div className="flex justify-center px-3 py-4 md:px-6 md:py-5">
                  <CheckMark show={cell?.custom ?? false} delay={i * 0.05 + 0.02} active={inView} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CheckMark({ show, delay, active }: { show: boolean; delay: number; active: boolean }) {
  return (
    <span className="flex size-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] md:size-10">
      {show ? (
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          initial={false}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay }}
        >
          <motion.path
            d="M5 13l4 4L19 7"
            stroke="#F26A06"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={active ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ delay: delay + 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.svg>
      ) : (
        <span className="text-xs text-white/25">—</span>
      )}
    </span>
  );
}
