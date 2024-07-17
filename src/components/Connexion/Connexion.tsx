import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { UserData } from '../../assets/type';
import  { jwtDecode, JwtPayload } from "jwt-decode";
import axios from "axios";

const Connexion: React.FC = () => {
  const { token, login, setToken } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userPrivate, setUserPrivate] = useState<UserData | null>(null);
  const navigate = useNavigate();

  const fetchTokenPublique = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/login_check', {
        username: 'admin@oplay.fr',
        password: 'admin'
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const newToken = response.data.token;
      console.log(newToken);
      localStorage.setItem('jwtTokenPublique', newToken);

      // Décodez le token pour obtenir les informations utilisateur
      const decodedToken = jwtDecode<JwtPayload & UserData>(newToken);
      setUserData(decodedToken);
      console.log(decodedToken);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  useEffect(() => {
    fetchTokenPublique();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

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

      if (response.ok) {
        const result = await response.json();

        const newTokenPrivate = result.data.token;

        console.log(newTokenPrivate);
        setToken(newTokenPrivate);
        localStorage.setItem('jwtTokenPrivate', newTokenPrivate);

        // Décodez le token pour obtenir les informations utilisateur
        const decodedTokenPrivate = jwtDecode<JwtPayload & UserData>(newTokenPrivate);
        setUserPrivate(decodedTokenPrivate);
        console.log(decodedTokenPrivate);

        login(newTokenPrivate, true);
        navigate('/');
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setError("Erreur lors de la connexion. Veuillez réessayer plus tard.");
    }
  };

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
  );
}

export default Connexion;
