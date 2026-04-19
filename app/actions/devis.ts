'use server';

import { SITE_EMAIL } from '@/lib/constants/site';
import { devisFormSchema } from '@/lib/validation/devis-schema';
import { Resend } from 'resend';

export type DevisActionResult =
  | { ok: true; mode: 'sent' }
  | { ok: true; mode: 'dev'; message: string }
  | { ok: false; error: string };

function labelBudget(value: string) {
  const map: Record<string, string> = {
    under5k: 'Moins de 5 k€',
    '5k15k': '5 k€ — 15 k€',
    '15k40k': '15 k€ — 40 k€',
    '40kplus': '40 k€ et +',
  };
  return value ? (map[value] ?? value) : 'Non défini';
}

function labelTimeline(value: string) {
  const map: Record<string, string> = {
    asap: 'Dès que possible',
    '1m': 'Sous 1 mois',
    '3m': '1 à 3 mois',
    '3mplus': 'Plus de 3 mois',
  };
  return value ? (map[value] ?? value) : 'Flexible';
}

function labelProjectType(value: string) {
  const map: Record<string, string> = {
    site: 'Site vitrine / corporate',
    ecommerce: 'E-commerce / boutique en ligne',
    app: 'Application web ou mobile',
    outil: 'Outil métier / CRM / intégration',
    autre: 'Autre',
  };
  return map[value] ?? value;
}

export async function submitDevisRequest(input: unknown): Promise<DevisActionResult> {
  const parsed = devisFormSchema.safeParse(input);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return { ok: false, error: first?.message ?? 'Données invalides.' };
  }

  const data = parsed.data;
  if (data.website && data.website.trim().length > 0) {
    return { ok: true, mode: 'sent' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.DEVIS_TO_EMAIL ?? SITE_EMAIL;

  if (!apiKey || !from) {
    return {
      ok: true,
      mode: 'dev',
      message:
        'Message enregistré côté serveur (simulation). Ajoutez RESEND_API_KEY et RESEND_FROM_EMAIL pour activer l’envoi e-mail.',
    };
  }

  const resend = new Resend(apiKey);
  const subject = `Devis — ${data.name} (${labelProjectType(data.projectType)})`;
  const html = `
    <h1>Nouvelle demande de devis</h1>
    <p><strong>Nom :</strong> ${escapeHtml(data.name)}</p>
    <p><strong>E-mail :</strong> ${escapeHtml(data.email)}</p>
    ${data.company ? `<p><strong>Société :</strong> ${escapeHtml(data.company)}</p>` : ''}
    <p><strong>Type de projet :</strong> ${escapeHtml(labelProjectType(data.projectType))}</p>
    <p><strong>Budget :</strong> ${escapeHtml(labelBudget(data.budget ?? ''))}</p>
    <p><strong>Délai :</strong> ${escapeHtml(labelTimeline(data.timeline ?? ''))}</p>
    <p><strong>Message :</strong></p>
    <pre style="white-space:pre-wrap;font-family:system-ui,sans-serif">${escapeHtml(data.message)}</pre>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject,
    html,
  });

  if (error) {
    return { ok: false, error: error.message ?? "L'envoi a échoué. Réessayez plus tard." };
  }

  return { ok: true, mode: 'sent' };
}

function escapeHtml(s: string) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
