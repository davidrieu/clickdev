"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function Phase16UiDemos() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <section className="flex w-full max-w-xl flex-col gap-6 rounded-lg border border-border bg-bg-2 p-6">
      <h2 className="font-heading text-lg font-medium text-ink">
        Phase 1.6 — Accordion, Dialog, champs, Select, Toast
      </h2>

      <div className="flex flex-col gap-2">
        <label htmlFor="phase16-email" className="text-sm font-medium text-ink-dim">
          Email
        </label>
        <Input id="phase16-email" type="email" placeholder="vous@exemple.com" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phase16-message" className="text-sm font-medium text-ink-dim">
          Message
        </label>
        <Textarea id="phase16-message" placeholder="Votre projet…" rows={3} />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink-dim">Type de projet</span>
        <Select defaultValue="site">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="site">Site vitrine</SelectItem>
            <SelectItem value="app">Application mobile</SelectItem>
            <SelectItem value="ia">Intégration IA</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Accordion defaultValue={["faq"]}>
        <AccordionItem value="faq">
          <AccordionTrigger>FAQ démo</AccordionTrigger>
          <AccordionContent>
            Réponse exemple pour l&apos;accordéon — même stack que la FAQ finale.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => toast.success("Action confirmée.")}
        >
          Toast succès
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setDialogOpen(true)}
        >
          Ouvrir le dialog
        </Button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog démo</DialogTitle>
            <DialogDescription>
              Modale contrôlée — base pour confirmations / contenus courts.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setDialogOpen(false)}
            >
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
