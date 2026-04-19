'use client';

import { submitDevisRequest } from '@/app/actions/devis';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  DEVIS_BUDGET_OPTIONS,
  DEVIS_PROJECT_TYPES,
  DEVIS_TIMELINE_OPTIONS,
  type DevisProjectType,
} from '@/lib/constants/devis';
import { devisFormSchema, type DevisFormValues } from '@/lib/validation/devis-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type DevisFormProps = {
  initialProjectType?: DevisProjectType;
};

export default function DevisForm({ initialProjectType }: DevisFormProps) {
  const [pending, startTransition] = useTransition();
  const defaultType = initialProjectType ?? 'site';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DevisFormValues>({
    resolver: zodResolver(devisFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectType: defaultType,
      budget: '',
      timeline: '',
      message: '',
      website: '',
    },
  });

  function onSubmit(values: DevisFormValues) {
    startTransition(async () => {
      const result = await submitDevisRequest(values);
      if (!result.ok) {
        toast.error(result.error);
        return;
      }
      if (result.mode === 'dev') {
        toast.message('Envoi non configuré', { description: result.message });
      } else {
        toast.success('Demande envoyée', {
          description: 'Je vous réponds sous 1 à 2 jours ouvrés.',
        });
      }
      reset({
        name: '',
        email: '',
        company: '',
        projectType: defaultType,
        budget: '',
        timeline: '',
        message: '',
        website: '',
      });
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-8" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute left-0 h-0 w-0 opacity-0"
        aria-hidden
        {...register('website')}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="devis-name" className="text-sm font-medium text-white/90">
            Nom complet <span className="text-[#F26A06]">*</span>
          </label>
          <Input id="devis-name" autoComplete="name" aria-invalid={!!errors.name} {...register('name')} />
          {errors.name ? <p className="text-xs text-red-400">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="devis-email" className="text-sm font-medium text-white/90">
            E-mail <span className="text-[#F26A06]">*</span>
          </label>
          <Input
            id="devis-email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email ? <p className="text-xs text-red-400">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="devis-company" className="text-sm font-medium text-white/90">
          Société <span className="text-white/40">(optionnel)</span>
        </label>
        <Input id="devis-company" autoComplete="organization" {...register('company')} />
      </div>

      <div className="space-y-2">
        <label htmlFor="devis-type" className="text-sm font-medium text-white/90">
          Type de projet <span className="text-[#F26A06]">*</span>
        </label>
        <select
          id="devis-type"
          className="border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive dark:bg-input/30 h-8 w-full rounded-lg border bg-transparent px-2.5 py-1 text-sm text-white outline-none focus-visible:ring-3 aria-invalid:ring-3"
          aria-invalid={!!errors.projectType}
          {...register('projectType')}
        >
          {DEVIS_PROJECT_TYPES.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <p className="text-xs text-red-400">{errors.projectType.message}</p>
        ) : null}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="devis-budget" className="text-sm font-medium text-white/90">
            Budget indicatif
          </label>
          <select
            id="devis-budget"
            className="border-input focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 h-8 w-full rounded-lg border bg-transparent px-2.5 py-1 text-sm text-white outline-none focus-visible:ring-3"
            {...register('budget')}
          >
            {DEVIS_BUDGET_OPTIONS.map((o) => (
              <option key={o.value || 'unset'} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="devis-timeline" className="text-sm font-medium text-white/90">
            Délai souhaité
          </label>
          <select
            id="devis-timeline"
            className="border-input focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 h-8 w-full rounded-lg border bg-transparent px-2.5 py-1 text-sm text-white outline-none focus-visible:ring-3"
            {...register('timeline')}
          >
            {DEVIS_TIMELINE_OPTIONS.map((o) => (
              <option key={o.value || 'unset'} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="devis-message" className="text-sm font-medium text-white/90">
          Décrivez votre besoin <span className="text-[#F26A06]">*</span>
        </label>
        <Textarea
          id="devis-message"
          rows={8}
          placeholder="Contexte, objectifs, contraintes, stack actuelle…"
          aria-invalid={!!errors.message}
          className="min-h-[180px] resize-y"
          {...register('message')}
        />
        {errors.message ? <p className="text-xs text-red-400">{errors.message.message}</p> : null}
      </div>

      <Button type="submit" disabled={pending} className="bg-[#F26A06] text-white hover:bg-[#F26A06]/90">
        {pending ? 'Envoi…' : 'Envoyer la demande'}
      </Button>
    </form>
  );
}
