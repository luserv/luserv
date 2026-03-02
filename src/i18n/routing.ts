import {defineRouting} from 'next-intl/routing';

/**
 * Configuración de idiomas. El locale se resuelve en el proxy (proxy.ts) en este orden:
 * 1. Prefijo en la URL (ej. /es/...)
 * 2. Cookie de preferencia guardada (NEXT_LOCALE)
 * 3. Header Accept-Language de la petición (idioma del navegador)
 * 4. defaultLocale si no hay coincidencia
 */
import { locales, defaultLocale } from './locales';

export const routing = defineRouting({
  locales: locales.map((l) => l.code),
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true,
});
