/** Silos services : piliers + pages filles (URLs du brief, sans accents). */

export const SERVICE_SILOS = [
  'sites-internet',
  'applications-mobiles',
  'ia',
  'seo',
  'crm-outils-metiers',
  'maintenance',
] as const;

export type ServiceSilo = (typeof SERVICE_SILOS)[number];

export function isServiceSilo(slug: string): slug is ServiceSilo {
  return (SERVICE_SILOS as readonly string[]).includes(slug);
}

export type NavChild = { label: string; href: string };

export type NavSilo = {
  label: string;
  href: string;
  children: NavChild[];
};

export const NAV_SILOS: NavSilo[] = [
  {
    label: 'Sites internet',
    href: '/sites-internet',
    children: [
      { label: 'Site vitrine', href: '/sites-internet/site-vitrine' },
      { label: 'Site e-commerce', href: '/sites-internet/site-ecommerce' },
      { label: 'Marketplace', href: '/sites-internet/marketplace' },
      { label: 'Site de mise en relation', href: '/sites-internet/site-mise-en-relation' },
      { label: 'Site sur mesure', href: '/sites-internet/site-sur-mesure' },
      { label: 'Site WordPress', href: '/sites-internet/site-wordpress' },
      { label: 'Intranet / extranet', href: '/sites-internet/intranet-extranet' },
      { label: 'Landing page', href: '/sites-internet/landing-page' },
    ],
  },
  {
    label: 'Applications mobiles',
    href: '/applications-mobiles',
    children: [
      { label: 'iOS', href: '/applications-mobiles/ios' },
      { label: 'Android', href: '/applications-mobiles/android' },
      { label: 'React Native', href: '/applications-mobiles/react-native' },
      { label: 'PWA', href: '/applications-mobiles/pwa' },
    ],
  },
  {
    label: 'IA',
    href: '/ia',
    children: [
      { label: 'IA site & appli', href: '/ia/integration-ia' },
      { label: 'Chatbot & assistant', href: '/ia/chatbot-ia' },
      { label: 'Scénarios multi-étapes', href: '/ia/agents-ia' },
      { label: 'Automatisation IA', href: '/ia/automatisation-ia' },
      { label: 'Assistant sur vos documents', href: '/ia/rag-base-connaissances' },
      { label: 'IA & e-commerce', href: '/ia/ia-generative-ecommerce' },
    ],
  },
  {
    label: 'SEO',
    href: '/seo',
    children: [
      { label: 'Audit SEO', href: '/seo/audit-seo' },
      { label: 'SEO technique', href: '/seo/seo-technique' },
      { label: 'SEO local', href: '/seo/seo-local' },
      { label: 'SEO e-commerce', href: '/seo/seo-ecommerce' },
      { label: 'Migration SEO', href: '/seo/migration-seo' },
      { label: 'Rédaction SEO', href: '/seo/redaction-seo' },
      { label: 'Netlinking', href: '/seo/netlinking' },
      { label: 'GEO', href: '/seo/geo-generative-engine-optimization' },
    ],
  },
  {
    label: 'CRM & outils métiers',
    href: '/crm-outils-metiers',
    children: [
      { label: 'CRM sur mesure', href: '/crm-outils-metiers/crm-sur-mesure' },
      { label: 'Intégration CRM', href: '/crm-outils-metiers/integration-crm' },
      { label: 'Automatisation', href: '/crm-outils-metiers/automatisation' },
    ],
  },
  {
    label: 'Maintenance',
    href: '/maintenance',
    children: [
      { label: 'Maintenance WordPress', href: '/maintenance/maintenance-wordpress' },
      { label: 'Maintenance e-commerce', href: '/maintenance/maintenance-ecommerce' },
      { label: 'TMA', href: '/maintenance/tma' },
      { label: 'Infogérance', href: '/maintenance/infogerance' },
    ],
  },
];

export const NAV_FLAT_LINKS: NavChild[] = [
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Blog', href: '/blog' },
];

export const EXPERTISE_SLUGS = [
  'nextjs',
  'wordpress',
  'shopify',
  'woocommerce',
  'react-native',
  'laravel',
  'nodejs',
  'openai',
  'claude-api',
  'langchain',
] as const;

export type ExpertiseSlug = (typeof EXPERTISE_SLUGS)[number];

export function isExpertiseSlug(slug: string): slug is ExpertiseSlug {
  return (EXPERTISE_SLUGS as readonly string[]).includes(slug);
}

export function getChildSlugsForSilo(silo: ServiceSilo): string[] {
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  if (!entry) return [];
  const prefix = `/${silo}/`;
  return entry.children.map((c) =>
    c.href.startsWith(prefix) ? c.href.slice(prefix.length) : c.href
  );
}

/** 5 silos menu (hors maintenance, réservée au footer). */
export const NAV_PRIMARY_SILOS: NavSilo[] = NAV_SILOS.filter((s) => s.href !== '/maintenance');
