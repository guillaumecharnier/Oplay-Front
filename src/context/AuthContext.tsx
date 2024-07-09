
import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';

// Créer le contexte
interface AuthContextType {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>
    isLog: boolean;
    login: (newToken: string, logged: boolean) => void;
    logout: () => void;
}

// Créer le contexte avec un type spécifique
const AuthContext = createContext<AuthContextType>({
    token: '',
    setToken: () => {},
    isLog: (false),
    login: (newToken: string, logged: false) => {},
    logout: () => {}
});

// Fournir le contexte
export const AuthProvider = ({ children }) => {

    // const [token, setToken] = useState<string>('');
    // const [isLog, setIsLog] = useState(false);

    const [token, setToken] = useState<string>(() => localStorage.getItem('jwtToken') || '');
    const [isLog, setIsLog] = useState<boolean>(() => localStorage.getItem('isLog') === 'true');
   
    const login = (newToken: string, logged: boolean) => {
        localStorage.setItem('jwtToken', newToken);
        setToken(newToken);
        console.log(localStorage);

        localStorage.setItem('logged', logged.toString());
        setIsLog(logged);
    };

    const logout = () => {
        localStorage.removeItem('jwtToken');
        setToken(null);
        localStorage.removeItem('logged');
        setIsLog(false)
      };

    console.log(localStorage);
    return (
        <AuthContext.Provider value={{ token, isLog, login, logout, setToken }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
