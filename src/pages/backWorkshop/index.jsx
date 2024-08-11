import { useState, useEffect } from "react"; // Importation des hooks useState et useEffect depuis React
import axios from "axios"; // Importation du module axios pour effectuer des requêtes HTTP
import { Link } from "react-router-dom"; // Importation du composant Link de react-router-dom pour créer des liens
import convertDate from "../../utils/convertDate"; // Importation de la fonction de conversion de date depuis un fichier utilitaire

// Définition du composant BackWorkshop
const BackWorkshop = () => {
    // État local pour stocker les ateliers récupérés depuis l'API
    const [workshops, setWorkshops] = useState(null);

    // Récupération de l'URL de l'API depuis les variables d'environnement (Vite.js)
    const VITE_URL_API = import.meta.env.VITE_URL_API;

    // Formatage de la date de l'atelier (si elle est disponible)
    const formattedDate = workshop ? convertDate(workshop.date) : null;

    // Utilisation de useEffect pour exécuter une action dès que le composant est monté
    useEffect(() => {
        let data;

        // Configuration de la requête Axios pour récupérer les ateliers depuis l'API
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${VITE_URL_API}/dancer_workshop/read`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        // Exécution de la requête Axios pour récupérer les ateliers
        axios
            .request(config)
            .then((response) => {
                // Mise à jour de l'état local avec les ateliers récupérés depuis l'API
                setWorkshops(response.data.dancerWorkshops);
            })
            .catch((error) => {
                console.log(error); // Gestion des erreurs
            });
    }, []); // Utilisation du tableau de dépendances vide pour exécuter useEffect une seule fois après le montage du composant

    // Rendu du composant
    return (
        <div className="main">
            {/* Tableau pour afficher les ateliers */}
            <table className="table">
                <thead>
                    {/* En-têtes du tableau */}
                    <tr>
                        <th style={{ width: "10%" }} aria-label="Identifiant de l'atelier">Id</th>
                        <th style={{ width: "15%" }} aria-label="Titre de l'atelier">Titre</th>
                        <th style={{ width: "15%" }} aria-label="Date de l'atelier">Date</th>
                        <th style={{ width: "10%" }} aria-label="Heure de l'atelier">Heure</th>
                        <th style={{ width: "5%" }} aria-label="Durée de l'atelier">Durée</th>
                        <th style={{ width: "15%" }} aria-label="Ville de l'atelier">Ville</th>
                        <th style={{ width: "10%" }} aria-label="Prix de l'atelier">Prix</th>
                        <th style={{ width: "20%" }} aria-label="Niveau de danse de l'atelier">Niveau de danse</th>
                        <th style={{ width: "5%" }} aria-label="Nombre maximum de participants à l'atelier">Nombre maximum</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mappage des ateliers récupérés dans le tableau */}
                    {workshops &&
                        workshops.map((workshop) => (
                            <tr key={workshop.dancer_workshop_id}>
                                <td>{workshop.dancer_workshop_id}</td>
                                <td>{workshop.title}</td>
                                <td>{formattedDate ? `${formattedDate.day}/${formattedDate.month}/${formattedDate.year}` : 'Date invalide'}</td>
                                <td>{workshop.hour}</td>
                                <td>{workshop.duration}</td>
                                <td>{workshop.city}</td>
                                <td>{workshop.price}</td>
                                <td>{workshop.required_dance_level}</td>
                                <td>{workshop.person_max}</td>
                                <td>
                                    {/* Lien pour éditer l'atelier */}
                                    <Link to={`/editWorkshop/${workshop.dancer_workshop_id}`} className="submitButton" aria-label="Editer les ateliers">
                                        Editer
                                    </Link>
                                </td>
                            </tr>
                        ))}

                    {/* Affichage d'un message en l'absence d'ateliers */}
                    {workshops && !workshops.length && (
                        <tr>
                            <td>
                                <p>Pas d'ateliers ou stages à afficher</p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BackWorkshop; // Exportation du composant BackWorkshop
