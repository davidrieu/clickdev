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

/** Téléphone seul (pas de « fenêtre » desktop) — proportions 9:19, lisible + présence. */
function MockupApplicationsMobiles() {
  return (
    <div
      className="relative mx-auto flex w-full max-w-[9.5rem] flex-col items-center justify-center sm:max-w-[10.5rem] md:mx-0 md:ml-auto md:max-w-[11.25rem] md:pr-0 lg:max-w-[12rem]"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="origin-right w-full"
        initial={fadeIn}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <div className="rounded-[2.4rem] border-2 border-white/18 bg-zinc-950/95 p-1.5 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.92),inset_0_0_0_1px_rgba(255,255,255,0.05)] ring-1 ring-inset ring-white/10 md:[transform:rotateY(-13deg)_rotateX(4deg)] md:[transform-origin:right_center]">
          {/** Encoche : pas de barre de navigation en dessous, contenu d’appli direct */}
          <div className="mb-1.5 flex justify-center">
            <div className="h-1.5 w-24 sm:w-28 rounded-b-xl rounded-t-md bg-zinc-900" aria-hidden>
              <div className="mx-auto h-0.5 w-9 rounded-b-full bg-white/12" />
            </div>
          </div>
          <div className="flex min-h-[12.5rem] flex-col gap-2 overflow-hidden rounded-[1.5rem] border border-white/6 bg-zinc-950/90 px-3 py-2 sm:min-h-[13.5rem] md:min-h-[14.5rem]" aria-hidden>
            <div className="si-hero-wire-hero min-h-0 flex-1 space-y-2 rounded-lg border border-white/8 bg-gradient-to-b from-white/[0.05] to-transparent p-2">
              <div className="h-0.5 w-8 rounded-sm bg-white/20" />
              <div className="h-0.5 w-full max-w-full rounded-full bg-white/6" />
              <div className="h-0.5 w-[90%] rounded-full bg-white/4" />
              <div className="mt-0.5 h-7 w-full rounded border border-white/5 bg-white/[0.04]" />
              <div className="h-4 w-[82%] max-w-full rounded border border-dashed border-white/8" />
            </div>
            <div className="si-hero-wire-section space-y-1">
              <div className="h-0.5 w-full rounded-full bg-white/5" />
              <div className="h-0.5 w-[88%] rounded-full bg-white/4" />
              <div className="h-0.5 w-4/5 rounded-full bg-white/3" />
            </div>
            <div className="si-hero-wire-columns grid grid-cols-2 gap-1.5">
              <div className="h-6 rounded border border-white/6 bg-white/[0.04]" />
              <div className="h-6 rounded border border-white/6 bg-white/[0.04]" />
            </div>
            <div className="si-hero-wire-footer mt-0.5 flex items-end justify-between gap-1.5 border-t border-white/6 pt-2">
              <div className="h-0.5 w-6 flex-1 rounded-sm bg-white/3" />
              <div className="flex items-center gap-1.5">
                <div className="size-1.5 rounded-full border border-white/8 bg-white/[0.04]" />
                <div className="size-1.5 rounded-full border border-white/6 bg-white/[0.04]" />
                <div className="size-1.5 rounded-full border border-white/4 bg-white/[0.04]" />
                <div className="size-1.5 rounded-full border border-white/5 bg-white/[0.04]" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <p className="mt-2.5 text-center font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase">
        Concevoir — coder — publier le store
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
