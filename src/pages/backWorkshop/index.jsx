import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./backWorkshop.css";

const BackWorkshop = () => {
    const [workshops, setWorkshops] = useState(null);
    useEffect(() => {
        let data;

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "http://localhost:3000/dancer_workshop/read",
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
        <table className="table">
            <thead>
                <tr>
                    <th style={{ width: "5%" }}>Id</th>
                    <th style={{ width: "11%" }}>Titre</th>
                    <th style={{ width: "18%" }}>Description</th>
                    <th style={{ width: "10%" }}>Date</th>
                    <th style={{ width: "5%" }}>Heure</th>
                    <th style={{ width: "5%" }}>Durée</th>
                    <th style={{ width: "10%" }}>Ville</th>
                    <th style={{ width: "5%" }}>Prix</th>
                    <th style={{ width: "10%" }}>Niveau de danse</th>
                    <th style={{ width: "5%" }}>Nombre maximum</th>
                </tr>
            </thead>
            <tbody>
                {workshops &&
                    workshops.map((workshop) => (
                        <tr key={workshop.dancer_workshop_id}>
                            <td>{workshop.dancer_workshop_id}</td>
                            <td>{workshop.title}</td>
                            <td>{workshop.description}</td>
                            <td>{workshop.date}</td>
                            <td>{workshop.hour}</td>
                            <td>{workshop.duration}</td>
                            <td>{workshop.city}</td>
                            <td>{workshop.price}</td>
                            <td>{workshop.required_dance_level}</td>
                            <td>{workshop.person_max}</td>
                            <td style={{ whiteSpace: "nowrap" }}>
                                <Link to={`/editWorkshop/${workshop.dancer_workshop_id}`} className="submitButton">
                                    Editer
                                </Link>
                            </td>
                        </tr>
                    ))}

                {workshops && !workshops.length && (
                    <tr>
                        <td colSpan="4" className="text-center">
                            <div className="p-2">Pas d&apos;ateliers ou stages à afficher</div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table >
    );
};

export default BackWorkshop;