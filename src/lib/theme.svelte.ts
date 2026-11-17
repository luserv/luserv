export type Theme = 'system' | 'light' | 'dark';

let _theme: Theme = $state('system');

export function getTheme(): Theme {
  return _theme;
}

// Reads the stored choice. The inline script in app.html already applied it
// before first paint; this only syncs the switch state.
export function initTheme() {
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') _theme = stored;
  } catch {
    // Storage can be blocked; stay on "system".
  }
}

export function setTheme(theme: Theme) {
  _theme = theme;
  const root = document.documentElement;
  try {
    if (theme === 'system') {
      root.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    } else {
      root.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  } catch {
    // Storage can be blocked; the choice still applies for this visit.
  }
}
