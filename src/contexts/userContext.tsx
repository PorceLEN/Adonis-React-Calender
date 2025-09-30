import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { UserContextType } from "../types/UserContextType";


const AuthContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
  fetch("http://localhost:3333/me", { credentials: "include" })
  .then(response => response.ok ? response.json() : null)
  .then(data => setUser(data))
  .catch(() => setUser(null))
}, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
    return useContext(AuthContext)
}

