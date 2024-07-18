import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "../src/context/AuthContext";

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

import './styles/index.css';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AuthProvider>
      <UserProvider> 
        <CartProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </CartProvider>
      </UserProvider>
    </AuthProvider>
  </BrowserRouter>
);