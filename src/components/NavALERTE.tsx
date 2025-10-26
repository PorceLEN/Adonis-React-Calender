import { Link } from "react-router";
import {
  authentification,
  useAuthContext,
} from "../contexts/AuthContext";
import Button from "./Button";

export default function Navbar() {
  const { user } = useAuthContext();
  const { logoutSubmit } = authentification();

  if (!user) {
    console.log(`L'utilisateur est déconnecté => ${user}`);
  } else {
    console.log(`L'utilisateur est connecté => ${user}`); // user
  }

  return (
    
    <nav className="nav">
      <div className="nav_logo">
        <div className="logo">
          <Link to="/home">Mon Calendrier</Link>
        </div>
      </div>

      <div className="nav_authentification">
        {!user && (
          <>
            <Link to="/register" className="REGISTER global_button">
              S'enregistrer
            </Link>
            <Link to="/login" className="LOGIN global_button">
              Se connecter
            </Link>
          </>
        )}

        {user && (
          <>
            <Button onClick={logoutSubmit} className="global_button">
              Se déconnecter
            </Button>
          </>
        )}
        {user && (
          <>
            <Link to="/dashboard" className="DASHBOARD global_button">
              Dashboard
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

// Gérer la redirection après la connexion
// Restyliser les boutons
