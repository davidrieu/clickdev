'use client';

import type { ReactElement } from 'react';
import { motion } from 'framer-motion';

import type { ServiceSilo } from '@/lib/constants/sitemap';

export type HeroSiloMockupId = ServiceSilo;

const SHELL_INNER =
  'rounded-xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-3 shadow-[0_28px_90px_-28px_rgba(0,0,0,0.9)] md:[transform:rotateY(-14deg)_rotateX(5deg)_rotateZ(-2deg)] md:[transform-origin:right_center]';
const PANEL = 'space-y-3 rounded-lg border border-dashed border-white/[0.1] bg-black/35 p-4';
const TRAFFIC = 'mb-3 flex items-center gap-2 border-b border-white/[0.08] pb-3';

const fadeIn = { opacity: 0, y: 28 } as const;
const transition = { delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

type ShellProps = {
  children: React.ReactNode;
  caption: string;
};

function MockupFrame({ children, caption }: ShellProps) {
  return (
    <div
      className="relative mx-auto w-full max-w-lg md:mx-0 md:ml-auto md:mr-0 md:max-w-md lg:max-w-lg"
      style={{ perspective: '1200px' }}
    >
      <motion.div className="origin-center" initial={fadeIn} animate={{ opacity: 1, y: 0 }} transition={transition}>
        <div className={SHELL_INNER}>
          <div className={TRAFFIC} aria-hidden>
            <span className="size-2 rounded-full bg-white/25" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/10" />
            <div className="ml-2 h-2 flex-1 max-w-[180px] rounded-full bg-white/[0.08]" />
          </div>
          {children}
          <p className="mt-3 text-center font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase">{caption}</p>
        </div>
      </motion.div>
    </div>
  );
}

function MockupSitesInternet() {
  return (
    <MockupFrame caption="Build — preview — ship">
      <div className={PANEL} aria-hidden>
        <div className="si-hero-wire-header flex items-center justify-between gap-3 rounded border border-white/15 bg-white/[0.04] px-3 py-2.5">
          <div className="h-2.5 w-16 rounded-sm bg-white/25" />
          <div className="flex gap-2">
            <div className="h-1.5 w-8 rounded-full bg-white/15" />
            <div className="h-1.5 w-8 rounded-full bg-white/15" />
            <div className="h-1.5 w-8 rounded-full bg-white/15" />
          </div>
        </div>

        <div className="si-hero-wire-hero space-y-2 rounded border border-white/12 bg-white/[0.03] p-3">
          <div className="h-3 w-[62%] max-w-[220px] rounded-sm bg-white/20" />
          <div className="h-2 w-full max-w-[280px] rounded-full bg-white/12" />
          <div className="h-2 w-[80%] max-w-[240px] rounded-full bg-white/10" />
          <div className="mt-2 h-20 w-full rounded-md border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent" />
        </div>

        <div className="si-hero-wire-section space-y-2">
          <div className="si-hero-wire-line h-1.5 w-full rounded-full bg-white/12" />
          <div className="si-hero-wire-line-d1 h-1.5 w-[92%] rounded-full bg-white/10" />
          <div className="si-hero-wire-line-d2 h-1.5 w-[78%] rounded-full bg-white/10" />
        </div>

        <div className="si-hero-wire-columns grid grid-cols-2 gap-2">
          <div className="h-20 rounded-md border border-white/12 bg-white/[0.04]" />
          <div className="h-20 rounded-md border border-white/12 bg-white/[0.04]" />
        </div>

        <div className="si-hero-wire-footer flex items-center justify-between gap-2 rounded border border-white/10 bg-white/[0.03] px-3 py-2.5">
          <div className="h-1.5 w-20 rounded-full bg-white/12" />
          <div className="flex gap-1.5">
            <div className="size-1.5 rounded-full bg-white/20" />
            <div className="size-1.5 rounded-full bg-white/20" />
            <div className="size-1.5 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

/**
 * Smartphone (ratio 9:19) : jante, écran noir, **une** ligne statut 9:41 + îlot + batterie, puis contenu d’appli
 * (carte principale, lignes, grille 2×2, barre d’icônes, home indicator) — mêmes animations .si-hero-wire-*.
 */
function MockupApplicationsMobiles() {
  return (
    <div
      className="relative mx-auto flex w-full max-w-[min(17rem,92vw)] flex-col items-stretch sm:max-w-[min(18.5rem,88vw)] md:mx-0 md:ml-auto md:max-w-[min(20rem,42vw)] md:pr-0 lg:max-w-[20.5rem]"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="origin-right w-full md:[transform:rotateY(-12deg)_rotateX(3deg)] md:[transform-origin:right_center]"
        initial={fadeIn}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <div className="mx-auto w-[11.75rem] max-w-full [aspect-ratio:9/19.2] min-h-0 sm:w-[12.5rem] md:w-[14rem] lg:w-[15rem]">
          <div className="flex h-full flex-col overflow-hidden rounded-[2.35rem] border-2 border-white/18 bg-gradient-to-b from-zinc-700/90 to-zinc-950 p-1.5 shadow-[0_32px_110px_-28px_rgba(0,0,0,0.95),inset_0_1px_0_0_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(0,0,0,0.2)]">
            <div
              className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.7rem] bg-[#0a0a0a] ring-1 ring-inset ring-white/5"
              aria-hidden
            >
              {/** Ligne de statut : heure — îlot — signaux + batterie */}
              <div className="si-hero-wire-header relative z-0 flex h-6 shrink-0 items-center border-b border-white/10 bg-[#0a0a0a] px-2.5">
                <span className="w-9 text-[0.5rem] font-medium tabular-nums text-white/50 sm:text-[0.55rem]">9:41</span>
                <div
                  className="pointer-events-none absolute top-1.5 left-1/2 h-3 w-14 -translate-x-1/2 rounded-full bg-zinc-950/95 ring-1 ring-inset ring-white/12"
                  aria-hidden
                />
                <div className="ms-auto flex items-center gap-0.5">
                  <div className="flex h-1.5 items-end justify-end gap-[1px] pr-0.5" aria-hidden>
                    <div className="h-0.5 w-0.5 bg-white/35" />
                    <div className="h-0.5 w-0.5 bg-white/35" />
                    <div className="h-0.5 w-0.5 bg-white/35" />
                    <div className="h-0.5 w-0.5 bg-white/35" />
                  </div>
                  <div className="h-1.5 w-4 rounded-sm border border-white/20 bg-zinc-900" aria-hidden>
                    <div className="h-full w-[0.6rem] rounded-l-sm bg-emerald-400/30" />
                  </div>
                </div>
              </div>

              <div className="min-h-0 flex-1 space-y-1.5 overflow-hidden px-2.5 py-1.5">
                <p className="text-center font-mono text-[0.45rem] tracking-[0.22em] text-white/25 sm:text-[0.5rem]">App · build</p>
                <div className="si-hero-wire-hero space-y-1.5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-2">
                  <div className="mx-auto h-0.5 w-8 rounded-full bg-white/20" />
                  <div className="h-1.5 w-3/4 max-w-full rounded-sm bg-white/18" />
                  <div className="h-0.5 w-[91%] max-w-full rounded-sm bg-white/12" />
                  <div className="h-16 w-full rounded-lg border border-white/8 bg-gradient-to-b from-white/12 to-white/5" />
                </div>
                <div className="si-hero-wire-section space-y-1.5">
                  <div className="h-0.5 w-full rounded-sm bg-white/10" />
                  <div className="h-0.5 w-[90%] rounded-sm bg-white/8" />
                </div>
                <div className="si-hero-wire-columns grid grid-cols-2 gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-10 rounded-xl border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02]"
                    />
                  ))}
                </div>
              </div>

              <div className="si-hero-wire-footer flex shrink-0 items-stretch justify-between gap-0.5 border-t border-white/8 bg-[#0a0a0a] px-0.5 py-1">
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    className="flex h-5 min-w-0 flex-1 items-center justify-center rounded-md border border-white/10 bg-white/[0.04]"
                  />
                ))}
              </div>
              <div className="flex justify-center border-t border-white/5 bg-[#0a0a0a] py-1.5">
                <div className="h-0.5 w-9 rounded-full bg-white/25" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <p className="mt-2.5 text-center font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase">
        Concevoir — coder — publier
      </p>
    </div>
  );
}

function MockupIa() {
  return (
    <MockupFrame caption="Prompt — réponse — itération">
      <div className={PANEL} aria-hidden>
        <div className="si-hero-wire-header flex items-center justify-between gap-2 rounded border border-white/12 bg-white/[0.04] px-2.5 py-2">
          <div className="flex min-w-0 items-center gap-1.5">
            <div className="size-1.5 shrink-0 rounded-full bg-white/30" />
            <div className="h-1.5 w-24 max-w-full rounded-sm bg-white/20" />
          </div>
          <div className="h-1.5 w-4 rounded-sm bg-white/10" />
        </div>
        <div className="si-hero-wire-hero flex justify-end">
          <div className="max-w-[90%] rounded-2xl rounded-tr-sm border border-white/10 bg-white/[0.1] px-2.5 py-2">
            <div className="h-1.5 w-20 rounded-sm bg-white/20" />
            <div className="mt-1.5 h-0.5 w-28 max-w-full rounded-full bg-white/20" />
          </div>
        </div>
        <div className="si-hero-wire-section max-w-[92%]">
          <div className="rounded-2xl rounded-tl-sm border border-white/8 bg-white/[0.04] p-2.5">
            <div className="h-0.5 w-4/5 rounded-full bg-white/20" />
            <div className="mt-1.5 h-0.5 w-3/4 rounded-full bg-white/10" />
            <div className="mt-1.5 h-0.5 w-5/6 rounded-full bg-white/8" />
            <div className="mt-1.5 flex items-center gap-0.5">
              <div className="h-0.5 w-0.5 rounded-full bg-white/15" />
              <div className="h-0.5 w-0.5 rounded-full bg-white/10" />
              <div className="h-0.5 w-0.5 rounded-full bg-white/5" />
            </div>
          </div>
        </div>
        <div className="si-hero-wire-columns">
          <div className="flex items-center justify-between gap-1.5 rounded border border-dashed border-white/10 bg-white/[0.02] py-1.5 pr-1.5 pl-2.5">
            <div className="h-1.5 w-full max-w-[75%] rounded-sm bg-white/8" />
            <div className="h-1.5 w-7 shrink-0 rounded-md bg-white/15" />
          </div>
        </div>
        <div className="si-hero-wire-footer flex items-center justify-between gap-1.5 rounded border border-white/8 bg-white/[0.02] px-1.5 py-1.5">
          <div className="si-hero-wire-line h-0.5 flex-1 rounded-full bg-white/10" />
          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
        </div>
      </div>
    </MockupFrame>
  );
}

function MockupSeo() {
  return (
    <MockupFrame caption="Requête — intention — visibilité">
      <div className={PANEL} aria-hidden>
        <div className="si-hero-wire-header flex items-center gap-1.5 rounded border border-white/10 bg-white/[0.04] px-2 py-1.5">
          <div className="size-2.5 rounded-sm border border-white/8 bg-white/[0.04]" />
          <div className="h-1.5 min-w-0 flex-1 rounded-sm bg-white/8" />
        </div>
        <div className="space-y-2.5">
          <div className="si-hero-wire-hero space-y-1.5 rounded border border-white/6 bg-white/[0.02] p-2">
            <div className="h-1.5 w-3/5 max-w-[200px] rounded-sm bg-sky-300/45" />
            <div className="h-1.5 w-1/2 max-w-[150px] rounded-sm bg-white/6" />
            <div className="h-0.5 w-11/12 max-w-full rounded-full bg-white/5" />
            <div className="h-0.5 w-full max-w-[min(16rem,100%)] rounded-full bg-white/5" />
            <div className="h-0.5 w-2/3 rounded-full bg-white/4" />
          </div>
          <div className="si-hero-wire-section space-y-1.5 rounded border border-white/6 bg-white/[0.02] p-2">
            <div className="h-1.5 w-[55%] max-w-[180px] rounded-sm bg-sky-200/30" />
            <div className="h-1.5 w-[45%] max-w-[120px] rounded-sm bg-white/5" />
            <div className="h-0.5 w-full max-w-full rounded-full bg-white/4" />
            <div className="h-0.5 w-[85%] rounded-full bg-white/3" />
          </div>
          <div className="si-hero-wire-columns">
            <div className="space-y-1.5 rounded border border-white/4 bg-white/[0.01] p-2">
              <div className="h-1.5 w-2/5 max-w-[140px] rounded-sm bg-white/7" />
              <div className="h-1.5 w-1/2 max-w-[100px] rounded-sm bg-white/4" />
              <div className="h-0.5 w-full max-w-full rounded-full bg-white/3" />
            </div>
          </div>
        </div>
        <div className="si-hero-wire-footer">
          <div className="flex h-0.5 overflow-hidden rounded-full bg-white/6">
            <div className="h-full w-2/3 rounded-full bg-white/18" />
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

function MockupCrm() {
  return (
    <MockupFrame caption="Devis — suivi — encaissement">
      <div className={PANEL} aria-hidden>
        <div className="si-hero-wire-header flex items-center justify-between gap-2 rounded border border-white/10 bg-white/[0.04] px-2.5 py-2">
          <div>
            <div className="h-1.5 w-20 rounded-sm bg-white/20" />
            <div className="mt-1.5 h-0.5 w-14 rounded-full bg-white/8" />
          </div>
          <div className="h-2.5 w-8 rounded border border-white/8 bg-white/[0.04]" />
        </div>
        <div className="si-hero-wire-hero space-y-1.5">
          <div className="mb-0.5 grid grid-cols-3 gap-1 border-b border-white/6 pb-1.5 text-[0]">
            <div className="h-0.5 w-10 max-w-full rounded-sm bg-white/5" />
            <div className="h-0.5 w-6 justify-self-center rounded-sm bg-white/4" />
            <div className="h-0.5 w-5 justify-self-end rounded-sm bg-white/4" />
          </div>
          <div className="flex w-full max-w-full items-center justify-between gap-1.5">
            <div className="si-hero-wire-line h-0.5 w-[64%] rounded-full bg-white/8" />
            <div className="h-0.5 w-[12%] rounded-full bg-white/4" />
            <div className="h-0.5 w-[8%] rounded-full bg-white/5" />
          </div>
          <div className="flex w-full max-w-full items-center justify-between gap-1.5">
            <div className="si-hero-wire-line-d1 h-0.5 w-[58%] rounded-full bg-white/6" />
            <div className="h-0.5 w-[10%] rounded-full bg-white/3" />
            <div className="h-0.5 w-[7%] rounded-full bg-white/4" />
          </div>
          <div className="flex w-full max-w-full items-center justify-between gap-1.5">
            <div className="si-hero-wire-line-d2 h-0.5 w-1/2 rounded-full bg-white/5" />
            <div className="h-0.5 w-3/4 max-w-[2.2rem] rounded-full bg-white/3" />
            <div className="h-0.5 w-[1.1rem] rounded-full bg-white/3" />
          </div>
        </div>
        <div className="si-hero-wire-section space-y-1.5 pr-0.5 text-right">
          <div className="h-0.5 w-16 translate-x-0.5 rounded-sm bg-white/4" />
          <div className="h-0.5 w-20 translate-x-0.5 rounded-sm bg-white/3" />
        </div>
        <div className="si-hero-wire-footer flex items-center justify-between border-t border-white/8 pt-1.5">
          <div className="h-0.5 w-20 rounded-sm bg-white/4" />
          <div className="h-2.5 w-[4.2rem] rounded border border-white/10 bg-gradient-to-b from-white/12 to-white/5" />
        </div>
      </div>
    </MockupFrame>
  );
}

function MockupMaintenance() {
  return (
    <MockupFrame caption="Lire — patch — déploiement">
      <div className={PANEL} aria-hidden>
        <div className="si-hero-wire-header flex items-center justify-between gap-1.5 rounded border border-white/8 bg-zinc-950/60 px-1.5 py-1.5">
          <div className="flex min-w-0 items-center gap-1">
            <div className="h-0.5 w-6 rounded-sm bg-white/5" />
            <div className="h-1 w-14 rounded-sm bg-white/8" />
          </div>
          <div className="h-1.5 w-1.5 rounded-sm bg-emerald-500/30" />
        </div>
        <div className="si-hero-wire-hero space-y-0 font-mono text-[8px] leading-tight text-white/35">
          <div className="flex items-start gap-0.5">
            <div className="w-1 flex shrink-0 flex-col gap-0.5 pt-0.5" aria-hidden>
              <div className="h-0.5 w-1 rounded-r bg-white/4" />
              <div className="h-0.5 w-0.5 rounded-r bg-violet-400/25" />
            </div>
            <div className="h-0.5 min-w-0 flex-1 rounded-sm bg-violet-300/25" />
          </div>
        </div>
        <div className="space-y-1.5 pl-0.5">
          <div className="si-hero-wire-line h-0.5 w-11/12 max-w-full rounded-sm bg-cyan-300/15" />
          <div className="si-hero-wire-line-d1 h-0.5 w-3/4 rounded-sm bg-white/10" />
          <div className="si-hero-wire-line-d2 h-0.5 w-4/5 rounded-sm bg-amber-200/12" />
        </div>
        <div className="si-hero-wire-section rounded border border-white/6 bg-white/[0.02] p-1.5">
          <div className="h-0.5 w-2/3 rounded-sm bg-rose-300/15" />
          <div className="mt-1 h-0.5 w-1/2 rounded-sm bg-emerald-200/20" />
        </div>
        <div className="si-hero-wire-columns -space-y-0.5">
          {['+', ' ', ' '].map((c, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="w-2.5 text-[8px] text-white/20">{c}</span>
              <div className="h-0.5 flex-1 max-w-full rounded-sm bg-white/4" style={{ maxWidth: `${32 + i * 6}%` }} />
            </div>
          ))}
        </div>
        <div className="si-hero-wire-footer flex items-center gap-1.5 rounded border border-dashed border-white/8 py-1">
          <div className="h-0.5 flex-1 rounded-sm bg-white/4" />
          <div className="h-1.5 w-1.5 rounded-sm bg-white/12" />
        </div>
      </div>
    </MockupFrame>
  );
}

const MOCKUPS: Record<HeroSiloMockupId, () => ReactElement> = {
  'sites-internet': MockupSitesInternet,
  'applications-mobiles': MockupApplicationsMobiles,
  ia: MockupIa,
  seo: MockupSeo,
  'crm-outils-metiers': MockupCrm,
  maintenance: MockupMaintenance,
};

export function HeroSiloMockup({ id }: { id: HeroSiloMockupId }) {
  const C = MOCKUPS[id];
  return C ? <C /> : <MockupSitesInternet />;
}
