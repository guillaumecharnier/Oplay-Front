import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="mt-6 w-full max-w-7xl px-4 mb-12 mx-auto">
      {/* Titre avec l'icône */}
      <Link to="#" className="block mb-16">
        <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 hover:text-blue-300">
          <span className="font-semibold hover:text-blue-300">Catégories</span>
        </h2>
      </Link>
      
      {/* Grille d'images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Premier jeu */}
        <Link to="lien-vers-le-jeu-1" className="relative group">
          <img
            src="src\assets\images\CategoriesPictures.jpg"
            alt="Jeu 1"
            className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 1</h3>
          </div>
        </Link>
        
        {/* Deuxième jeu */}
        <Link to="lien-vers-le-jeu-2" className="relative group">
          <img
            src="src\assets\images\CategoriesPictures.jpg"
            alt="Jeu 2"
            className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 2</h3>
          </div>
        </Link>
        
        {/* Troisième jeu */}
        <Link to="lien-vers-le-jeu-3" className="relative group">
          <img
            src="src\assets\images\CategoriesPictures.jpg"
            alt="Jeu 3"
            className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 3</h3>
          </div>
        </Link>
        
        {/* Quatrième jeu */}
        <Link to="lien-vers-le-jeu-4" className="relative group">
          <img
            src="src\assets\images\CategoriesPictures.jpg"
            alt="Jeu 4"
            className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 4</h3>
          </div>
        </Link>
        
        {/* Cinquième jeu */}
        <Link to="lien-vers-le-jeu-5" className="relative group">
          <img
            src="src\assets\images\CategoriesPictures.jpg"
            alt="Jeu 5"
            className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 5</h3>
          </div>
        </Link>
        
        {/* Sixième jeu */}
        <Link to="lien-vers-le-jeu-6" className="relative group">
          <img
            src="src\assets\images\CategoriesPictures.jpg"
            alt="Jeu 6"
            className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 6</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;






