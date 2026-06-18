import { useState } from 'react';
import type { ReactNode } from 'react';
import { LanguageContext } from './languageContext';
import type { LangCode } from './languageContext';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangCode>('FR');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
