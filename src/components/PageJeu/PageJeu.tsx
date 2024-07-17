import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import Notification from '../Notification/Notification';
import { useTheme } from '../../context/ThemeContext';
import { getThemeClass } from '../../Utils/themeUtils';

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
  const { theme } = useTheme(); 
  const themeClass = getThemeClass(theme);
  const { addToCartContext } = useCart();
  const { id } = useParams<{ id: string }>();
  const game = gameData.find((game) => game.id === parseInt(id));

  const [showNotification, setShowNotification] = useState(false);

  if (!game) return <p>Jeu non trouvé</p>;

  const addToCart = async (gameId: number) => {
    try {
      await axios.post(
        'http://localhost:8080/api/order/add',
        { 'game_id': gameId },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      addToCartContext(game); // Ajout du jeu au panier contexte

      setShowNotification(true); // Afficher la notification

      // Cacher la notification après quelques secondes
      setTimeout(() => {
        setShowNotification(false);
      }, 3000); // 3 secondes, ajustez selon vos besoins
    } catch (error) {
      console.error('Erreur lors de l\'ajout du jeu au panier:', error);
    }
  };

  return (
    <div>
      <div className={`${themeClass} min-h-screen flex flex-col items-center justify-center py-12 px-6`}>
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
                onClick={() => addToCart(game.id)}
                className="bg-blue-500 text-white px-5 py-3 rounded-lg text-lg md:text-xl hover:bg-blue-600 transition duration-300 mt-4 md:mt-0 hover:scale-105"
              >
                Ajouter au Panier
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Afficher la notification si showNotification est true */}
      {showNotification && (
        <Notification
          message={`"${game.name}" a été ajouté au panier`}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
}

export default PageJeu;
