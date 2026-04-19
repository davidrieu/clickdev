"use client";

import { PlayCircleIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { calBookingUrl } from "@/lib/constants/site";

export function GenesisHero() {
  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute left-2/5 top-80 size-[520px] -translate-x-1/2 rounded-full bg-[#D10A8A] blur-[100px]" />
        <div className="absolute right-0 top-80 size-[520px] -translate-x-1/2 rounded-full bg-[#2E08CF] blur-[100px]" />
        <div className="absolute left-1/2 top-0 size-[520px] -translate-x-1/2 rounded-full bg-[#F26A06] blur-[100px]" />
      </motion.div>
      <motion.section className="flex flex-col items-center">
        <motion.div
          className="mt-24 flex items-center gap-3 md:mt-32"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <p className="text-sm text-white/90 md:text-base">10 ans · 80+ projets · Perf & SEO</p>
          <Link href="/realisations/" className="btn glass px-3 py-1 text-xs">
            Réalisations
          </Link>
        </motion.div>
        <motion.h1
          className="mt-4 max-w-4xl text-center text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl md:leading-[1.12]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
        >
          Développeur freelance pour e-commerce, marketplaces et outils métiers qui performent.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-lg text-center text-base leading-7 text-neutral-100"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          Depuis 10 ans, je conçois des sites, applications et CRM sur mesure pour des marques ambitieuses. Accor,
          Greenweez, Spreadshirt et 80+ entreprises me font confiance.
        </motion.p>

        <motion.div
          className="mt-6 flex max-md:w-full flex-col items-center gap-4 md:flex-row md:gap-3"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <Link href="/devis/" className="btn glass flex justify-center py-3 max-md:w-full">
            Demander un devis
          </Link>
          <a
            href={calBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn glass flex items-center justify-center gap-2 py-3 max-md:w-full"
          >
            <PlayCircleIcon className="size-[18px]" />
            Réserver un créneau
          </a>
        </motion.div>
      </motion.section>
    </>
  );
}
