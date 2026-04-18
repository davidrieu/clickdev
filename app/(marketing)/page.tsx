import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";
import { CaseStudiesSection } from "@/components/sections/home/case-studies-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { TrustBar } from "@/components/sections/home/trust-bar";

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
      <TrustBar />
      <ServicesSection />
      <CaseStudiesSection />
    </>
  );
}
