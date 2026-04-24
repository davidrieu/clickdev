'use client';

import { NAV_SILOS } from '@/lib/constants/sitemap';
import { SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_TAGLINE } from '@/lib/constants/site';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sites = NAV_SILOS.find((s) => s.href === '/sites-internet');
const apps = NAV_SILOS.find((s) => s.href === '/applications-mobiles');
const ia = NAV_SILOS.find((s) => s.href === '/ia');
const seo = NAV_SILOS.find((s) => s.href === '/seo');
const crm = NAV_SILOS.find((s) => s.href === '/crm-outils-metiers');
const maintenance = NAV_SILOS.find((s) => s.href === '/maintenance');

const ENTREPRISE_LINKS = [
  { label: 'Qui suis-je ?', href: '/a-propos' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Blog', href: '/blog' },
  { label: 'Expertises', href: '/expertises' },
  { label: 'Contact', href: '/devis' },
  { label: 'Demander un devis', href: '/devis' },
] as const;

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="min-w-0 text-center sm:text-left">
      <p className="mb-4 text-xs font-medium tracking-wider text-white/50 uppercase">{title}</p>
      <ul className="space-y-2 text-sm break-words text-white/80 sm:text-left">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <motion.footer
      className="mt-32 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/*
        6 colonnes : marque + contact (×2) + sites + apps/IA + SEO + CRM/maintenance.
        Les liens « Entreprise » sont en bandeau bas.
      */}
      <div className="si-shell-1400 pt-16 pb-10">
        <div className="grid w-full min-w-0 grid-cols-1 gap-10 sm:gap-12 sm:text-left lg:grid-cols-6 lg:gap-x-6 lg:gap-y-10">
        <div className="flex min-w-0 flex-col items-center text-center sm:items-start sm:text-left lg:col-span-2">
          <Link href="/" className="inline-block max-w-full">
            <Image
              src="/assets/logo-clickdev.png"
              alt={SITE_NAME}
              className="h-8 w-auto max-h-9 max-w-[min(220px,100%)] object-contain object-left"
              width={1024}
              height={276}
            />
          </Link>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/70">{SITE_TAGLINE}</p>
          <div className="mt-8">
            <p className="mb-3 text-xs font-medium tracking-wider text-white/50 uppercase">Contact</p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="transition hover:text-white">
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_PHONE.replace(/\s/g, '')}`}
                  className="transition hover:text-white"
                >
                  {SITE_PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {sites && (
          <LinkColumn
            title="Sites internet"
            links={[{ label: 'Vue d’ensemble', href: sites.href }, ...sites.children]}
          />
        )}
        <div className="min-w-0 space-y-10">
          {apps && (
            <LinkColumn
              title="Applications mobiles"
              links={[{ label: 'Vue d’ensemble', href: apps.href }, ...apps.children]}
            />
          )}
          {ia && (
            <LinkColumn
              title="IA"
              links={[{ label: 'Vue d’ensemble', href: ia.href }, ...ia.children]}
            />
          )}
        </div>
        {seo && (
          <LinkColumn
            title="SEO & GEO"
            links={[{ label: 'Vue d’ensemble', href: seo.href }, ...seo.children]}
          />
        )}
        <div className="min-w-0 space-y-10">
          {crm && (
            <LinkColumn
              title="CRM & outils métiers"
              links={[{ label: 'Vue d’ensemble', href: crm.href }, ...crm.children]}
            />
          )}
          {maintenance && (
            <LinkColumn
              title="Maintenance"
              links={[{ label: 'Vue d’ensemble', href: maintenance.href }, ...maintenance.children]}
            />
          )}
        </div>
        </div>
      </div>

      <div className="si-shell-1400 border-t border-white/10 pb-10 pt-8">
        <div className="flex w-full min-w-0 flex-col items-center gap-6 text-center sm:items-stretch sm:text-left lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <p className="shrink-0 text-xs leading-relaxed text-white/50">
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
          <nav
            className="flex min-w-0 flex-1 flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-start sm:gap-x-6 lg:justify-end"
            aria-label="Liens entreprise"
          >
            {ENTREPRISE_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/65 transition hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.footer>
  );
}
