import { createContext, PropsWithChildren, useContext, useState } from 'react';
import {
  getUser,
  login as saveLogin,
  logout as doLogout,
  Account,
} from '@/utilities/basicAuth';
import { useDisclosure } from '@chakra-ui/react';

export interface AuthContextType {
  user: Account | null;
  login: (userData: Account) => void;
  logout: () => void;
  loginControls: {
    isOpen: boolean;
    onToggleLogin: () => void;
    onClose: () => void;
  };
  isAuth: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const { open: isOpen, onToggle, onClose } = useDisclosure();

  const [user, setUser] = useState(getUser());

  const login = (userData: Account) => {
    saveLogin(userData);
    setUser(userData);
  };

  const logout = () => {
    doLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuth: !!user,
        loginControls: {
          isOpen,
          onClose,
          onToggleLogin: onToggle,
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Auth context error');
  return context;
}
