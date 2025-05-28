import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { getCurrentUser, signIn, signOut } from 'aws-amplify/auth';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        const email = user.signInDetails?.loginId || 'unknown';
        const mockUser: User = {
          id: user.userId,
          name: email,
          email,
          role: 'admin',
        };
        setCurrentUser(mockUser);
        setIsAuthenticated(true);
      })
      .catch(() => {
        setCurrentUser(null);
        setIsAuthenticated(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signIn({ username: email, password });

      const user = await getCurrentUser();
      const emailAttr = user.signInDetails?.loginId || email;

      const mockUser: User = {
        id: user.userId,
        name: emailAttr,
        email: emailAttr,
        role: 'admin',
      };

      setCurrentUser(mockUser);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Amplify login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    await signOut();
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    currentUser,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
