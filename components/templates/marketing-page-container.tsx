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
        /* À partir de sm : bloc « éditorial » encadré, visible sur toutes les pages marketing. */
        "sm:rounded-2xl sm:border sm:border-line/60 sm:bg-bg-2/35 sm:shadow-[0_36px_100px_-48px_rgba(0,0,0,0.82),inset_0_1px_0_0_rgba(255,255,255,0.04)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
