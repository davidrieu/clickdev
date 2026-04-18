import type { Metadata } from "next";
import { SiloPillarLayout } from "@/components/templates/silo-pillar-layout";
import { mainNavSilos } from "@/lib/constants/navigation";
import {
  applicationsMobilesPillar,
  siloLayoutBody,
} from "@/lib/constants/silo-pillars";

export const metadata: Metadata = {
  title: applicationsMobilesPillar.metaTitle,
  description: applicationsMobilesPillar.metaDescription,
};

export default function ApplicationsMobilesPage() {
  const silo = mainNavSilos.find((s) => s.href === "/applications-mobiles/");
  return (
    <SiloPillarLayout
      {...siloLayoutBody(applicationsMobilesPillar)}
      childLinks={silo?.children}
    />
  );
}
