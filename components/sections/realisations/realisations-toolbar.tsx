"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const FILTERS = [
  "Tous",
  "E-commerce",
  "Marketplace",
  "Mobile",
  "IA",
  "Outil métier",
] as const;

export function RealisationsToolbar() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("Tous");

  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((label) => (
        <button
          key={label}
          type="button"
          onClick={() => setActive(label)}
          className={cn(
            "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors",
            active === label
              ? "border-terracotta bg-terracotta/15 text-ink"
              : "border-line bg-bg-3 text-ink-dim hover:border-line-2 hover:text-ink",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
