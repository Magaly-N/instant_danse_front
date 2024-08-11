import { useState, useEffect } from "react"; // Importation des hooks useState et useEffect depuis React
import axios from "axios"; // Importation du module axios pour effectuer des requêtes HTTP
import { Link } from "react-router-dom"; // Importation du composant Link de react-router-dom pour créer des liens

// Définition du composant BackUser
const BackUser = () => {
    // État local pour stocker les utilisateurs récupérés depuis l'API
    const [users, setUsers] = useState(null);

    // Utilisation de useEffect pour exécuter une action dès que le composant est monté
    useEffect(() => {
        let data;

        // Récupération de l'URL de l'API depuis les variables d'environnement (Vite.js)
        const VITE_URL_API = import.meta.env.VITE_URL_API;

        // Configuration de la requête Axios pour récupérer les utilisateurs depuis l'API
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${VITE_URL_API}/users/read`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        // Exécution de la requête Axios pour récupérer les utilisateurs
        axios
            .request(config)
            .then((response) => {
                // Mise à jour de l'état local avec les utilisateurs récupérés depuis l'API
                setUsers(response.data.users);
            })
            .catch((error) => {
                console.log(error); // Gestion des erreurs
            });
    }, []); // Utilisation du tableau de dépendances vide pour exécuter useEffect une seule fois après le montage du composant

    // Rendu du composant
    return (
        <div className="main">
            {/* Tableau pour afficher les utilisateurs */}
            <table className="table">
                <thead>
                    {/* En-têtes du tableau */}
                    <tr>
                        <th style={{ width: "5%" }} aria-label="Identifiant de l'utilisateur">Id</th>
                        <th style={{ width: "15%" }} aria-label="Prénom de l'utilisateur">Prénom</th>
                        <th style={{ width: "15%" }} aria-label="Nom de l'utilisateur">Nom</th>
                        <th style={{ width: "15%" }} aria-label="Email de l'utilisateur">Email</th>
                        <th style={{ width: "15%" }} aria-label="Niveau de l'utilisateur">Niveau</th>
                        <th style={{ width: "25%" }} aria-label="Actions">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mappage des utilisateurs récupérés dans le tableau */}
                    {users &&
                        users.map((user) => (
                            <tr key={user.user_id}>
                                <td>{user.user_id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.dance_level}</td>
                                <td>
                                    {/* Lien pour éditer l'utilisateur */}
                                    <Link to={`/editUser/${user.user_id}`} className="submitButton" aria-label="Editer les utilisateurs">
                                        Editer
                                    </Link>
                                </td>
                            </tr>
                        ))}

                    {/* Affichage d'un message en l'absence d'utilisateurs */}
                    {users && !users.length && (
                        <tr>
                            <td>
                                <p>Pas de membres à afficher</p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BackUser; // Exportation du composant BackUser
