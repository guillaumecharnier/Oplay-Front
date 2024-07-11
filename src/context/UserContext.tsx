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
  fetchUserData: (userId: number) => void;
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
    fetchUserData: () => {},
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
        const decodedToken = jwtDecode<MyJwtPayload>(storedToken);

        const userId = decodedToken.id;
        fetchUserData(userId);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  };

  const fetchUserData = async (userId: number) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`,
        },
      });
      setUser([response.data]);
    //   console.log('User', response.data);s
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    searchUser();
  }, [cartItems]);

  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};