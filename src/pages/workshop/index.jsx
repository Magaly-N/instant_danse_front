import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./workshop.css";

const Workshop = () => {
    const { dancer_workshop_id } = useParams();
    const [userId, setUserId] = useState(null);
    const [workshop, setWorkshop] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        const actualUser = JSON.parse(localStorage.getItem("user"));
        if (actualUser && actualUser !== undefined) {
            setUserId(actualUser.userId);
            console.log(actualUser);
        }

        axios
            .get(
                `http://localhost:3000/dancer_workshop/readOne?id=${dancer_workshop_id}`
            )
            .then((response) => {
                setWorkshop(response.data.dancerWorkshop);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .post(
                `http://localhost:3000/users/isRegistered?userId=${userId}&workshopId=${dancer_workshop_id}`
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
                setIsRegistered(true);
            });
    }, [userId, dancer_workshop_id, isRegistered]);

    const handleRegister = () => {
        axios
            .post(
                `http://localhost:3000/users/sign-up-workshop?userId=${userId}&workshopId=${dancer_workshop_id}`
            )
            .then((response) => {
                console.log(response);
                setIsRegistered(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="main">
            <div className="workshopCard" aria-label="Détails de l'atelier">
                {workshop ? (
                    <>
                        <h2>{workshop.title}</h2>
                        <label className="inputLabel" aria-label="Description de l'atelier">Description</label>
                        <p>{workshop.description}</p>
                        <label className="inputLabel" aria-label="Date de l'atelier">Date</label>
                        <p>{workshop.date}</p>
                        <label className="inputLabel" aria-label="Heure de l'atelier">Heure</label>
                        <p>{workshop.hour}</p>
                        <label className="inputLabel" aria-label="Durée de l'atelier">Durée</label>
                        <p>{workshop.duration}</p>
                        <label className="inputLabel" aria-label="Ville de l'atelier">Ville</label>
                        <p>{workshop.city}</p>
                        <label className="inputLabel" aria-label="Prix de l'atelier">Prix</label>
                        <p>{workshop.price}</p>
                        <label className="inputLabel" aria-label="Niveau de danse">Niveau de danse</label>
                        <p>{workshop.required_dance_level}</p>
                        <label className="inputLabel" aria-label="Nombre de personnes maximum">Nombre de personnes maximum</label>
                        <p>{workshop.person_max}</p>
                    </>
                ) : (
                    <p>Loading workshop details...</p>
                )}
                {userId && userId > 0 && !isRegistered && (
                    <button className="button" onClick={handleRegister} aria-label="Inscrivez-vous à cet atelier">
                        Inscrivez-vous
                    </button>
                )}
                {userId && userId > 0 && isRegistered && (
                    <button className="button" aria-label="Vous êtes déjà inscrit(e)">Vous êtes déjà inscrit(e)</button>
                )}
            </div>
        </div >
    );
};

export default Workshop;