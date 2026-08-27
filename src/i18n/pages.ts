/**
 * Which routes have a Spanish twin built yet.
 *
 * The language toggle only offers a switch when the counterpart page actually
 * exists — otherwise it would link to a 404 while the /es/ tree is still being
 * filled in. Add a path here the moment its src/pages/es/<path>.astro ships.
 *
 * Paths are the English (root) form, always with a trailing slash, "/" for home.
 */
export const translatedPaths: ReadonlySet<string> = new Set([
  "/",
  "/about/",
  "/about/team/",
  "/about/what-we-do/",
  "/storytelling/",
  "/where-we-live/",
  "/contact/",
  "/donate/",
  "/partner-with-us/",
  "/privacy-terms/",
  "/the-need/",
  "/the-need/fsgs/",
  "/the-need/apol1/",
  "/the-need/data/",
  "/contact/thank-you/",
  "/donate/thank-you/",
  "/partner-with-us/thank-you/",
  "/404/",
]);

/** Normalize a path (maybe with /es prefix, query, or hash) to its English/root form. */
export function toRootPath(pathname: string): string {
  let p = pathname.split(/[?#]/)[0];
  p = p.replace(/^\/es(?=\/|$)/, "") || "/";
  if (!p.endsWith("/")) p += "/";
  return p;
}

export function hasTranslation(pathname: string): boolean {
  return translatedPaths.has(toRootPath(pathname));
}
