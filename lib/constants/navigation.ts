/** Liens navigation & footer — arborescence brief §4. */

export type NavChild = { label: string; href: string };

export type NavSilo = { label: string; href: string; children: NavChild[] };

export const mainNavSilos: NavSilo[] = [
  {
    label: "Sites internet",
    href: "/sites-internet/",
    children: [
      { label: "Site vitrine", href: "/sites-internet/site-vitrine/" },
      { label: "Site e-commerce", href: "/sites-internet/site-ecommerce/" },
      { label: "Marketplace", href: "/sites-internet/marketplace/" },
      { label: "Mise en relation", href: "/sites-internet/site-mise-en-relation/" },
      { label: "Site sur mesure", href: "/sites-internet/site-sur-mesure/" },
      { label: "WordPress", href: "/sites-internet/site-wordpress/" },
      { label: "Intranet / extranet", href: "/sites-internet/intranet-extranet/" },
      { label: "Landing page", href: "/sites-internet/landing-page/" },
    ],
  },
  {
    label: "Applications mobiles",
    href: "/applications-mobiles/",
    children: [
      { label: "iOS", href: "/applications-mobiles/ios/" },
      { label: "Android", href: "/applications-mobiles/android/" },
      { label: "React Native", href: "/applications-mobiles/react-native/" },
      { label: "PWA", href: "/applications-mobiles/pwa/" },
    ],
  },
  {
    label: "IA",
    href: "/ia/",
    children: [
      { label: "Intégration IA", href: "/ia/integration-ia/" },
      { label: "Chatbot IA", href: "/ia/chatbot-ia/" },
      { label: "Agents IA", href: "/ia/agents-ia/" },
      { label: "Automatisation IA", href: "/ia/automatisation-ia/" },
      { label: "RAG & base de connaissances", href: "/ia/rag-base-connaissances/" },
      { label: "IA générative e-commerce", href: "/ia/ia-generative-ecommerce/" },
    ],
  },
  {
    label: "SEO",
    href: "/seo/",
    children: [
      { label: "Audit SEO", href: "/seo/audit-seo/" },
      { label: "SEO technique", href: "/seo/seo-technique/" },
      { label: "SEO local", href: "/seo/seo-local/" },
      { label: "SEO e-commerce", href: "/seo/seo-ecommerce/" },
      { label: "Migration SEO", href: "/seo/migration-seo/" },
      { label: "Rédaction SEO", href: "/seo/redaction-seo/" },
      { label: "Netlinking", href: "/seo/netlinking/" },
      { label: "GEO", href: "/seo/geo-generative-engine-optimization/" },
    ],
  },
  {
    label: "CRM & outils métiers",
    href: "/crm-outils-metiers/",
    children: [
      { label: "CRM sur mesure", href: "/crm-outils-metiers/crm-sur-mesure/" },
      { label: "Intégration CRM", href: "/crm-outils-metiers/integration-crm/" },
      { label: "Automatisation", href: "/crm-outils-metiers/automatisation/" },
    ],
  },
];

export const mainNavFlat = [
  { label: "Réalisations", href: "/realisations/" },
  { label: "Blog", href: "/blog/" },
] as const;

export const contactLinks = {
  email: "mailto:bonjour@clickdev.fr",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  malt: "https://www.malt.fr/",
} as const;

export const maintenanceLinks: NavChild[] = [
  { label: "Maintenance WordPress", href: "/maintenance/maintenance-wordpress/" },
  { label: "Maintenance e-commerce", href: "/maintenance/maintenance-ecommerce/" },
  { label: "TMA", href: "/maintenance/tma/" },
  { label: "Infogérance", href: "/maintenance/infogerance/" },
];

export const footerCompany: NavChild[] = [
  { label: "À propos", href: "/a-propos/" },
  { label: "Réalisations", href: "/realisations/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
  { label: "Demander un devis", href: "/devis/" },
];

export const footerExpertises: NavChild[] = [
  { label: "Next.js", href: "/expertises/nextjs/" },
  { label: "WordPress", href: "/expertises/wordpress/" },
  { label: "Shopify", href: "/expertises/shopify/" },
  { label: "WooCommerce", href: "/expertises/woocommerce/" },
  { label: "React Native", href: "/expertises/react-native/" },
  { label: "Laravel", href: "/expertises/laravel/" },
  { label: "Node.js", href: "/expertises/nodejs/" },
  { label: "OpenAI", href: "/expertises/openai/" },
  { label: "Claude API", href: "/expertises/claude-api/" },
  { label: "LangChain", href: "/expertises/langchain/" },
];
