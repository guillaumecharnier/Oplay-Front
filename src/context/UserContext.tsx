import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import  { jwtDecode, JwtPayload } from 'jwt-decode';
import { useCart } from './CartContext';

// Définir l'interface des données utilisateur
interface User {
  purchasedOrder: any[];
  id: number;
  email: string;
  // Ajoutez d'autres champs nécessaires ici
}

interface UserContextType {
  user: User[];
}

interface MyJwtPayload extends JwtPayload {
  roles: string[]; // Définissez le type de votre propriété 'roles'
  username: string; // Ajoutez d'autres propriétés si nécessaire
  iat: number;
  exp: number;
  id: number;
}

const UserContext = createContext<UserContextType>({
    user: [],
  });
  

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState<User[]>([]);
  const [token, setToken] = useState<string>(() => localStorage.getItem('jwtToken') || '');
  const { cartItems } = useCart();
  
  const searchUser = () => {
    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken) {
      setToken(storedToken);

      try {
        fetchUserData();
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      setUser([response.data]);
      // console.log('User', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // http://localhost:8080/api/user/detail
  useEffect(() => {
    searchUser();
  }, [cartItems]);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};