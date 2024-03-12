import { useState, useEffect, createContext } from "react";
//import PropTypes from "prop-types";
import axios from "axios";

const WorkshopsContext = createContext();

const WorkshopsProvider = ({ children }) => {
    const [workshops, setWorkshops] = useState([]);
    const [uniqueDates, setUniqueDates] = useState([]);
    const [uniqueCities, setUniqueCities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/dancer_workshop/read`
                );
                setWorkshops(response.data.dancerWorkshops);
                setOptions(response.data.dancerWorkshops); // Call setOptions here
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const setOptions = (workshops) => {
        const dates = [...new Set(workshops.map((workshop) => workshop.date))];
        const cities = [...new Set(workshops.map((workshop) => workshop.city))];
        setUniqueDates(dates);
        setUniqueCities(cities);
    };

    return (
        <WorkshopsContext.Provider value={{ workshops, uniqueDates, uniqueCities }}>
            {children}
        </WorkshopsContext.Provider>
    );
};



export { WorkshopsProvider };

export default WorkshopsContext;