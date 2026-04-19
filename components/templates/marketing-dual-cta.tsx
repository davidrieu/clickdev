"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { easeOutProduct } from "@/lib/motion/home";
import { cn } from "@/lib/utils";

type LinkSpec = { href: string; label: string };

type DualProps = {
  primary: LinkSpec;
  secondary: LinkSpec;
  className?: string;
};

/** CTA fin de page : micro-interactions, accent Genesis (orange). */
export function MarketingDualCta({ primary, secondary, className }: DualProps) {
  const reduceMotion = useReducedMotion();
  const primaryLabel = primary.label.replace(/\s*→\s*$/, "").trim();

  return (
    <motion.div
      className={cn(
        "relative mt-16 flex flex-col gap-4 border-t border-white/10 pt-12 sm:flex-row sm:items-stretch md:mt-20 md:pt-16",
        className,
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: easeOutProduct }}
    >
      <span
        className="pointer-events-none absolute left-0 top-0 h-px w-32 max-w-[45%] bg-gradient-to-r from-[#f26a06]/80 to-transparent"
        aria-hidden
      />
      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: easeOutProduct, delay: reduceMotion ? 0 : 0.05 }}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href={primary.href}
            className={cn(
              buttonVariants({ size: "cta" }),
              "group relative overflow-hidden shadow-[0_22px_60px_-28px_rgba(242,106,6,0.5)]",
            )}
          >
            <span className="relative z-[1] flex items-center justify-center gap-2">
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
            {!reduceMotion ? (
              <motion.span
                className="absolute inset-0 z-0 bg-gradient-to-r from-white/10 to-transparent"
                initial={{ x: "-70%" }}
                whileHover={{ x: "80%" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              />
            ) : null}
          </Link>
          <Link
            href={secondary.href}
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "justify-center border border-transparent hover:border-white/20 hover:bg-white/10",
            )}
          >
            {secondary.label}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

/** Rangée d’actions fin de page (ordre / variantes libres — ex. blog). */
export function MarketingEndButtonRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-12 flex flex-col gap-3 border-t border-white/10 pt-12 sm:flex-row sm:items-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
