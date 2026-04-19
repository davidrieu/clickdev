"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { GenesisSectionTitle } from "@/components/genesis/section-title";
import { homeTestimonials } from "@/lib/constants/home-testimonials";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function GenesisTestimonials() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="mt-32 flex flex-col items-center">
      <GenesisSectionTitle
        title="Témoignages"
        description="Ce que disent les équipes avec lesquelles je collabore."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {homeTestimonials.map((item, index) => (
          <motion.div
            key={`${item.name}-${item.company}`}
            ref={(el) => {
              refs.current[index] = el;
            }}
            className="glass w-full max-w-[22rem] space-y-5 rounded-lg p-5 hover:-translate-y-1"
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
            onAnimationComplete={() => {
              const el = refs.current[index];
              if (el) el.classList.add("transition", "duration-300");
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-neutral-200">
                {item.role}
                {item.company ? ` · ${item.company}` : ""}
              </p>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                {initials(item.name)}
              </span>
            </div>
            <p className="line-clamp-4 text-sm text-neutral-100">« {item.quote} »</p>
            <p className="text-sm text-neutral-400">— {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
