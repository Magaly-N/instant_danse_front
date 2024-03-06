import "./search_create_workshop.css";
import "../Button";
import { Link } from "react-router-dom";

const Workshop = () => {
    return (
        <section className="card">
            <div className="left-block" role="group" aria-label="Proposer un atelier">
                <h2>Je propose un atelier ou un stage?</h2>

                <Link to={`/form_workshop`}><button className="button">Cliquer ici pour créer un stage ou un atelier de danse</button></Link>
            </div>
            <div className="right-block" role="group" aria-label="Chercher un atelier">
                <h2>Je cherche un atelier ou un stage ?</h2>

                <Link to={`/workshop`}><button className="button">Cliquer ici pour rechercher un stage ou un atelier</button></Link>
            </div>
        </section>
    )
}

export default Workshop;