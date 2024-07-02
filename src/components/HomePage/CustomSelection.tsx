import React from 'react';

function CustomSelection() {
  return (
    <div className="mt-6 w-full max-w-7xl px-4 mb-12 mx-auto">
      {/* Titre avec l'icône */}
      <a href="#" className="block mb-16">
        <h2 className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-blue-100 flex items-center justify-center space-x-2">
          <span>Sélection personnalisée</span>
          <img
            src="src/assets/images/arrow-right.svg"
            alt="arrow-right"
            className="w-6 h-6"
          />
        </h2>
      </a>

      {/* Grille d'images avec espace supplémentaire */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 pt-8">
        {/* Premier jeu */}
        <a
          href="lien-vers-le-jeu-1"
          className="group flex flex-col items-center"
        >
          <img
            src="src/assets/images/Selection-personnalisée.jpg"
            alt="Jeu 1"
            className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-52 lg:h-44 xl:w-56 xl:h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
            Jeu 1
          </h3>
        </a>

        {/* Deuxième jeu */}
        <a
          href="lien-vers-le-jeu-2"
          className="group flex flex-col items-center"
        >
          <img
            src="src/assets/images/Selection-personnalisée.jpg"
            alt="Jeu 2"
            className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-52 lg:h-44 xl:w-56 xl:h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
            Jeu 2
          </h3>
        </a>

        {/* Troisième jeu */}
        <a
          href="lien-vers-le-jeu-3"
          className="group flex flex-col items-center"
        >
          <img
            src="src/assets/images/Selection-personnalisée.jpg"
            alt="Jeu 3"
            className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-52 lg:h-44 xl:w-56 xl:h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
            Jeu 3
          </h3>
        </a>

        {/* Quatrième jeu */}
        <a
          href="lien-vers-le-jeu-4"
          className="group flex flex-col items-center"
        >
          <img
            src="src/assets/images/Selection-personnalisée.jpg"
            alt="Jeu 4"
            className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-52 lg:h-44 xl:w-56 xl:h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
            Jeu 4
          </h3>
        </a>

        {/* Cinquième jeu */}
        <a
          href="lien-vers-le-jeu-5"
          className="group flex flex-col items-center"
        >
          <img
            src="src/assets/images/Selection-personnalisée.jpg"
            alt="Jeu 5"
            className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-52 lg:h-44 xl:w-56 xl:h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
            Jeu 5
          </h3>
        </a>

        {/* Sixième jeu */}
        <a
          href="lien-vers-le-jeu-6"
          className="group flex flex-col items-center"
        >
          <img
            src="src/assets/images/Selection-personnalisée.jpg"
            alt="Jeu 6"
            className="w-40 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-52 lg:h-44 xl:w-56 xl:h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:brightness-110 transition-transform transition-brightness duration-300"
          />
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100 mt-2 text-center">
            Jeu 6
          </h3>
        </a>
      </div>
    </div>
  );
}

export default CustomSelection;



