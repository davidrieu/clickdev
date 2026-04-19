'use client';

import { motion } from 'framer-motion';

import { SITES_INTERNET_TESTIMONIALS } from '@/lib/constants/sites-internet-premium';

export function PremiumQuotes() {
  return (
    <section className="relative border-t border-white/[0.06] bg-black py-28 md:py-44 lg:py-52">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(46,8,207,0.12),transparent)]" />
      <div className="relative mx-auto max-w-[900px] px-4 md:px-8">
        <motion.p
          className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Témoignages
        </motion.p>

        <ul className="mt-20 space-y-24 md:space-y-32">
          {SITES_INTERNET_TESTIMONIALS.map((t, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
            >
              <p
                className="si-serif-display select-none text-[clamp(4rem,14vw,10rem)] leading-none text-white/[0.07]"
                aria-hidden
              >
                “
              </p>
              <blockquote className="si-serif-display -mt-4 text-[clamp(1.35rem,2.8vw,2.125rem)] leading-snug font-medium tracking-[-0.02em] text-white/90">
                {t.quote}
              </blockquote>
              <footer className="mt-8 border-l-2 border-[#F26A06]/60 pl-5">
                <cite className="not-italic text-sm font-medium text-white/80">{t.author}</cite>
                <p className="mt-1 text-xs tracking-wider text-white/40 uppercase">{t.company}</p>
              </footer>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
