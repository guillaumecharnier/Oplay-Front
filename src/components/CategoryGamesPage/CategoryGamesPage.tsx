import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { getThemeClass } from '../../Utils/themeUtils';
import { useTheme } from '../../context/ThemeContext';

interface Game {
  id: number;
  name: string;
  description: string;
  releaseDate: string;
  editor: string;
  picture: string;
  price: number;
}

interface Category {
  id: number;
  name: string;
  picture: string;
}

const CategoryGamesPage: React.FC<{ gameData: Game[] }> = ({ gameData }) => {
  const { token } = useAuth();
  const { addToCartContext } = useCart();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [games, setGames] = useState<Game[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');
  const { theme } = useTheme();
  const themeClass = getThemeClass(theme);

  useEffect(() => {
    const fetchCategoryGames = async () => {
      try {
        const categoryResponse = await axios.get<Category>(`http://localhost:8080/public/api/category/${id}`);
        setCategoryName(categoryResponse.data.name); // Mettre à jour l'état avec le nom de la catégorie

        const gamesResponse = await axios.get<Game[]>(`http://localhost:8080/public/api/category/${id}/games`);
        setGames(gamesResponse.data); // Mettre à jour l'état avec les jeux récupérés depuis l'API
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
    <div className={`${themeClass} min-h-screen flex flex-col items-center justify-center py-12 px-6`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Les jeux de la catégorie "{categoryName}"
        </h1>
        {chunkGames(games, 4).map((row, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {row.map((game) => (
              <div
                key={game.id}
                className="flex flex-col bg-white shadow-xl rounded-lg overflow-hidden mb-8 transition duration-300 mt-4 md:mt-0 hover:scale-105 cursor-pointer"
                onClick={() => navigate(`/jeu/${game.id}`)}
              >
                <img
                  src={game.picture}
                  alt={game.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{game.name}</h2>
                  <p className="text-gray-700 text-base mb-4 leading-snug">
                    {game.description.length > 150 ? `${game.description.slice(0, 150)}...` : game.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{game.price}€</span>
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
