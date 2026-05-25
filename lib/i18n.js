import {useRouter} from 'next/router';
import en from '../locales/en';
import de from '../locales/de';

export const defaultLocale = 'en';
export const dictionaries = {
  en,
  de,
};

export function getDictionary (locale) {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

export function useI18n () {
  const {locale = defaultLocale} = useRouter ();

  return {
    locale,
    t: getDictionary (locale),
  };
}
