import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

function JeuxPersonnalise() {
  const { filteredGames } = useUser();
console.log(filteredGames);
  
  return (
    <div className="bg-blue-custom-200 min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
      
      {/* Image de couverture */}
      <div className="relative w-full flex justify-center mb-20">
        <img
          src="src/assets/images/re8.jpg"
          alt="Custom Selection"
          className="w-full max-h-80 object-cover shadow-lg"
        />
      </div>

      {/* Titre de la section */}
      <div className="w-full max-w-screen-lg px-4 mb-12 mx-auto">
        <div className="mt-6">
          <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2 mb-24">
            <span className="font-semibold">Nos Sélections Personnalisées</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default JeuxPersonnalise;



