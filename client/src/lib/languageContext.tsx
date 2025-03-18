import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, translations, Translations, en } from './translations';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: en,
});

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Get saved language from localStorage or default to 'en'
  const getSavedLanguage = (): Language => {
    if (typeof window === 'undefined') return 'en';
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage && ['en', 'fr', 'ja'].includes(savedLanguage) 
      ? savedLanguage 
      : 'en';
  };

  const [language, setLanguageState] = useState<Language>(getSavedLanguage());
  const [translations, setTranslations] = useState<Translations>(en);

  // Update translations when language changes
  useEffect(() => {
    const lang = language as keyof typeof translations;
    import('./translations').then((module) => {
      setTranslations(module[lang]);
      localStorage.setItem('language', language);
    });
  }, [language]);

  // Function to change language
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}