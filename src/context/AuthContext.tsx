
import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';

// Créer le contexte
interface AuthContextType {
    token: string;
    // login: (newToken: string) => void;
    // logout: () => void;
}

// Créer le contexte avec un type spécifique
const AuthContext = createContext<AuthContextType>({
    token: '',
    // login: (newToken: string) => {},
    // logout: () => {}
});
// Fournir le contexte
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState<string>('');

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.post('http://localhost:8080/api/login_check', {
                    username: 'admin@oplay.fr',
                    password: 'admin'
                });
                const newToken = response.data.token;
                setToken(newToken);
                localStorage.setItem('jwtToken', newToken);
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        };
        fetchToken();
    }, []);

    // const login = (newToken) => {
    //     localStorage.setItem('jwtToken', newToken);
    //     setToken(newToken);
    // };

    // const logout = () => {
    //     localStorage.removeItem('jwtToken');
    //     setToken('');
    // };

    return (
        <AuthContext.Provider value={{ token }}>
            {children}
        </AuthContext.Provider>
    );
};


// Hook pour utiliser le contexte
export const useAuth = () => {
    return useContext(AuthContext);
};
// import axios from 'axios';
// import { createContext, useState, useContext, useEffect } from 'react';

// // Créer le contexte
// const AuthContext = createContext(null);

// // Fournir le contexte
// export const AuthProvider = ({ children }) => {

//     const [token, setToken] = useState('');
//     const [user, setUser] = useState(null); // Initialisé à null plutôt qu'à une chaîne vide
    
//     const fetchToken = async () => {
//         try {
//             const response = await axios.post('http://localhost:8080/api/login_check', {
//                 username: 'admin@oplay.fr',
//                 password: 'admin'
//             });
//             const newToken = response.data.token;
//             setToken(newToken);
//             localStorage.setItem('jwtToken', newToken); // Utilise newToken pour mettre à jour localStorage
//             setUser({ token: newToken }); // Met à jour user avec un objet contenant le token
//         } catch (error) {
//             console.error('Error fetching token:', error);
//         }
//     };

//     useEffect(() => {
//         fetchToken();
//         // Récupérer le token stocké dans localStorage
//         const storedToken = localStorage.getItem('jwtToken');
//         if (storedToken) {
//             setUser({ token: storedToken });
//         }
//     }, []);

//     const login = (newToken) => { // Utilise newToken comme paramètre plutôt que token
//         localStorage.setItem('jwtToken', newToken);
//         setUser({ token: newToken });
//     };

//     const logout = () => {
//         localStorage.removeItem('jwtToken');
//         setUser(null);
//     };
//     console.log(token);

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // Hook pour utiliser le contexte
// export const useAuth = () => {
//     return useContext(AuthContext);
// };