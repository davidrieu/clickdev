'use client';

import { motion } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

type FaqItem = { question: string; answer: string };

export function ExpertisesIndexFaq({ items }: { items: readonly FaqItem[] }) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  if (items.length === 0) return null;

  return (
    <section
      className="relative overflow-hidden bg-[oklch(0.1_0_0)] py-20 md:py-28 lg:py-32"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={34} className="opacity-[0.48]" interactive pointer={pointer} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(255,255,255,0.035),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[760px] px-4 md:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">FAQ</p>
          <h2 className="si-serif-display mt-4 text-balance text-[clamp(1.65rem,3.2vw,2.5rem)] font-medium tracking-[-0.02em] text-white">
            Questions sur les expertises
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/55 md:text-base">
            Alignées sur les fiches (Next.js à n8n, en passant par Laravel ou Python) : court pour le SEO, concret pour
            votre prochain échange.
          </p>
        </motion.div>

        <div className="mt-10 space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-sm md:px-5 md:py-4"
            >
              <summary className="cursor-pointer list-none font-medium text-white/95 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3 text-left text-sm md:text-base">
                  {item.question}
                  <span className="shrink-0 text-xs text-white/40 transition group-open:rotate-180" aria-hidden>
                    ▼
                  </span>
                </span>
              </summary>
              <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed text-white/68 md:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
