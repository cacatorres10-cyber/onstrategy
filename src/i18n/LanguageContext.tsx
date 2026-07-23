import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { content, Lang } from './content';

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (typeof content)['es'];
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'es';
    const saved = window.localStorage.getItem('osp-lang') as Lang | null;
    if (saved === 'es' || saved === 'en') return saved;
    return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
  });

  useEffect(() => {
    window.localStorage.setItem('osp-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
