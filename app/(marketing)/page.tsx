import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";

export const metadata: Metadata = {
  title: "Développeur freelance e-commerce, marketplaces & outils métiers",
  description:
    "Sites, apps mobiles, IA, SEO & CRM sur mesure pour marques ambitieuses. 10 ans d’expérience, 80+ projets. Demandez un devis.",
};

function formatHeroMonthLabel(): string {
  const raw = new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    year: "numeric",
  }).format(new Date());
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

export default function HomePage() {
  const monthLabel = formatHeroMonthLabel();

  return (
    <>
      <HeroSection monthLabel={monthLabel} />
      <section className="border-b border-line/80 py-16 text-center">
        <p className="mx-auto max-w-md text-sm text-ink-muted">
          Suite de la page d’accueil (trust bar, services, réalisations, etc.) — phases
          2.2+.
        </p>
      </section>
    </>
  );
}
