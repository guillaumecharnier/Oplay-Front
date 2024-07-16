import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';

function Profil() {
  const { theme } = useTheme();
  const { user } = useUser();

  if (!user) {
    return <div>Loading...</div>; // Affiche un indicateur de chargement si les données de l'utilisateur ne sont pas encore disponibles
  }

  return (
    <div className={`min-h-screen ${theme} text-white py-16 px-8 flex flex-col items-center`}>
      <div className="w-full max-w-3xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-2xl p-8 relative">
        {/* Boutons d'édition et de paramètres */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <Link to="/profil/edit" className="text-white hover:text-gray-300">
            <img className="w-8" src="/src/assets/images/edit.svg" alt="Éditer le profil" />
          </Link>
          <Link to="/parametre" className="text-white hover:text-gray-300">
            <img className="w-8" src="/src/assets/images/setter.svg" alt="Paramètres" />
          </Link>
        </div>
        {/* Section du profil */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src={user.picture} // Utilisation de l'image de profil de l'utilisateur
              className="w-32 h-32 rounded-full border-4 border-gray-700"
              alt="Photo de profil"
            />
            <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
          </div>
          <div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-red-500">
              {user.nickname}
            </h2>
            <p className="text-lg text-gray-200">{user.email}</p>
            {user.firstname && user.lastname && (
              <p className="text-lg text-gray-200">{user.firstname} {user.lastname}</p>
            )}
          </div>
        </div>

        {/* Affichage des jeux associés */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold">Mes Jeux</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 mt-4"> {/* Ajustez le nombre de colonnes ici selon vos préférences */}
            {user.userGameKeys.map((userGameKey) => (
              <Link key={userGameKey.id} to={`/jeu/${userGameKey.game.id}`}>
                <div className="bg-gray-800 rounded-lg p-4 cursor-pointer transform transition duration-300 hover:scale-105">
                  <img src={userGameKey.game.picture} className="w-full h-40 object-cover rounded-lg mb-2" alt={userGameKey.game.name} />
                  <p className="text-lg font-semibold">{userGameKey.game.name}</p>
                  <p className="text-sm text-gray-400">Prix : {userGameKey.game.price.toFixed(2)} €</p>
                  <p className="text-sm text-gray-400">Clé : {userGameKey.gameKey}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Affichage des commandes achetées */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold">Mes Commandes</h3>
          {user.orders.map((order) => (
            <div key={order.id} className="bg-gray-800 rounded-lg p-4 mt-4 cursor-pointer transform transition duration-300 hover:scale-105">
              <p className="text-lg font-medium">Commande #{order.id}</p>
              <p className="text-sm text-gray-600">Date: {new Date(order.createdAt).toLocaleString()}</p>
              <p className="text-sm text-gray-600">Montant total: ${order.total.toFixed(2)}</p>
              <ul className="mt-2">
                {order.gameOrders.map((gameOrder) => (
                  <li key={gameOrder.id} className="flex items-center justify-between">
                    <img src={gameOrder.game.picture} className="w-12 h-12 object-cover rounded-lg" alt={gameOrder.game.name} />
                    <div className="ml-4">
                      <p className="text-base font-medium">{gameOrder.game.name}</p>
                      <p className="text-sm text-gray-600">Quantité: {gameOrder.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profil;
