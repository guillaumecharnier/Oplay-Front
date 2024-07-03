import React from 'react';

function Panier(){
  return (
    <div className="bg-blue-custom-200 min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* En-tête du panier */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 py-5 px-6 flex justify-between items-center text-white">
          <h1 className="text-3xl font-bold">Mon Panier</h1>
        </div>

        {/* Liste des articles */}
        <ul className="divide-y divide-gray-200">
          <li className="flex items-center p-6 space-x-4 border-b border-gray-200">
            <img
              src="src/assets/images/ShopPictures.jpg"
              alt="Jeu 1"
              className="w-24 h-24 object-cover rounded-xl shadow-md"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">Jeu 1</h2>
              <p className="text-gray-600">1 x $59.99</p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Boutons pour gérer la quantité */}
              <button className="bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                <img
                  src="src\assets\images\less-circle.svg"
                  alt="Diminuer la quantité"
                  className="w-4 h-4"
                />
              </button>
              <span className="text-lg font-bold text-gray-800">1</span>
              <button className="bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                <img
                  src="src\assets\images\plus-circle.svg"
                  alt="Augmenter la quantité"
                  className="w-4 h-4"
                />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg font-bold text-gray-800">$59.99</p>
              <button className="bg-red-600 p-2 rounded-full text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300">
                <img
                  src="src\assets\images\trash.svg"
                  alt="Supprimer l'article"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </li>

          <li className="flex items-center p-6 space-x-4 border-b border-gray-200">
            <img
              src="src/assets/images/ShopPictures.jpg"
              alt="Jeu 2"
              className="w-24 h-24 object-cover rounded-xl shadow-md"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">Jeu 2</h2>
              <p className="text-gray-600">2 x $49.99</p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Boutons pour gérer la quantité */}
              <button className="bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                <img
                  src="src\assets\images\less-circle.svg"
                  alt="Diminuer la quantité"
                  className="w-4 h-4"
                />
              </button>
              <span className="text-lg font-bold text-gray-800">2</span>
              <button className="bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                <img
                  src="src\assets\images\plus-circle.svg"
                  alt="Augmenter la quantité"
                  className="w-4 h-4"
                />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg font-bold text-gray-800">$99.98</p>
              <button className="bg-red-600 p-2 rounded-full text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300">
                <img
                  src="src\assets\images\trash.svg"
                  alt="Supprimer l'article"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </li>

          {/* Ajouter plus d'articles ici si nécessaire */}
        </ul>

        {/* Total du panier */}
        <div className="bg-gray-50 py-5 px-6 flex justify-between items-center border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Total</h2>
          <p className="text-xl font-bold text-gray-800">$159.97</p>
        </div>

        {/* Actions du panier */}
        <div className="py-6 px-6 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:justify-between">
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transform transition-transform duration-300">
            Continuer mes achats
          </button>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transform transition-transform duration-300">
            Passer à la caisse
          </button>
        </div>
      </div>
    </div>
  );
}

export default Panier;