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
                        className={(isActive) => (isActive ? "active" : "")}>Accueil
                    </NavLink>
                    <NavLink
                        to={"/ateliers"}
                        className={(isActive) => (isActive ? "active" : "")}>Ateliers
                    </NavLink>
                    <NavLink
                        to={"/inscriptions"}
                        className={(isActive) => (isActive ? "active" : "")}>Mes inscriptions
                    </NavLink>
                    <NavLink
                        to={"/messages"}
                        className={(isActive) => (isActive ? "active" : "")}>Messages
                    </NavLink>
                    <NavLink
                        to={"/compte"}
                        className={(isActive) => (isActive ? "active" : "")}>Mon compte
                    </NavLink>
                    <NavLink
                        to={"/sign_in"}
                        className={(isActive) => (isActive ? "active" : "")}>Connection
                    </NavLink>
                    <NavLink
                        to={"/sign_up"}
                        className={(isActive) => (isActive ? "active" : "")}><div className="nav-item">Inscription</div>
                    </NavLink>
                </nav>
            </div>
        </div>)
}
export default Header;