import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { UserContextType } from "../types/UserContextType";
import userLogout from "../pages/auth/post/userLogout";
import { useNavigate } from "react-router";
import userLogin from "../pages/auth/post/userLogin";
import type { UserLoginPayload } from "../types/UserLoginPayload";
import userRegister from "../pages/auth/post/userRegister";
import type { UserRegisterPayload } from "../types/UserRegisterPayload";

// get if user login or logout

const AuthContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3333/me", { credentials: "include" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data?.user?.pseudo) {
          setUser(data.user.pseudo);
        }
      })
      .catch(() => setUser(null));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

// Authentification

export function authentification() {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  async function loginSubmit(data: UserLoginPayload) {
    try {
      const response = await userLogin(data);

      if (!response || !response.user?.pseudo) {
        console.error("Utilisateur inexistant ou identifiants invalides");
        return;
      }

      setUser(response.user.pseudo);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  }

  async function logoutSubmit() {
    try {
      await userLogout();
      setUser(null);
      navigate("/home");
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  }

  async function registerSubmit(data: UserRegisterPayload) {
    try {
      const response = await userRegister(data);

      if (!response || !response.user?.pseudo) {
        throw new Error("Erreur lors de l'inscription");
      }

      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  }

  return {
    registerSubmit,
    loginSubmit,
    logoutSubmit,
  };
}
