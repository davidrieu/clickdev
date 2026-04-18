type MetricBlockProps = {
  value: string;
  label: string;
};

export function MetricBlock({ value, label }: MetricBlockProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-serif text-3xl leading-none tracking-tight text-ink md:text-4xl lg:text-[2.75rem]">
        {value}
      </p>
      <p className="text-sm text-ink-dim">{label}</p>
    </div>
  );
}
