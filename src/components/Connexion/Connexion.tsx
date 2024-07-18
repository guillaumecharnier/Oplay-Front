import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";

import { UserData } from '../../assets/type';
import { JwtPayload, jwtDecode } from "jwt-decode";
import axios from "axios";
//import { fetchUserData } from "../../context/UserContext";

const Connexion: React.FC = () => {
  const { login, setToken } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const { fetchUserData } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/login_check', {
        username: email,
        password: password
      });

      if (response.status === 200) {
        const newToken = response.data.token;
        setToken(newToken);
        localStorage.setItem('jwtToken', newToken);

        const decodedToken = jwtDecode<JwtPayload & UserData>(newToken);
        setUserData(decodedToken);
        await fetchUserData();
        // Utilisez newToken directement ici
        login(newToken, true);
        navigate('/');
      } else {
        setError("Échec de la connexion. Veuillez réessayer.");
      }
    } catch (error) {
      console.error('Error fetching token:', error);
      setError("Erreur lors de la connexion.");
    }
  };

  useEffect(() => {
    if (userData) {
      console.log('User Data:', userData);
      // console.log(userData.roles);
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
      {error && <div className="text-red-500 mb-4">{error}</div>}
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
  )
}

export default Connexion;