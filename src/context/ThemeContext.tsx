import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CategoryData, TagData } from '../assets/type';
import axios from 'axios';

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  categoryData: CategoryData[];
  tagData: TagData[];
  selectedCategory: string;
  handleCategoryChange: (categoryName: string) => void;
  handleSubmit: () => void;
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
  const [theme, setTheme] = useState('');
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

  // Appeler handleCategoryChange et handleSubmit lorsque le thème change
  useEffect(() => {
    if (theme) {
      handleCategoryChange(theme);
      handleSubmit();
    } else {
      console.log('no theme charged');
      console.log(theme);
    }
  }, [theme]);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    console.log(categoryName);
    // todo checker a partir dici
  };

  const handleSubmit = async () => {
    if (selectedCategory) {
      const selectedCategoryData = categoryData.find(categ => categ.name === selectedCategory);
      console.log(selectedCategoryData);
     
      if (selectedCategoryData) {
        const themeId = selectedCategoryData.id;
        await postThemeData(Number(themeId));
        navigate(`/test-personnalite/Categories`);
      } else {

        console.error('La catégorie sélectionnée n\'a pas été trouvée dans les données de catégorie.');
      }
    } else {
      alert('Veuillez sélectionner un thème.');
    }
  };

  const postThemeData = async (themeId: number) => {
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

  return (
    <ThemeContext.Provider value={{ theme, setTheme, categoryData, tagData, selectedCategory, handleCategoryChange, handleSubmit }}>
      {children}
    </ThemeContext.Provider>
  );
};