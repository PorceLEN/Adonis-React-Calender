import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { UserContextType } from "../types/UserContextType";
import userLogout from "../pages/auth/post/userLogout";
import useNav from "../hooks/useNavigate";
// import userLogin from "../pages/auth/post/userLogin";
// import type { UserLoginPayload } from "../types/UserLoginPayload";
// import userRegister from "../pages/auth/post/userRegister";
// import type { UserRegisterPayload } from "../types/UserRegisterPayload";

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
      .then((data) => setUser(data))
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

//////////////////////////////////////////////////////////////////////

// Authentification

export function authentification() {
  const { setUser } = useAuthContext();
  const { navigate } = useNav();

  //////////////////////////////////////////////////////////////////////

  // async function loginSubmit(input: UserLoginPayload) {
  //   try {
  //     const user = await userLogin(input); // method avec le fetch
  //     console.log(user);
  //     setUser(user)
  //   } catch (error) {
  //     console.error("Erreur lors de la connexion", error);
  //   }
  // }

  //////////////////////////////////////////////////////////////////////

  async function logoutSubmit() {
    try {
      const user = await userLogout();
      setUser(user);
      navigate("/")
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  }

  //////////////////////////////////////////////////////////////////////

  // async function registerSubmit(input: UserRegisterPayload) {
  //   try {
  //     const user = await userRegister(input);
  //   } catch (error) {
  //     console.error("Erreur lors de l'inscription :", error);
  //   }
  // }

  //////////////////////////////////////////////////////////////////////

  return {
    // registerSubmit,
    // loginSubmit,
    logoutSubmit,
  };
}

