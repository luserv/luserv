import type { Handle } from '@sveltejs/kit';
import { detectLocale } from '$lib/i18n/locales';

export const handle: Handle = async ({ event, resolve }) => {
  const cookieHeader = event.request.headers.get('cookie');
  const acceptLanguage = event.request.headers.get('accept-language');
  const detected = detectLocale(cookieHeader, acceptLanguage);

  event.locals.locale = detected;

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', detected.split('-')[0])
  });

  return response;
};
