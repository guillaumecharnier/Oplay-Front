// Categories.tsx
import React from "react";

function Categories() {
  return (
    <div className="mt-6 w-full max-w-md px-4 mb-12">
      {/* Titre avec l'icône */}
      <a href="">
      <h2 className="text-lg sm:text-sm md:text-xl lg:text-2xl text-blue-100 mb-4 flex items-center justify-center space-x-2">
        <span>Catégories</span>
        <img src="/icon-svg/arrow-right.svg" alt="arrow-right" className="w-4 h-4" />
      </h2>
      </a>
      
      {/* Grille d'images */}
      <div className="grid grid-cols-2 gap-4">
        {/* Premier jeu */}
        <a href="lien-vers-le-jeu-1" className="relative group">
          <img
            src="/images/Categories.jpg"
            alt="Jeu 1"
            className="w-full h-28 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 1</h3>
          </div>
        </a>
        
        {/* Deuxième jeu */}
        <a href="lien-vers-le-jeu-2" className="relative group">
          <img
            src="/images/Categories.jpg"
            alt="Jeu 2"
            className="w-full h-28 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 2</h3>
          </div>
        </a>
        
        {/* Troisième jeu */}
        <a href="lien-vers-le-jeu-3" className="relative group">
          <img
            src="/images/Categories.jpg"
            alt="Jeu 3"
            className="w-full h-28 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 3</h3>
          </div>
        </a>
        
        {/* Quatrième jeu */}
        <a href="lien-vers-le-jeu-4" className="relative group">
          <img
            src="/images/Categories.jpg"
            alt="Jeu 4"
            className="w-full h-28 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 4</h3>
          </div>
        </a>
        
        {/* Cinquième jeu */}
        <a href="lien-vers-le-jeu-5" className="relative group">
          <img
            src="/images/Categories.jpg"
            alt="Jeu 5"
            className="w-full h-28 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 5</h3>
          </div>
        </a>
        
        {/* Sixième jeu */}
        <a href="lien-vers-le-jeu-6" className="relative group">
          <img
            src="/images/Categories.jpg"
            alt="Jeu 6"
            className="w-full h-28 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 6</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Categories;
