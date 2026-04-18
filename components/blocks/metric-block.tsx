import { cn } from "@/lib/utils";

type MetricBlockProps = {
  value: string;
  label: string;
  /** Métriques plus compactes (ex. grille 2×2 sur la home). */
  compact?: boolean;
};

export function MetricBlock({ value, label, compact }: MetricBlockProps) {
  return (
    <div className="flex flex-col gap-1">
      <p
        className={cn(
          "font-serif leading-none tracking-tight text-ink",
          compact
            ? "text-2xl md:text-3xl lg:text-[2.25rem]"
            : "text-3xl md:text-4xl lg:text-[2.75rem]",
        )}
      >
        {value}
      </p>
      <p className={cn("text-ink-dim", compact ? "text-xs" : "text-sm")}>{label}</p>
    </div>
  );
}
