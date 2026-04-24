'use client';

import { motion } from 'framer-motion';

const lineDraw = {
  rest: { scaleX: 0, originX: 0.5 },
  animate: { scaleX: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const } },
};

export function DevisSimpleHero() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 md:py-28 lg:py-32">
      <div className="relative z-10 si-shell-920 text-center">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-[11px] tracking-[0.28em] text-white/50 uppercase">Devis</span>
          <motion.span
            className="block h-px w-[min(180px,40vw)] origin-center bg-gradient-to-r from-transparent via-white/40 to-transparent"
            variants={lineDraw}
            initial="rest"
            animate="animate"
            aria-hidden
          />
        </motion.div>
        <motion.h1
          className="si-serif-display mt-6 text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight tracking-[-0.03em] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          Demander un devis
        </motion.h1>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
        >
          Un court formulaire : je reviens vers vous en général sous 24 à 48 h ouvrées avec un retour utile, pas une
          proposition générique toute faite.
        </motion.p>
      </div>
    </section>
  );
}
