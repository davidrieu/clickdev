export type ProcessStep = {
  title: string;
  description: string;
};

export const homeProcessSteps: ProcessStep[] = [
  {
    title: "Audit & cadrage",
    description:
      "Compréhension du contexte, objectifs business, risques et priorités — livrable clair avant la première ligne de code.",
  },
  {
    title: "Design UX-UI",
    description:
      "Parcours utilisateurs, wireframes et interface : cohérence visuelle, accessibilité et conversion au centre.",
  },
  {
    title: "Développement",
    description:
      "Itérations courtes, code review, stack moderne (Next.js, mobile, outils métiers) et qualité mesurable.",
  },
  {
    title: "Tests & optimisation",
    description:
      "Performance réelle (Core Web Vitals), tests utilisateurs, sécurité et robustesse avant mise en ligne.",
  },
  {
    title: "Mise en ligne & suivi",
    description:
      "Déploiement maîtrisé, monitoring, puis évolutions : vous n’êtes jamais livré à vous-même après le go-live.",
  },
];
