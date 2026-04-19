'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { SITES_INTERNET_CASES } from '@/lib/constants/sites-internet-premium';

export function PremiumCases() {
  return (
    <section className="border-t border-white/[0.06] bg-black py-24 md:py-40 lg:py-48">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">Sites web</p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.5vw,3rem)] font-medium tracking-[-0.03em] text-white [font-family:var(--font-instrument),ui-serif,Georgia,serif]">
            Trois références — même exigence de finition.
          </h2>
          <p className="mt-4 text-sm text-white/55 md:text-base">
            Visuels de démo ; les fiches détaillées vivent côté réalisations.
          </p>
        </motion.div>

        <ul className="mt-16 space-y-20 md:space-y-28">
          {SITES_INTERNET_CASES.map((c, i) => (
            <motion.li
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.55 }}
            >
              <Link
                href={c.href}
                className="group grid gap-8 md:grid-cols-2 md:items-center md:gap-12"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${
                    i % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"
                    aria-hidden
                  />
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-[#F26A06] uppercase">{c.category}</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">{c.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">{c.description}</p>
                  <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="sr-only">{m.label}</dt>
                        <dd className="text-2xl font-semibold tabular-nums text-white md:text-3xl">{m.value}</dd>
                        <p className="mt-1 text-[11px] leading-snug text-white/45 uppercase">{m.label}</p>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-8 inline-block font-mono text-xs tracking-wider text-white/50 uppercase transition group-hover:text-[#F26A06]">
                    Voir le détail →
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
