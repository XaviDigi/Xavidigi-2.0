import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, Translations, en, fr, ja } from './translations';

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
  const [translationData, setTranslationData] = useState<Translations>(en);

  // Update translations when language changes
  useEffect(() => {
    // Get the appropriate translation based on language
    if (language === 'en') {
      setTranslationData(en);
    } else if (language === 'fr') {
      setTranslationData(fr);
    } else if (language === 'ja') {
      setTranslationData(ja);
    }
    
    // Save to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  // Function to change language
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translationData }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}