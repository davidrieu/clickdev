/** Contenu dédié page pilier premium /sites-internet (copy + FAQ SEO). */

export const SITES_INTERNET_MARQUEE_CLIENTS = [
  'Accor',
  'Greenweez',
  'Spreadshirt',
  'The French Maisons',
  'Urbawise',
  'Made in France',
  'SIF Group',
  'Crack It',
  'Musée Up',
  'Mayami Production',
] as const;

export const SITES_INTERNET_STACK = [
  'Next.js',
  'React',
  'TypeScript',
  'WordPress',
  'Shopify',
  'WooCommerce',
  'Astro',
  'Sanity',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Vercel',
] as const;

export type SitesInternetFaqTabId = 'budget' | 'tech' | 'process';

export const SITES_INTERNET_FAQ_TAB_LABELS: Record<SitesInternetFaqTabId, string> = {
  budget: 'Budget & délais',
  tech: 'Technique',
  process: 'Process & accompagnement',
};

export const SITES_INTERNET_FAQ_BY_TAB: Record<
  SitesInternetFaqTabId,
  readonly { question: string; answer: string }[]
> = {
  budget: [
    {
      question: 'Combien coûte un site vitrine pro ?',
      answer:
        'Ça dépend du périmètre (nombre de gabarits, CMS, intégrations, SEO technique). Un site vitrine sérieux — performant, accessible, prêt pour la prod — se cadre plutôt en milliers d’euros que en centaines. Un échange court permet d’aligner ambition et budget sans surprise.',
    },
    {
      question: 'Combien coûte un e-commerce sur mesure ?',
      answer:
        'Un e-commerce sur mesure intègre tunnel, paiement, logistique d’infos, SEO catalogue et souvent des pics de charge. Shopify ou WooCommerce réduit parfois le temps ; du headless Next.js + CMS gagne en contrôle. On découpe en jalons facturables (MVP puis extensions).',
    },
    {
      question: 'Combien coûte une marketplace ?',
      answer:
        'Une marketplace ajoute identités multiples, paiements, modération, litiges et SEO multi-offres : c’est un autre ordre de grandeur qu’une boutique classique. On estime après atelier sur les rôles (acheteur / vendeur / admin) et les volumes attendus.',
    },
    {
      question: 'Quel est le délai moyen de livraison ?',
      answer:
        'Un vitrine cadré : souvent plusieurs semaines à quelques mois selon contenus et validations. Un e-commerce ou une refonte critique : plutôt plusieurs mois avec releases intermédiaires. Je préfère annoncer large et tenir le planning que l’inverse.',
    },
    {
      question: 'Puis-je étaler le paiement en plusieurs fois ?',
      answer:
        'Oui, selon le montant : jalons liés au cadrage, à la validation design, à la mise en préproduction et au go-live. Les modalités sont fixées au devis.',
    },
  ],
  tech: [
    {
      question: 'Utilisez-vous WordPress ou des frameworks modernes ?',
      answer:
        'Les deux selon le besoin : WordPress pour l’autonomie éditoriale et l’écosystème ; Next.js / React pour la performance, le e-commerce headless ou les produits très interactifs. La réponse se lit dans vos contraintes internes et votre horizon 18–36 mois, pas dans la mode du moment.',
    },
    {
      question: 'Le site sera-t-il optimisé pour le SEO et le GEO ?',
      answer:
        'Oui sur le volet technique : structure, performance (Core Web Vitals), données structurées utiles, maillage, migrations propres. Le GEO (visibilité dans les réponses d’IA) s’appuie sur des contenus clairs et vérifiables — je peux cadrer avec vous ce qui est réaliste.',
    },
    {
      question: 'Mon site sera-t-il mobile-friendly et accessible ?',
      answer:
        'Mobile-first est la norme : mise en page fluide, contrastes, focus clavier, alternatives utiles aux images, animations respectueuses de `prefers-reduced-motion`. L’objectif est un site utilisable pour tous — et plus agréable pour tout le monde.',
    },
    {
      question: 'Puis-je gérer le contenu moi-même après la livraison ?',
      answer:
        'Oui : WordPress, Sanity ou autre CMS selon le projet. Je documente les types de contenus, les champs sensibles et les bonnes pratiques pour ne pas casser la mise en page. Si vous préférez un accompagnement rédactionnel, je peux recommander des partenaires.',
    },
  ],
  process: [
    {
      question: 'Travaillez-vous avec les petites structures ?',
      answer:
        'Oui, lorsque le projet est réaliste et qu’une personne peut trancher vite. Une TPE ou un artisan a souvent besoin d’un site vitrine professionnel rapide, clair sur mobile et bien positionné localement — c’est un investissement rentable quand il est bien cadré.',
    },
    {
      question: 'Comment se déroule un projet type ?',
      answer:
        'Cadrage court, proposition de périmètre, maquettes ou design system intégré, développement par itérations visibles sur préproduction, tests (perf, accessibilité, cas limites), puis lancement avec redirections et monitoring. Vous savez où on en est à chaque jalon — pas de boîte noire.',
    },
    {
      question: 'Assurez-vous la maintenance après livraison ?',
      answer:
        'Oui en TMA ou au ticket : mises à jour de sécurité, correctifs, petites évolutions. L’idée est que vous ne repartiez pas de zéro avec quelqu’un qui découvre le code dans l’urgence.',
    },
    {
      question: 'Intervenez-vous sur des sites existants ?',
      answer:
        'Oui : audit UX + technique, quick wins (perf, SEO, sécurité), puis roadmap de refonte totale ou progressive selon le risque business et le trafic.',
    },
  ],
};

export function sitesInternetFaqJsonLdItems(): { question: string; answer: string }[] {
  return [
    ...SITES_INTERNET_FAQ_BY_TAB.budget,
    ...SITES_INTERNET_FAQ_BY_TAB.tech,
    ...SITES_INTERNET_FAQ_BY_TAB.process,
  ];
}

export const SITES_INTERNET_TESTIMONIALS = [
  {
    quote:
      'On est passés d’un tunnel lourd à une expérience fluide : le chiffre d’affaires a suivi, mais surtout les équipes respirent enfin côté support.',
    author: 'Direction e-commerce',
    company: 'Retail — grande surface web',
  },
  {
    quote:
      'Ce qui m’a marqué : zéro jargon inutile, des arbitrages clairs, et une prod qui tient quand les campagnes médias envoient du monde.',
    author: 'CMO',
    company: 'Marque consumer',
  },
  {
    quote:
      'Le site n’est plus la “honte” du comité : il devient un argument commercial. La perf mobile était le vrai sujet — il est réglé.',
    author: 'Directeur général',
    company: 'PME industrielle',
  },
] as const;

export const SITES_INTERNET_COMPARE_ROWS = [
  { label: 'Performance (CWV)' },
  { label: 'SEO technique' },
  { label: 'Sécurité & mises à jour' },
  { label: 'Évolutivité forte' },
  { label: 'Coût long terme' },
  { label: 'Personnalisation poussée' },
  { label: 'Maintenance autonome' },
] as const;

/** true = avantage marqué pour la colonne. */
export const SITES_INTERNET_COMPARE_MATRIX: { wp: boolean; custom: boolean }[] = [
  { wp: false, custom: true },
  { wp: true, custom: true },
  { wp: true, custom: true },
  { wp: false, custom: true },
  { wp: true, custom: false },
  { wp: false, custom: true },
  { wp: true, custom: false },
];
