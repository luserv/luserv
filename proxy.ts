import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { routing } from './src/i18n/routing';

const intlMiddleware = createMiddleware({
  ...routing,
  localeDetection: true
})

export function proxy(request: NextRequest) {
  const accept = request.headers.get('accept-language') ?? '';
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value ?? '';
  const res = intlMiddleware(request);

  // `intlMiddleware` can return `undefined` when no redirect/response is needed.
  // Guardar el acceso a `headers` para evitar excepciones.
  const location = res?.headers.get('location') ?? '';
  let resolved = '';
  const m = location.match(/^\/(en-US|es-ES)(\/|$)/);
  console.log('[location-match]', m);
  if (m) {
    resolved = m[1];
  } else if (cookieLocale) {
    resolved = cookieLocale;
  } else {
    const al = accept.toLowerCase();
    if (al.includes('es-es')) resolved = 'es-ES';
    else if (al.includes('en-us')) resolved = 'en-US';
    else resolved = routing.defaultLocale;
  }
  console.log('[locale-detection]', {
    acceptLanguage: accept,
    cookie: cookieLocale,
    redirect: location,
    resolved
  });

  return res;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
