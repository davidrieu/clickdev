/** Contenus page premium `/sites-internet/site-mise-en-relation` (brief pages filles). */

export const SITE_MISE_EN_RELATION_PATH = '/sites-internet/site-mise-en-relation';

export const SITE_MISE_EN_RELATION_KEYWORDS = [
  'site de mise en relation',
  'plateforme de mise en relation',
  'développement plateforme freelance',
  'site de réservation sur mesure',
] as const;

export const siteMiseEnRelationMetaDescription =
  'Développement de plateformes de mise en relation sur mesure. Profils, messagerie, avis, réservations. Développeur freelance expérimenté. Dès 4 500 €.';

export const siteMiseEnRelationMetaTitle = 'Création site de mise en relation — Freelance | Clickdev';

export const SITE_MISE_EN_RELATION_HERO = {
  chapter: 'Chapitre 01.4 · Mise en relation',
  subline: 'Développeur freelance — Plateformes de mise en relation',
  h1: 'Création de site de mise en relation',
  lead:
    'Connecter des prestataires à des clients, des artisans à des particuliers, des coachs à leurs élèves : les plateformes de mise en relation sont un business model puissant. Je les conçois sur mesure — avec un MVP qui ferme la boucle et une UX qui ne décourage pas au premier clic.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${SITE_MISE_EN_RELATION_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const SITE_MISE_EN_RELATION_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Une plateforme où la rencontre se fait sans se perdre',
  subtitle: 'Profils, messages, avis, rendez-vous : chaque brique sert la confiance — pas l’inverse.',
  items: [
    {
      title: 'Des profils riches pour les deux côtés',
      body: 'Prestataires et clients ont chacun leur espace, leurs champs utiles, et un parcours clair. Fini le formulaire anonyme qui part dans le vide.',
    },
    {
      title: 'Une messagerie intégrée fluide',
      body: 'Les échanges restent sur la plateforme quand c’est pertinent : moins de fuite vers des boîtes mail oubliées, plus de contexte pour le support.',
    },
    {
      title: 'Un système d’avis et de notation',
      body: 'Les bons profils montent, les comportements douteux se repèrent. On calibre pour éviter la notation “vengeance” sans filet.',
    },
    {
      title: 'Rendez-vous et paiements quand il le faut',
      body: 'Prise de créneau, acompte, paiement après prestation : on branche ce qui colle à votre modèle — pas un panier e-commerce déguisé.',
    },
  ],
} as const;

export const SITE_MISE_EN_RELATION_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Qu’est-ce qu’un site de mise en relation réussi',
} as const;

export const SITE_MISE_EN_RELATION_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Du pont entre deux publics au réseau déjà structuré.',
  cards: [
    {
      title: 'Entrepreneurs avec une idée de plateforme',
      body: 'Deux côtés qui ont du mal à se trouver : je construis le pont avec un périmètre MVP réaliste et des règles lisibles.',
    },
    {
      title: 'Professionnels qui veulent se regrouper',
      body: 'Une plateforme collective pour votre secteur : votre charte, vos critères d’entrée, votre marque.',
    },
    {
      title: 'Associations et réseaux',
      body: 'Fluidifier la mise en relation entre membres ou partenaires — sans outil trop lourd pour des bénévoles.',
    },
    {
      title: 'Franchiseurs et réseaux locaux',
      body: 'Connecter franchisés et clients finaux avec des parcours adaptés au terrain, pas à un template générique.',
    },
  ],
} as const;

export const SITE_MISE_EN_RELATION_COMPARE = {
  kicker: 'Décision',
  title: 'Annuaire + formulaire, SaaS vertical, ou sur mesure ?',
  subtitle:
    'La bonne réponse dépend du niveau de transaction, de la confiance requise, et de ce que vous devez mesurer.',
  columns: ['Solution légère', 'SaaS / modules', 'Sur mesure'] as const,
  rows: [
    { label: 'Lancer vite pour tester une hypothèse', c: [true, true, false] as const },
    { label: 'Messagerie & notifications sérieuses', c: [false, true, true] as const },
    { label: 'Paiement, acompte, litige & remboursement', c: [false, true, true] as const },
    { label: 'Règles métier très spécifiques (matching, scoring)', c: [false, false, true] as const },
    { label: 'Identité / vérification (KYC léger)', c: [false, true, true] as const },
    { label: 'Évolution sans plafond de gabarit', c: [false, false, true] as const },
  ],
} as const;

export const SITE_MISE_EN_RELATION_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour une mise en relation qui tient la route',
  steps: [
    {
      n: '01',
      title: 'Problème & publics',
      body: 'Qui cherche quoi, où ça coince aujourd’hui, et quelle promesse votre plateforme tient en une phrase ? On verrouille le périmètre MVP avant la stack.',
    },
    {
      n: '02',
      title: 'Parcours & confiance',
      body: 'Inscription, profil, recherche, première prise de contact, rendez-vous : chaque étape doit être explicable à quelqu’un qui n’a pas votre jargon métier.',
    },
    {
      n: '03',
      title: 'Design & contenus',
      body: 'Maquettes des écrans critiques, micro-copy de réassurance, emails transactionnels : on évite le “bouton magique” sans explication.',
    },
    {
      n: '04',
      title: 'Développement & intégrations',
      body: 'Messagerie temps réel, paiement si besoin, calendrier, CRM : on isole ce qui est fragile et on journalise ce qui est sensible.',
    },
    {
      n: '05',
      title: 'Tests, pilote & ajustements',
      body: 'On ouvre à un petit groupe, on mesure délais de réponse et taux de complétion, puis on serre les vis. Formation courte aux admins.',
    },
  ],
} as const;

export const SITE_MISE_EN_RELATION_STACK = {
  kicker: 'Stack',
  title: 'Une stack moderne pour du temps réel et des comptes propres',
  body:
    'Next.js pour l’interface, Supabase ou équivalent pour auth et données, Stripe pour l’argent quand il entre en jeu, temps réel pour la messagerie — sans empiler six outils “gratuits” qui vendent vos données.',
  labels: ['Next.js', 'Supabase', 'Stripe', 'Pusher', 'Ably', 'Resend', 'Vercel'],
} as const;

export const SITE_MISE_EN_RELATION_CASES = {
  kicker: 'Portfolio',
  title: 'Des plateformes web où la rencontre est le produit',
  intro:
    'Sites et plateformes récents (web / produit) — pour vous projeter sur la qualité de bout en bout.',
} as const;

export const SITE_MISE_EN_RELATION_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — mise en relation',
  subtitle: 'Business, produit, technique : les sujets qui reviennent en atelier.',
} as const;

export const SITE_MISE_EN_RELATION_FAQ_ITEMS = [
  {
    question: 'Combien coûte un site de mise en relation ?',
    answer:
      'Souvent à partir de 4 500 € pour un MVP sérieux (profils, messagerie ou contact structuré, admin minimal, notifications). Au-delà, le prix suit : paiement, calendrier complexe, vérification d’identité, intégrations CRM… Le devis est gratuit et détaillé après un court cadrage.',
  },
  {
    question: 'Quelle différence entre un site de mise en relation et une marketplace ?',
    answer:
      'Une marketplace met en avant un catalogue d’offres, des vendeurs multiples, souvent un panier et une commission sur chaque vente. Une mise en relation peut être plus “service” : matching, rendez-vous, devis, parfois sans catalogue produit. Si vous êtes plutôt multi-vendeurs + transactions, regardez la page marketplace du même silo.',
  },
  {
    question: 'Comment gérer la première étape du « œuf ou la poule » ?',
    answer:
      'On réduit le périmètre : un créneau géographique, une catégorie de prestations, un partenaire pilote qui amène les premiers profils. Côté produit, on fluidifie l’onboarding pour que le coût d’entrée soit bas — pas 40 champs avant le premier contact.',
  },
  {
    question: 'Et si je veux prendre une commission sur les mises en relation ?',
    answer:
      'C’est possible techniquement (Stripe, facturation, seuils…), mais il faut cadrer le modèle juridique et fiscal avec un pro. Je m’occupe de la partie flux, statuts, et clarté côté utilisateur — pas des clauses avocat sur un coin de table.',
  },
  {
    question: 'Est-ce que je peux intégrer un système de vérification d’identité ?',
    answer:
      'Oui, du KYC léger à des parcours plus poussés selon votre risque. On choisit un fournisseur adapté et on évite de stocker plus de données personnelles que nécessaire — RGPD friendly, avec la bonne transparence utilisateur.',
  },
  {
    question: 'Combien de temps pour lancer un MVP ?',
    answer:
      'Quelques mois en pratique, selon le nombre de rôles (client / prestataire / admin), du temps réel, et des paiements. Si on vise “tout” d’un coup, ça part en never-ending ; le MVP doit permettre une première transaction ou réservation crédible.',
  },
  {
    question: 'Vous accompagnez sur le plan business aussi ?',
    answer:
      'Je challenge le périmètre, les parcours, et la faisabilité technique — avec de l’expérience terrain. Pour le business plan financier détaillé ou le juridique, je vous oriente vers les bons spécialistes ; je reste le bras produit/tech.',
  },
] as const;

export const SITE_MISE_EN_RELATION_BUDGET = {
  title: 'Budget',
  line: 'Les plateformes de mise en relation démarrent à partir de 4 500 €',
  note: 'Chaque modèle est différent : devis gratuit, personnalisé, sans engagement.',
} as const;

export const SITE_MISE_EN_RELATION_FINAL_CTA = {
  title: 'Prêt à connecter vos deux publics sans friction inutile ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis plateforme',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;
