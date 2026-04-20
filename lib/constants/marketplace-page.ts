/** Contenus page premium `/sites-internet/marketplace` (brief pages filles). */

export const MARKETPLACE_PATH = '/sites-internet/marketplace';

export const MARKETPLACE_KEYWORDS = [
  'création marketplace',
  'développement marketplace',
  'marketplace Stripe Connect',
  'plateforme multi-vendeurs',
] as const;

export const marketplaceMetaDescription =
  'Développement de marketplace multi-vendeurs par un freelance expérimenté. Commissions automatiques, paiements fractionnés, profils multiples. Dès 4 900 €.';

export const marketplaceMetaTitle = 'Création de marketplace sur mesure — Freelance | Clickdev';

export const MARKETPLACE_HERO = {
  chapter: 'Chapitre 01.3 · Marketplace',
  subline: 'Développeur freelance — Plateformes multi-vendeurs',
  h1: 'Création de marketplace sur mesure',
  lead:
    'Multi-vendeurs, commissions automatiques, paiements fractionnés : je développe des marketplaces complètes qui fonctionnent. Que vous lanciez un Airbnb de niche ou un Etsy sectoriel, tout est possible — avec un MVP honnête et une roadmap claire.',
  primaryCta: { href: '/devis?projectType=outil', label: 'Demander un devis' },
  secondaryCta: { href: `${MARKETPLACE_PATH}#portfolio`, label: 'Voir des exemples' },
} as const;

export const MARKETPLACE_BENEFITS = {
  kicker: 'Ce que vous obtenez',
  title: 'Une plateforme qui tient debout côté vendeurs comme côté acheteurs',
  subtitle: 'Le multi-vendeurs, ce n’est pas trois boutons en plus : c’est de la confiance, de l’argent qui transite, et des règles du jeu lisibles.',
  items: [
    {
      title: 'Une plateforme multi-vendeurs clé en main',
      body: 'Inscriptions vendeurs, fiches boutique, catalogue, modération, tableau de bord admin : les briques pour que l’offre et la demande se rencontrent sans chaos.',
    },
    {
      title: 'Des paiements fractionnés automatiques',
      body: 'Avec Stripe Connect (ou équivalent selon votre zone), votre commission peut être prélevée à chaque transaction — moins de recalculs Excel le dimanche soir.',
    },
    {
      title: 'Une expérience pensée pour chaque rôle',
      body: 'Acheteurs, vendeurs, équipes support : chacun a des écrans adaptés à ses actions du quotidien, sans se marcher dessus.',
    },
    {
      title: 'Une architecture prête à monter en charge',
      body: 'Dix vendeurs ou des milliers : on anticipe la pagination, la recherche, les pics, et les intégrations fragiles pour éviter la panne au pire moment.',
    },
  ],
} as const;

export const MARKETPLACE_EDITORIAL = {
  kicker: 'Lecture',
  title: 'Anatomie d’une marketplace qui fonctionne',
} as const;

export const MARKETPLACE_AUDIENCE = {
  kicker: 'Pour vous',
  title: 'Pour qui c’est fait',
  subtitle: 'Du projet validé à la diversification d’un groupe déjà installé.',
  cards: [
    {
      title: 'Entrepreneurs avec une idée validée',
      body: 'Vous avez identifié un besoin sur un marché de niche : je construis la plateforme qui matérialise votre vision, sans noyer le MVP sous trente features.',
    },
    {
      title: 'Entreprises qui veulent se diversifier',
      body: 'Ajouter une marketplace à votre activité existante pour ouvrir une nouvelle ligne de revenus — en réutilisant votre crédit marque et vos process.',
    },
    {
      title: 'Associations et collectifs',
      body: 'Mettre en relation membres et prestataires avec vos règles, votre modération, et des parcours adaptés à un public parfois moins digital-native.',
    },
    {
      title: 'Acteurs établis',
      body: 'Transformer une base de partenaires en plateforme avec commissions, automatisation et reporting — sans sacrifier la conformité.',
    },
  ],
} as const;

export const MARKETPLACE_COMPARE = {
  kicker: 'Décision',
  title: 'SaaS prêt à l’emploi, base modulable ou sur mesure ?',
  subtitle:
    'Le bon choix dépend de votre vitesse de lancement, de vos règles métier, et de ce que vous acceptez de ne pas contrôler à 100 %.',
  columns: ['SaaS / no-code', 'Base modulable', 'Sur mesure'] as const,
  rows: [
    { label: 'Lancer vite avec un socle éprouvé', c: [true, true, false] as const },
    { label: 'Contrôle fin des commissions & payouts', c: [false, true, true] as const },
    { label: 'Règles de modération et litiges très spécifiques', c: [false, true, true] as const },
    { label: 'SEO multi-vendeurs sans URLs “explosives”', c: [false, true, true] as const },
    { label: 'Intégrations ERP / logistique / facturation lourdes', c: [false, false, true] as const },
    { label: 'Coût récurrent vs investissement initial', c: [true, true, false] as const },
  ],
} as const;

export const MARKETPLACE_PROCESS = {
  kicker: 'Process',
  title: 'Cinq étapes pour une marketplace crédible dès le MVP',
  steps: [
    {
      n: '01',
      title: 'Cadrage & modèle économique',
      body: 'Qui paie qui, quand, et sous quelles conditions ? On pose commissions, frais, délais de versement, pays, et scénarios litige — avant de choisir la stack.',
    },
    {
      n: '02',
      title: 'Parcours vendeur / acheteur / admin',
      body: 'On dessine l’onboarding vendeur, la publication d’offre, la commande, le paiement, le suivi, et le back-office support. Bout-en-bout, même si le design est sobre au départ.',
    },
    {
      n: '03',
      title: 'Architecture & conformité',
      body: 'Données personnelles, conservation des messages, journaux d’audit, rôles admin : on prépare des bases saines — le juriste complète si besoin, je garde le fil technique.',
    },
    {
      n: '04',
      title: 'Développement & paiements',
      body: 'Stripe Connect ou flux adapté : tests sur cas limites (remboursement partiel, litige, indisponibilité vendeur). Les emails et notifications restent utiles, pas harcelants.',
    },
    {
      n: '05',
      title: 'Pilote, SEO, lancement progressif',
      body: 'On ouvre à un premier cercle de vendeurs, on mesure, on corrige. Indexation, canonicals, pages stratégiques : on évite la jungle d’URLs dupliquées dès le départ.',
    },
  ],
} as const;

export const MARKETPLACE_STACK = {
  kicker: 'Stack',
  title: 'Technos adaptées au multi-vendeurs',
  body:
    'Catalogue, recherche, transactions, admin : chaque couche doit être explicite et observable. Je reste pragmatique sur les raccourcis possibles à chaque étape.',
  labels: ['Next.js', 'Medusa', 'Stripe Connect', 'PostgreSQL', 'Algolia', 'Supabase', 'Vercel'],
} as const;

export const MARKETPLACE_CASES = {
  kicker: 'Portfolio',
  title: 'Des plateformes où l’argent et la confiance circulent vraiment',
  intro:
    'Projets marketplace ou plateformes proches — issus des réalisations récentes. Le détail sur chaque étude de cas.',
} as const;

export const MARKETPLACE_FAQ = {
  kicker: 'FAQ',
  title: 'Questions fréquentes — marketplace',
  subtitle: 'Les sujets qui reviennent quand on parle multi-vendeurs et paiements.',
} as const;

export const MARKETPLACE_FAQ_ITEMS = [
  {
    question: 'Combien coûte le développement d’une marketplace ?',
    answer:
      'Comptez souvent à partir de 4 900 € pour un MVP sérieux (parcours vendeur/acheteur, commande, paiement, commission, admin minimal). Au-delà, le budget suit la complexité : KYC, litiges avancés, multi-pays, intégrations lourdes… Le devis est gratuit et détaillé après un échange de cadrage.',
  },
  {
    question: 'Quel est le délai pour lancer une marketplace ?',
    answer:
      'En pratique, quelques mois pour un MVP bout-en-bout testé en conditions réelles — pas une démo de conférence. Si quelqu’un vous promet “tout” en six semaines, méfiez-vous : soit le périmètre est minuscule, soit la qualité financière sera fragile.',
  },
  {
    question: 'Comment se gère la fiscalité des vendeurs tiers ?',
    answer:
      'Je ne remplace pas un expert-comptable ni un avocat fiscaliste. Techniquement, on peut exposer les bons champs, tracer les flux, et faciliter les exports. Juridiquement, vos obligations dépendent du modèle (facturation, TVA, statut des vendeurs) : on cadrera avec un pro du droit si nécessaire.',
  },
  {
    question: 'Que se passe-t-il en cas de litige entre acheteur et vendeur ?',
    answer:
      'On définit un process clair : statuts de commande, messages traçables, possibilité de remboursement partiel ou total, et rôle admin pour trancher. L’objectif est de réduire les “guerres de chat” sans filet.',
  },
  {
    question: 'Comment attirer les premiers vendeurs sur la plateforme ?',
    answer:
      'Le produit aide, mais le go-to-market reste roi : offre de lancement, commissions réduites au début, onboarding humain. Côté technique, je peux fluidifier l’inscription et la mise en ligne des premières offres pour que l’effort vendeur soit minimal.',
  },
  {
    question: 'Est-ce que je peux commencer petit et évoluer ?',
    answer:
      'Oui, et c’est même recommandé : un périmètre MVP réduit mais solide (argent qui tourne, support minimal), puis features par priorités. On évite la “V1 Amazon” qui ne sort jamais.',
  },
  {
    question: 'Et pour la modération des contenus ?',
    answer:
      'Signalement, file de modération, règles automatiques simples (mots interdits, limites médias), et journaux côté admin. On calibrage selon votre risque réputationnel et vos ressources humaines — pas de modération “magique” sans équipe derrière.',
  },
] as const;

export const MARKETPLACE_BUDGET = {
  title: 'Budget',
  line: 'Les marketplaces démarrent à partir de 4 900 € en MVP cadré',
  note: 'Chaque modèle est différent : devis gratuit, personnalisé, sans engagement.',
} as const;

export const MARKETPLACE_FINAL_CTA = {
  title: 'Envie de lancer une marketplace qui tient la route ?',
  primaryHref: '/devis?projectType=outil',
  primaryLabel: 'Demander un devis marketplace',
  secondaryHref: '/contact',
  secondaryLabel: 'Réserver un appel',
} as const;

export const MARKETPLACE_CASE_PRIORITY_SLUGS = ['spreadshirt'] as const;
