import React from 'react';
import { Link } from 'react-router-dom';

function DernierAjout({ gameData }) {
  return (
    <div className="bg-blue-custom-200 min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
      
      {/* Image de couverture */}
      <div className="relative w-full mb-12 flex justify-center">
        <img
          src="/src/assets/images/Latest-Addition.jpeg"
          alt="Dernier Ajout"
          className="w-full max-h-80 object-cover shadow-lg"
        />
        <div className="absolute top-4 md:left-6 lg:left-8">
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Derniers Ajouts - Découvrez Les Nouveautés!
          </p>
        </div>
      </div>

      {/* Titre de la section */}
      <div className="w-full max-w-screen-lg px-4 mb-12 mx-auto">
        <div className="mt-6">
          <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2 mb-12">
            <span className="font-semibold">Derniers Ajouts</span>
          </h2>

          {/* Grille d'images de jeux */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Exemple de jeux */}
            <div className="group flex flex-col items-center">
              <Link to="/jeu/1" className="block">
                <img
                  src="/src/assets/images/ShopPictures.jpg"
                  alt="Jeu 1"
                  className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-56 lg:h-48 xl:w-64 xl:h-56 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
                />
                <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
                  Jeu 1
                </h3>
              </Link>
            </div>
            <div className="group flex flex-col items-center">
              <Link to="/jeu/2" className="block">
                <img
                  src="/src/assets/images/ShopPictures.jpg"
                  alt="Jeu 2"
                  className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-56 lg:h-48 xl:w-64 xl:h-56 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
                />
                <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
                  Jeu 2
                </h3>
              </Link>
            </div>
            <div className="group flex flex-col items-center">
              <Link to="/jeu/3" className="block">
                <img
                  src="/src/assets/images/ShopPictures.jpg"
                  alt="Jeu 3"
                  className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-56 lg:h-48 xl:w-64 xl:h-56 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
                />
                <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
                  Jeu 3
                </h3>
              </Link>
            </div>
            <div className="group flex flex-col items-center">
              <Link to="/jeu/4" className="block">
                <img
                  src="/src/assets/images/ShopPictures.jpg"
                  alt="Jeu 4"
                  className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-56 lg:h-48 xl:w-64 xl:h-56 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
                />
                <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
                  Jeu 4
                </h3>
              </Link>
            </div>
            <div className="group flex flex-col items-center">
              <Link to="/jeu/5" className="block">
                <img
                  src="/src/assets/images/ShopPictures.jpg"
                  alt="Jeu 5"
                  className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-56 lg:h-48 xl:w-64 xl:h-56 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
                />
                <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
                  Jeu 5
                </h3>
              </Link>
            </div>
            <div className="group flex flex-col items-center">
              <Link to="/jeu/6" className="block">
                <img
                  src="/src/assets/images/ShopPictures.jpg"
                  alt="Jeu 6"
                  className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-56 lg:h-48 xl:w-64 xl:h-56 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
                />
                <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
                  Jeu 6
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DernierAjout;
