import { Link } from 'react-router-dom';
import "./logo.scss";

const Logo = () => {
    return (
        <Link to="/">
            <source srcSet="img\logo.webp" className=" logo logo-webp" type="image/webp" alt="Dessin d'une femme en mouvement" title="Dessin d'une femme en mouvement" />
            <img src="img\logo.png" className="logo logo-png" alt="Dessin d'une femme en mouvement" title="Dessin d'une femme en mouvement" />
        </Link>
    )
}

export default Logo;