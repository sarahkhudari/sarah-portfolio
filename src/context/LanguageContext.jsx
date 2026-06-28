import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../i18n.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('sara-lang') || 'en';
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem('sara-lang', lang);
  }, [lang, dir]);

  const toggle = () => setLang((prev) => (prev === 'en' ? 'ar' : 'en'));

  const value = useMemo(
    () => ({
      lang,
      dir,
      setLang,
      toggle,
      t: translations[lang],
      isRTL: dir === 'rtl',
    }),
    [lang, dir]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
