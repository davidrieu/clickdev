import { applicationsMobilesChildBySlug } from "@/lib/content/children/applications-mobiles";
import { crmChildBySlug, maintenanceChildBySlug } from "@/lib/content/children/crm-maint";
import { iaChildBySlug } from "@/lib/content/children/ia";
import { seoChildBySlug } from "@/lib/content/children/seo";
import { sitesInternetChildBySlug } from "@/lib/content/children/sites-internet";
import type { SiloChildPageContent } from "@/lib/content/silo-child-types";

const SILO_CHILD_PAGES: Record<string, Record<string, SiloChildPageContent>> = {
  "/sites-internet/": sitesInternetChildBySlug,
  "/applications-mobiles/": applicationsMobilesChildBySlug,
  "/ia/": iaChildBySlug,
  "/seo/": seoChildBySlug,
  "/crm-outils-metiers/": crmChildBySlug,
  "/maintenance/": maintenanceChildBySlug,
};

export function getSiloChildPageContent(
  siloHref: string,
  slug: string,
): SiloChildPageContent | null {
  const bucket = SILO_CHILD_PAGES[siloHref];
  if (!bucket) return null;
  return bucket[slug] ?? null;
}
