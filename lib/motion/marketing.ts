import type { Transition, Variants } from "framer-motion";
import { easeOutProduct, transitionReveal } from "@/lib/motion/home";

export const marketingViewport = {
  once: true as const,
  margin: "-10% 0px -6% 0px",
};

export function marketingFadeUp(reduceMotion: boolean | null, y = 28): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, y: 0, filter: "none" },
      visible: { opacity: 1, y: 0, filter: "none", transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0, y, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: transitionReveal(0.52),
    },
  };
}

export function marketingStagger(reduceMotion: boolean | null, stagger = 0.09): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : stagger,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };
}

export function marketingScaleIn(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, scale: 1 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0, scale: 0.94, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOutProduct },
    },
  };
}

export function springPop(reduceMotion: boolean | null): Transition {
  if (reduceMotion) return { duration: 0 };
  return { type: "spring", stiffness: 380, damping: 28, mass: 0.85 };
}
