import {useRouter} from 'next/router';
import en from '../locales/en';
// German copy is kept in the repo, but disabled while the site runs English-only.
// import de from '../locales/de';

export const defaultLocale = 'en';
export const dictionaries = {
  en,
  // de,
};

export function getDictionary (locale) {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

export function useI18n () {
  // Next.js i18n routing is temporarily disabled; keep content in plain English.
  // const {locale = defaultLocale} = useRouter ();
  useRouter ();
  const locale = defaultLocale;

  return {
    locale,
    t: getDictionary (locale),
  };
}
