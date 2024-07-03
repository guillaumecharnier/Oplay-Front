import { useState } from 'react';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Connexion from '../Connexion/Connexion';




function App() {
  const [isModal, setModal] = useState(false);

  const openModal = () =>{
    setModal(true);
    console.log('modal visible');
  }
  const closeModal = () =>{
    setModal(false);
    console.log('modal visible');
  }

  return (
    <div>
      <Header isModal={isModal} openModal={openModal} closeModal={closeModal}  />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;