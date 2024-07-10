import { createContext, useState, useContext, useEffect } from 'react';
import { UserData } from '../assets/type';

// Créer le contexte
interface AuthContextType {
    users:[];
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>
    isLog: boolean;
    login: (newToken: string, logged: boolean) => void;
    logout: () => void;
}

// Créer le contexte avec un type spécifique
const AuthContext = createContext<AuthContextType>({
    users: [],
    token: '',
    setToken: () => {},
    isLog: (false),
    login: (newToken: string, logged: false) => {},
    logout: () => {}
});

// Fournir le contexte
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState<string>(() => localStorage.getItem('jwtToken') || '');
    const [isLog, setIsLog] = useState<boolean>(() => localStorage.getItem('isLog') === 'true');
    const [userData, setUserData] = useState<UserData[]>([]);
    
    useEffect(() => {
        const storedToken = localStorage.getItem('jwtToken');
        if (storedToken) {
            setToken(storedToken);
            setIsLog(true);
        } else {
            setIsLog(false);
        }
    }, []);
    
    const login = (newToken: string, logged: boolean) => {
        localStorage.setItem('jwtToken', newToken);
        setToken(newToken);

        localStorage.setItem('logged', logged.toString());
        setIsLog(logged);
    };

    const logout = () => {
        localStorage.removeItem('jwtToken');
        setToken(null);
        localStorage.removeItem('logged');
        setIsLog(false)
      };

    const users = (jack) => {
    console.log(jack);
    setUserData(jack);
    }
    console.log(userData);

    return (
        <AuthContext.Provider value={{ token, isLog, login, logout, setToken, users }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
