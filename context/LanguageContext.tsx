'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Dictionnaire complet des traductions
const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Nav & Header
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'cv.download': 'CV',
    
    // Hero Section
    'hero.title': 'NINA LEMOINE',
    'hero.subtitle': 'Data Scientist & Analyst',
    
    // About Teaser (Accueil)
    'about.bg.1': 'PYTHON SQL CARREFOUR DATA PYTHON', // Mots clés fond
    'about.bg.2': 'BUSINESS ANALYTICS SKI INSIGHTS', // Mots clés fond
    'about.title': 'Data Analyst & Sportive.',
    'about.text': "Ancienne skieuse de haut niveau reconvertie dans la Data Science. J'apporte la même rigueur sur les pistes que dans mes dashboards SQL.",
    'about.current': 'Actuellement en alternance chez Carrefour et étudiante en MSc Business Analytics.',
    'about.btn': 'Découvrir mon parcours complet',

    // Projects Teaser (Accueil)
    'projects.title': 'Projets',
    'projects.title.span': 'Récents',
    'projects.subtitle': 'Survolez pour explorer',
    
    // Skills Section
    'skills.title': 'Expertise.',
    'skills.subtitle': 'Toolkit 360°',
    'skills.desc': 'Une approche hybride combinant la rigueur de l\'ingénierie des données, la puissance de l\'automatisation et la vision produit.',
    'skills.cat.data': 'Data Science & IA',
    'skills.cat.eng': 'Engineering & Automation',
    'skills.cat.biz': 'Business Intelligence & Product',

    // Footer
    'footer.title': "LET'S TALK",
    'footer.copy': '© 2026 Nina Lemoine • Data & Design',
  },
  en: {
    // Nav & Header
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'cv.download': 'Resume',

    // Hero Section
    'hero.title': 'NINA LEMOINE',
    'hero.subtitle': 'Data Scientist & Analyst',

    // About Teaser (Accueil)
    'about.bg.1': 'PYTHON SQL CARREFOUR DATA PYTHON',
    'about.bg.2': 'BUSINESS ANALYTICS SKI INSIGHTS',
    'about.title': 'Data Analyst & Athlete.',
    'about.text': "Former high-level skier turned Data Scientist. I bring the same discipline to the slopes as I do to my SQL dashboards.",
    'about.current': 'Currently working at Carrefour and studying MSc Business Analytics.',
    'about.btn': 'Discover my full journey',

    // Projects Teaser (Accueil)
    'projects.title': 'Recent',
    'projects.title.span': 'Projects',
    'projects.subtitle': 'Hover to explore',

    // Skills Section
    'skills.title': 'Expertise.',
    'skills.subtitle': '360° Toolkit',
    'skills.desc': 'A hybrid approach combining data engineering rigor, automation power, and product vision.',
    'skills.cat.data': 'Data Science & AI',
    'skills.cat.eng': 'Engineering & Automation',
    'skills.cat.biz': 'Business Intelligence & Product',

    // Footer
    'footer.title': "LET'S TALK",
    'footer.copy': '© 2026 Nina Lemoine • Data & Design',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}