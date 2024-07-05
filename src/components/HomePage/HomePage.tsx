import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomSelection from './CustomSelection';
import LastAdditions from './LastAdditions';
import Categories from './Categories';
import NextRelease from './NextRelease';
import { CategoryData, GameData, TagData, UserData } from '../../assets/type';
import GamePage from '../Page de jeu/PageDeJeu';

function HomePage() {

  const [token, setToken] = useState('');
  const [userData, setUserData] = useState<UserData[]>([]);
  const [tagData, setTagData] = useState<TagData[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [gameData, setGameData] = useState<GameData[]>([]);

  const fetchToken = async () => {
    try {
      const response = await axios.post('http://192.168.91.157:8080/api/login_check', {
        username: 'admin@oplay.fr',
        password: 'admin'
      });
      setToken(response.data.token);
      // console.log(response.data.token);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://192.168.91.157:8080/api/user/browse', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      setUserData([response.data]);
      // console.log('user', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchTagData = async () => {
    try {
      const response = await axios.get('http://192.168.91.157:8080/api/tag/browse', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      setTagData(response.data);
      // console.log('Tag', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get('http://192.168.91.157:8080/api/category/browse', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      setCategoryData(response.data);
      // console.log('category', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchGameData = async () => {
    try {
      const response = await axios.get('http://192.168.91.157:8080/api/game/browse', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      setGameData(response.data);
      console.log('Game',response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // https://oplay.guillaumecharnier-server.eddi.cloud/api/user/browse

  useEffect(() => {
    fetchToken();
  }, []);
  //waiting the token, when we get it we can land the second fetch to catch the set of interesting data
  useEffect(() => {
    if (token) {
      fetchUserData();
      fetchTagData();
      fetchCategoryData();
      fetchGameData();
    }
  }, [token]);

  return (

    <div className="bg-blue-custom-200 min-h-screen flex flex-col items-center justify-start overflow-x-hidden">

      {/* Image de couverture */}
      <div className="relative w-full mb-36 flex justify-center">
        <img
          src="/src/assets/images/Last-Of-Us.jpeg"
          alt="The Last of Us"
          className="w-full max-h-80 object-cover shadow-lg"
        />
        <div className="absolute top-4 md:left-6 lg:left-8">
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            The Last Of Us Part I - $39.99
          </p>
        </div>
      </div>

      {/* Section CustomSelection */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <CustomSelection />
      </div>

      {/* Section LastAdditions */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <LastAdditions gameData={gameData} />
      </div>

      {/* Section NextRelease */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <NextRelease gameData={gameData} />
      </div>

      {/* Section Categories */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <Categories categoryData={categoryData} />
      </div>

      {/* Section Page de jeu */}
      <div className="w-full max-w-screen-lg mb-16 md:mb-24 lg:mb-28 xl:mb-32">
        <GamePage />
      </div>
    </div>
  );
}



export default HomePage;




