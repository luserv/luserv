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

// Applies the locale resolved on the server (cookie, then Accept-Language).
export function initLocale(locale: string) {
  if (isValidLocale(locale)) _locale = locale;
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
