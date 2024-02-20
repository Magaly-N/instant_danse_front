import "./workshop.css";
import "../Button";

const Workshop = () => {
    return (
        <section className="card">
            <div className="left-block">
                <h2>Je propose un atelier</h2>
                <button className="button">Formulaire de proposition d&apos;un atelier de danse</button>
            </div>
            <div className="right-block">
                <h2>Je cherche un atelier</h2>
                <button className="button">Cliquer ici pour rechercher un atelier</button>

            </div>
        </section>
    )
}

export default Workshop