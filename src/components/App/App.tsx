import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { CategoryData, GameData, TagData, UserData } from '../../assets/type';
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
// import DernierAjout from '../DernierAjout/DernierAjout';
import Confirmation from '../Confirmation/Confirmation';
import React from 'react';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  const [gameData, setGameData] = useState<GameData[]>([]);
  const [tagData, setTagData] = useState<TagData[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [isModal, setModal] = useState(false);

  const { token } = useAuth();
  const location = useLocation();

  // https://oplay.guillaumecharnier-server.eddi.cloud/api/user/browse

  const fetchGameData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/game', {
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
          },
        });
        setGameData(response.data);
        // console.log('Game',response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  const fetchTagData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/tag', {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`,
        },
      });
      setTagData(response.data);
      // console.log('Tag', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
  }
  };

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/category', {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`,
        },
      });
      setCategoryData(response.data);
      // console.log('category', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
  }
};

  useEffect(() => {
    fetchTagData();
    fetchCategoryData();
    fetchGameData();
  },[]);
  
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div>
      {location.pathname !== '/connexion' && location.pathname!=='/inscription' && <Header gameData={gameData} isModal={isModal} openModal={openModal} closeModal={closeModal}  />}
      <Routes>
        <Route path="/" element={<HomePage categoryData={categoryData} gameData={gameData} />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/*" element={<Erreur />} />
        <Route path="/profil/edit" element={<Edit />} />
        <Route path="/parametre" element={<Parametre />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/derniere-sortie" element={<NextRelease gameData={[]} />} />
        <Route path="/derniere-ajout" element={<LastAdditions gameData={gameData} />} />
        <Route path="/jeu/:id" element={<PageJeu gameData={gameData} />} />
        <Route path="/jeux-personnalise" element={<JeuxPersonnalise />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/profil/" element={<Profil />} />
        <Route path="/search/:name" element={<SearchResults gameData={gameData} />} />
        {/* profil/:id */}
        
        {/* <Route path="/derniere-ajout" element={<DernierAjout />} /> */}
        {/* // TODO voir le typage undefined  */}

        {/* <Route path="/categories" element={<Category />} /> */}
        {/* <Route path="/categorie/:id" element={<SinglePostPage />} /> */}
       {/* 
        <Route path="/paiement" element={<SinglePostPage />} />
        {/* <Route path="/paiement" element={<SinglePostPage />} />
        <Route path="/profil/historique-d-achat" element={<SinglePostPage />} />
        <Route path="/test-personnalite" element={<SinglePostPage />} />
        <Route path="/categories" element={<SinglePostPage />} />
        <Route path="/categorie/:id" element={<SinglePostPage />} />
        <Route path="/conditions-generales" element={<SinglePostPage />} />
        <Route path="/mentions-légales" element={<SinglePostPage />} />
        <Route path="/supprimer" element={<SinglePostPage />} />
        <Route path="/backoffice" element={<SinglePostPage />} /> */}
      </Routes>

      {location.pathname !== '/connexion' && location.pathname!=='/inscription' && <Footer/>}
    </div>
  );
}

export default App;