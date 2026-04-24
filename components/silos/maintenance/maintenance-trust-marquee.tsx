'use client';

import { useMemo } from 'react';

import { MAINTENANCE_TRUST_MARQUEE_NAMES } from '@/lib/constants/maintenance-pillar-premium';

function TrustPill({ label, subtle }: { label: string; subtle?: boolean }) {
  return (
    <span
      className={`shrink-0 rounded-full border px-5 py-2.5 font-mono text-[11px] tracking-wider uppercase transition ${
        subtle
          ? 'border-white/[0.07] bg-white/[0.02] text-white/45'
          : 'border-white/12 bg-white/[0.04] text-white/70'
      }`}
    >
      {label}
    </span>
  );
}

export function MaintenanceTrustMarquee() {
  const row = useMemo(() => [...MAINTENANCE_TRUST_MARQUEE_NAMES, ...MAINTENANCE_TRUST_MARQUEE_NAMES], []);

  return (
    <div className="relative z-10 border-y border-white/[0.07] bg-black">
      <div className="si-shell-1400 flex flex-col items-center py-8 md:py-10">
        <h2 className="text-center font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">
          Des contextes exigeants — mêmes exigences côté prod
        </h2>
        <div className="mt-6 w-full overflow-hidden mask-[linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
          <div className="si-marquee-l flex min-h-[52px] w-max flex-nowrap items-center gap-3 pr-3 md:min-h-[56px]">
            {row.map((label, i) => (
              <TrustPill key={`${label}-${i}`} label={label} subtle={i % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
