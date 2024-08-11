import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BackCategory = () => {
    // État local pour stocker les catégories récupérées depuis l'API
    const [categories, setCategories] = useState(null);

    // Utilisation de useEffect pour exécuter une action dès que le composant est monté
    useEffect(() => {
        let data;

        // Récupération de l'URL de l'API depuis les variables d'environnement (Vite.js)
        const VITE_URL_API = import.meta.env.VITE_URL_API;

        // Configuration de la requête Axios
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${VITE_URL_API}/category_workshop/read`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        // Exécution de la requête Axios pour récupérer les catégories
        axios
            .request(config)
            .then((response) => {
                // Mise à jour de l'état local avec les catégories récupérées depuis l'API
                setCategories(response.data.categoryWorkshops);
            })
            .catch((error) => {
                console.log(error); // Gestion des erreurs
            });
    }, []); // Utilisation du tableau de dépendances vide pour exécuter useEffect une seule fois après le montage du composant

    // Rendu du composant
    return (
        <div className="main">
            {/* Tableau pour afficher les catégories */}
            <table className="table">
                <thead>
                    {/* En-têtes du tableau */}
                    <tr>
                        <th style={{ width: "5%" }} aria-label="Identifiant de l'utilisateur">Id</th>
                        <th style={{ width: "15%" }} aria-label="Nom de l'utilisateur">Nom</th>
                        <th style={{ width: "50%" }} aria-label="Description de l'utilisateur">Description</th>
                        <th style={{ width: "30%" }} aria-label="Actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mappage des catégories récupérées dans le tableau */}
                    {categories &&
                        categories.map((category) => (
                            <tr key={category.category_workshop_id}>
                                <td>{category.category_workshop_id}</td>
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                                <td>
                                    {/* Lien pour éditer la catégorie */}
                                    <Link to={`/editCategory/${category.category_workshop_id}`} className="submitButton" aria-label="Editer la catégorie">
                                        Editer
                                    </Link>
                                </td>
                            </tr>
                        ))}

                    {/* Affichage d'un message en l'absence de catégories */}
                    {categories && !categories.length && (
                        <tr>
                            <td>
                                <p>Pas de catégorie à afficher</p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BackCategory;
