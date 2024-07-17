import axios from 'axios';
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
  const [token, setToken] = useState<string>(() => {
    // Vérifier s'il existe déjà un token dans le localStorage
    const storedToken = localStorage.getItem('jwtTokenPrivate');
    if (storedToken) {
      return storedToken; // Utiliser le token existant s'il est présent
    } else {
      // Générer un token factice (à remplacer par votre méthode de génération de token)
      const initialToken = 'fake-initial-token';
      localStorage.setItem('jwtTokenPrivate', initialToken);
      return initialToken;
    }
  });
  const [isLog, setIsLog] = useState<boolean>(() => localStorage.getItem('isLog') === 'true');
  const [roles, setRoles] = useState<string[] | null>(null);

  // Effet de chargement initial pour récupérer le token du localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('jwtTokenPrivate');
    console.log(storedToken);
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
  const login = async (email: string, password: string) => {
    try {
      // Appel à l'API pour obtenir un nouveau token après connexion
      const response = await axios.post<{ token: string }>('/api/login', {
        username: email,
        password: password,
      });

      const newToken = response.data.token;
      localStorage.setItem('jwtTokenPrivate', newToken);
      setToken(newToken);
      setIsLog(true);

      // Décoder le nouveau token et extraire les rôles
      const decodedToken = jwtDecode<MyJwtPayload>(newToken);
      const userRoles = decodedToken.roles;
      setRoles(userRoles);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  // Fonction de logout pour effacer le token et réinitialiser l'état de connexion
  const logout = () => {
    localStorage.removeItem('jwtTokenPrivate');
    setToken('');
    localStorage.removeItem('isLog');
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
