import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

interface Game {
  id: number;
  name: string;
  description: string;
  releaseDate: string;
  editor: string;
  picture: string;
  price: number;
}

const CategoryGamesPage: React.FC<{ gameData: Game[] }> = ({ gameData }) => {
  const { token } = useAuth();
  const { addToCartContext } = useCart();
  const { id } = useParams<{ id: string }>();
  const [games, setGames] = useState<Game[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');

  useEffect(() => {
    const fetchCategoryGames = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/category/${id}/games`);
        setGames(response.data); // Mettre à jour l'état avec les jeux récupérés depuis l'API
        setCategoryName(response.data.length > 0 ? response.data[0].categories[0] : ''); // Récupérer le nom de la première catégorie des jeux
      } catch (error) {
        console.error('Error fetching category games:', error);
      }
    };

    fetchCategoryGames();
  }, [id]);

  const addToCart = async (gameId: number) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/order/add',
        { game_id: gameId },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      addToCartContext(games.find((game) => game.id === gameId)!);
      console.log('Game added to cart successfully.', response.data);
    } catch (error) {
      console.error('Error adding game to cart:', error);
    }
  };

  // Fonction pour diviser les jeux en lignes de quatre
  const chunkGames = (array: Game[], size: number) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Les jeux de la catégorie "{categoryName}"</h1>
        {chunkGames(games, 4).map((row, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {row.map((game) => (
              <div key={game.id} className="flex flex-col bg-white shadow-xl rounded-lg overflow-hidden mb-8">
                <img
                  src={game.picture}
                  alt={game.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{game.name}</h2>
                  <p className="text-gray-700 text-base mb-4 leading-snug">{game.description.length > 150 ? `${game.description.slice(0, 150)}...` : game.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{game.price}€</span>
                    <button
                      onClick={() => addToCart(game.id)}
                      className="bg-blue-500 text-white px-5 py-2 rounded-lg text-base hover:bg-blue-600 transition duration-300 hover:scale-105"
                    >
                      Ajouter au Panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGamesPage;
