"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export function GenesisCta() {
  return (
    <motion.div
      className="mx-auto mt-40 flex max-w-5xl flex-col items-center justify-center rounded-xl px-4 py-16 text-center glass"
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
    >
      <motion.h2
        className="mt-2 text-2xl font-medium md:text-4xl"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        Un projet e-commerce, une app ou une refonte ?
      </motion.h2>
      <motion.p
        className="mt-4 max-w-md text-sm leading-7 text-neutral-200"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
      >
        Décrivez le contexte en quelques minutes : périmètre, stack, délais — réponse actionnable, sans engagement.
      </motion.p>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        <Link
          href="/devis/"
          className="btn glass mt-8 inline-flex items-center gap-2 transition-none hover:opacity-95"
        >
          Demander un devis
          <ArrowRightIcon className="size-4" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
