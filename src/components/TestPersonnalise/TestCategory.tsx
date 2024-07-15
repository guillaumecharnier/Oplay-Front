import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import axios from 'axios';

const TestCategory = () => {
  const { theme, categoryData } = useTheme();
  const { user } = useUser();
  const { token } = useAuth();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (selectedCategories.length > 0) {
   
      await postCategoryData(selectedCategories);

      navigate(`/test-personnalite/Tags`);
    } else {
      alert('Veuillez sélectionner une catégorie.');
    }
  };

  // Fonction pour gérer la sélection d'une catégorie
  const handleCategoryChange = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(selectedCategories.filter(categ => categ !== categoryName));
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  
  const postCategoryData = async (categoryIds) => {
    try {
      const response = await axios.post('http://localhost:8080/api/user/categories', {
        category_ids: categoryIds
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('category Response:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className={`min-h-screen bg-${theme}-bg flex flex-col items-center justify-center p-8`}>
      <h1 className="text-3xl font-bold mb-8">Test Personnalisé</h1>
      <p className='text-2xl py-7'>Choisis tes catégories !</p>
      <div className="grid grid-cols-2 gap-6">
        {categoryData.map((category) => (
          <label key={category.name} className="flex items-center space-x-2 relative">
            <input
              type="checkbox"
              className="appearance-none border-2 border-gray-300 rounded-md w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
              checked={selectedCategories.includes(category.id)}
              onChange={() => handleCategoryChange(category.id)}
            />
            <div className={`category-card relative w-[300px] h-[200px] ${selectedCategories.includes(category.id) ? 'border-pink-500' : ''}`} onClick={() => handleCategoryChange(category.id)}>
              <img
                src="src/assets/images/CategoriesPictures.jpg"
                alt={category.name}
                className="rounded-lg w-full h-full object-cover"
              />
              <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">{category.name}</p>
            </div>
          </label>
        ))}
      </div>
      <button className="mt-12 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSubmit}>
        Soumettre
      </button>
    </div>
  );
};

export default TestCategory;