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
        <div className="nav">
            <div>
                <h1>Instant Danse</h1>
            </div>
            <div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <div className="menu-icon" onClick={toggleMenu}><FaBars /></div>
                <nav>
                    <NavLink
                        exact
                        to={"/"}
                        activeClassName="active">Accueil
                    </NavLink>
                    <NavLink
                        to={"/ateliers"}
                        activeClassName="active">Ateliers
                    </NavLink>
                    <NavLink
                        to={"/inscriptions"}
                        activeClassName="active">Mes inscriptions
                    </NavLink>
                    <NavLink
                        to={"/messages"}
                        activeClassName="active">Messages
                    </NavLink>
                    <NavLink
                        to={"/compte"}
                        activeClassName="active">Mon compte
                    </NavLink>
                    <NavLink
                        to={"/sign_in"}
                        activeClassName="active">Connection
                    </NavLink>
                    <NavLink
                        to={"/sign_up"}
                        activeClassName="active">Inscription
                    </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Header;
