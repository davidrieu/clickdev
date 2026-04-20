/**
 * Pages premium `/crm-outils-metiers/*` — ton accessible, exemples de situation.
 */

const SILO = '/crm-outils-metiers';

export const CRM_PREMIUM_SLUGS = ['crm-sur-mesure', 'integration-crm', 'automatisation'] as const;

export type CrmPremiumSlug = (typeof CRM_PREMIUM_SLUGS)[number];

export function isCrmPremiumSlug(s: string): s is CrmPremiumSlug {
  return (CRM_PREMIUM_SLUGS as readonly string[]).includes(s);
}

type Cta = { href: string; label: string };
type Hero = { chapter: string; subline: string; h1: string; lead: string; primaryCta: Cta; secondaryCta: Cta };
type Block4 = { kicker: string; title: string; subtitle: string; items: readonly { title: string; body: string }[] };
type Editorial = { kicker: string; title: string };
type Audience = { kicker: string; title: string; subtitle: string; cards: readonly { title: string; body: string }[] };
type Compare = {
  kicker: string;
  title: string;
  subtitle: string;
  columns: readonly [string, string, string];
  rows: readonly { label: string; c: readonly [boolean, boolean, boolean] }[];
};
type Process = { kicker: string; title: string; steps: readonly { n: string; title: string; body: string }[] };
type Stack = { kicker: string; title: string; body: string; labels: readonly string[] };
type Cases = { kicker: string; title: string; intro: string };
type FaqBlock = { kicker: string; title: string; subtitle: string };
type FaqItem = { question: string; answer: string };
type Budget = { title: string; line: string; note: string };
type FinalCta = { title: string; primaryHref: string; primaryLabel: string; secondaryHref: string; secondaryLabel: string };
type JsonLd = { serviceName: string; serviceDescription: string; breadcrumbPageName: string };

export type CrmPremiumChildConfig = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  jsonLd: JsonLd;
  breadcrumbLabel: string;
  hero: Hero;
  benefits: Block4;
  editorial: Editorial;
  audience: Audience;
  compare: Compare;
  process: Process;
  stack: Stack;
  cases: Cases;
  faq: FaqBlock;
  faqItems: readonly FaqItem[];
  budget: Budget;
  finalCta: FinalCta;
};

const CTA_DEVIS_OUTIL = { href: '/devis?projectType=outil', label: 'Demander un devis' } as const;
const CTA_CONTACT = { href: '/contact', label: 'Parler du besoin' } as const;
const PF = (p: string) => ({ href: `${p}#portfolio`, label: 'Voir le portfolio' } as const);

export const CRM_PREMIUM_CHILDREN: Record<CrmPremiumSlug, CrmPremiumChildConfig> = {
  'crm-sur-mesure': {
    path: `${SILO}/crm-sur-mesure`,
    metaTitle: 'CRM sur mesure — Outil adapté à votre process | Clickdev',
    metaDescription:
      'Je conçois et développe un CRM sur mesure : devis, suivi client, rôles. Ex. : agence immobilière, cabinet recrutement. Moins de tableurs — Clickdev.',
    keywords: ['CRM sur mesure freelance', 'outil commercial PME', 'développement CRM web', 'suivi devis', 'pipeline vente'],
    jsonLd: {
      serviceName: 'CRM sur mesure',
      serviceDescription: 'Conception et développement d’un outil de suivi commercial adapté à votre processus.',
      breadcrumbPageName: 'CRM sur mesure',
    },
    breadcrumbLabel: 'CRM sur mesure',
    hero: {
      chapter: 'Chapitre 05.1 · CRM',
      subline: 'Développeur freelance — Je développe votre outil',
      h1: 'CRM sur mesure : votre process, pas celui d’un logiciel générique',
      lead:
        'Quand Excel et cinq outils se disputent la vérité, un petit CRM web peut tout rassembler : contacts, devis, relances, historique. Je conçois les écrans avec vous, puis je code. Ex. : société de nettoyage qui veut suivre chantiers + factures + satisfaction.',
      primaryCta: CTA_DEVIS_OUTIL,
      secondaryCta: PF(`${SILO}/crm-sur-mesure`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Un outil qui colle à votre équipe',
      subtitle: 'Moins de champs inutiles, plus d’adoption.',
      items: [
        { title: 'Pipeline clair', body: 'Colonnes Kanban ou étapes : comme vous vendez vraiment.' },
        { title: 'Droits par rôle', body: 'Commercial vs admin vs compta : chacun voit ce qu’il faut.' },
        { title: 'Historique central', body: 'E-mails, notes, pièces : fini la version “fichier_final_v2”.' },
        { title: 'Évolutif', body: 'On commence petit ; on ajoute des modules quand ça prend.' },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Quand le sur-mesure vaut le coup' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle: '',
      cards: [
        { title: 'Équipe 5–30 personnes', body: 'Trop cher de forcer Salesforce, trop lourd de rester sur des tableurs.' },
        { title: 'Process métier spécifique', body: 'Location saisonnière, BTP, formation : étapes non standard.' },
        { title: 'Données sensibles', body: 'Hébergement FR, accès tracés, moins de copies éparpillées.' },
        { title: 'Remplacer un “monstre”', body: 'Vous payez une licence pour 10 % des fonctions : on rationalise.' },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'SaaS prêt à l’emploi, sur mesure, ou bricolage Excel ?',
      subtitle: 'Le sur-mesure gagne quand le coût du contournement dépasse le coût du build.',
      columns: ['SaaS connu', 'Sur mesure', 'Excel / mails'] as const,
      rows: [
        { label: 'Démarrage rapide', c: [true, false, true] as const },
        { label: 'Adaptation fine du métier', c: [false, true, false] as const },
        { label: 'Coût récurrent licence', c: [true, false, true] as const },
        { label: 'Propriété des données', c: [false, true, true] as const },
        { label: 'Zéro dette technique', c: [true, false, false] as const },
        { label: 'Évolutif sans plafond éditeur', c: [false, true, false] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        { n: '01', title: 'Atelier', body: 'Parcours réels, irritants, rêves raisonnables.' },
        { n: '02', title: 'Maquettes', body: 'Figma ou wireframes simples validés par les futurs utilisateurs.' },
        { n: '03', title: 'Développement', body: 'Itérations courtes, environnement de test.' },
        { n: '04', title: 'Formation', body: 'Vidéos courtes + session live.' },
        { n: '05', title: 'Run', body: 'Correctifs, petites évolutions mensuelles possibles.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Technologies',
      body: 'Souvent une app web Next.js ou Laravel + base PostgreSQL ; auth sécurisée et sauvegardes.',
      labels: ['Next.js', 'Laravel', 'PostgreSQL', 'Auth', 'API'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Outils métiers livrés',
      intro: 'Réalisations type plateforme, CRM léger ou portail client.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — CRM sur mesure', subtitle: 'Délai, maintenance.' },
    faqItems: [
      { question: 'Durée indicative ?', answer: 'Souvent 8 à 16 semaines pour un premier périmètre utile, selon complexité.' },
      { question: 'Hébergement ?', answer: 'Votre compte cloud ou le mien en gestion : à trancher au devis.' },
      { question: 'Mobile ?', answer: 'Interface web responsive ; app native seulement si besoin fort.' },
      { question: 'Et si vous partez ?', answer: 'Code documenté, dépôt Git, pas de prison dorée.' },
      { question: 'Budget indicatif ?', answer: 'Souvent à partir de 12 000 € pour un premier module sérieux (auth, contacts, pipeline).' },
    ],
    budget: { title: 'Budget', line: 'Un premier CRM sur mesure utile démarre souvent vers 12 000 €', note: 'Devis détaillé après atelier.' },
    finalCta: { title: 'Excel ne suffit plus pour suivre vos affaires ?', primaryHref: '/devis?projectType=outil', primaryLabel: 'Devis CRM', secondaryHref: '/contact', secondaryLabel: 'Appel découverte' },
  },

  'integration-crm': {
    path: `${SILO}/integration-crm`,
    metaTitle: 'Intégration CRM — Site, mails, facturation | Clickdev',
    metaDescription:
      'Je relie votre CRM (HubSpot, Pipedrive, etc.) au site, à la facturation ou au support. Moins de saisie double. PME & équipes commerciales — Clickdev.',
    keywords: ['intégration CRM freelance', 'HubSpot API', 'Pipedrive connecteur', 'saisie automatique leads', 'CRM site web'],
    jsonLd: {
      serviceName: 'Intégration CRM',
      serviceDescription: 'Connexion du CRM aux outils existants : site web, e-mail, facturation ou support.',
      breadcrumbPageName: 'Intégration CRM',
    },
    breadcrumbLabel: 'Intégration CRM',
    hero: {
      chapter: 'Chapitre 05.2 · Intégrations',
      subline: 'Développeur freelance — Je connecte vos outils',
      h1: 'Intégration CRM : un seul endroit pour la vérité',
      lead:
        'Le formulaire du site crée la fiche, le devis signé met à jour le pipeline, le paiement Stripe remonte la facture. Je développe les passerelles propres, avec logs et gestion d’erreurs. Ex. : cabinet de formation : inscription en ligne → CRM → e-mail de bienvenue.',
      primaryCta: CTA_DEVIS_OUTIL,
      secondaryCta: PF(`${SILO}/integration-crm`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Moins de copier-coller, moins d’oublis',
      subtitle: 'Les données vont où elles doivent, une fois.',
      items: [
        { title: 'Webhooks sécurisés', body: 'Signature, retry, file d’attente si un outil est en panne.' },
        { title: 'Champs mappés', body: 'Ce qui part du site arrive au bon endroit dans le CRM.' },
        { title: 'Journal simple', body: 'Pour comprendre pourquoi un lead n’est pas passé.' },
        { title: 'Respect des quotas API', body: 'Pas de boucles qui bloquent votre abonnement.' },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Intégration ≠ “plugin magique”' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle: '',
      cards: [
        { title: 'E-commerce + sales', body: 'Panier abandonné → tâche commerciale.' },
        { title: 'Formulaire devis', body: 'Pièces jointes stockées proprement + notif Slack.' },
        { title: 'Support client', body: 'Ticket Zendesk enrichi avec données CRM.' },
        { title: 'Facturation', body: 'Facture payée → étape “gagné” automatique.' },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'Zapier, intégration sur mesure, ou saisie manuelle ?',
      subtitle: 'Zapier va vite pour prototyper ; le code tient la charge et la sécurité.',
      columns: ['Zapier / Make', 'Sur mesure', 'Manuel'] as const,
      rows: [
        { label: 'Time-to-market très court', c: [true, false, true] as const },
        { label: 'Logique métier fine', c: [false, true, false] as const },
        { label: 'Volume élevé', c: [false, true, false] as const },
        { label: 'Coût mensuel maîtrisé', c: [true, false, true] as const },
        { label: 'Traçabilité / audit', c: [false, true, false] as const },
        { label: 'Zéro maintenance', c: [false, false, true] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        { n: '01', title: 'Cartographie', body: 'Outils, champs, événements déclencheurs.' },
        { n: '02', title: 'Spéc', body: 'Cas nominal + erreurs + doublons.' },
        { n: '03', title: 'Dev', body: 'API, secrets côté serveur.' },
        { n: '04', title: 'Tests', body: 'Jeux de données réels anonymisés.' },
        { n: '05', title: 'Prod', body: 'Monitoring léger, runbook une page.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Intégrations',
      body: 'API REST des CRM courants, files d’attente, Node ou Laravel selon votre infra.',
      labels: ['HubSpot', 'Pipedrive', 'Stripe', 'Webhooks', 'Node.js'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Intégrations & outils',
      intro: 'Projets où plusieurs systèmes ont été reliés.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — intégration CRM', subtitle: 'Sécurité, maintenance.' },
    faqItems: [
      { question: 'Vous travaillez sans accès admin ?', answer: 'Non : il faut un compte technique ou un binôme côté client.' },
      { question: 'RGPD ?', answer: 'On mappe les données personnelles et la durée de conservation ; vous validez le cadre légal.' },
      { question: 'Pannes API ?', answer: 'Retries + alerte : pas de perte silencieuse de leads.' },
      { question: 'Budget indicatif ?', answer: 'Souvent à partir de 2 500 € pour un flux simple (formulaire → CRM).' },
      { question: 'Maintenance ?', answer: 'Forfait mensuel ou ticket : évolutions d’API, surveillance.' },
    ],
    budget: { title: 'Budget', line: 'Une intégration simple (ex. formulaire → CRM) démarre souvent vers 2 500 €', note: 'Devis selon nombre d’outils.' },
    finalCta: { title: 'Leads qui se perdent entre le site et le CRM ?', primaryHref: '/devis?projectType=outil', primaryLabel: 'Devis intégration', secondaryHref: '/contact', secondaryLabel: 'En parler' },
  },

  automatisation: {
    path: `${SILO}/automatisation`,
    metaTitle: 'Automatisation métier — Moins de tâches répétitives | Clickdev',
    metaDescription:
      'Je conçois des automatisations fiables : relances, synchronisations, notifications. Ex. devis signé → tâche équipe. PME — Clickdev freelance.',
    keywords: ['automatisation métier freelance', 'workflow PME', 'relance automatique', 'intégration outils', 'gain de temps bureau'],
    jsonLd: {
      serviceName: 'Automatisation métier',
      serviceDescription: 'Automatisation de tâches répétitives entre outils métiers : relances, synchronisations et notifications.',
      breadcrumbPageName: 'Automatisation',
    },
    breadcrumbLabel: 'Automatisation',
    hero: {
      chapter: 'Chapitre 05.3 · Automatisation',
      subline: 'Développeur freelance — Je rends les flux prévisibles',
      h1: 'Automatisation : enlever les clics qui ne servent à rien',
      lead:
        'Relancer un client qui n’a pas envoyé son bon de commande, prévenir l’atelier quand un statut passe en “urgent”, archiver les pièces sur le drive : je conçois des scénarios avec file d’erreurs et logs. Ex. : loueur de matériel avec contrôle des dates de retour.',
      primaryCta: CTA_DEVIS_OUTIL,
      secondaryCta: PF(`${SILO}/automatisation`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Des flux que vous pouvez expliquer à table',
      subtitle: 'Pas de boîte noire : si ça casse, on sait où regarder.',
      items: [
        { title: 'Scénarios documentés', body: 'Déclencheur, étapes, personne prévenue si échec.' },
        { title: 'Reprise sur erreur', body: 'Nouvelle tentative raisonnable, pas de boucle infinie.' },
        { title: 'Alertes humaines', body: 'Quand un cas sort du cadre, quelqu’un est prévenu.' },
        { title: 'Évolutif', body: 'On ajoute une étape sans tout refondre.' },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Automatiser trop vite, c’est automatiser les bugs' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle: '',
      cards: [
        { title: 'Devis > commande', body: 'Signature électronique → création dossier + facture brouillon.' },
        { title: 'RH simple', body: 'Nouvelle embauche → checklist matériel + comptes.' },
        { title: 'SAV', body: 'Ticket clos → enquête satisfaction 48 h après.' },
        { title: 'Stock bas', body: 'Seuil atteint → mail fournisseur avec quantités.' },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'No-code, script sur mesure, ou statu quo ?',
      subtitle: 'Le no-code accélère le test ; le code tient quand ça devient critique.',
      columns: ['Make / Zapier', 'Sur mesure', 'Manuel'] as const,
      rows: [
        { label: 'Prototype en jours', c: [true, false, true] as const },
        { label: 'Logique complexe', c: [false, true, false] as const },
        { label: 'Coût licence outil', c: [true, false, true] as const },
        { label: 'Fiabilité sous charge', c: [false, true, false] as const },
        { label: 'Auditabilité', c: [false, true, false] as const },
        { label: 'Zéro maintenance', c: [false, false, true] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        { n: '01', title: 'Observation', body: 'Où le temps part, quelles erreurs reviennent.' },
        { n: '02', title: 'Mini pilote', body: 'Un seul flux, mesuré une semaine.' },
        { n: '03', title: 'Durcissement', body: 'Erreurs, alertes, accès.' },
        { n: '04', title: 'Déploiement', body: 'Formation courte aux exceptions.' },
        { n: '05', title: 'Amélioration', body: 'Ajout de cas au fil de l’eau.' },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Technologies',
      body: 'Workers, files d’attente, connecteurs e-mail, API REST, parfois n8n pour le prototype.',
      labels: ['Node.js', 'n8n', 'PostgreSQL', 'E-mail', 'API'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Automatisations & outils',
      intro: 'Projets où des flux métiers ont été codés ou reliés.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — automatisation', subtitle: 'Risques, coûts.' },
    faqItems: [
      { question: 'Peut-on tout automatiser ?', answer: 'Rarement utile : on automatise ce qui est répétitif et peu risqué d’abord.' },
      { question: 'Qui maintient ?', answer: 'Forfait ou tickets ; je documente pour une reprise interne possible.' },
      { question: 'Données perso ?', answer: 'Minimisation et durées de conservation : alignement avec votre politique.' },
      { question: 'Budget indicatif ?', answer: 'Souvent à partir de 1 800 € pour un flux simple bien cadré.' },
      { question: 'Délai ?', answer: 'De quelques jours (pilote) à quelques semaines (plusieurs branches).' },
    ],
    budget: { title: 'Budget', line: 'Une automatisation métier cadrée démarre souvent vers 1 800 €', note: 'Devis selon nombre d’étapes et d’outils.' },
    finalCta: { title: 'Même tâche dix fois par semaine ?', primaryHref: '/devis?projectType=outil', primaryLabel: 'Devis automatisation', secondaryHref: '/contact', secondaryLabel: 'Décrire le flux' },
  },
};
