import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "../src/context/AuthContext";

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
      <AuthProvider>

    <App />
    </AuthProvider>

  </BrowserRouter>
);