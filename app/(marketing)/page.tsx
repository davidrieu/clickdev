import type { Metadata } from "next";
import { AboutDavidSection } from "@/components/sections/home/about-david-section";
import { BlogTeaserSection } from "@/components/sections/home/blog-teaser-section";
import { CaseStudiesSection } from "@/components/sections/home/case-studies-section";
import { CtaFinalSection } from "@/components/sections/home/cta-final-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { ProcessSection } from "@/components/sections/home/process-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { StackExpertisesSection } from "@/components/sections/home/stack-expertises-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { TrustBar } from "@/components/sections/home/trust-bar";
import { getLatestPostsForHome } from "@/lib/sanity/get-latest-posts";

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

export default async function HomePage() {
  const monthLabel = formatHeroMonthLabel();
  const latestPosts = await getLatestPostsForHome();

  return (
    <>
      <HeroSection monthLabel={monthLabel} />
      <TrustBar />
      <ServicesSection />
      <CaseStudiesSection />
      <StackExpertisesSection />
      <ProcessSection />
      <AboutDavidSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogTeaserSection posts={latestPosts} />
      <CtaFinalSection />
    </>
  );
}
