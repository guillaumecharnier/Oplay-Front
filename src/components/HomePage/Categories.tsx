import React from "react";

function Categories() {
  return (
    <div className="mt-6 w-full max-w-7xl px-4 mb-12 mx-auto">
      {/* Titre avec l'icône */}
      <a href="#">
        <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 mb-12 flex items-center justify-center space-x-2">
          <span>Catégories</span>
          <img src="src/assets/images/arrow-right.svg" alt="arrow-right" className="w-5 h-5" />
        </h2>
      </a>
      
      {/* Grille d'images */}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 lg:gap-10 xl:gap-12">
        {/* Premier jeu */}
        <a href="lien-vers-le-jeu-1" className="relative group">
          <img
            src="src/assets/images/Categories.jpg"
            alt="Jeu 1"
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 1</h3>
          </div>
        </a>
        
        {/* Deuxième jeu */}
        <a href="lien-vers-le-jeu-2" className="relative group">
          <img
            src="src/assets/images/Categories.jpg"
            alt="Jeu 2"
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 2</h3>
          </div>
        </a>
        
        {/* Troisième jeu */}
        <a href="lien-vers-le-jeu-3" className="relative group">
          <img
            src="src/assets/images/Categories.jpg"
            alt="Jeu 3"
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 3</h3>
          </div>
        </a>
        
        {/* Quatrième jeu */}
        <a href="lien-vers-le-jeu-4" className="relative group">
          <img
            src="src/assets/images/Categories.jpg"
            alt="Jeu 4"
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 4</h3>
          </div>
        </a>
        
        {/* Cinquième jeu */}
        <a href="lien-vers-le-jeu-5" className="relative group">
          <img
            src="src/assets/images/Categories.jpg"
            alt="Jeu 5"
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 5</h3>
          </div>
        </a>
        
        {/* Sixième jeu */}
        <a href="lien-vers-le-jeu-6" className="relative group">
          <img
            src="src/assets/images/Categories.jpg"
            alt="Jeu 6"
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg text-center p-2">
            <h3 className="text-white text-base sm:text-sm md:text-lg lg:text-xl font-semibold">Jeu 6</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Categories;






