import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal_register from "../../components/Modal_register";

const Workshop = () => {
    const id = useParams();
    const [workshop, setWorkshop] = useState(null);
    let workshopId = id.dancer_workshop_id;

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let data = "";

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `http://localhost:3000/dancer_workshop/readOne?id=${workshopId}`,
            headers: {},
            data: data,
        };

        axios.request(config)
            .then((response) => {
                setWorkshop(response.data.dancerWorkshop);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [workshopId])
    console.log(workshop);

    const handleRegister = () => {
        const userId = localStorage.getItem("userId");

        let data = "";

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `http://localhost:3000/users/sign-up-workshop?userId=${userId}&workshopId=${workshopId}`,
            headers: {},
            data: data,
        };

        axios.request(config)
            .then(() => {
                setShowModal(true);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (
        <div>
            {workshop ? (
                <>
                    {/* Display workshop details using workshop data */}
                    <h1>{workshop.title}</h1>
                    <p>{workshop.description}</p>
                    <p>{workshop.date}</p>
                    <p>{workshop.hour}</p>
                    <p>{workshop.duration}</p>
                    <p>{workshop.city}</p>
                    <p>{workshop.price}</p>
                    <p>{workshop.required_dance_level}</p>
                    <p>{workshop.person_max}</p>
                    {/* ... other details */}
                </>
            ) : (
                <p>Loading workshop details...</p>
            )}
            <button className="button" onClick={() => handleRegister()}>Inscrivez-vous</button>
            <Modal_register showModal={showModal} />
        </div>

    );
};

export default Workshop;