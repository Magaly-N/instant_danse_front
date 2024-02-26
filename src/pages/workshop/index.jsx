import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Workshop = () => {
    const { dancer_workshop_id } = useParams();
    const [workshop, setWorkshop] = useState(null);

    useEffect(() => {

        let data = { dancer_workshop_id };

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/dancer_workshop/readOne/`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                setWorkshop(response.data.dancerWorkshop);


            })
            .catch((error) => {
                console.log(error);
            });

    }, [dancer_workshop_id])
    console.log(workshop);
    return (
        <div>Workshop</div>
    )
}

export default Workshop;