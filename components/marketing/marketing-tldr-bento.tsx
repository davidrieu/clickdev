"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Cpu, Layers, Shield, Sparkles, Target } from "lucide-react";
import { marketingFadeUp, marketingStagger } from "@/lib/motion/marketing";
import { cn } from "@/lib/utils";

const icons = [Sparkles, Target, Shield, Cpu, Layers, CheckCircle2] as const;

type Props = {
  items: string[];
  className?: string;
};

/**
 * TL;DR en grille type « bento » : icônes SVG + cartes animées au scroll.
 */
export function MarketingTldrBento({ items, className }: Props) {
  const reduceMotion = useReducedMotion();
  const st = marketingStagger(reduceMotion, 0.07);
  const fade = marketingFadeUp(reduceMotion, 18);

  return (
    <aside
      className={cn(
        "mt-10 overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-transparent p-1 shadow-[0_28px_90px_-48px_rgba(0,0,0,0.75),inset_0_1px_0_0_rgba(255,255,255,0.06)] md:p-1.5",
        className,
      )}
    >
      <div className="rounded-[14px] border border-white/10 bg-black/25 px-4 py-5 md:px-6 md:py-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#f26a06]" aria-hidden />
          <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-white/45">TL;DR</p>
        </div>

        <motion.ul
          className="mt-5 grid gap-3 sm:grid-cols-2"
          variants={st}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8%" }}
        >
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.li
                key={`${i}-${item.slice(0, 24)}`}
                variants={fade}
                className="group relative flex gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-[#f26a06]/35 hover:bg-white/[0.08] md:p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-black/35 text-[#f26a06] shadow-inner">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} aria-hidden />
                </span>
                <span className="text-sm leading-relaxed text-white/70 md:text-[15px]">{item}</span>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </aside>
  );
}
