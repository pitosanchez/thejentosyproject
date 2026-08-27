/**
 * Shared UI / chrome strings — the text that repeats on every page (nav,
 * footer, buttons, form labels). Page *body* copy is NOT here; that lives in
 * each Spanish page twin under src/pages/es/. See .scratch/tjp-i18n-spec/map.md.
 *
 * "The Jentosy Project" is never translated — it's the org's legal name.
 */

export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.team": "Meet The Team",
    "nav.whatWeDo": "What We Do",
    "nav.kidneyDisease": "Kidney Disease",
    "nav.fsgs": "FSGS",
    "nav.apol1": "APOL1-Mediated Kidney Disease",
    "nav.bronxData": "Bronx Data You Should Know",
    "nav.storytelling": "Storytelling",
    "nav.partner": "Partner With Us",
    "nav.contact": "Contact",
    "nav.donate": "Donate",
    "nav.menu": "Menu",
    "nav.close": "Close",
    "nav.primaryLabel": "Primary",

    "cta.tagline": "Health equity for underserved communities, starting in the Bronx.",
    "cta.partner": "Partner With Us",
    "cta.donate": "Donate",

    "footer.site": "Site",
    "footer.takeAction": "Take Action",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy & Terms",
    "footer.rights": "a 501(c)(3) public charity.",

    "a11y.skip": "Skip to content",
    "lang.switchTo": "Ver en español",
    "lang.current": "English",

    "mt.reviewNote":
      "This page was translated with machine assistance and is being reviewed.",
    "mt.reviewReport": "Report a translation error",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Quiénes somos",
    "nav.team": "Nuestro equipo",
    "nav.whatWeDo": "Qué hacemos",
    "nav.kidneyDisease": "Enfermedad renal",
    "nav.fsgs": "GEFS",
    "nav.apol1": "Enfermedad renal mediada por APOL1",
    "nav.bronxData": "Datos del Bronx que debes conocer",
    "nav.storytelling": "Historias",
    "nav.partner": "Colabora",
    "nav.contact": "Contacto",
    "nav.donate": "Donar",
    "nav.menu": "Menú",
    "nav.close": "Cerrar",
    "nav.primaryLabel": "Principal",

    "cta.tagline": "Equidad en salud para comunidades desatendidas, empezando por el Bronx.",
    "cta.partner": "Colabora con nosotros",
    "cta.donate": "Donar",

    "footer.site": "Sitio",
    "footer.takeAction": "Actúa",
    "footer.legal": "Legal",
    "footer.privacy": "Privacidad y términos",
    "footer.rights": "una organización benéfica pública 501(c)(3).",

    "a11y.skip": "Saltar al contenido",
    "lang.switchTo": "View in English",
    "lang.current": "Español",

    "mt.reviewNote":
      "Esta página se tradujo con ayuda automática y está en revisión.",
    "mt.reviewReport": "Reportar un error de traducción",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];
