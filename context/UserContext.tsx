// context/AuthContext.tsx
import React, { createContext, useContext, useState } from "react";

type User = {
  name: string;
  email: string;
  avatarUri: string;
};
const AuthContext = createContext<any>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};