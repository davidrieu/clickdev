"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Gauge, Layers, LineChart, Shield, Sparkles, Target } from "lucide-react";
import { easeOutProduct } from "@/lib/motion/home";
import { cn } from "@/lib/utils";

const icons = [Layers, Gauge, LineChart, Shield, Sparkles, Target] as const;

type Density = "pillar" | "child";

type Props = {
  index: number;
  density?: Density;
  children: ReactNode;
  className?: string;
};

/**
 * Section longue : rail d’icône (desktop) + apparition au scroll.
 */
export function MarketingSectionShell({ index, density = "pillar", children, className }: Props) {
  const reduceMotion = useReducedMotion();
  const Icon = icons[index % icons.length];
  const isFirst = index === 0;
  const pillarSpacing = isFirst ? "mt-14 md:mt-16" : "mt-16 md:mt-20";
  const childSpacing = "mt-14 md:mt-16";
  const pillarPad = "pt-12 md:pt-16";
  const childPad = "pt-12 md:pt-14";

  return (
    <motion.section
      className={cn(
        "border-t border-line/90",
        density === "child" ? childSpacing : pillarSpacing,
        density === "child" ? childPad : pillarPad,
        className,
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 36, filter: "blur(10px)" }}
      whileInView={
        reduceMotion
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-10% 0px -8% 0px" }}
      transition={{ duration: reduceMotion ? 0 : 0.58, ease: easeOutProduct }}
    >
      <div className="relative md:pl-[3.25rem]">
        <div className="pointer-events-none absolute left-0 top-1 hidden md:block">
          <div className="sticky top-36 flex flex-col items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line/80 bg-bg-3/90 text-terracotta shadow-[0_12px_40px_-18px_rgba(0,0,0,0.85)] backdrop-blur-sm">
              <Icon className="h-[19px] w-[19px]" strokeWidth={1.65} aria-hidden />
            </span>
            <span className="h-28 w-px bg-gradient-to-b from-terracotta/55 via-line to-transparent" aria-hidden />
          </div>
        </div>
        {children}
      </div>
    </motion.section>
  );
}
