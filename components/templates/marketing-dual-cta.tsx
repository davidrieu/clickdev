import Link from "next/link";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LinkSpec = { href: string; label: string };

type Props = {
  primary: LinkSpec;
  secondary: LinkSpec;
  /** Marge / bordure haute comme les autres fins de page. */
  className?: string;
};

/**
 * Rangée standard fin de page : CTA principal + lien secondaire ghost.
 */
export function MarketingDualCta({ primary, secondary, className }: Props) {
  return (
    <div
      className={cn(
        "mt-16 flex flex-col gap-3 border-t border-line pt-12 sm:flex-row sm:items-center md:mt-20 md:pt-16",
        className,
      )}
    >
      <Link href={primary.href} className={cn(buttonVariants({ size: "cta" }))}>
        {primary.label}
      </Link>
      <Link
        href={secondary.href}
        className={cn(
          buttonVariants({ variant: "ghost", size: "lg" }),
          "justify-center",
        )}
      >
        {secondary.label}
      </Link>
    </div>
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
        "mt-12 flex flex-col gap-3 border-t border-line pt-12 sm:flex-row sm:items-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
