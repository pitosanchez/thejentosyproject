import { ui, defaultLang, type Lang, type UIKey } from "./ui";
import { hasTranslation } from "./pages";

/**
 * Read the active locale from a URL. English pages live at the root; Spanish
 * pages are prefixed with /es/. Astro also exposes Astro.currentLocale, but
 * this works anywhere a URL is in hand (e.g. building the language toggle).
 */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/");
  if (seg === "es") return "es";
  return defaultLang;
}

/** Curried translator: const t = useTranslations(lang); t("nav.home"). */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Take a path and return its equivalent in `target` locale.
 *   localizePath("/the-need/fsgs/", "es")     -> "/es/the-need/fsgs/"
 *   localizePath("/es/the-need/fsgs/", "en")  -> "/the-need/fsgs/"
 * Pass a path that already carries (or omits) the prefix — it's normalized first.
 */
export function localizePath(path: string, target: Lang): string {
  const stripped = path.replace(/^\/es(?=\/|$)/, "") || "/";
  if (target === "en") return stripped;
  return stripped === "/" ? "/es/" : `/es${stripped}`;
}

/**
 * Locale-aware href for nav/footer/in-page links during the incremental
 * Spanish rollout: on an `es` page, link to the /es/ twin only if it exists
 * yet — otherwise fall back to the English page so nothing 404s. Self-heals
 * as each twin is registered in src/i18n/pages.ts.
 */
export function localeHref(path: string, lang: Lang): string {
  if (lang === "en") return localizePath(path, "en");
  return hasTranslation(path)
    ? localizePath(path, "es")
    : localizePath(path, "en");
}

/** Absolute alternates for <link rel="alternate" hreflang>. */
export function alternateUrls(url: URL) {
  const path = url.pathname;
  return {
    en: new URL(localizePath(path, "en"), url.origin).href,
    es: new URL(localizePath(path, "es"), url.origin).href,
  };
}

export { type Lang, defaultLang };
