import type { Metadata } from "next";
import { SiloPillarBottom } from "@/components/templates/silo-pillar-bottom";
import { SiloPillarLayout } from "@/components/templates/silo-pillar-layout";
import { maintenanceLinks } from "@/lib/constants/navigation";
import { maintenancePillar, siloLayoutBody } from "@/lib/constants/silo-pillars";

export const metadata: Metadata = {
  title: maintenancePillar.metaTitle,
  description: maintenancePillar.metaDescription,
};

export default function MaintenancePage() {
  return (
    <SiloPillarLayout
      {...siloLayoutBody(maintenancePillar)}
      childLinks={maintenanceLinks}
      afterSections={<SiloPillarBottom siloHref="/maintenance/" />}
    />
  );
}
