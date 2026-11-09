import { pt } from "./pt";
import { en } from "./en";
import { es } from "./es";
import type { Content, Locale } from "./types";

export * from "./types";

const dictionaries: Record<Locale, Content> = { pt, en, es };

export const getContent = (locale: Locale): Content => dictionaries[locale];

export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en", es: "es" };
export const localeName: Record<Locale, string> = { pt: "Português", en: "English", es: "Español" };
