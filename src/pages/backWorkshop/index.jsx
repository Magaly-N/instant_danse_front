import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import convertDate from "../../utils/convertDate";

const BackWorkshop = (workshop) => {
    const [workshops, setWorkshops] = useState(null);

    const VITE_URL_API = import.meta.env.VITE_URL_API;

    const formattedDate = workshop ? convertDate(workshop.date) : null;

    useEffect(() => {
        let data;

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${VITE_URL_API}/dancer_workshop/read`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(response);
                setWorkshops(response.data.dancerWorkshops);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="main">
            <table className="table">
                <thead>
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
                    {workshops &&
                        workshops.map((workshop) => (
                            <tr key={workshop.dancer_workshop_id}>
                                <td>{workshop.dancer_workshop_id}</td>
                                <td>{workshop.title}</td>
                                <td>{formattedDate ? `${formattedDate.day}/${formattedDate.month}/${formattedDate.year}` : 'Invalid Date'}</td>
                                <td>{workshop.hour}</td>
                                <td>{workshop.duration}</td>
                                <td>{workshop.city}</td>
                                <td>{workshop.price}</td>
                                <td>{workshop.required_dance_level}</td>
                                <td>{workshop.person_max}</td>
                                <td>
                                    <Link to={`/editWorkshop/${workshop.dancer_workshop_id}`} className="submitButton" aria-label="Editer les ateliers">
                                        Editer
                                    </Link>
                                </td>
                            </tr>
                        ))}

                    {workshops && !workshops.length && (
                        <tr>
                            <td>
                                <p>Pas d&apos;ateliers ou stages à afficher</p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table >
        </div>
    );
};

export default BackWorkshop;