import type { Metadata } from "next";
import { SiloPillarBottom } from "@/components/templates/silo-pillar-bottom";
import { SiloPillarLayout } from "@/components/templates/silo-pillar-layout";
import { mainNavSilos } from "@/lib/constants/navigation";
import { siloLayoutBody, sitesInternetPillar } from "@/lib/constants/silo-pillars";

export const metadata: Metadata = {
  title: sitesInternetPillar.metaTitle,
  description: sitesInternetPillar.metaDescription,
};

export default function SitesInternetPage() {
  const silo = mainNavSilos.find((s) => s.href === "/sites-internet/");
  return (
    <SiloPillarLayout
      {...siloLayoutBody(sitesInternetPillar)}
      childLinks={silo?.children}
      afterSections={<SiloPillarBottom siloHref="/sites-internet/" />}
    />
  );
}
