'use client';

import { motion } from 'framer-motion';

import { SITES_INTERNET_TECH_FAQ } from '@/lib/constants/sites-internet-premium';

export function PremiumTechFaq() {
  return (
    <section className="border-t border-white/[0.06] bg-[oklch(0.11_0_0)] py-24 md:py-40 lg:py-48">
      <div className="mx-auto max-w-[820px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">FAQ technique</p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium tracking-[-0.02em] text-white [font-family:var(--font-instrument),ui-serif,Georgia,serif]">
            Process, stack, SEO, livraison.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-2">
          {SITES_INTERNET_TECH_FAQ.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.03, 0.24), duration: 0.35 }}
            >
              <details className="group rounded-xl border border-white/[0.07] bg-black/30 px-4 transition hover:border-white/12 md:px-5">
                <summary className="cursor-pointer list-none py-4 text-base font-medium text-white/95 md:py-5 md:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-3">
                    {item.question}
                    <span className="text-xs text-white/35 transition group-open:rotate-180">▼</span>
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
