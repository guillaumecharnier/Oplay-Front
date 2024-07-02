import React from 'react';

function CustomSelection() {
  return (
    <div className="mt-6 w-full max-w-md px-4">
      {/* Titre avec l'icône */}
      <a href="#" className="block mb-8">
        <h2 className="text-lg sm:text-sm md:text-xl lg:text-2xl text-blue-100 flex items-center justify-center space-x-2">
          <span>Selection personnalisée</span>
          <img src="/icon-svg/arrow-right.svg" alt="arrow-right" className="w-4 h-4" />
        </h2>
      </a>

      {/* Grille d'images */}
      <div className="grid grid-cols-2 gap-4">
        {/* Premier jeu */}
        <a href="lien-vers-le-jeu-1" className="group flex flex-col items-center">
          <img
            src="/images/Selection-personnalisée.jpg"
            alt="Jeu 1"
            className="w-28 h-20 object-cover rounded-lg shadow-lg group-hover:opacity-75"
          />
          <h3 className="text-sm text-blue-100 mt-1 text-center">Jeu 1</h3>
        </a>
        
        {/* Deuxième jeu */}
        <a href="lien-vers-le-jeu-2" className="group flex flex-col items-center">
          <img
            src="/images/Selection-personnalisée.jpg"
            alt="Jeu 2"
            className="w-28 h-20 object-cover rounded-lg shadow-lg group-hover:opacity-75"
          />
          <h3 className="text-sm text-blue-100 mt-1 text-center">Jeu 2</h3>
        </a>
        
        {/* Troisième jeu */}
        <a href="lien-vers-le-jeu-3" className="group flex flex-col items-center">
          <img
            src="/images/Selection-personnalisée.jpg"
            alt="Jeu 3"
            className="w-28 h-20 object-cover rounded-lg shadow-lg group-hover:opacity-75"
          />
          <h3 className="text-sm text-blue-100 mt-1 text-center">Jeu 3</h3>
        </a>
        
        {/* Quatrième jeu */}
        <a href="lien-vers-le-jeu-4" className="group flex flex-col items-center">
          <img
            src="/images/Selection-personnalisée.jpg"
            alt="Jeu 4"
            className="w-28 h-20 object-cover rounded-lg shadow-lg group-hover:opacity-75"
          />
          <h3 className="text-sm text-blue-100 mt-1 text-center">Jeu 4</h3>
        </a>
        
        {/* Cinquième jeu */}
        <a href="lien-vers-le-jeu-5" className="group flex flex-col items-center">
          <img
            src="/images/Selection-personnalisée.jpg"
            alt="Jeu 5"
            className="w-28 h-20 object-cover rounded-lg shadow-lg group-hover:opacity-75"
          />
          <h3 className="text-sm text-blue-100 mt-1 text-center">Jeu 5</h3>
        </a>
        
        {/* Sixième jeu */}
        <a href="lien-vers-le-jeu-6" className="group flex flex-col items-center">
          <img
            src="/images/Selection-personnalisée.jpg"
            alt="Jeu 6"
            className="w-28 h-20 object-cover rounded-lg shadow-lg group-hover:opacity-75"
          />
          <h3 className="text-sm text-blue-100 mt-1 text-center">Jeu 6</h3>
        </a>
      </div>
    </div>
  );
}

export default CustomSelection;
