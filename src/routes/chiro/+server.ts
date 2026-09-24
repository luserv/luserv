import { redirect } from '@sveltejs/kit';
import { CHIRO_URL } from '$constants';

// Temporary redirect so browsers don't cache it when Chiro moves to a custom domain.
export function GET() {
  redirect(307, CHIRO_URL);
}
