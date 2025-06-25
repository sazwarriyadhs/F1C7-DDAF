'use client';

import React, { createContext, useState, useContext, useMemo } from 'react';

type Language = 'id' | 'en';
type Currency = 'IDR' | 'USD';

interface SettingsContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  currency: Currency;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const currency = useMemo(() => (language === 'id' ? 'IDR' : 'USD'), [language]);

  const value = {
    language,
    setLanguage,
    currency,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
