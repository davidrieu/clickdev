import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Enveloppe pages marketing : article léger (halos globaux `GenesisAmbientHalos` dans le layout).
 */
export function MarketingArticleShell({ children, className }: Props) {
  return (
    <article className={cn("relative z-[1] border-b border-white/10 text-white", className)}>{children}</article>
  );
}
