export type HomeFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const homeFaqItems: HomeFaqItem[] = [
  {
    id: "budget",
    question:
      "Comment se situent vos tarifs pour un projet e-commerce ou une marketplace ?",
    answer:
      "Les budgets varient selon le périmètre (design, intégrations, catalogue, perf, SEO). La fourchette typique pour des projets sérieux se situe souvent entre 10 et 30 k€, parfois au-delà pour les plateformes complexes. Le formulaire de devis permet de qualifier le besoin sans engagement.",
  },
  {
    id: "delais",
    question: "Quels délais pour une refonte ou une V1 ?",
    answer:
      "Une V1 web ciblée peut tenir en quelques semaines à quelques mois selon la complexité. Une marketplace ou un configurateur avancé demande généralement plus de cadrage et d’itérations. Un planning réaliste est posé dès l’audit.",
  },
  {
    id: "stack",
    question: "Travaillez-vous uniquement sur Next.js ?",
    answer:
      "Next.js est un socle fréquent pour les sites et apps exigeantes en performance, mais je travaille aussi sur WordPress, Shopify, Laravel, Node, mobile natif ou React Native selon le contexte et les contraintes.",
  },
  {
    id: "maintenance",
    question: "Proposez-vous de la maintenance après la mise en ligne ?",
    answer:
      "Oui : infogérance, correctifs, mises à jour de sécurité, évolutions et accompagnement produit. La maintenance est pensée pour réduire le risque et garder une vélocité sur le long terme.",
  },
  {
    id: "international",
    question: "Travaillez-vous avec des équipes hors France ?",
    answer:
      "Oui, à distance, en anglais si besoin, avec des process clairs (rituels, documentation, livrables). Les fuseaux et la disponibilité sont cadrés dès le démarrage.",
  },
  {
    id: "seo",
    question: "Intégrez-vous le SEO dans les développements ?",
    answer:
      "Oui : SEO technique (perf, indexation, données structurées), contenu et stratégie. Le silo SEO/GEO est une composante à part entière, utile dès la conception pour éviter les refontes « SEO en rattrapage ».",
  },
];
