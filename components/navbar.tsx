'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { NAV_FIRST_LINK, NAV_FLAT_LINKS, NAV_PRIMARY_SILOS, NAV_SILOS } from '@/lib/constants/sitemap';
import { SITE_URL } from '@/lib/constants/site';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';

function isNavActive(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/';
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname() ?? '/';
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuTitleId = useId();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 6);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Empêche le scroll de fond (iOS / Android) quand le tiroir est ouvert
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const openMenu = useCallback(() => setIsOpen(true), []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const t = requestAnimationFrame(() => closeButtonRef.current?.focus());
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(t);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, closeMenu]);

  const jsonLd = useMemo(
    () =>
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: NAV_FIRST_LINK.label,
            url: `${SITE_URL}${NAV_FIRST_LINK.href}`,
          },
          ...NAV_PRIMARY_SILOS.map((silo, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: silo.label,
            url: `${SITE_URL}${silo.href}`,
          })),
          ...NAV_FLAT_LINKS.map((l, i) => ({
            '@type': 'ListItem',
            position: NAV_PRIMARY_SILOS.length + i + 2,
            name: l.label,
            url: `${SITE_URL}${l.href}`,
          })),
        ],
      }),
    []
  );

  const enterEase = [0.22, 1, 0.36, 0.99] as [number, number, number, number];
  const panelTransition = reduceMotion
    ? { duration: 0.18 }
    : { type: 'spring' as const, stiffness: 400, damping: 38, mass: 0.6 };
  const fadeTransition = { duration: reduceMotion ? 0.12 : 0.2 };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <header className="sticky top-0 z-50 w-full">
        <nav
          aria-label="Navigation principale"
          className={cn(
            'w-full border-b border-transparent transition-[background,border-color,box-shadow,backdrop-filter] duration-300',
            'pt-[env(safe-area-inset-top,0px)]',
            isScrolled
              ? 'border-white/[0.09] bg-[oklch(0.1_0_0/0.75)] shadow-[0_1px_0_0_rgba(255,255,255,0.05),0_12px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl'
              : 'bg-gradient-to-b from-black/85 to-transparent pb-px backdrop-blur-sm'
          )}
        >
          <div className="si-shell-1400 flex h-[3.5rem] min-h-[3.5rem] w-full min-w-0 max-w-full items-center justify-between gap-3 sm:h-16 sm:min-h-16">
            <Link href="/" className="group relative shrink-0" onClick={closeMenu}>
              <Image
                src="/assets/logo-clickdev.png"
                alt="Clickdev"
                className="h-8 max-h-9 w-auto max-w-[min(200px,48vw)] object-contain object-left transition [transition-duration:200ms] group-hover:opacity-90"
                width={1024}
                height={276}
                priority
              />
            </Link>

            <div className="hidden min-w-0 items-center gap-2.5 xl:flex">
              <div className="inline-flex min-w-0 max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-white/[0.1] bg-white/[0.04] p-0.5 pl-1.5 pr-0.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_1px_0_0_rgba(0,0,0,0.2)] [scrollbar-width:none] sm:pl-2 sm:pr-0.5 [&::-webkit-scrollbar]:hidden">
                <Link
                  href={NAV_FIRST_LINK.href}
                  className={cn(
                    'shrink-0 rounded-full px-2.5 py-1.5 text-[13px] font-medium text-white/78 transition',
                    isNavActive(pathname, NAV_FIRST_LINK.href) ? 'bg-white/12 text-white' : 'hover:bg-white/10 hover:text-white'
                  )}
                >
                  {NAV_FIRST_LINK.label}
                </Link>
                {NAV_PRIMARY_SILOS.map((silo) => (
                  <div key={silo.href} className="group/silo relative">
                    <Link
                      href={silo.href}
                      className={cn(
                        'inline-flex max-w-[11.5rem] shrink-0 items-center gap-0.5 truncate rounded-full px-2.5 py-1.5 text-[13px] font-medium text-white/78 transition',
                        isNavActive(pathname, silo.href) ? 'bg-white/12 text-white' : 'hover:bg-white/10 hover:text-white'
                      )}
                    >
                      {silo.label}
                      <ChevronDown
                        className="size-3.5 shrink-0 opacity-55 transition [transition-duration:200ms] group-hover/silo:translate-y-px"
                        strokeWidth={2.2}
                        aria-hidden
                      />
                    </Link>
                    <div
                      className="pointer-events-none invisible absolute top-full left-0 z-[80] min-w-60 pt-2.5 opacity-0 transition [transition-property:visibility,opacity] [transition-duration:180ms] [transition-timing-function:var(--easing,linear)] group-hover/silo:pointer-events-auto group-hover/silo:visible group-hover/silo:opacity-100"
                      role="menu"
                      style={{ ['--easing' as string]: 'cubic-bezier(0.4,0,0.2,1)' }}
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[oklch(0.11_0_0/0.95)] p-1.5 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7)] ring-1 ring-inset ring-white/[0.04] backdrop-blur-2xl">
                        {silo.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block rounded-xl px-3.5 py-2 text-sm text-white/80 transition [transition-duration:160ms] first:pt-2.5 last:pb-2.5 hover:bg-white/[0.08] hover:text-white"
                            role="menuitem"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                {NAV_FLAT_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      'shrink-0 rounded-full px-2.5 py-1.5 text-[13px] font-medium text-white/78 transition',
                      isNavActive(pathname, l.href) ? 'bg-white/12 text-white' : 'hover:bg-white/10 hover:text-white'
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/devis"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-[#F26A06]/50 bg-gradient-to-b from-[#F26A06]/32 to-[#F26A06]/14 px-4 py-1.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(242,106,6,0.1),inset_0_1px_0_0_rgba(255,255,255,0.1)] transition [transition-duration:200ms] hover:border-[#F26A06]/70 hover:from-[#F26A06]/44 focus-visible:ring-2 focus-visible:ring-[#F26A06]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/80"
              >
                Devis
              </Link>
            </div>

            <button
              type="button"
              ref={menuButtonRef}
              onClick={openMenu}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_0_rgba(255,255,255,0.06)] transition [transition-duration:200ms] hover:border-white/22 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none active:scale-[0.98] xl:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-menu-panel"
              aria-label="Ouvrir le menu de navigation"
            >
              <span className="sr-only">Menu</span>
              <span
                className="flex w-[1.1rem] flex-col justify-center gap-[0.2rem] overflow-visible"
                aria-hidden
              >
                <span className="h-0.5 w-full rounded-full bg-white/95" />
                <span className="h-0.5 w-[65%] rounded-full bg-white/80" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="mobile-menu-root"
            className="fixed inset-0 z-[100] flex h-[100dvh] max-h-[100dvh] w-full max-w-full min-w-0 items-stretch justify-end xl:hidden"
            initial={false}
          >
            <motion.div
              role="presentation"
              className="absolute inset-0 cursor-default bg-[oklch(0.04_0_0/0.6)] backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fadeTransition}
              onClick={closeMenu}
            />
            <motion.aside
              id="mobile-menu-panel"
              className="relative z-10 flex h-full min-h-0 w-full min-w-0 max-w-md flex-1 flex-col border-l border-white/[0.1] bg-[#060607]/[0.97] shadow-[0_0_0_1px_rgba(255,255,255,0.04),-24px_0_64px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
              style={{
                paddingTop: 'max(0.75rem, env(safe-area-inset-top, 0px))',
                backgroundImage: [
                  'radial-gradient(100%_90%_at_100%_0%, rgba(242,106,6,0.14) 0%, transparent 50%)',
                  'linear-gradient(180deg, oklch(0.1 0 0) 0%, #050505 100%)',
                ].join(', '),
              }}
              initial={reduceMotion ? { x: 24, opacity: 0 } : { x: '100%' }}
              animate={reduceMotion ? { x: 0, opacity: 1, transition: { ease: enterEase, duration: 0.2 } } : { x: 0 }}
              exit={reduceMotion ? { x: 24, opacity: 0 } : { x: '100%' }}
              transition={panelTransition}
              role="dialog"
              aria-modal="true"
              aria-labelledby={menuTitleId}
            >
              <div className="si-shell-1400 flex shrink-0 items-center justify-between border-b border-white/10 py-1 pr-0 sm:pr-1">
                <div className="min-w-0 py-1">
                  <p id={menuTitleId} className="font-mono text-[0.7rem] tracking-[0.22em] text-white/50 uppercase">
                    Menu
                  </p>
                </div>
                <button
                  type="button"
                  ref={closeButtonRef}
                  onClick={closeMenu}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/90 transition hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
                  aria-label="Fermer le menu de navigation"
                >
                  <X className="size-5" strokeWidth={2.1} />
                </button>
              </div>

              <div
                className="si-shell-1400 min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-y-contain pr-0 pt-5 [scrollbar-gutter:stable] sm:pr-1"
                style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom, 0px))' }}
              >
                <Link
                  href={NAV_FIRST_LINK.href}
                  className="mb-3 block w-full rounded-2xl border border-white/12 bg-white/[0.04] py-3.5 text-center text-base font-medium text-white/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] active:scale-[0.99] transition [transition-duration:200ms] hover:border-white/18 hover:bg-white/[0.08]"
                  onClick={closeMenu}
                >
                  {NAV_FIRST_LINK.label}
                </Link>
                <Accordion
                  defaultValue={[]}
                  multiple
                  className="space-y-0 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-0.5"
                >
                  {NAV_SILOS.map((silo) => (
                    <AccordionItem key={silo.href} value={silo.href} className="border-white/[0.07] not-last:border-b">
                      <AccordionTrigger className="!rounded-xl px-3 py-3 text-left text-base font-medium tracking-tight !no-underline text-white/90 hover:!no-underline hover:bg-white/[0.04] data-open:bg-white/[0.04] data-open:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
                        {silo.label}
                      </AccordionTrigger>
                      <AccordionContent className="px-0 pb-1.5">
                        <div className="flex flex-col gap-0.5 px-1.5 pb-2.5">
                          <Link
                            href={silo.href}
                            className="flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-[#F26A06]/90 hover:bg-white/10 hover:text-white"
                            onClick={closeMenu}
                          >
                            <span>Vue d’ensemble</span>
                            <span className="text-xs text-white/35">↗</span>
                          </Link>
                          {silo.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="rounded-xl px-3 py-2.5 text-sm text-white/78 hover:bg-white/[0.08] hover:text-white"
                              onClick={closeMenu}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-5 space-y-0.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-0.5">
                  {NAV_FLAT_LINKS.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block rounded-2xl px-3.5 py-3 text-base font-medium text-white/90 hover:bg-white/[0.06] hover:text-white"
                      onClick={closeMenu}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div
                className="shrink-0 border-t border-white/10 bg-gradient-to-t from-[#040405] to-transparent px-0 py-2 pt-1 backdrop-blur-sm"
                style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 0px))' }}
              >
                <div className="si-shell-1400">
                  <Link
                    href="/devis"
                    className="block w-full rounded-2xl border border-[#F26A06]/50 bg-gradient-to-b from-[#F26A06]/35 to-[#F26A06]/12 py-3.5 text-center text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(242,106,6,0.12),inset_0_1px_0_0_rgba(255,255,255,0.1)] transition [transition-duration:200ms] hover:from-[#F26A06]/45"
                    onClick={closeMenu}
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
