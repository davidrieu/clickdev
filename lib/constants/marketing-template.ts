/**
 * Gabarit marketing — espacements et largeurs alignés sur tout le site
 * (silos, pages filles, à propos, blog, etc.).
 */
/** Padding vertical ; le horizontal est porté par le `main` du layout marketing (Genesis). */
export const MARKETING_PAGE_PAD = "py-16 md:py-24 lg:py-28" as const;

export const MARKETING_MAX_ARTICLE = "max-w-[960px]";
export const MARKETING_MAX_NARROW = "max-w-[640px]";
export const MARKETING_MAX_READING = "max-w-[720px]";
export const MARKETING_MAX_WIDE = "max-w-[840px]";

export type MarketingContentWidth = "article" | "narrow" | "reading" | "wide";

export const marketingMaxWidthClass: Record<MarketingContentWidth, string> = {
  article: MARKETING_MAX_ARTICLE,
  narrow: MARKETING_MAX_NARROW,
  reading: MARKETING_MAX_READING,
  wide: MARKETING_MAX_WIDE,
};
