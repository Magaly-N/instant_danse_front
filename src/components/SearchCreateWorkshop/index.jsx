import "./searchCreateWorkshop.scss";
import "../Button";
import { Link } from "react-router-dom";

const Workshop = () => {
    return (
        <div className="card">
            <div className="" role="group" aria-label="Proposer un atelier">
                <h2>Je propose un atelier ou un stage ?</h2>

                <Link to={`/formWorkshop`}><button className="button">Cliquer ici pour créer un stage ou un atelier de danse</button></Link>
            </div>
            <div className="" role="group" aria-label="Chercher un atelier">
                <h2>Je cherche un atelier ou un stage ?</h2>

                <Link to={`/workshopFilter`}><button className="button">Cliquer ici pour rechercher un stage ou un atelier</button></Link>
            </div>
        </div>
    )
}

export default Workshop;