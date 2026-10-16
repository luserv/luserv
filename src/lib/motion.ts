import { browser } from '$app/environment';

export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export function prefersReducedMotion(): boolean {
  return browser && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export const NO_REDUCED_MOTION_QUERY = '(prefers-reduced-motion: no-preference)';
