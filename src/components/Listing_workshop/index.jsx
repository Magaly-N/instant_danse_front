import { useState, useEffect } from 'react';
import axios from 'axios';
import Workshop_detail from "../Workshop_detail";

const Listing_workshop = () => {
    const [workshops, setWorkshops] = useState(null);
    useEffect(() => {

        let data;

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/dancer_workshop/read',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                setWorkshops(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    }, [workshops])

    if (workshops) {
        return (
            workshops && workshops.map((item) => {
                return <Workshop_detail key={item.id} workshop={item} />

            })
        )
    }


}

export default Listing_workshop