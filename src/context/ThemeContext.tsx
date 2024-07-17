import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CategoryData, TagData } from '../assets/type';
import { useAuth } from "../context/AuthContext";
const ThemeContext = createContext(undefined);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/category', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        setCategoryData(response.data);
        // console.log(token);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchCategoryData();
  }, [token]);

  useEffect(() => {
    const fetchUserTheme = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/user/detail', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        setTheme(response.data.chooseTheme.id);
      } catch (error) {
        console.error('Error fetching user theme:', error);
        setTheme(1); 
      }
    };

    fetchUserTheme();
  }, [token]);

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
      console.log('User Response:', response.data);
      setTheme(themeId);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
// console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme, categoryData, postThemeData }}>
      {children}
    </ThemeContext.Provider>
  );
};
