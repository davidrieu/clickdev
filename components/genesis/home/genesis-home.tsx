import { AboutDavidSection } from "@/components/sections/home/about-david-section";
import { BlogTeaserSection } from "@/components/sections/home/blog-teaser-section";
import { StackExpertisesSection } from "@/components/sections/home/stack-expertises-section";
import type { SanityPostTeaser } from "@/types/sanity-post";
import { GenesisCaseStudies } from "./genesis-case-studies";
import { GenesisCta } from "./genesis-cta";
import { GenesisFaq } from "./genesis-faq";
import { GenesisFeatures } from "./genesis-features";
import { GenesisHero } from "./genesis-hero";
import { GenesisTestimonials } from "./genesis-testimonials";
import { GenesisTrusted } from "./genesis-trusted";
import { GenesisWorkflow } from "./genesis-workflow";

type Props = {
  latestPosts: SanityPostTeaser[];
};

/**
 * Home : contenu & données Clickdev, structure visuelle alignée sur le template Genesis (PrebuiltUI).
 */
export function GenesisHome({ latestPosts }: Props) {
  return (
    <div className="pb-24">
      <GenesisHero />
      <GenesisTrusted />
      <GenesisFeatures />
      <GenesisCaseStudies />
      <StackExpertisesSection />
      <GenesisWorkflow />
      <AboutDavidSection />
      <GenesisTestimonials />
      <GenesisFaq />
      <BlogTeaserSection posts={latestPosts} />
      <GenesisCta />
    </div>
  );
}
