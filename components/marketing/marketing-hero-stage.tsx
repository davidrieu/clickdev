"use client";

import type { ReactNode } from "react";
import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Boxes, Orbit, Sparkles, Zap } from "lucide-react";
import { marketingFadeUp, marketingStagger, springPop } from "@/lib/motion/marketing";
import { cn } from "@/lib/utils";

const titleClass: Record<"pillar" | "child" | "display", string> = {
  pillar:
    "text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-white",
  child:
    "text-[clamp(1.85rem,4.5vw,2.75rem)] font-semibold leading-[1.08] tracking-tight text-white",
  display:
    "text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.08] tracking-tight text-white",
};

const floatIcons = [Sparkles, Zap, Boxes, Orbit] as const;

type Props = {
  variant: "pillar" | "child" | "display";
  eyebrow: string;
  title: string;
  lead: ReactNode;
  topSlot?: ReactNode;
  compact?: boolean;
  leadClassName?: string;
};

/** Hero marketing — style Genesis (Poppins via shell, halos globaux, accents orange / magenta). */
export function MarketingHeroStage({
  variant,
  eyebrow,
  title,
  lead,
  topSlot,
  compact,
  leadClassName,
}: Props) {
  const reduceMotion = useReducedMotion();
  const st = marketingStagger(reduceMotion, compact ? 0.06 : 0.085);
  const fade = marketingFadeUp(reduceMotion, compact ? 20 : 26);

  return (
    <header className={cn("relative", topSlot ? "mt-0" : "")}>
      {topSlot ? <div className="mb-6">{topSlot}</div> : null}

      <div
        className={cn(
          "relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_min(280px,32%)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_min(320px,34%)]",
          compact ? "lg:gap-8" : "",
        )}
      >
        <motion.div
          className="relative z-[1] min-w-0"
          variants={st}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fade} className="flex items-center gap-3">
            <span
              className="h-px w-10 shrink-0 bg-gradient-to-r from-[#f26a06] via-[#f26a06]/70 to-transparent md:w-14"
              aria-hidden
            />
            <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-white/50">
              {eyebrow}
            </p>
          </motion.div>

          <motion.h1 variants={fade} className={cn(titleClass[variant], "mt-4")}>
            <span className="bg-gradient-to-br from-white via-white to-[#f26a06] bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>

          <motion.div
            variants={fade}
            className={cn(
              "mt-6 text-lg leading-relaxed text-white/70 md:text-xl [&_a]:text-[#f26a06] [&_a]:underline-offset-4 [&_a]:hover:underline",
              compact && "md:text-lg",
              leadClassName,
            )}
          >
            {lead}
          </motion.div>
        </motion.div>

        <HeroOrnament compact={compact} reduceMotion={!!reduceMotion} />
      </div>
    </header>
  );
}

function HeroOrnament({ compact, reduceMotion }: { compact?: boolean; reduceMotion: boolean }) {
  const gid = useId().replace(/:/g, "");

  return (
    <div
      className={cn(
        "relative z-[1] hidden min-h-[200px] lg:block",
        compact ? "min-h-[160px]" : "min-h-[240px]",
      )}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-2xl border border-white/15 bg-white/[0.06] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_40px_100px_-60px_rgba(0,0,0,0.85)] backdrop-blur-md">
        <motion.div
          className="absolute inset-3 rounded-[22px] border border-[#f26a06]/30"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={springPop(reduceMotion)}
        />
        <svg
          className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] text-[#f26a06]/40"
          viewBox="0 0 320 320"
          fill="none"
        >
          <defs>
            <linearGradient id={`${gid}-g`} x1="40" y1="0" x2="280" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f26a06" stopOpacity="0.85" />
              <stop offset="0.55" stopColor="#d10a8a" stopOpacity="0.35" />
              <stop offset="1" stopColor="#2e08cf" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M56 200 C120 120 200 100 264 72 M72 248 C140 200 200 220 256 256"
            stroke={`url(#${gid}-g)`}
            strokeWidth="1"
            strokeLinecap="round"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.65 }}
            transition={{ duration: reduceMotion ? 0 : 1.35, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.2 }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {floatIcons.map((Icon, i) => (
              <motion.div
                key={Icon.name}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/30 text-[#f26a06] shadow-lg backdrop-blur-sm md:h-12 md:w-12"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...springPop(reduceMotion), delay: reduceMotion ? 0 : 0.22 + i * 0.06 }}
              >
                {!reduceMotion ? (
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3.8 + i * 0.35, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
                  >
                    <Icon className="h-[18px] w-[18px] md:h-5 md:w-5" strokeWidth={1.65} />
                  </motion.div>
                ) : (
                  <Icon className="h-[18px] w-[18px] md:h-5 md:w-5" strokeWidth={1.65} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
