import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import { FaBars } from "react-icons/fa";
import { userService } from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import "./header.scss";

const Header = () => {
    // Utilisation de l'état local pour gérer l'ouverture/fermeture du menu
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Utilisation de l'état local pour stocker les informations de l'utilisateur
    const [user, setUser] = useState(null);

    // Utilisation du hook useNavigate pour la navigation dans l'application React Router
    const navigate = useNavigate();
    userService.setNavigate(navigate);

    // Fonction pour basculer l'état du menu entre ouvert et fermé
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // Fonction de déconnexion de l'utilisateur
    const logout = () => {
        userService.logout();
    };

    // Utilisation du hook useEffect pour souscrire aux changements de l'utilisateur
    useEffect(() => {
        // Abonnement aux mises à jour de l'utilisateur à l'aide du service userService
        const subscription = userService.user.subscribe((x) => setUser(x));

        // Nettoyage de l'abonnement lors de la destruction du composant
        return () => subscription.unsubscribe();
    }, []);

    return (
        <header role="navigation" aria-label="Navigation principale">
            <div className="logo-title">
                <div className="logo"><Logo /></div>
                <h1>Instant Danse</h1>
            </div>
            <div className={`navbar ${isMenuOpen ? "active" : ""}`} role="menubar">
                {/*aria-haspopup="true" => indique qu'il y a un menu associé à ce bouton */}
                {/*aria-expanded={isMenuOpen} => indique si le menu est ouvert ou fermé */}
                <div className="menu-icon" onClick={toggleMenu} role="button" aria-haspopup="true" aria-expanded={isMenuOpen}>
                    <FaBars />
                </div>
                <nav role="menu">
                    {/* Liens de navigation vers différentes sections de l'application */}
                    {/* role="menuitem" => indique que chaque lien est un élément du menu */}
                    <NavLink exact={"true"} to={"/"} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                        Accueil
                    </NavLink>
                    <NavLink to={"/workshopFilter"} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                        Ateliers
                    </NavLink>


                    {/* Affichage conditionnel du bouton de déconnexion ou des liens de connexion/inscription */}
                    {user ? (<><NavLink to={"/registeredWorkshop"} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                        Mes inscriptions
                    </NavLink>
                        <NavLink to={"/messages"} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                            Messages
                        </NavLink>
                        <NavLink to={"/userProfile"} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                            Mon compte
                        </NavLink>
                        <NavLink to="/" onClick={logout} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                            Se déconnecter
                        </NavLink>
                    </>
                    ) : (
                        <>
                            <NavLink to={"/signIn"} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                                Connexion
                            </NavLink>
                            <NavLink to={"/signUp"} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                                Inscription
                            </NavLink>
                        </>
                    )}

                    {/* Condition pour afficher le lien vers l'espace admin pour les utilisateurs ayant le rôle "admin" */}
                    {user && user.role === "admin" && <NavLink to={"/backOffice"} className={({ isActive }) => (isActive ? "active" : 'none')}>Espace Admin</NavLink>}
                </nav>
            </div>
        </header>
    );
};

export default Header;
