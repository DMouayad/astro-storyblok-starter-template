import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from "astro:i18n";
import { DEFAULT_LANG, TRANSLATIONS } from "./constants";

export function i18n(lang?: keyof typeof TRANSLATIONS) {
    return function t(key: keyof typeof TRANSLATIONS[typeof DEFAULT_LANG]) {
        return lang ? TRANSLATIONS[lang][key] : TRANSLATIONS[DEFAULT_LANG][key];
    }
}
export function localeSiteName(locale?: string) {
    return i18n(locale)("company-name");
}
export function absLangURL(url: string, currentLocale?: string) {
    return getAbsoluteLocaleUrl(currentLocale || DEFAULT_LANG, url);
}

export function relLangURL(url: string, currentLocale?: string) {

    return getRelativeLocaleUrl(currentLocale || DEFAULT_LANG, url);
}