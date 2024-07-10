import { createContext, useState, useContext } from 'react';

interface IAuthContext {
  login: (token: any) => any,
  logout: () => any,
  isLoggedIn: () => boolean
}
// Create AuthContext
const AuthContext = createContext<IAuthContext>({login: ({}) => null, logout: () => null, isLoggedIn: () => false });

// Custom hook to use the AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthProvider ({ children }: any) {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

  const login = (token: any) => {
    localStorage.setItem('authToken', token);
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
  };

  const isLoggedIn = () => !!authToken;

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
