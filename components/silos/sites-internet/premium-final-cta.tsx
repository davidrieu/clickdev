'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function PremiumFinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] py-28 md:py-40 lg:py-52">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,oklch(0.14_0.02_280),oklch(0.08_0_0)_45%,oklch(0.12_0.03_30))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-20 top-1/2 size-[420px] -translate-y-1/2 rounded-full bg-[#F26A06]/10 blur-3xl"
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[720px] px-4 text-center md:px-8">
        <motion.h2
          className="text-balance text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white [font-family:var(--font-instrument),ui-serif,Georgia,serif]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          Prêt à passer d’un site qui subit à un site qui performe ?
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/60 md:text-base"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.5 }}
        >
          Expliquez votre contexte en 2 minutes : je réponds avec une proposition réaliste (périmètre, jalons, ordre de
          grandeur).
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14, duration: 0.45 }}
        >
          <Link
            href="/devis?projectType=site"
            className="rounded-full bg-[#F26A06] px-10 py-4 text-sm font-semibold text-white shadow-[0_0_48px_-10px_rgba(242,106,6,0.55)] transition hover:opacity-95"
          >
            Demander un devis site web
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 bg-white/[0.05] px-10 py-4 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-white/30"
          >
            Parler du projet
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
