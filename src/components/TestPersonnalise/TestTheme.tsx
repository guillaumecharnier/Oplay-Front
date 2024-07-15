import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const TestPage = () => {
  const { theme, categoryData, selectedCategory, handleCategoryChange, handleSubmit } = useTheme();

  return (
    <div className={`min-h-screen bg-${theme}-bg flex flex-col items-center justify-center p-8`}>
      <h1 className="text-3xl font-bold mb-8">Test Personnalisé</h1>
      <p className="text-2xl py-7">Choisis un thème !</p>
      
      <div className="grid grid-cols-2 gap-6">
        {categoryData.map((category) => (
          <label key={category.name} className="flex items-center space-x-2 relative">
            <input
              type="radio"
              name="category"
              className="appearance-none border-2 border-gray-300 rounded-full w-6 h-6 checked:bg-blue-500 checked:border-transparent cursor-pointer"
              checked={selectedCategory === category.name}
              onChange={() => handleCategoryChange(category.name)}
            />
            <div className={`category-card relative w-[300px] h-[200px] ${selectedCategory === category.name ? 'border-pink-500' : ''}`} onClick={() => handleCategoryChange(category.name)}>
              <img
                src={category.picture}
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

export default TestPage;