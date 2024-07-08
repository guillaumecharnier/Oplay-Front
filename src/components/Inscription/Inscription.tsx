import React from "react";
import { Link, redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Inscription({ token }) {

  const [erreur, setErreur] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // on empeche le rechargement de la page
    event.preventDefault();

    // on recupère le form
    const form = event.currentTarget;

    // on créé un formData
    const formData = new FormData(form);

    // on récupère les données grace à la méthode "get" du formdata et au "name" de l'input
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

    // on peut ensuite les utiliser
    // console.log(email, motdepasse, prenom, nom, pseudo); 
    try {
      const response = await axios.post('http://192.168.91.157:8080/api/user/register', {
        email: email,
        password: motdepasse,
        firstname: prenom,
        lastname: nom,
        username: pseudo
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      // TODO redirection vers page de connexion ? 
      // history.push('/connexion');
    } catch (error) {
      console.error('pas fonctionné');
    }
  };


// console.log(FormData);
  return (
    <div className="bg-blue-custom-200 min-h-screen flex flex-col items-center justify-center p-4 pt-[6rem]">
      {/* Logo et Titre */}
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


    
      {/* Formulaire d'inscription */}
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

        {/* Mot de Passe */}
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

        {/* Prénom */}
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

        {/* Nom */}
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

        {/* Pseudo */}
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

        {/* Bouton Envoyer */}
        <button
          type="submit"
          className="w-full bg-blue-custom-500 hover:bg-blue-custom-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Envoyer
        </button>
        {erreur && <p className="text-red-500 mt-2">{erreur}</p>}

        {/* Lien de redirection */}
        <div className="mt-4 text-center text-gray-600">
          <p>Déjà un compte ? <Link to="/connexion" className="text-black hover:text-blue-custom-200">Se connecter</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Inscription;