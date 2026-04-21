'use client';

import { NAV_SILOS } from '@/lib/constants/sitemap';
import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_SIRET,
  SITE_TAGLINE,
  SOCIAL_LINKS,
} from '@/lib/constants/site';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sites = NAV_SILOS.find((s) => s.href === '/sites-internet');
const apps = NAV_SILOS.find((s) => s.href === '/applications-mobiles');
const ia = NAV_SILOS.find((s) => s.href === '/ia');
const seo = NAV_SILOS.find((s) => s.href === '/seo');
const crm = NAV_SILOS.find((s) => s.href === '/crm-outils-metiers');
const maintenance = NAV_SILOS.find((s) => s.href === '/maintenance');

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-xs font-medium tracking-wider text-white/50 uppercase">{title}</p>
      <ul className="space-y-2 text-sm text-white/80">
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
      className="mt-32 border-t border-white/10 px-4 pt-16 pb-10 md:px-12 lg:px-20 xl:px-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Link href="/">
            <Image
              src="/assets/logo-clickdev.png"
              alt={SITE_NAME}
              className="h-8 w-auto max-h-9 max-w-[220px] object-contain object-left"
              width={1024}
              height={276}
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{SITE_TAGLINE}</p>
        </div>

        {sites && (
          <LinkColumn
            title="Sites internet"
            links={[{ label: 'Vue d’ensemble', href: sites.href }, ...sites.children]}
          />
        )}
        <div className="space-y-10">
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
        <div className="space-y-10">
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
        <div>
          <p className="mb-4 text-xs font-medium tracking-wider text-white/50 uppercase">
            Entreprise
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/a-propos" className="transition hover:text-white">
                Qui suis-je ?
              </Link>
            </li>
            <li>
              <Link href="/realisations" className="transition hover:text-white">
                Réalisations
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/expertises" className="transition hover:text-white">
                Expertises
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/devis" className="transition hover:text-white">
                Demander un devis
              </Link>
            </li>
          </ul>
          <p className="mt-8 mb-3 text-xs font-medium tracking-wider text-white/50 uppercase">
            Contact
          </p>
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
            <li className="flex gap-4 pt-2">
              <a
                href={SOCIAL_LINKS.linkedin}
                className="text-white/70 transition hover:text-white"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                className="text-white/70 transition hover:text-white"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={SOCIAL_LINKS.malt}
                className="text-sm text-white/70 transition hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Malt
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {SITE_NAME}. {SITE_SIRET}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/mentions-legales" className="transition hover:text-white/80">
            Mentions légales
          </Link>
          <Link href="/confidentialite" className="transition hover:text-white/80">
            Confidentialité
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
