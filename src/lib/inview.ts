import type { Action } from 'svelte/action';

/** Calls `onEnter` once, when the element comes within `rootMargin` of the viewport. */
export const inview: Action<HTMLElement, () => void> = (node, onEnter) => {
  if (!('IntersectionObserver' in window)) {
    onEnter?.();
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        observer.disconnect();
        onEnter?.();
      }
    },
    { rootMargin: '300px 0px' }
  );
  observer.observe(node);
  return { destroy: () => observer.disconnect() };
};
