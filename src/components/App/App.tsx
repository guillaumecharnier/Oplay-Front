import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import { GameData } from '../../assets/type';
import PageDeJjeu from '../Page de jeu/PageDeJeu'
import React from 'react';
import { PluginContainer } from 'vite';
import GamePage from '../Page de jeu/PageDeJeu';

function App() {
  const [isModal, setModal] = useState(false);

  const openModal = () =>{
    setModal(true);
  }
  const closeModal = () =>{
    setModal(false); 
  }
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/connexion' && location.pathname!=='/inscription' && <Header isModal={isModal} openModal={openModal} closeModal={closeModal}  />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/*" element={<Erreur />} />
        <Route path="/profil/" element={<Profil />} />
        {/* profil/:id */}
        <Route path="/profil/edit" element={<Edit />} />
        <Route path="/parametre" element={<Parametre />} />
        <Route path="/panier" element={<Panier/>} />
        <Route path="/derniere-sortie" element={<NextRelease />} />
        <Route path="/derniere-ajout" element={<LastAdditions />} />
        {/* <Route path="/jeu/:id" element={<Jeu />} /> */}

        {/* <Route path="/categories" element={<Category />} /> */}
        {/* <Route path="/categorie/:id" element={<SinglePostPage />} /> */}
       {/* 
       
        <Route path="/paiement" element={<SinglePostPage />} />

        <Route path="/jeu/:id" element={<GamePage />} />

        {/* <Route path="/paiement" element={<SinglePostPage />} />
        <Route path="/confirmation" element={<SinglePostPage />} />
        <Route path="/profil/historique-d-achat" element={<SinglePostPage />} />
        <Route path="/test-personnalite" element={<SinglePostPage />} />
        <Route path="/jeux-personnalise" element={<SinglePostPage />} />

     
  

        <Route path="/derniere-sortie" element={<SinglePostPage />} />
        <Route path="/derniere-ajout" element={<SinglePostPage />} />
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
