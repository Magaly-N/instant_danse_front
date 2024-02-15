import { NavLink } from "react-router-dom";
import './header.scss';

const Header = () => {
    return (
        <header>
            <h1>Instant Danse</h1>
            <nav>
                <NavLink
                    to={"/"}
                    className={(nav) => (nav.isActive ? "nav active" : "nav")}>
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
        </header>
    )
}

export default Header;