'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import {
  MAINTENANCE_COMPARE_MATRIX,
  MAINTENANCE_COMPARE_ROWS,
} from '@/lib/constants/maintenance-pillar-premium';

import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

export function MaintenanceCompare() {
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
      <div className="relative z-10 mx-auto max-w-[960px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/50 uppercase">Décision</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.5vw,3rem)] font-medium tracking-[-0.03em] text-white">
            Forfait & suivi vs mission ponctuelle
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/55 md:text-base">
            Les deux existent. La question : avez-vous besoin d&apos;un rythme et d&apos;un historique — ou d&apos;un
            one-shot cadré ? En{' '}
            <strong className="font-medium text-white/80">maintenance informatique</strong> freelance, j&apos;écris
            l&apos;écart noir sur blanc, sans vous forcer l&apos;un des deux.
          </p>
        </motion.div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 transition duration-500 hover:border-white/[0.16]">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-0 border-b border-white/[0.1] text-center text-xs font-medium tracking-wider text-white/50 uppercase md:text-sm">
            <div className="px-2 py-5 sm:px-4 md:px-6">Forfait &amp; suivi</div>
            <div className="flex items-center justify-center border-x border-white/[0.1] bg-white/[0.03] px-1 py-5 text-[9px] text-white/35 sm:text-xs md:px-2">
              vs
            </div>
            <div className="px-2 py-5 sm:px-4 md:px-6">Ponctuel</div>
          </div>

          {MAINTENANCE_COMPARE_ROWS.map((row, i) => {
            const cell = MAINTENANCE_COMPARE_MATRIX[i];
            return (
              <motion.div
                key={row.label}
                className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-white/[0.08] last:border-0"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
              >
                <div className="flex justify-center px-2 py-4 md:px-6 md:py-5">
                  <CheckMark show={cell?.forfait ?? false} delay={i * 0.05} active={inView} />
                </div>
                <div className="border-x border-white/[0.08] bg-white/[0.03] px-2 py-4 text-center text-xs text-white/75 sm:px-3 md:px-4 md:text-sm">
                  {row.label}
                </div>
                <div className="flex justify-center px-2 py-4 md:px-6 md:py-5">
                  <CheckMark show={cell?.ponctuel ?? false} delay={i * 0.05 + 0.02} active={inView} />
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
    <span className="flex size-9 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] md:size-10">
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
        <span className="text-xs text-white/25">—</span>
      )}
    </span>
  );
}
