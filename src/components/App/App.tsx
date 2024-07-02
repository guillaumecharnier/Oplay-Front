import { useState } from 'react';
import HomePage from '../HomePage/HomePage';
import Header from '../../assets/images/Header';
import Footer from '../Footer/Footer';

<<<<<<< HEAD
=======


>>>>>>> julien
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
<<<<<<< HEAD
      <Header />

=======
      <Header isModal={isModal} openModal={openModal} closeModal={closeModal}  />
>>>>>>> julien
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
