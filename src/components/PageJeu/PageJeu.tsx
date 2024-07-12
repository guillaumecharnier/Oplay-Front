import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

import { useTheme } from '../Theme/ThemeContext';

interface Game {
  id: number;
  name: string;
  description: string;
  releaseDate: string;
  editor: string;
  picture: string;
  price: number;
}

interface PageJeuProps {
  gameData: Game[];
}

function PageJeu({ gameData }: PageJeuProps) {
  const { token } = useAuth();
  const { addToCartContext } = useCart();
  const { theme } = useTheme();

  const { id } = useParams<{ id: string }>();
  const game = gameData.find((game) => game.id === parseInt(id));

  // if (!game) return <p>Jeu non trouvé</p>;
  // loading ? 

  const gameId = game.id;

  const addToCart = async (gameId: number) => {
    try {
      await axios.post(
        'http://localhost:8080/api/order/add',
        {'game_id': gameId},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
        }
      );
      console.log('envoyé');
      addToCartContext(game);
    } catch (error) {
      console.error(
        'Erreur lors de l\'ajout du jeu au panier:',
        error.response ? error.response.data : error.message
      );
      console.log('raté');
    }
  };

  return (
    <div>
      <div className={`min-h-screen ${theme} min-h-screen flex flex-col items-center justify-center py-12 px-6 `}>
        <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
          <img
            src={game.picture}
            alt={game.name}
            className="w-full md:w-1/2 h-auto object-cover"
          />
          <div className="p-8 md:p-12 flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-3xl font-extrabold text-gray-900 mb-4">{game.name}</h1>
              <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
                {game.description}
              </p>
              <p className="text-gray-700 text-lg md:text-xl mb-6">
                <strong>Date de sortie:</strong> {game.releaseDate}
              </p>
              <p className="text-gray-700 text-lg md:text-xl mb-6">
                <strong>Genre:</strong> Action / Aventure 
              </p>
              <p className="text-gray-700 text-lg md:text-xl mb-6">
                <strong>Développeur:</strong> {game.editor}
              </p>
              <p className="text-gray-700 text-lg md:text-xl mb-6">
                <strong>Plateformes:</strong> PC, Xbox 360, PlayStation 3 
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between mt-8">
              <span className="text-3xl md:text-4xl font-bold text-gray-900">{game.price}€</span>
              <button 
                onClick={() => addToCart(gameId)}
                className="bg-blue-500 text-white px-5 py-3 rounded-lg text-lg md:text-xl hover:bg-blue-600 transition duration-300 mt-4 md:mt-0"
              >
                Ajouter au Panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageJeu;


