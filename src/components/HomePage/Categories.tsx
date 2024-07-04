import React from "react";
import { Link } from "react-router-dom";

function Categories({ categoryData }) {
  return (
    <div className="mt-6 w-full max-w-7xl px-4 mb-12 mx-auto">
      {/* Titre avec l'icône */}
      <Link to="#" className="block mb-16">
        <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 hover:text-blue-300">
          <span className="font-semibold hover:text-blue-300">Catégories</span>
        </h2>
      </Link>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {categoryData.map((element) => (  
        <Link to={`/categorie/${element.id}`} key={element.id} className="relative group">
          {/* //voir lien to */}
          <img
            src={element.picture} 
            alt={element.name}
            className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-[3.5rem] font-semibold">{element.name}</h3>
          </div>
        </Link>
        ))};
      </div>
    </div>
  );
}

export default Categories;






