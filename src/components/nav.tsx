import { Link } from "react-router-dom";
import { useAuth } from "../contexts/userContext";

export default function Navbar() {
  const { user } = useAuth();

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
            <Link to="home" className="LOGOUT global_button">
              Se déconnecter
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
