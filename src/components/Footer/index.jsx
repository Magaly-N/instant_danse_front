import { NavLink, Link } from 'react-router-dom';
import './footer.css';
import Mailto from '../Mailto';

const Footer = () => {
    return (
        <div className="footer">
            <h2>Contactez-nous</h2>
            <div>
                <Mailto className="link-email" label="Email: instantdanse@hotmail.fr" mailto="mailto:no-reply@example.com" />
                <Link className="link-phone" to="tel:9876543210" >Tél : 9876543210</Link>
            </div>
            <div className="link-privacy">
                <NavLink to="/privacy">
                    Politique de confidentialité
                </NavLink>
            </div>
            <div className="terms">
                <NavLink to="/terms" >
                    Conditions d&apos; utilisations
                </NavLink>
            </div>
            <div>
                <p>&copy; 2024 Instant Danse. Tous droits réservés.</p>
            </div>
        </div>
    );
}

export default Footer;
