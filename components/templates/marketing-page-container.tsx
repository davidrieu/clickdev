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
        className,
      )}
    >
      {children}
    </div>
  );
}
