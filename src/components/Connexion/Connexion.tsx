import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { UserData } from '../../assets/type';
import { JwtPayload, jwtDecode } from "jwt-decode";  // Corrigez ici l'importation
import axios from "axios";

const Connexion: React.FC = () => {
  const { token, login, logout, setToken } = useAuth();
  const [error, setError] = useState<string | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    const fetchToken = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/login_check', {
          username: email,
          password: password
        });
        const newToken = response.data.token;
        setToken(newToken);
        localStorage.setItem('jwtToken', newToken);

        // Décodez le token pour obtenir les informations utilisateur
        const decodedToken = jwtDecode<JwtPayload & UserData>(newToken);
        // console.log('Decoded Token:', decodedToken);
        setUserData(decodedToken);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        fetchToken();  // Appelez fetchToken ici pour obtenir et déchiffrer le token
        login(token, true);
        navigate('/');
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setError("Erreur lors de la connexion. Veuillez réessayer plus tard.");
    }
  };

  useEffect(() => {
    if (userData) {

      console.log('User Data:', userData);
      console.log(userData.roles);
    }
  }, [userData]);

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
      <form className="flex flex-col items-center py-10" onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="Email" className="pl-4 rounded-full mb-10 w-80 text-black" />
        <input type="password" name="password" id="password" placeholder="Mot de passe" className="pl-4 rounded-full mb-10 w-80 text-black" />
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