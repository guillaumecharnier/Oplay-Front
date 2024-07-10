import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PageJeu({ gameData }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = gameData.find((game) => game.id === parseInt(id));

  if (!game) return <p>Jeu non trouvé</p>;

  const addToCart = async () => {
    try {
      // Assure-toi que l'URL est correcte et accessible
      await axios.post('/api/order/add', { gameId: game.id });
      alert("Jeu ajouté au panier !");
      navigate('/panier');  // Redirige vers le panier après l'ajout
    } catch (error) {
      console.error('Erreur lors de l\'ajout du jeu au panier:', error.response ? error.response.data : error.message)
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="min-h-screen bg-blue-custom-200 flex flex-col items-center justify-center py-12 px-6">
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
              onClick={addToCart}
              className="bg-blue-500 text-white px-5 py-3 rounded-lg text-lg md:text-xl hover:bg-blue-600 transition duration-300 mt-4 md:mt-0"
            >
              Ajouter au Panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageJeu;



