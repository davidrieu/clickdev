import type { Transition, Variants } from "framer-motion";

/** Courbe type « produit » (sortie rapide, fin douce). */
export const easeOutProduct = [0.22, 1, 0.36, 1] as const;

export const viewportOnceLoose = {
  once: true as const,
  margin: "-12% 0px -8% 0px",
};

export const viewportOnceTight = {
  once: true as const,
  margin: "-60px",
};

export function transitionReveal(duration = 0.55): Transition {
  return { duration, ease: easeOutProduct };
}

/** Entrée section / bloc : montée + léger déblur. */
export function staggerItemReveal(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, y: 0, filter: "none" },
      visible: { opacity: 1, y: 0, filter: "none", transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0, y: 32, filter: "blur(14px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: transitionReveal(0.58),
    },
  };
}

export function staggerContainer(
  reduceMotion: boolean | null,
  stagger = 0.07,
  delayChildren = 0.06,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : stagger,
        delayChildren: reduceMotion ? 0 : delayChildren,
      },
    },
  };
}

/** Mots / fragments du hero. */
export function heroWordVariant(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, y: 0, filter: "none" },
      visible: { opacity: 1, y: 0, filter: "none", transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.52, ease: easeOutProduct },
    },
  };
}

export function heroHeadingContainer(
  reduceMotion: boolean | null,
  stagger = 0.042,
  delayChildren = 0.12,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : stagger,
        delayChildren: reduceMotion ? 0 : delayChildren,
      },
    },
  };
}

/** Mots du hero — entrée plus théâtrale (3D + déblur). */
export function heroWordVariantExpressive(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, y: 0, rotateX: 0, filter: "none" },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "none",
        transition: { duration: 0 },
      },
    };
  }
  return {
    hidden: { opacity: 0, y: 26, rotateX: -16, filter: "blur(11px)" },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { duration: 0.64, ease: easeOutProduct },
    },
  };
}
