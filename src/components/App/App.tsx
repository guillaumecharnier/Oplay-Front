import React, { useState } from 'react';
import Header from '../Header/Header'; // Assurez-vous que le chemin est correct
import Footer from '../Footer/Footer';
import AppContent from '../AppContent/AppContent'; // Assurez-vous que ce fichier existe

function App() {
  const [isModal, setModal] = useState(false);

  return (
    <div>
      <Header />
      <AppContent />
      <Footer />
    </div>
  );
}

export default App;
