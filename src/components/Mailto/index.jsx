import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./mailto.scss";

// Définition du composant Mailto
const Mailto = ({ mailto, label }) => {
    // Fonction de gestion de clic pour ouvrir le client de messagerie par défaut
    const handleClick = (e) => {
        // Redirection vers le client de messagerie par défaut avec l'adresse e-mail spécifiée
        window.location.href = `mailto:${mailto}`;
        e.preventDefault(); // Empêche le comportement par défaut du lien
    };

    // Rendu du composant
    return (
        <Link to="#" // Lien fictif "#" pour éviter toute navigation réelle
            className="mailto-link" // Classe CSS pour le style du lien
            onClick={handleClick} // Appel de la fonction handleClick lors du clic sur le lien
            aria-label="Envoyer un e-mail à Instant Danse"> {/* Libellé pour l'accessibilité */}
            {label} {/* Affichage du libellé du lien */}
        </Link>
    );
};

// Validation des propriétés (props) avec PropTypes
Mailto.propTypes = {
    mailto: PropTypes.string.isRequired, // Adresse e-mail à laquelle envoyer le message (requis)
    label: PropTypes.string.isRequired, // Libellé du lien (requis)
};

export default Mailto; // Exportation du composant Mailto
