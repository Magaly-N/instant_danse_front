import "./search_create_workshop.css";
import "../Button";
import { Link } from "react-router-dom";

const Workshop = () => {
    return (
        <section className="card">
            <div className="left-block">
                <h2>Je propose un atelier</h2>

                <Link to={`/form_workshop}`}><button className="button">Cliquer ici pour créer un stage ou un atelier de danse</button></Link>
            </div>
            <div className="right-block">
                <h2>Je cherche un atelier</h2>

                <Link to={`/workshop`}><button className="button">Cliquer ici pour rechercher un stage ou un atelier</button></Link>
            </div>
        </section>
    )
}

export default Workshop