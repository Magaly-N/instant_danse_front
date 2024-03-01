import { Link } from 'react-router-dom';
import './footer.css';
import Mailto from '../Mailto';

const Footer = () => {
    return (

        <div className="footer">
            <h1>Contactez-nous</h1>
            <div className="contact">
                <Mailto className="email" label="Email: instantdanse@hotmail.fr" mailto="mailto:instantdanse@hotmail.fr" />
                <Link className="phone" to="tel:0557432658" >Tél : 0557432658</Link>
            </div>
            <div className="privacy-terms">
                <Link to="/privacy" className="privacy">
                    Politique de confidentialité
                </Link>
                <div className="barre">|</div>
                <Link to="/terms" className="terms">
                    Conditions d&apos;utilisations
                </Link>
            </div>
            <p>&copy; 2024 Instant Danse. Tous droits réservés.</p>
        </div>

    );
}

export default Footer;
