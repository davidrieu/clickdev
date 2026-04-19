export function formatDateFr(iso: string | null | undefined): string | null {
  if (!iso) {
    return null;
  }
  try {
    return new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date(iso));
  } catch {
    return null;
  }
}
