"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const devisSchema = z.object({
  name: z.string().min(2, "Au moins 2 caractères"),
  email: z.string().email("Adresse e-mail invalide"),
  company: z.string().optional(),
  message: z
    .string()
    .min(40, "Décrivez le besoin en au moins quelques phrases (40 caractères minimum)"),
});

type DevisFormValues = z.infer<typeof devisSchema>;

export function DevisForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DevisFormValues>({
    resolver: zodResolver(devisSchema),
    defaultValues: { company: "" },
  });

  async function onSubmit(data: DevisFormValues) {
    await new Promise((r) => setTimeout(r, 450));
    // Stub : branchement Resend / endpoint à venir (brief §3)
    console.info("[devis]", data);
    toast.success(
      "Merci — votre message est pris en compte. Je reviens vers vous rapidement (envoi e-mail automatisé : prochaine itération).",
    );
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div>
        <label
          htmlFor="devis-name"
          className="font-mono text-[11px] uppercase tracking-wider text-ink-muted"
        >
          Nom complet
        </label>
        <Input
          id="devis-name"
          autoComplete="name"
          className={cn("mt-2", errors.name && "border-destructive")}
          {...register("name")}
        />
        {errors.name ? (
          <p className="mt-1 text-sm text-destructive" role="alert">
            {errors.name.message}
          </p>
        ) : null}
      </div>
      <div>
        <label
          htmlFor="devis-email"
          className="font-mono text-[11px] uppercase tracking-wider text-ink-muted"
        >
          E-mail professionnel
        </label>
        <Input
          id="devis-email"
          type="email"
          autoComplete="email"
          className={cn("mt-2", errors.email && "border-destructive")}
          {...register("email")}
        />
        {errors.email ? (
          <p className="mt-1 text-sm text-destructive" role="alert">
            {errors.email.message}
          </p>
        ) : null}
      </div>
      <div>
        <label
          htmlFor="devis-company"
          className="font-mono text-[11px] uppercase tracking-wider text-ink-muted"
        >
          Société <span className="text-ink-muted normal-case">(optionnel)</span>
        </label>
        <Input id="devis-company" className="mt-2" {...register("company")} />
      </div>
      <div>
        <label
          htmlFor="devis-message"
          className="font-mono text-[11px] uppercase tracking-wider text-ink-muted"
        >
          Projet / contexte
        </label>
        <Textarea
          id="devis-message"
          rows={6}
          className={cn("mt-2 resize-y", errors.message && "border-destructive")}
          placeholder="Objectifs, contraintes, stack actuelle, budget indicatif, délais…"
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1 text-sm text-destructive" role="alert">
            {errors.message.message}
          </p>
        ) : null}
      </div>
      <Button
        type="submit"
        size="cta"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Envoi…" : "Envoyer la demande"}
      </Button>
    </form>
  );
}
