import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/sections/realisations/case-study-detail";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/sanity/get-case-studies";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return { title: "Étude de cas introuvable" };
  return {
    title: study.metaTitle ?? `${study.title ?? "Projet"} | Réalisations`,
    description: study.metaDescription ?? study.tagline ?? undefined,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();

  return <CaseStudyDetail study={study} />;
}
