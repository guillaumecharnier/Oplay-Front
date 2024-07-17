// App.tsx
import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { CategoryData, GameData, TagData } from '../../assets/type';
import { ThemeProvider } from '../../context/ThemeContext';
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
import PageJeu from '../PageJeu/PageJeu';
import JeuxPersonnalise from '../Page/jeuxPersonnalise';
import ModalProfil from '../ModalProfil/ModalProfil';
import Confirmation from '../Confirmation/Confirmation';
import TestTheme from '../TestPersonnalise/TestTheme';
import TestCategory from '../TestPersonnalise/TestCategory';
import TestTag from '../TestPersonnalise/TestTag';
import SearchResults from '../SearchResults/SearchResults';
import CategoryGamesPage from '../CategoryGamesPage/CategoryGamesPage';
import Notification from '../Notification/Notification';
import CustomSelection from '../HomePage/CustomSelection';


function App() {
  const [gameData, setGameData] = useState<GameData[]>([]);
  const [tagData, setTagData] = useState<TagData[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [isModal, setModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [notificationMessage, setNotificationMessage] = useState('');

  const { token } = useAuth();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);


  const fetchGameData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/game', {
        headers: { 'Content-Type': 'application/json' },
      });
      setGameData(response.data);
      // console.log(response.data);
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

  useEffect(() => {
    fetchTagData();
    fetchGameData();
  }, []);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div>
      {location.pathname !== '/connexion' && location.pathname !== '/inscription' && <Header gameData={gameData} isModal={isModal} openModal={openModal} closeModal={closeModal} />}
      <Routes>
        <Route path="/" element={<HomePage categoryData={categoryData} gameData={gameData} />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/*" element={<Erreur />} />
        <Route path="/profil/edit" element={<Edit />} />
        <Route path="/parametre" element={<Parametre />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/selection-perso" element={<CustomSelection />} />
        <Route path="/derniere-sortie" element={<NextRelease gameData={[]} />} />
        <Route path="/derniere-ajout" element={<LastAdditions gameData={gameData} />} />
        <Route path="/jeu/:id" element={<PageJeu gameData={gameData} />} />
        {/* <Route path="/jeux-personnalise" element={<JeuxPersonnalise />} /> */}
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/profil/" element={<Profil />} />
        <Route path="/search/:name" element={<SearchResults gameData={gameData} />} />
        <Route path="/test-personnalite" element={<TestTheme />} />
        <Route path="/test-personnalite/Categories" element={<TestCategory />} />
        <Route path="/test-personnalite/Tags" element={<TestTag tagData={tagData} />} />
        <Route path="/categorie/:id" element={<CategoryGamesPage gameData={gameData} />} />
      </Routes>
      {location.pathname !== '/connexion' && location.pathname !== '/inscription' && <Footer />}

      {isModal && <ModalProfil closeModal={closeModal} />}
      {notificationMessage && <Notification message={notificationMessage} onClose={function (): void {
        throw new Error('Function not implemented.');
      } } />} {/* Affichage de la notification */}
    </div>
  );
}

export default App;
