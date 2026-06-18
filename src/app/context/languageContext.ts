import { createContext, useContext } from 'react';

export type LangCode = 'FR' | 'EN';

export type LanguageContextType = {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'FR',
  setLang: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}
