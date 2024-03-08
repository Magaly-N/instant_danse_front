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
        <div className="container">
            <div className="workshop_card">
                {workshop ? (
                    <>
                        <h2>{workshop.title}</h2>
                        <p>{workshop.description}</p>
                        <p>{workshop.date}</p>
                        <p>{workshop.hour}</p>
                        <p>{workshop.duration}</p>
                        <p>{workshop.city}</p>
                        <p>{workshop.price}</p>
                        <p>{workshop.required_dance_level}</p>
                        <p>{workshop.person_max}</p>
                    </>
                ) : (
                    <p>Loading workshop details...</p>
                )}
                {userId && userId > 0 && !isRegistered && (
                    <button className="button" onClick={handleRegister}>
                        Inscrivez-vous
                    </button>
                )}
                {userId && userId > 0 && isRegistered && (
                    <button className="button">Vous êtes déjà inscrit(e).</button>
                )}
            </div>
        </div>
    );
};

export default Workshop;