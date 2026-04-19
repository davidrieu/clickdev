"use client";

import {
  Brain,
  Globe,
  LineChart,
  type LucideIcon,
  Smartphone,
  Wrench,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { GenesisSectionTitle } from "@/components/genesis/section-title";
import { homeServices } from "@/lib/constants/home-services";

const icons: LucideIcon[] = [Globe, Smartphone, Brain, LineChart, Briefcase, Wrench];

export function GenesisFeatures() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="mt-32">
      <GenesisSectionTitle
        title="Services"
        description="Sites, apps mobiles, IA, SEO, CRM et maintenance — une approche orientée livrables et mesure."
      />

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 px-6">
        {homeServices.map((service, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={service.href}
              ref={(el) => {
                refs.current[index] = el;
              }}
              className="glass w-full max-w-80 space-y-4 rounded-xl p-6 hover:-translate-y-0.5"
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
                const card = refs.current[index];
                if (card) card.classList.add("transition", "duration-300");
              }}
            >
              <Icon className="size-[34px] text-white" strokeWidth={1.5} />
              <h3 className="text-base font-medium text-white">
                <Link href={service.href} className="hover:underline">
                  {service.title}
                </Link>
              </h3>
              <p className="line-clamp-3 pb-2 text-sm leading-6 text-neutral-200">{service.description}</p>
              <p className="text-xs text-neutral-400">{service.tags.slice(0, 4).join(" · ")}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
