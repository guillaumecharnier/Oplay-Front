// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import { CategoryData, TagData } from '../assets/type';
import axios from 'axios';

export type Theme = 'horror' | 'action' | 'aventure' | 'online' | 'sport' | 'strategie';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [theme, setTheme] = useState<Theme>('aventure'); 
  const [tagData, setTagData] = useState<TagData[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/category', {
        headers: { 'Content-Type': 'application/json' },
      });
      setCategoryData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchTagData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/tag', {
        headers: { 'Content-Type': 'application/json' },
      });
      setTagData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchTagData();
    fetchCategoryData();
  }, []);

  // Fonction pour changer le thème
  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

// Fonction pour gérer la sélection d'un thème
const handleCategoryChange = (categoryName) => {
  setSelectedCategory(categoryName);
};

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async () => {
    if (selectedCategory) {
      // Récupère l'ID du thème sélectionné
      const selectedCategoryData = categoryData.find(categ => categ.name === selectedCategory);
      // TODO: recuperer CategoryData
      if (selectedCategoryData) {
        const themeId = selectedCategoryData.id;
        console.log('ID du thème', themeId);

        await postThemeData(themeId);

        navigate(`/test-personnalite/Categories`);
      } else {
        console.error('La catégorie sélectionnée n\'a pas été trouvée dans les données de catégorie.');
      }
    } else {
      alert('Veuillez sélectionner un thème.');
    }
  };

  const postThemeData = async (themeId) => {
    try {
      const response = await axios.post('http://localhost:8080/api/user/theme', {
        theme_id: themeId
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('user Response:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  // Fournit le contexte de thème aux composants enfants
  return (
    <ThemeContext.Provider value={{ theme, setTheme, categoryData, tagData }}>
      {children}
    </ThemeContext.Provider>
  );
};
