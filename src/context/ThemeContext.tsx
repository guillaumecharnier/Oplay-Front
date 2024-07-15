// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Définition des types de thème disponibles
export type Theme = 'horror' | 'action' | 'aventure' | 'online' | 'sport' | 'strategie';

// Définition du type du contexte de thème
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Création du contexte de thème
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte de thème
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Composant fournisseur de thème
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [theme, setTheme] = useState<Theme>('aventure'); 

  // Fonction pour changer le thème
  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  // Fournit le contexte de thème aux composants enfants
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
