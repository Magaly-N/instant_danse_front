import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Workshop = () => {
    const id = useParams();
    const [workshop, setWorkshop] = useState(null);
    let workshopId = id.dancer_workshop_id;

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
            <Link to={`/form_register`}><button className="button">Inscrivez-vous</button></Link>
        </div>
    );
};

export default Workshop;