import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiloChildLayout } from "@/components/templates/silo-child-layout";
import { getSiloChildPageContent } from "@/lib/content/silo-children-registry";
import { mainNavSilos } from "@/lib/constants/navigation";
import { findChildBySlug, siloChildStaticParams } from "@/lib/navigation/silo-child-utils";

const SILO = mainNavSilos.find((s) => s.href === "/seo/")!;

export function generateStaticParams() {
  return siloChildStaticParams(SILO);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const child = findChildBySlug(SILO, slug);
  if (!child) return { title: "Page introuvable" };
  const content = getSiloChildPageContent(SILO.href, slug);
  return {
    title: `${child.label} | ${SILO.label}`,
    description:
      content?.metaDescription ??
      `Clickdev — ${SILO.label.toLowerCase()} : ${child.label.toLowerCase()}.`,
  };
}

export default async function SiloChildPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const child = findChildBySlug(SILO, slug);
  if (!child) notFound();
  const body = getSiloChildPageContent(SILO.href, slug);
  if (!body) notFound();
  return <SiloChildLayout parentHref={SILO.href} parentLabel={SILO.label} {...body} />;
}
