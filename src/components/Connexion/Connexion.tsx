import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Connexion: React.FC = () => {
  const { token } = useAuth();
  const [error, setError] = useState<string | null>(null);
  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        console.log("Connexion réussie", result);
        // login(result.token);
        // setLog(true);
        // Redirection ou autre action en cas de succès
        <Navigate to="/"/>;
      } else {
        console.log("Échec de la connexion", result);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }

    // Affichage des valeurs pour le débogage
    console.log("Email saisi :", email);
    console.log("Mot de passe saisi :", password);
  }
// console.log(localStorage.getItem('jwtToken'));
    return (
    <div className="bg-blue-custom-200 text-white min-h-screen flex flex-col items-center py-28">
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
         <h2 className="font-bold">Connexion</h2>
        <div className="flex flex-row w-56 py-10 justify-between">
            <Link to=""><img src="/src/assets/images/gmail-nouveau.svg" alt="Gmail" /></Link>
            <Link to=""><img src="/src/assets/images/discorde.svg" alt="Discord" /></Link>
            <Link to=""><img src="/src/assets/images/facebook-nouveau.svg" alt="Facebook" /></Link>
        </div>
        <span className="font-bold">ou</span>
        <form className="flex flex-col items-center py-10 " onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" placeholder="Email" className="pl-4 rounded-full mb-10 w-80 text-black" />
            <input type="password" name="password" id="password" placeholder="Mot de passe" className="pl-4 rounded-full mb-10 w-80 text-black"/>
            <button type="submit" className="w-40 h-10 rounded-full font-bold bg-slate-500">Se connecter</button>
        </form>
        <div className="w-80 flex justify-between">
            <Link to="/inscription">S'inscrire</Link>
            <Link to="">Mot de passe oublié ?</Link>
        </div>
    </div>
    );
  }
  
  export default Connexion;

  // if ('success' === r.message) {
  //   localStorage.setItem('user', JSON.stringify({ email, token: r.token }))
  //   props.setLoggedIn(true)
  //   props.setEmail(email)
  //   navigate('/')
  // } else {
  //   window.alert('Wrong email or password')
  // }