'use client';
import { createContext, useContext, useState } from 'react';


const SectionContext = createContext();

export function SectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState('');

  const setSection = (section) => {
    setActiveSection(section);
  };

  return <SectionContext.Provider value={{ activeSection, setSection }}>{children}</SectionContext.Provider>;
}

export function useSectionContext() {
  return useContext(SectionContext);
}
