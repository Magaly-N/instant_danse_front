import { Link } from 'react-router-dom';
import './footer.css';
import Mailto from '../Mailto';

const Footer = () => {
    return (

        <div className="footer">
            <h2>Contactez-nous</h2>
            <div className="contact">
                <Mailto className="email" label="Email: instantdanse@hotmail.fr" mailto="mailto:no-reply@example.com" />
                <Link className="phone" to="tel:9876543210" >Tél : 9876543210</Link>
            </div>
            <div className="flex">
                <Link to="/privacy" className="privacy">
                    Politique de confidentialité
                </Link>
                <Link to="/terms" className="terms">
                    Conditions d&apos;utilisations
                </Link>
            </div>
            <p>&copy; 2024 Instant Danse. Tous droits réservés.</p>
        </div>

    );
}

export default Footer;
