export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function normalizeLocale(value: string): Locale {
  return isLocale(value) ? value : "en";
}

export function alternateLocale(lang: Locale): Locale {
  return lang === "en" ? "zh" : "en";
}

export function localizedPath(lang: Locale, path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${normalized === "/" ? "" : normalized}`;
}
