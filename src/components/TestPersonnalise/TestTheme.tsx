import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { getThemeClass } from '../../Utils/themeUtils';


const TestTheme = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const { postThemeData, categoryData } = useTheme();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const themeClass = getThemeClass(theme);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postThemeData(selectedCategoryId);
    navigate(`/test-personnalite/Categories`);
  };

  return (
    <div className={`${themeClass} min-h-screen flex flex-col items-center justify-center p-8`}>
      <h1 className="text-3xl text-white font-bold mb-8">Test Personnalisé</h1>
      <p className="text-2xl text-white py-7">Choisis un thème !</p>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        {categoryData.map((category) => (
          <label key={category.id} className="flex items-center space-x-2 relative">
            <input
              type="radio"
              name="category"
              value={category.id}
              className="appearance-none border-2 border-gray-300 rounded-full w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
              checked={selectedCategoryId === category.id}
              onChange={() => handleCategoryChange(category.id)}
            />
            <div className={`category-card relative w-[300px] h-[200px] ${selectedCategoryId === category.id ? 'border-pink-500' : ''}`} onClick={() => handleCategoryChange(category.id)}>
              <img
                src={category.picture}
                alt={category.name}
                className="rounded-lg w-full h-full object-cover"
              />
              <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-lg font-semibold">{category.name}</p>
            </div>
          </label>
        ))}
        <button type="submit" className="mt-12 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 col-span-2">
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default TestTheme;