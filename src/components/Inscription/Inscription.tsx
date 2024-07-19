import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function Inscription() {
  
  const { token } = useAuth();
  const [erreur, setErreur] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // getting the form
    const form = event.currentTarget;

    // creating formData
    const formData = new FormData(form);

    // getting the data in get of the dataForm with name names of inputs
    const email = formData.get("email");
    const motdepasse = formData.get("motdepasse");
    const prenom = formData.get("prenom");
    const nom = formData.get("nom");
    const pseudo = formData.get("pseudo");

    if (!email) {
      setErreur('Veuillez entrer un email');
      return;
    }

    const motDePasseRegex = (motdepasse) => {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(motdepasse);
    };
    // this regex send us true or false, depending on that the password should pass or not
    if (!motDePasseRegex(motdepasse)) {
      setErreur('Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial');
      return;
    }
    if (!prenom) {
      setErreur('Veuillez entrer un prénom');
      return;
    }
    if (!nom) {
      setErreur('Veuillez entrer un nom');
      return;
    }
    if (!pseudo) {
      setErreur('Veuillez entrer un pseudo');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/public/api/register', {
        email: email,
        password: motdepasse,
        firstname: prenom,
        lastname: nom,
        nickname: pseudo
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      navigate('/');
    } catch (error) {
      console.error('pas fonctionné');
    }
  };

  return (
    <div className="bg-blue-custom-200 min-h-screen flex flex-col items-center justify-center p-4 pt-[6rem]">
      {/* Logo et Title */}
      <div className="absolute top-4 left-4 flex items-center">
        <Link to="/">
          <img
            src="/src/assets/images/gamepad.svg"
            alt="Logo"
            className="w-10 h-10"
          />
        </Link>
        <Link to="/">
            <h1 className="text-2xl text-white ml-2">O'Play</h1>
        </Link>
      </div>


    
      {/* Inscription form  */}
      <form className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center text-black-custom-800">Inscription</h2>

        {/* Email */}
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border rounded-3xl shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
          </label>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-9" htmlFor="motdepasse">
          <input
            type="motdepasse"
            id="motdepasse"
            name="motdepasse"
            className="w-full px-4 py-3 border rounded-3xl shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Mot de Passe"
          />
          </label>
        </div>

        {/* Firstname */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-9" htmlFor="prenom">
          <input
            type="text"
            id="prenom"
            name="prenom"
            className="w-full px-4 py-3 border rounded-3xl shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Prénom"
          />
          </label>
        </div>

        {/* Lastname */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-9" htmlFor="nom">
          <input
            type="text"
            id="nom"
            name="nom"
            className="w-full px-4 py-3 border rounded-3xl shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nom"
          />
          </label>
        </div>

        {/* Nickname */}
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-9" htmlFor="pseudo">
        <input
            type="text"
            id="pseudo"
            name="pseudo"
            className="w-full px-4 py-3 border rounded-3xl shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Pseudo"
          />
          </label>
        </div>

        {/* Sending button */}
        <button
          type="submit"
          className="w-full bg-blue-custom-500 hover:bg-blue-custom-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Envoyer
        </button>
        {erreur && <p className="text-red-500 mt-2">{erreur}</p>}

        {/* Redirection link */}
        <div className="mt-4 text-center text-gray-600">
          <p>Déjà un compte ? <Link to="/connexion" className="text-black hover:text-blue-custom-200">Se connecter</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Inscription;