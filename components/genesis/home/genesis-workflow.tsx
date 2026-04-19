"use client";

import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GenesisSectionTitle } from "@/components/genesis/section-title";
import { homeProcessSteps } from "@/lib/constants/home-process";

export function GenesisWorkflow() {
  return (
    <section className="relative mt-32">
      <GenesisSectionTitle
        title="Du cadrage à la mise en ligne, sans zone grise."
        description="Une méthode claire, orientée livrables et mesure — du cadrage au run."
      />

      <motion.div
        className="relative mt-20 space-y-20 md:space-y-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {homeProcessSteps.map((step, index) => (
          <motion.div
            key={step.title}
            className={`flex flex-col items-center justify-center gap-6 md:gap-20 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <div className="flex h-auto min-h-[200px] w-full max-w-sm flex-1 flex-col justify-between rounded-2xl bg-gradient-to-br from-white/12 to-white/[0.03] p-6">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-black/25 text-sm font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex max-w-md flex-1 flex-col gap-6 md:px-6">
              <h3 className="text-2xl font-medium text-white">{step.title}</h3>
              <p className="line-clamp-4 text-sm leading-6 text-neutral-100">{step.description}</p>
              <Link href="/devis/" className="flex items-center gap-2 text-sm text-white/90 hover:text-white">
                Discuter du projet
                <ExternalLinkIcon className="size-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
