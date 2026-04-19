'use client';

import { motion } from 'framer-motion';

import { SITES_INTERNET_BUDGET_FAQ } from '@/lib/constants/sites-internet-premium';

export function PremiumBudgetFaq() {
  return (
    <section className="border-t border-white/[0.06] bg-[oklch(0.09_0_0)] py-24 md:py-40 lg:py-48">
      <div className="mx-auto max-w-[720px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">Budget</p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-tight tracking-[-0.02em] text-white [font-family:var(--font-instrument),ui-serif,Georgia,serif]">
            Les questions qu’on n’ose pas toujours poser tout de suite.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-2">
          {SITES_INTERNET_BUDGET_FAQ.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <details className="group border-b border-white/[0.08] pb-1">
                <summary className="cursor-pointer list-none py-5 text-lg font-medium tracking-tight text-white [font-family:var(--font-instrument),ui-serif,Georgia,serif] [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    <span>{item.question}</span>
                    <span className="mt-1 shrink-0 font-mono text-xs text-white/35 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="pb-6 text-sm leading-relaxed text-white/65 md:text-base">{item.answer}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
