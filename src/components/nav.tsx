import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav_logo">
        <div className="logo">
          <Link to="/home">Mon calendrier</Link>
        </div>
      </div>

      <div className="nav_authentification">
        <Link to="/register" className="REGISTER global_button">
          S'enregistrer
        </Link>

        <Link to="/login" className="LOGIN global_button">
          Se connecter
        </Link>
      </div>
    </nav>
  );
}
