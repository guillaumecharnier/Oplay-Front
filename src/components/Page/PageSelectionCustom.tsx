import React from 'react';
import { Link } from 'react-router-dom';

const PageCustomSelection = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sélection Personnalisée</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Créer une Nouvelle Sélection</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Nom de la sélection"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Créer Sélection
            </button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Ajouter des Jeux à la Sélection</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Exemple de jeu */}
              <div className="relative group border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Titre du jeu"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Titre du Jeu</h3>
                  <p className="text-gray-600 mb-4">Description du jeu. Une brève description du jeu ici.</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                    Ajouter à la Sélection
                  </button>
                </div>
              </div>
              {/* Répétez le bloc ci-dessus pour d'autres jeux */}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Jeux Sélectionnés</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Exemple de jeu sélectionné */}
              <div className="relative group border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Titre du Jeu Sélectionné"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Titre du Jeu</h3>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                    Retirer
                  </button>
                </div>
              </div>
              {/* Répétez le bloc ci-dessus pour d'autres jeux sélectionnés */}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sélections Personnalisées</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              {/* Exemple de sélection personnalisée */}
              <li className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Nom de la Sélection</h3>
                <ul className="space-y-2">
                  {/* Exemple de jeu dans une sélection */}
                  <li className="flex items-center space-x-4">
                    <img
                      src="https://via.placeholder.com/100x100"
                      alt="Titre du Jeu"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <p className="text-gray-800 font-semibold">Titre du Jeu</p>
                      <p className="text-gray-600">Description du jeu.</p>
                    </div>
                  </li>
                  {/* Répétez le bloc ci-dessus pour d'autres jeux dans cette sélection */}
                </ul>
              </li>
              {/* Répétez le bloc ci-dessus pour d'autres sélections personnalisées */}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            Retour à l'Accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageCustomSelection;
