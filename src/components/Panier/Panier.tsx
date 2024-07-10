import axios from 'axios';
import React, { useEffect, useState } from 'react'; // Importer useState
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

function Panier() {
  const { token } = useAuth();
  const { cartItems, setCartItems } = useCart(); // Obtenir cartItems et setCartItems depuis le contexte
  const { id } = useParams<{ id: string }>();

  const deleteFromCart = async (gameId) => {
    try {
      await axios.post(
        'http://localhost:8080/api/order/remove',
        { 'game_id': gameId },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
        }
      );
      // Mettre à jour cartItems après la suppression réussie
      const updatedCartItems = cartItems.filter((game) => game.id !== gameId);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error(
        'Erreur lors de la suppression du jeu du panier:',
        error.response ? error.response.data : error.message
      );
    }
  };

  const deleteAllItems = async () => {
    try {
      await axios.post(
        'http://localhost:8080/api/order/clear',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
        }
      );
      setCartItems([]); // Mettre à jour le panier pour le vider
    } catch (error) {
      console.error(
        'Erreur lors de la suppression de tous les articles du panier:',
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    // Vous pouvez effectuer des actions supplémentaires après la suppression d'un article si nécessaire
    console.log('Panier mis à jour après suppression :', cartItems);
  }, [cartItems]); // useEffect s'exécute à chaque changement de cartItems


  return (
    <div className="bg-blue-custom-200 min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* En-tête du panier */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 py-5 px-6 flex flex-col md:flex-row md:items-center md:justify-between text-white">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Mon Panier</h1>
        </div>
        {/* Liste des articles */}
        <ul className="divide-y divide-gray-200">
          {cartItems.map((game) => (
            <li key={game.id} className="flex flex-col md:flex-row items-center p-4 md:p-6 space-y-4 md:space-y-0 md:space-x-4 border-b border-gray-200">
              <img
                src={game.picture}
                alt={game.name}
                className="w-24 h-24 object-cover rounded-xl shadow-md"
              />
              <div className="flex-1">
                <h2 className="text-base md:text-lg font-semibold text-gray-800">{game.name}</h2>
                <p className="text-sm md:text-gray-600">1 x {game.price}€</p>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                {/* Boutons pour gérer la quantité */}
                <button className="bg-gray-200 p-1 md:p-2 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                  <img
                    src="/src/assets/images/less-circle.svg"
                    alt="Diminuer la quantité"
                    className="w-4 h-4"
                  />
                </button>
                <span className="text-sm md:text-lg font-bold text-gray-800">1</span>
                <button className="bg-gray-200 p-1 md:p-2 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                  <img
                    src="/src/assets/images/plus-circle.svg"
                    alt="Augmenter la quantité"
                    className="w-4 h-4"
                  />
                </button>
              </div>
              {/* Bouton de suppression */}
              <div className="flex items-center space-x-2 md:space-x-4">
                <p className="text-sm md:text-lg font-bold text-gray-800">{game.price}€</p>
                <button 
                  onClick={() => deleteFromCart(game.id)}
                  className="bg-red-600 p-1 md:p-2 rounded-full text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                >
                  <img
                    src="/src/assets/images/trash.svg"
                    alt="Supprimer l'article"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
        {/* Total du panier */}
        <div className="bg-gray-50 py-5 px-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-200">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">Total</h2>
          <p className="text-lg md:text-xl font-bold text-gray-800">
            {cartItems.reduce((total, game) => total + game.price, 0)}€
          </p>
        </div>
        {/* Actions du panier */}
        <div className="py-6 px-6 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:justify-between">
          <button onClick={() => deleteAllItems()} className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transform transition-transform duration-300">
            Tout Supprimer
          </button>
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