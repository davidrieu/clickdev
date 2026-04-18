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
        "mt-10 overflow-hidden rounded-2xl border border-line/70 bg-gradient-to-br from-bg-2/90 via-bg-2/60 to-bg-3/40 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] md:p-6",
        className,
      )}
      aria-label="Pages du silo"
    >
      <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-ink-muted">{title}</p>

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
              className="group flex items-center justify-between gap-3 rounded-xl border border-line/60 bg-bg-3/50 px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-terracotta/40 hover:bg-bg-3/85 md:text-[15px]"
            >
              <span className="min-w-0 truncate">{l.label}</span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-terracotta/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-terracotta"
                aria-hidden
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
