import { useState } from "react";
import { NavLink } from "react-router-dom";
import './header.css';
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    let navBar =
        [
            { to: "/", label: "Accueil" },
            { to: "/ateliers", label: "Ateliers" },
            { to: "/inscriptions", label: "Mes inscriptions" },
            { to: "/messages", label: "Messages" },
            { to: "/compte", label: "Mon compte" },
            { to: "/sign_in", label: "Connexion" },
            { to: "/sign_up", label: "Inscription" }
        ];

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header" >
            <div className="header-top">
                <h1>Instant Danse</h1>
            </div>
            <div className={`header-bottom ${isMenuOpen ? 'active' : ''}`}>
                <div className="menu-icon" onClick={toggleMenu}><FaBars /></div>
                <nav>
                    {navBar.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={(isActive) => (isActive.isActive ? `${item.label.toLowerCase()} active` : item.label.toLowerCase())}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

            </div>
        </div >
    )
}

export default Header;
