export interface LocaleInfo {
  code: string;     // language code used in URL and cookies
  label: string;    // short label for UI (e.g. "EN", "ES")
  rtl?: boolean;    // optional right-to-left flag if needed
}

// central list of supported locales. add/remove languages here.
export const locales: LocaleInfo[] = [
  { code: "en-US", label: "EN" },
  { code: "es-ES", label: "ES" },
  // add extra languages below
];

export const defaultLocale = locales[0].code;
