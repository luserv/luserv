import { defaultLocale, type Locale, isValidLocale, messages } from './locales';

let _locale: Locale = $state(defaultLocale);

export function getLocale(): Locale {
  return _locale;
}

export function setLocale(locale: Locale) {
  _locale = locale;
  if (typeof document !== 'undefined') {
    document.cookie = `locale=${locale};path=/;max-age=${60 * 60 * 24 * 365}`;
  }
}

export function initLocale(cookieHeader: string | null) {
  if (cookieHeader) {
    const match = cookieHeader.split(';').map(s => s.trim()).find(s => s.startsWith('locale='));
    if (match) {
      const val = match.split('=')[1];
      if (isValidLocale(val)) {
        _locale = val;
        return;
      }
    }
  }
}

export function toggleLocale() {
  setLocale(_locale === 'en-US' ? 'es-ES' : 'en-US');
}

function lookup(path: string, locale: Locale): string {
  const msgs = messages[locale] ?? messages[defaultLocale];
  const keys = path.split('.');
  let val: any = msgs;
  for (const key of keys) {
    val = val?.[key];
  }
  return typeof val === 'string' ? val : path;
}

function lookupRaw(path: string, locale: Locale): any {
  const msgs = messages[locale] ?? messages[defaultLocale];
  const keys = path.split('.');
  let val: any = msgs;
  for (const key of keys) {
    val = val?.[key];
  }
  return val;
}

export function t(path: string): string {
  return lookup(path, _locale);
}

export function tRaw(path: string): any {
  return lookupRaw(path, _locale);
}
