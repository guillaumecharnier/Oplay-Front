import React from 'react';
import { Link } from 'react-router-dom';

function CustomSelection() {
  return (
    <div className="mt-6 w-full max-w-7xl px-4 mb-12 mx-auto">
      {/* Titre avec l'icône */}
      <Link to="#" className="block mb-16">
        <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 hover:text-blue-300">
          <span className="font-semibold hover:text-blue-300">Sélection personnalisée</span>
        </h2>
      </Link>

      {/* Grille d'images avec espace supplémentaire */}
      <div className="grid grid-cols-2 gap-8 tablet:grid-cols-3">
        {/* Premier jeu */}
        <Link
          to="lien-vers-le-jeu-1"
          className="group flex flex-col items-center"
        >
          <img
            src="/src/assets/images/HomePagePicture.jpg"
            alt="Jeu 1"
            className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-56 lg:h-48 xl:w-64 xl:h-56 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
            Jeu 1
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default CustomSelection;






