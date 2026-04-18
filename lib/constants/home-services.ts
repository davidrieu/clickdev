export type HomeService = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

export const homeServices: HomeService[] = [
  {
    title: "Sites internet",
    description:
      "Sites vitrines, e-commerce, marketplaces et sites de mise en relation.",
    href: "/sites-internet/",
    tags: ["Next.js", "WordPress", "Shopify", "WooCommerce", "Astro"],
  },
  {
    title: "Applications mobiles",
    description: "Apps iOS et Android natives ou cross-platform, de l’idée au store.",
    href: "/applications-mobiles/",
    tags: ["React Native", "Swift", "Kotlin", "PWA"],
  },
  {
    title: "IA",
    description:
      "Intégration d’IA dans vos produits : chatbots, agents, automatisation, recherche sémantique.",
    href: "/ia/",
    tags: ["OpenAI", "Claude", "LangChain", "RAG", "n8n"],
  },
  {
    title: "SEO & GEO",
    description:
      "Référencement Google et optimisation pour les IA (ChatGPT, Claude, Perplexity).",
    href: "/seo/",
    tags: ["SEO technique", "GEO", "Audit", "Netlinking", "Rédaction"],
  },
  {
    title: "CRM & outils métiers",
    description: "CRM sur mesure, intranets, extranets et automatisations internes.",
    href: "/crm-outils-metiers/",
    tags: ["Node.js", "Laravel", "PostgreSQL", "Make"],
  },
  {
    title: "Maintenance & TMA",
    description: "Infogérance, corrections, mises à jour de sécurité et évolutions.",
    href: "/maintenance/",
    tags: ["Audit", "Sécurité", "Support", "Évolutions"],
  },
];
