import type { ReactNode } from "react";
import Link from "next/link";
import {
  contactLinks,
  footerCompany,
  footerExpertises,
  maintenanceLinks,
  mainNavSilos,
} from "@/lib/constants/navigation";

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
        {title}
      </h2>
      {children}
    </div>
  );
}

function FooterLinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-sm text-ink-dim transition-colors hover:text-ink"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  const sites = mainNavSilos.find((s) => s.href === "/sites-internet/");
  const apps = mainNavSilos.find((s) => s.href === "/applications-mobiles/");
  const ia = mainNavSilos.find((s) => s.href === "/ia/");
  const seo = mainNavSilos.find((s) => s.href === "/seo/");
  const crm = mainNavSilos.find((s) => s.href === "/crm-outils-metiers/");

  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 xl:grid-cols-6 xl:gap-12">
          <div className="col-span-2 xl:col-span-2">
            <Link href="/" className="font-serif text-2xl italic text-ink">
              Clickdev
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-dim">
              Développeur freelance pour e-commerce, marketplaces et outils métiers qui
              performent — sites, apps, IA, SEO &amp; CRM.
            </p>
          </div>

          {sites ? (
            <FooterColumn title="Sites internet">
              <FooterLinkList
                items={[
                  { label: "Vue d’ensemble", href: sites.href },
                  ...sites.children,
                ]}
              />
            </FooterColumn>
          ) : null}

          {apps && ia ? (
            <FooterColumn title="Apps & IA">
              <p className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                Applications mobiles
              </p>
              <FooterLinkList
                items={[{ label: "Vue d’ensemble", href: apps.href }, ...apps.children]}
              />
              <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                IA
              </p>
              <FooterLinkList
                items={[{ label: "Vue d’ensemble", href: ia.href }, ...ia.children]}
              />
            </FooterColumn>
          ) : null}

          {seo ? (
            <FooterColumn title="SEO & GEO">
              <FooterLinkList
                items={[{ label: "Vue d’ensemble", href: seo.href }, ...seo.children]}
              />
            </FooterColumn>
          ) : null}

          {crm ? (
            <FooterColumn title="CRM & maintenance">
              <p className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                CRM & outils métiers
              </p>
              <FooterLinkList
                items={[{ label: "Vue d’ensemble", href: crm.href }, ...crm.children]}
              />
              <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                Maintenance
              </p>
              <FooterLinkList
                items={[
                  { label: "Vue d’ensemble", href: "/maintenance/" },
                  ...maintenanceLinks,
                ]}
              />
            </FooterColumn>
          ) : null}

          <FooterColumn title="Entreprise & contact">
            <FooterLinkList items={footerCompany} />
            <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-dim">
              <li>
                <a className="hover:text-ink" href={contactLinks.email}>
                  bonjour@clickdev.fr
                </a>
              </li>
              <li>
                <a
                  className="hover:text-ink"
                  href={contactLinks.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="hover:text-ink"
                  href={contactLinks.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="hover:text-ink"
                  href={contactLinks.malt}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Malt
                </a>
              </li>
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <h2 className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
            Expertises
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {footerExpertises.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-dim transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Clickdev — David Rieu. SIRET : à compléter.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/mentions-legales/" className="hover:text-ink-dim">
              Mentions légales
            </Link>
            <Link href="/confidentialite/" className="hover:text-ink-dim">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
