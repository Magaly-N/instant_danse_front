import { useState } from "react";
import { NavLink } from "react-router-dom";
import './header.css';
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            <div className="header-top">
                <h1>Instant Danse</h1>
            </div>
            <div className={`header-bottom ${isMenuOpen ? 'active' : ''}`}>
                <div className="menu-icon" onClick={toggleMenu}><FaBars /></div>
                <nav>
                    <NavLink
                        to={"/"}
                        className={(accueil) => (accueil.isActive ? "accueil active" : "accueil")}>Accueil
                    </NavLink>
                    <NavLink
                        to={"/ateliers"}
                        className={(ateliers) => (ateliers.isActive ? "ateliers active" : "ateliers")}>Ateliers
                    </NavLink>
                    <NavLink
                        to={"/inscriptions"}
                        className={(inscriptions) => (inscriptions.isActive ? "inscriptions active" : "inscriptions")}>Mes inscriptions
                    </NavLink>
                    <NavLink
                        to={"/messages"}
                        className={(messages) => (messages.isActive ? "messages active" : "messages")}>Messages
                    </NavLink>
                    <NavLink
                        to={"/compte"}
                        className={(compte) => (compte.isActive ? "compte active" : "compte")}>Mon compte
                    </NavLink>
                    <NavLink
                        to={"/connexion"}
                        className={(connexion) => (connexion.isActive ? "connexion active" : "connexion")}>Connexion
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header;
