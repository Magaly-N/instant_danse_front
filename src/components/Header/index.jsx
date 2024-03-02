import { useState } from "react";
import { NavLink } from "react-router-dom";
import './header.css';
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const isUserAuthenticated = () => {
        return localStorage.getItem('token') !== null;
    };

    return (
        <div className="nav">
            <div>
                <h1>Instant Danse</h1>
            </div>
            <div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <div className="menu-icon" onClick={toggleMenu}><FaBars /></div>
                <nav>
                    <NavLink exact={"true"} to={"/"} activeClassName="active">Accueil</NavLink>
                    <NavLink to={"/ateliers"} activeClassName="active">Ateliers</NavLink>
                    <NavLink to={"/inscriptions"} activeClassName="active">Mes inscriptions</NavLink>
                    <NavLink to={"/messages"} activeClassName="active">Messages</NavLink>
                    <NavLink to={"/compte"} activeClassName="active">Mon compte</NavLink>
                    {/* Conditionally render the button based on authentication status */}
                    {isUserAuthenticated() ? (
                        <NavLink to={"/sign_out"} activeClassName="active">Déconnexion</NavLink>
                    ) : (
                        <>
                            <NavLink to={"/sign_in"} activeClassName="active">Connexion</NavLink>
                            <NavLink to={"/sign_up"} activeClassName="active">Inscription</NavLink>
                        </>
                    )}
                </nav>
            </div>
        </div>
    );
}

export default Header;
