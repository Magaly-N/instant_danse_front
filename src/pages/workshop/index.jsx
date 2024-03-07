import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./workshop.css";
import Modal from "../../components/Modal";
import useModal from "../../utils/useModal";

const Workshop = () => {
    const id = useParams();
    const [workshop, setWorkshop] = useState(null);
    let workshopId = id.dancer_workshop_id;
    let user = JSON.parse(localStorage.getItem("user"));
    const userId = user.userId;
    const { isShowing, toggle } = useModal();

    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        let data = "";

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `http://localhost:3000/dancer_workshop/readOne?id=${workshopId}`,
            headers: {},
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                setWorkshop(response.data.dancerWorkshop);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [workshopId]);

    useEffect(() => {
        let data = "";

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `http://localhost:3000/users/isRegistered?userId=${userId}&workshopId=${workshopId}`,
            headers: {},
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
                setIsRegistered(true);
            });
    }, [workshopId, userId]);

    const handleRegister = () => {
        let data = "";

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `http://localhost:3000/users/sign-up-workshop?userId=${userId}&workshopId=${workshopId}`,
            //http://localhost:3000/users/sign-up-workshop?userId=23&workshopId=1
            headers: {},
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="main">
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
                    <p>Workshops loading...</p>
                )}
                {isRegistered ? (
                    <button className="button">Vous êtes déja inscrit(e).</button>
                ) : (
                    <button className="button" onClick={() => handleRegister()}>
                        Inscrivez-vous
                    </button>
                )}

                <Modal isShowing={isShowing} hide={toggle} />
            </div>
        </div >
    );
};

export default Workshop;