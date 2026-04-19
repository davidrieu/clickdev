import { z } from 'zod';

export const devisFormSchema = z.object({
  name: z.string().trim().min(2, 'Indiquez au moins 2 caractères.').max(120),
  email: z.string().trim().email('Adresse e-mail invalide.'),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  projectType: z.enum(['site', 'ecommerce', 'app', 'outil', 'autre'], {
    error: 'Choisissez un type de projet.',
  }),
  budget: z.string().max(32).optional().or(z.literal('')),
  timeline: z.string().max(32).optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(20, 'Décrivez le besoin en au moins 20 caractères.')
    .max(8000, 'Message trop long.'),
  website: z.string().optional(),
});

export type DevisFormValues = z.infer<typeof devisFormSchema>;
