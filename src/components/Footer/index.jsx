import { NavLink, Link } from 'react-router-dom';
import './footer.css';
import Mailto from '../Mailto';

const Footer = () => {
    return (
        <footer>
            <h3>Contactez-nous</h3>
            <Mailto label="Email:instantdanse@hotmail.fr" mailto="mailto:no-reply@example.com" className="link-email" />
            <br />
            <Link to="tel:9876543210" className="link-phone">Tél : 9876543210</Link>
            <br />
            <NavLink to="/privacy" className="link-privacy">
                Politique de confidentialité
            </NavLink>
            <br />
            <NavLink to="/terms" className="link-terms">
                Conditions d&apos; utilisation
            </NavLink>
            <br />
            <p>&copy; 2024 Instant Danse. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;
