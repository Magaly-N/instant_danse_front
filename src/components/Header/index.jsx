import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { userService } from "../../utils/userService";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    const navigate = useNavigate();
    userService.setNavigate(navigate);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const logout = () => {
        userService.logout();
    };

    useEffect(() => {
        const subscription = userService.user.subscribe((x) => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    return (
        <div className="nav">
            <div>
                <h1>Instant Danse</h1>
            </div>
            <div className={`navbar ${isMenuOpen ? "active" : ""}`}>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FaBars />
                </div>
                <nav>
                    <NavLink exact={"true"} to={"/"} activeClassName="active">
                        Accueil
                    </NavLink>
                    <NavLink to={"/ateliers"} activeClassName="active">
                        Ateliers
                    </NavLink>
                    <NavLink to={"/inscriptions"} activeClassName="active">
                        Mes inscriptions
                    </NavLink>
                    <NavLink to={"/messages"} activeClassName="active">
                        Messages
                    </NavLink>
                    <NavLink to={"/account"} activeClassName="active">
                        Mon compte
                    </NavLink>
                    {/* Conditionally render the button based on authentication status */}
                    {user ? (
                        <button onClick={logout} className="btn btn-link nav-item nav-link">
                            Se déconnecter
                        </button>
                    ) : (
                        <>
                            <NavLink to={"/sign_in"} activeClassName="active">
                                Connexion
                            </NavLink>
                            <NavLink to={"/sign_up"} activeClassName="active">
                                Inscription
                            </NavLink>
                        </>
                    )}
                    {user && user.role === "admin" && <NavLink to={"/backOffice"} className="active">Espace Admin</NavLink>}
                </nav>
            </div>
        </div>
    );
};

export default Header;