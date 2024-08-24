export const ENGLISH_LANG = "en" as const;
export const ARABIC_LANG = "ar" as const;
export const LANGUAGES = {
    "English": ENGLISH_LANG,
    "Arabic": ARABIC_LANG
} as const;
export const LOCALES = [ENGLISH_LANG, ARABIC_LANG];
export const DEFAULT_LANG = ENGLISH_LANG;
export const TRANSLATIONS: { [key: string]: any } = {
    "ar": {},
    "en": {}
} as const;