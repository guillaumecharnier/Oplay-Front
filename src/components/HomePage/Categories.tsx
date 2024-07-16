import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

interface Category {
  id: number;
  name: string;
  picture: string;
}

function Categories() {
  const { categoryData } = useTheme();

  return (
    <div className="mt-6 w-full max-w-7xl px-4 mb-12 mx-auto">
      <Link to="#" className="block mb-16">
        <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 hover:text-blue-300">
          <span className="font-semibold hover:text-blue-300">Catégories</span>
        </h2>
      </Link>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categoryData.map((category: Category) => (
          <Link to={`/categorie/${category.id}`} key={category.id} className="relative group">
            <img
              src={category.picture} 
              alt={category.name}
              className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
              <h3 className="text-white text-[2.5rem] font-semibold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
