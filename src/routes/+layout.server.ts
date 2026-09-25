import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, cookies }) => {
  return {
    locale: locals.locale,
    cookie: cookies.get('locale') ?? null
  };
};
