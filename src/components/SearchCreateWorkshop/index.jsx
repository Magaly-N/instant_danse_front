import "../Button";
import { Link } from "react-router-dom";

const Workshop = () => {
    return (
        <div className="cards">
            <div className="card" role="group" aria-label="Créez un atelier ou un stage">
                <h2>Créez un atelier ou un stage ?</h2>

                <Link to={`/formWorkshop`}><button className="button">Cliquez ici</button></Link>
            </div>
            <div className="card" role="group" aria-label="Trouvez un atelier ou un stage">
                <h2>Trouvez un atelier ou un stage ?</h2>

                <Link to={`/workshopFilter`}><button className="button">Cliquez ici</button></Link>
            </div>
        </div>
    )
}

export default Workshop;