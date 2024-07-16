import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Interface pour les données d'un jeu
interface Game {
  id: number;
  name: string;
  price: number;
  picture: string;
}

// Interface pour les données d'une commande de jeu
interface GameOrder {
  id: number;
  quantity: number;
  totalPrice: number;
  game: Game;
}

// Interface pour les données d'une commande
interface Order {
  id: number;
  createdAt: string;
  total: number;
  status: string;
  gameOrders: GameOrder[];
}

// Interface pour les données d'un utilisateur
interface User {
  id: number;
  email: string;
  firstname?: string;
  lastname?: string;
  nickname: string;
  picture: string;
  games: Game[];
  userGameKeys: any[]; // Mettez à jour le type approprié si besoin
  orders: Order[];
}

interface UserContextType {
  user: User | null; // Utilisateur unique au lieu d'un tableau
  setUser: React.Dispatch<React.SetStateAction<User | null>>; // Définir la fonction setUser
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>(() => localStorage.getItem('jwtToken') || '');

  const fetchUserData = async () => {
    try {
      const response = await axios.get<User>(`http://localhost:8080/api/user/detail`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken) {
      setToken(storedToken);
      fetchUserData();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => useContext(UserContext);
