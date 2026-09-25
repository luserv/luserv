import enUS from '../../../messages/en-US.json';
import esES from '../../../messages/es-ES.json';

export type Locale = 'en-US' | 'es-ES';

export const locales: { code: Locale; label: string }[] = [
  { code: 'en-US', label: 'EN' },
  { code: 'es-ES', label: 'ES' }
];

export const defaultLocale: Locale = 'en-US';

export const messages: Record<Locale, Record<string, unknown>> = {
  'en-US': enUS,
  'es-ES': esES
};

export function isValidLocale(code: string): code is Locale {
  return locales.some((l) => l.code === code);
}

export function detectLocale(cookieHeader: string | null, acceptLanguage: string | null): Locale {
  // 1. Cookie
  if (cookieHeader) {
    const match = cookieHeader.split(';').map(s => s.trim()).find(s => s.startsWith('locale='));
    if (match) {
      const val = match.split('=')[1];
      if (isValidLocale(val)) return val;
    }
  }
  // 2. Accept-Language
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(',').map(s => s.split(';')[0].trim().toLowerCase());
    for (const lang of preferred) {
      if (lang.startsWith('es')) return 'es-ES';
      if (lang.startsWith('en')) return 'en-US';
    }
  }
  // 3. Default
  return defaultLocale;
}
