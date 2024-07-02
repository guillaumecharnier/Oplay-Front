import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Imodal from '../../types/modal';

interface User {
  isModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

function App() {
  const [isModal, setModal] = useState<boolean>(false);

  const openModal = () => {
    setModal(true);
    console.log('clicked');
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="App">
      <Header isModal={isModal} closeModal={closeModal} openModal={openModal} />
      {/* <HomePage /> */}
      <Footer />
    </div>
  );
}

export default App;
