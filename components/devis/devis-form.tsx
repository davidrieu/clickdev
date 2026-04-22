'use client';

import { submitDevisRequest } from '@/app/actions/devis';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  DEVIS_BUDGET_OPTIONS,
  DEVIS_PROJECT_TYPES,
  DEVIS_TIMELINE_OPTIONS,
  type DevisProjectType,
} from '@/lib/constants/devis';
import { devisFormSchema, type DevisFormValues } from '@/lib/validation/devis-schema';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const siField = cn(
  'h-11 w-full min-w-0 rounded-xl border border-white/15 bg-white/[0.05] px-4 text-sm text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition outline-none',
  'placeholder:text-white/35',
  'focus-visible:border-white/35 focus-visible:ring-2 focus-visible:ring-white/10',
  'disabled:cursor-not-allowed disabled:opacity-50',
  'md:text-sm',
  'aria-invalid:border-red-400/55 aria-invalid:ring-red-500/20',
);

const labelCls = 'text-xs font-medium tracking-wide text-white/50 uppercase';

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
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6 md:mt-8" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute left-0 h-0 w-0 opacity-0"
        aria-hidden
        {...register('website')}
      />

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
        <div className="space-y-2">
          <label htmlFor="devis-name" className={labelCls}>
            Nom complet <span className="text-white/30">·</span> requis
          </label>
          <Input
            id="devis-name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={siField}
            {...register('name')}
          />
          {errors.name ? <p className="text-xs text-red-400/90">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="devis-email" className={labelCls}>
            E-mail <span className="text-white/30">·</span> requis
          </label>
          <Input
            id="devis-email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={siField}
            {...register('email')}
          />
          {errors.email ? <p className="text-xs text-red-400/90">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="devis-company" className={labelCls}>
          Société <span className="font-normal text-white/35">(optionnel)</span>
        </label>
        <Input
          id="devis-company"
          autoComplete="organization"
          className={siField}
          {...register('company')}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="devis-type" className={labelCls}>
          Type de projet <span className="text-white/30">·</span> requis
        </label>
        <select
          id="devis-type"
          className={cn(
            siField,
            'cursor-pointer appearance-auto bg-[rgb(10_10_12)] pr-3 [&>option]:bg-neutral-900 [&>option]:text-white',
          )}
          aria-invalid={!!errors.projectType}
          {...register('projectType')}
        >
          {DEVIS_PROJECT_TYPES.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
        {errors.projectType ? <p className="text-xs text-red-400/90">{errors.projectType.message}</p> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
        <div className="space-y-2">
          <label htmlFor="devis-budget" className={labelCls}>
            Budget indicatif
          </label>
          <select
            id="devis-budget"
            className={cn(
              siField,
              'cursor-pointer appearance-auto bg-[rgb(10_10_12)] pr-3 [&>option]:bg-neutral-900 [&>option]:text-white',
            )}
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
          <label htmlFor="devis-timeline" className={labelCls}>
            Délai souhaité
          </label>
          <select
            id="devis-timeline"
            className={cn(
              siField,
              'cursor-pointer appearance-auto bg-[rgb(10_10_12)] pr-3 [&>option]:bg-neutral-900 [&>option]:text-white',
            )}
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
        <label htmlFor="devis-message" className={labelCls}>
          Décrire votre besoin <span className="text-white/30">·</span> requis
        </label>
        <Textarea
          id="devis-message"
          rows={7}
          placeholder="Contexte, objectifs, contraintes, stack actuelle, interlocuteurs côté client…"
          aria-invalid={!!errors.message}
          className={cn(
            siField,
            'min-h-[168px] resize-y py-3 text-sm leading-relaxed [field-sizing:fixed] sm:min-h-[200px]',
          )}
          {...register('message')}
        />
        {errors.message ? <p className="text-xs text-red-400/90">{errors.message.message}</p> : null}
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={pending}
          className="si-btn-pill-shine si-btn-pill-shine-on-light group relative isolate inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_36px_-10px_rgba(255,255,255,0.35)] transition duration-300 enabled:hover:bg-white/95 enabled:hover:shadow-[0_0_48px_-8px_rgba(255,255,255,0.4)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[220px]"
        >
          <span className="relative z-10">{pending ? 'Envoi en cours…' : 'Envoyer la demande'}</span>
          <span
            className="absolute inset-0 z-[2] -translate-x-full bg-black/[0.08] transition duration-500 group-hover:translate-x-0 group-disabled:translate-x-full"
            aria-hidden
          />
        </button>
      </div>
    </form>
  );
}
