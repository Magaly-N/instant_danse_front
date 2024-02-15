import { NavLink, Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <p>
                Contactez-nous :{' '}
                <NavLink to="mailto:instantdanse@hotmail.fr" className="link-email">
                    instantdanse@hotmail.fr
                </NavLink> | Téléphone :{' '}
                <NavLink to="tel:+33 57 68 95 02" className="link-phone">
                    05 57 68 95 02
                </NavLink>
            </p>
            <p>
                <NavLink to="/politique-confidentialite" className="link-privacy">
                    Politique de confidentialité
                </NavLink>
                <NavLink to="/conditions-utilisation" className="link-terms">
                    Conditions d utilisation
                </NavLink>
            </p>
            <p>&copy; 2024 Instant Danse. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;
