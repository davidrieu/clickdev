import type { ReactNode } from "react";
import {
  MARKETING_PAGE_PAD,
  type MarketingContentWidth,
  marketingMaxWidthClass,
} from "@/lib/constants/marketing-template";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  /** Largeur max du bloc de texte. */
  width?: MarketingContentWidth;
  className?: string;
};

/**
 * Colonne centrale : padding marketing + max-width cohérente.
 */
export function MarketingPageContainer({ children, width = "article", className }: Props) {
  return (
    <div
      className={cn(
        "relative z-[1] mx-auto",
        MARKETING_PAGE_PAD,
        marketingMaxWidthClass[width],
        /* Cadre « verre » + halo : plus premium que la simple carte bordée. */
        "sm:rounded-[28px] sm:border sm:border-line/55 sm:bg-gradient-to-b sm:from-bg-2/[0.42] sm:via-bg-2/[0.22] sm:to-bg/[0.55] sm:shadow-[0_48px_120px_-52px_rgba(0,0,0,0.88),inset_0_1px_0_0_rgba(255,255,255,0.055)] sm:backdrop-blur-[14px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
