import type { Metadata } from "next";
import { SiloPillarLayout } from "@/components/templates/silo-pillar-layout";
import { mainNavSilos } from "@/lib/constants/navigation";
import { crmOutilsMetiersPillar, siloLayoutBody } from "@/lib/constants/silo-pillars";

export const metadata: Metadata = {
  title: crmOutilsMetiersPillar.metaTitle,
  description: crmOutilsMetiersPillar.metaDescription,
};

export default function CrmOutilsMetiersPage() {
  const silo = mainNavSilos.find((s) => s.href === "/crm-outils-metiers/");
  return (
    <SiloPillarLayout
      {...siloLayoutBody(crmOutilsMetiersPillar)}
      childLinks={silo?.children}
    />
  );
}
