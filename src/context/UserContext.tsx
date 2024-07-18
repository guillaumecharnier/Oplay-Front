import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserData, GameData } from '../assets/type';

interface UserContextType {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
  userCategory: any;
  userTag: any;
  triggerFetchUserData: () => void;
  setFilteredGames: React.Dispatch<React.SetStateAction<GameData[]>>;
  filteredGames: GameData[];
  fetchUserData: () => Promise<void>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  userCategory: null,
  userTag: null,
  triggerFetchUserData: () => {},
  setFilteredGames: () => {},
  filteredGames: [],
  fetchUserData: async () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [userCategory, setUserCategory] = useState<any>(null);
  const [userTag, setUserTag] = useState<any>(null);
  const [token, setToken] = useState<string>(() => localStorage.getItem('jwtToken') || '');
  const [fetchTrigger, setFetchTrigger] = useState<boolean>(false);
  const [gameData, setGameData] = useState<GameData[]>([]);
  const [filteredGames, setFilteredGames] = useState<GameData[]>([]);

  const fetchGameData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/game', {
        headers: { 'Content-Type': 'application/json' },
      });
      setGameData(response.data);
    } catch (error) {
      console.error('Error fetching game data:', error);
    }
  };

  const fetchUserData = async () => {
    try {
      const newToken = localStorage.getItem('jwtToken');
      const response = await axios.get(`http://localhost:8080/api/user/detail`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newToken}`,
        },
      });

      setUser(response.data);
      setUserCategory(response.data.selectedCategory);
      setUserTag(response.data.preferedTag);
      // console.log('User data fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken) {
      setToken(storedToken);
      fetchUserData();
      fetchGameData();
    }
  }, []);

  useEffect(() => {
    if (fetchTrigger) {
      fetchUserData();
      setFetchTrigger(false);
    }
  }, [fetchTrigger, token]); // Ajoutez token ici pour déclencher fetchUserData lorsqu'il change

  return (
    <UserContext.Provider value={{ user, setUser, fetchUserData, userCategory, userTag, triggerFetchUserData: () => setFetchTrigger(true), setFilteredGames, filteredGames }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => useContext(UserContext);