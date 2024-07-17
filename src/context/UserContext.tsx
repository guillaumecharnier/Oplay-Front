import React, { createContext, useState, useContext, useEffect } from 'react';
import { GameData } from '../assets/type';

import axios from 'axios';

interface UserContextType {
  user: null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  userCategory: any;
  UserTag: any;
  triggerFetchUserData: () => void;
  setFilteredGames: React.Dispatch<React.SetStateAction<GameData[]>>
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  userCategory: null,
  UserTag: null,
  triggerFetchUserData: () => {},
  setFilteredGames: () => {},

});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<null>(null);
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
      // console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/detail`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      setUser(response.data);
      setUserCategory(response.data.selectedCategory);
      setUserTag(response.data.preferedTag);
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
  }, [token]);

  useEffect(() => {
    if (fetchTrigger) {
      fetchUserData();
      setFetchTrigger(false);
    }
  }, [fetchTrigger]);

// simple test log
  useEffect(() => {
    if (userCategory) {
      console.log(userCategory);
    }
  }, [user]);

// simple test log
  useEffect(() => {
    if (userTag) {``
      console.log(userTag);
    }
  }, [user]);

  // useEffect(() => {
  //   if (gameData) {
  //     const games = gameData.map((game) => {
  //       console.log(game);
  //     });
  //   }
  // }, [gameData]);

  //userCategory recupere les categories favorite du joueur maintenant il faut chercher dans la liste des jeux qui ont ce tag/categories


  return (
    <UserContext.Provider value={{ user, setUser, userCategory, userTag, triggerFetchUserData: () => setFetchTrigger(true), setFilteredGames }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => useContext(UserContext);




