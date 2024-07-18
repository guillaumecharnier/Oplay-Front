import  {jwtDecode, JwtPayload } from 'jwt-decode';
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Interface pour le contexte d'authentification
interface AuthContextType {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
    isLog: boolean;
    login: (newToken: string, logged: boolean) => void;
    logout: () => void;
    roles: string[] | null;
}

// Contexte d'authentification initialisé avec des valeurs par défaut
const AuthContext = createContext<AuthContextType>({
    token: '',
    setToken: () => {},
    isLog: false,
    login: (newToken: string, logged: boolean) => {},
    logout: () => {},
    roles: null,
});

// Interface pour la charge utile du token JWT
interface MyJwtPayload extends JwtPayload {
    roles: string[];
    username: string;
    id: number;
}

// Propriétés attendues par le AuthProvider
interface AuthProviderProps {
    children: ReactNode;
}

// Composant fournissant le contexte d'authentification
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState<string>(() => localStorage.getItem('jwtToken') || '');
    const [isLog, setIsLog] = useState<boolean>(() => localStorage.getItem('isLog') === 'false');
    const [roles, setRoles] = useState<string[] | null>(null);

    // Effet de chargement initial pour récupérer le token du localStorage
    useEffect(() => {
        const storedToken = localStorage.getItem('jwtToken');
        if (storedToken) {
            setToken(storedToken);
            setIsLog(true);

            // Décoder le token et extraire les rôles
            try {
                const decodedToken = jwtDecode<MyJwtPayload>(storedToken);
                const userRoles = decodedToken.roles;
                setRoles(userRoles);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        } else {
            setIsLog(false);
        }
    }, []);

    // Fonction de login pour mettre à jour le token et l'état de connexion
    const login = (newToken: string, logged: boolean) => {
        localStorage.setItem('jwtToken', newToken);
        localStorage.setItem('isLog', 'true');
        setToken(newToken);
        setIsLog(logged);

        // Décoder le token et extraire les rôles
        try {
            const decodedToken = jwtDecode<MyJwtPayload>(newToken);
            const userRoles = decodedToken.roles;
            setRoles(userRoles);
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    };

    // Fonction de logout pour effacer le token et réinitialiser l'état de connexion
    const logout = () => {
        localStorage.removeItem('jwtToken');
        // localStorage.removeItem('filteredGames');
        localStorage.setItem('isLog', 'false');
        setToken('');
        setIsLog(false);
        setRoles(null);
    };

    // Rendu du contexte d'authentification pour être utilisé par les composants enfants
    return (
        <AuthContext.Provider value={{ token, isLog, login, logout, setToken, roles }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = (): AuthContextType => useContext(AuthContext);