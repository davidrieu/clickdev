import type { Metadata } from "next";
import { GenesisHome } from "@/components/genesis/home/genesis-home";
import { getLatestPostsForHome } from "@/lib/sanity/get-latest-posts";

export const metadata: Metadata = {
  title: "Développeur freelance e-commerce, marketplaces & outils métiers",
  description:
    "Sites, apps mobiles, IA, SEO & CRM sur mesure pour marques ambitieuses. 10 ans d’expérience, 80+ projets. Demandez un devis.",
};

export default async function HomePage() {
  const latestPosts = await getLatestPostsForHome();

  return <GenesisHome latestPosts={latestPosts} />;
}
