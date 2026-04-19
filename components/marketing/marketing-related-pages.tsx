"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { marketingFadeUp, marketingStagger } from "@/lib/motion/marketing";
import { cn } from "@/lib/utils";

type LinkItem = { label: string; href: string };

type Props = {
  title?: string;
  links: LinkItem[];
  className?: string;
};

export function MarketingRelatedPages({ title = "Approfondir", links, className }: Props) {
  const reduceMotion = useReducedMotion();
  if (links.length === 0) return null;

  const st = marketingStagger(reduceMotion, 0.06);
  const fade = marketingFadeUp(reduceMotion, 14);

  return (
    <nav
      className={cn(
        "mt-10 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:p-6",
        className,
      )}
      aria-label="Pages du silo"
    >
      <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-white/45">{title}</p>

      <motion.ul
        className="mt-4 grid gap-2 sm:grid-cols-2"
        variants={st}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-6%" }}
      >
        {links.map((l) => (
          <motion.li key={l.href} variants={fade}>
            <Link
              href={l.href}
              className="group flex items-center justify-between gap-3 rounded-xl border border-white/12 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white/95 transition-colors hover:border-[#f26a06]/45 hover:bg-white/10 md:text-[15px]"
            >
              <span className="min-w-0 truncate">{l.label}</span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-[#f26a06]/90 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ff9c6b]"
                aria-hidden
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
