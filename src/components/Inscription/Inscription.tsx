import React from "react";
import { Link } from "react-router-dom";

function Inscription() {
  return (
    <div className="bg-blue-custom-200 min-h-screen flex flex-col items-center justify-center">
      {/* Logo et Titre */}
      <div className="absolute top-4 left-4 flex items-center">
        <Link to="/">
          <img
            src="src/assets/images/gamepad.svg"
            alt="Logo"
            className="w-10 h-10"
          />
        </Link>
        <h1 className="text-2xl text-white ml-2">O'Play</h1>
      </div>

      {/* Formulaire d'inscription */}
      <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black-custom-800">Inscription</h2>
        
        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Mot de Passe
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prenom">
            Prénom
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            className="w-full px-4 py-3 border rounded-3xl shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nom"
          />
        </div>
        
        {/* Pseudo */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pseudo">
            Pseudo
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
      </form>
    </div>
  );
}

export default Inscription;

