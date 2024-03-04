import { Link } from "react-router-dom";
import "./backOffice.css";

const BackOffice = () => {
    return (
        <div className="jumbotron">
            <Link to={"/backUser"}>
                <button className="button back">Gestion des membres</button>
            </Link>

            <Link to={"/backCategory"}>
                <button className="button back">Gestion des catégories</button>
            </Link>

            <Link to={"/backWorkshop"}>
                <button className="button back">Gestion des ateliers</button>
            </Link>

            <Link to={"/backMessage"}>
                <button className="button back">Gestion des messages</button>
            </Link>
        </div>
    );
};

export default BackOffice;