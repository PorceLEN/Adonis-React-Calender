import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">

                <div className="nav_logo">
                    <div className="logo">
                    <Link to="/home">
                        Mon calendrier
                    </Link>
                    </div>
                </div>


                <div className="nav_authentification">
   
                    <Link to="/register" className="REGISTER button_authentification">
                           S'enregistrer
                    </Link>  
                           
                    <Link to="/login" className="LOGIN button_authentification">
                            Se connecter
                    </Link> 

                </div>
        </nav>
    )
}