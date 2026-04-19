"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GenesisSectionTitle } from "@/components/genesis/section-title";
import { homeFeaturedCaseStudies } from "@/lib/constants/home-case-studies";

export function GenesisCaseStudies() {
  return (
    <section className="mt-32">
      <GenesisSectionTitle
        title="Études de cas"
        description="Quelques livraisons récentes — chiffres, stack moderne, impact mesurable."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {homeFeaturedCaseStudies.map((study, index) => (
          <motion.article
            key={study.href}
            className="glass flex flex-col rounded-xl p-6 transition duration-300 hover:-translate-y-0.5"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">{study.eyebrow}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{study.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-200">{study.description}</p>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-xs text-neutral-300">
              {study.metrics.slice(0, 4).map((m) => (
                <div key={m.label}>
                  <dt className="text-neutral-500">{m.label}</dt>
                  <dd className="font-medium text-white">{m.value}</dd>
                </div>
              ))}
            </dl>
            <Link href={study.href} className="mt-4 text-sm font-medium text-white/90 hover:text-white">
              Voir le projet →
            </Link>
          </motion.article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/realisations/" className="text-sm font-medium text-neutral-200 hover:text-white">
          Voir toutes les réalisations →
        </Link>
      </div>
    </section>
  );
}
