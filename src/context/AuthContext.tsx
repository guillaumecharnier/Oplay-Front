import axios from 'axios';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { createContext, useState, useContext, useEffect } from 'react';

// Créer le contexte
interface AuthContextType {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
    isLog: boolean;
    login: (newToken: string, logged: boolean) => void;
    logout: () => void;
    roles: string[] | null;
}

// Créer le contexte avec un type spécifique
const AuthContext = createContext<AuthContextType>({
    token: '',
    setToken: () => {},
    isLog: false,
    login: (newToken: string, logged: boolean) => {},
    logout: () => {},
    roles: null,
});

interface MyJwtPayload extends JwtPayload {
    roles: string[]; // Définissez le type de votre propriété 'roles'
    username: string; // Ajoutez d'autres propriétés si nécessaire
    iat: number;
    exp: number;
}

// Fournir le contexte
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState<string>(() => localStorage.getItem('jwtToken') || '');
    const [isLog, setIsLog] = useState<boolean>(() => localStorage.getItem('isLog') === 'true');
    const [roles, setRole] = useState<string[] | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('jwtToken');
        if (storedToken) {
            setToken(storedToken);
            setIsLog(true);

            // Décoder le token et extraire les rôles
            try {
                const decodedToken = jwtDecode<MyJwtPayload>(storedToken);
                console.log(decodedToken);
                console.log(decodedToken.roles);

                const userRole = decodedToken.roles; // Remplacez 'roles' par le nom de votre champ contenant les rôles dans le token
                setRole(userRole);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        } else {
            setIsLog(false);
        }
    }, []);

    const login = (newToken: string, logged: boolean) => {
        localStorage.setItem('jwtToken', newToken);
        setToken(newToken);

        localStorage.setItem('isLog', logged.toString());
        setIsLog(logged);

        // uncrypt the token and extract the role
        try {
            const decodedToken = jwtDecode<MyJwtPayload>(newToken);
            const userRole = decodedToken.roles; 
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('jwtToken');
        setToken('');
        localStorage.removeItem('isLog');
        setIsLog(false);
        setRole(null);
    };

    return (
        <AuthContext.Provider value={{ token, isLog, login, logout, setToken, roles }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};