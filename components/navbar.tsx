'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { NAV_FIRST_LINK, NAV_FLAT_LINKS, NAV_PRIMARY_SILOS, NAV_SILOS } from '@/lib/constants/sitemap';
import { SITE_URL } from '@/lib/constants/site';
import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <motion.nav
        aria-label="Navigation principale"
        className={`sticky top-0 z-50 flex h-[72px] w-full items-center justify-between px-4 transition-colors md:px-12 lg:px-20 xl:px-24 ${
          isScrolled ? 'bg-[rgba(13,13,13,0.85)] backdrop-blur-[20px]' : ''
        }`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 250, damping: 70, mass: 1 }}
      >
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/logo.svg"
            alt="Clickdev"
            className="h-8.5 w-auto"
            width={205}
            height={48}
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          <Link
            href={NAV_FIRST_LINK.href}
            className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            {NAV_FIRST_LINK.label}
          </Link>
          {NAV_PRIMARY_SILOS.map((silo) => (
            <div key={silo.href} className="group relative">
              <Link
                href={silo.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                {silo.label}
              </Link>
              <div
                className="pointer-events-none invisible absolute top-full left-0 z-50 min-w-[220px] pt-2 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100"
                role="menu"
              >
                <div className="rounded-lg border border-white/15 bg-black/95 py-2 shadow-xl backdrop-blur-md">
                  {silo.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
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
              className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/devis" className="btn glass ml-2 py-2 text-sm">
            Demander un devis
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-md p-2 transition hover:bg-white/10 xl:hidden"
          aria-label="Ouvrir le menu"
        >
          <MenuIcon className="size-6.5" />
        </button>
      </motion.nav>

      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-black/95 text-white transition duration-200 xl:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-full opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-4">
          <span className="text-sm font-medium tracking-wide text-white/70">Menu</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-md p-2 hover:bg-white/10"
            aria-label="Fermer le menu"
          >
            <XIcon className="size-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <Link
            href={NAV_FIRST_LINK.href}
            className="mb-6 block rounded-md border border-white/15 bg-white/[0.04] px-3 py-3 text-center text-base font-medium text-white transition hover:bg-white/10"
            onClick={() => setIsOpen(false)}
          >
            {NAV_FIRST_LINK.label}
          </Link>
          <Accordion multiple defaultValue={[]} className="space-y-2">
            {NAV_SILOS.map((silo) => (
              <AccordionItem key={silo.href} value={silo.href} className="border-white/15">
                <AccordionTrigger className="text-base hover:no-underline">
                  {silo.label}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 pb-2">
                    <Link
                      href={silo.href}
                      className="rounded-md px-2 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Vue d’ensemble
                    </Link>
                    {silo.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="rounded-md px-2 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 space-y-2 border-t border-white/10 pt-6">
            {NAV_FLAT_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded-md px-2 py-3 text-base font-medium hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/devis"
              className="btn glass mt-4 block w-full py-3 text-center"
              onClick={() => setIsOpen(false)}
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
