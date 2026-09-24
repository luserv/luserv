import { redirect, type Handle } from '@sveltejs/kit';
import { detectLocale, locales } from '$lib/i18n/locales';

// Legacy Next.js URLs were prefixed with the locale (e.g. /es-ES/chiro/privacy).
const legacyLocalePrefix = new RegExp(`^/(${locales.map((l) => l.code).join('|')})(/.*)?$`);

export const handle: Handle = async ({ event, resolve }) => {
  const legacy = event.url.pathname.match(legacyLocalePrefix);
  if (legacy) {
    event.cookies.set('locale', legacy[1], {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      httpOnly: false
    });
    redirect(308, `${legacy[2] ?? '/'}${event.url.search}`);
  }

  const cookieHeader = event.request.headers.get('cookie');
  const acceptLanguage = event.request.headers.get('accept-language');
  const detected = detectLocale(cookieHeader, acceptLanguage);

  event.locals.locale = detected;

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', detected.split('-')[0])
  });

  return response;
};
