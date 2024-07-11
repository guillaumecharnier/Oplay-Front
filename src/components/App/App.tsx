import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { CategoryData, GameData, TagData } from '../../assets/type';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Connexion from '../Connexion/Connexion';
import Inscription from '../Inscription/Inscription';
import Erreur from '../Erreur/Erreur';
import Profil from '../Profil/Profil';
import Edit from '../Edit/Edit';
import Parametre from '../Parametre/Parametre';
import Panier from '../Panier/Panier';
import LastAdditions from '../HomePage/LastAdditions';
import NextRelease from '../HomePage/NextRelease';
import axios from 'axios';
import PageJeu from '../PageJeu/PageJeu';
import JeuxPersonnalise from '../Page/jeuxPersonnalise';
import ModalProfil from '../ModalProfil/ModalProfil';
import { ThemeProvider } from '../Theme/ThemeContext';

function App() {
  const [gameData, setGameData] = useState<GameData[]>([]);
  const [tagData, setTagData] = useState<TagData[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [isModal, setModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const { token } = useAuth();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme: string) => {
    console.log(`Theme changed to: ${newTheme}`);
    setTheme(newTheme);
  };

  const fetchGameData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/game', {
        headers: { 'Content-Type': 'application/json' },
      });
      setGameData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchTagData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/tag', {
        headers: { 'Content-Type': 'application/json' },
      });
      setTagData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/category', {
        headers: { 'Content-Type': 'application/json' },
      });
      setCategoryData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchTagData();
    fetchCategoryData();
    fetchGameData();
  }, []);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <ThemeProvider>
      <div>
        {location.pathname !== '/connexion' && location.pathname !== '/inscription' && (
          <Header isModal={isModal} openModal={openModal} closeModal={closeModal} />
        )}
        <Routes>
          <Route path="/" element={<HomePage categoryData={categoryData} gameData={gameData} />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/*" element={<Erreur />} />
          <Route path="/profil/" element={<Profil />} />
          <Route path="/profil/edit" element={<Edit />} />
          <Route path="/parametre" element={<Parametre />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/derniere-sortie" element={<NextRelease gameData={[]} />} />
          <Route path="/derniere-ajout" element={<LastAdditions gameData={undefined} />} />
          <Route path="/jeu/:id" element={<PageJeu gameData={gameData} />} />
          <Route path="/jeux-personnalise" element={<JeuxPersonnalise />} />
        </Routes>
        {location.pathname !== '/connexion' && location.pathname !== '/inscription' && <Footer />}
        {isModal && <ModalProfil closeModal={closeModal} onThemeChange={toggleTheme} />}
      </div>
    </ThemeProvider>
  );
}

export default App;

