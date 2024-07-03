import React from "react";
import { Link } from "react-router-dom";

function Inscription() {
  return (
    <div className="bg-blue-custom-200 min-h-screen flex flex-col items-center justify-center p-4">
      {/* Logo et Titre */}
      <div className="absolute top-4 left-4 flex items-center">
        <Link to="/">
          <img
            src="/src/assets/images/gamepad.svg"
            alt="Logo"
            className="w-10 h-10"
          />
        </Link>
        <h1 className="text-2xl text-white ml-2">O'Play</h1>
      </div>

      {/* Formulaire d'inscription */}
      <form className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black-custom-800">Inscription</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border rounded-3xl shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
        </div>

        {/* Mot de Passe */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-9" htmlFor="password">
            
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-3 border rounded-3xl shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Mot de Passe"
          />
        </div>

        {/* Prénom */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-9" htmlFor="prenom">
            
          </label>
          <input
            type="text"
            id="prenom"
            className="w-full px-4 py-3 border rounded-3xl shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Prénom"
          />
        </div>

        {/* Nom */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-9" htmlFor="nom">
            
          </label>
          <input
            type="text"
            id="nom"
            className="w-full px-4 py-3 border rounded-3xl shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nom"
          />
        </div>

        {/* Pseudo */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-9" htmlFor="pseudo">
            
          </label>
          <input
            type="text"
            id="pseudo"
            className="w-full px-4 py-3 border rounded-3xl shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Pseudo"
          />
        </div>

        {/* Bouton Envoyer */}
        <button
          type="submit"
          className="w-full bg-blue-custom-500 hover:bg-blue-custom-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Envoyer
        </button>

        {/* Lien de redirection */}
        <div className="mt-4 text-center text-gray-600">
          <p>Déjà un compte ? <Link to="/connexion" className="text-black hover:text-blue-custom-200">Se connecter</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Inscription;