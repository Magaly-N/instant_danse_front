import { useState, useEffect } from "react";
import axios from "axios";
import "./workshopFilter.css";

const WorkshopFilter = () => {
    const [workshops, setWorkshops] = useState([]);
    const [filteredWorkshops, setFilteredWorkshops] = useState([]);
    const [dateFilter, setDateFilter] = useState("");
    const [cityFilter, setCityFilter] = useState("");
    const [uniqueDates, setUniqueDates] = useState([]);
    const [uniqueCities, setUniqueCities] = useState([]);


    useEffect(() => {
        let data = "";

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `http://localhost:3000/dancer_workshop/read`,
            headers: {},
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(response);
                setWorkshops(response.data.dancerWorkshop || []);

                const dates = [...new Set(workshops.map((workshop) => workshop.date))];
                const cities = [...new Set(workshops.map((workshop) => workshop.city))];

                setUniqueDates(dates);
                setUniqueCities(cities);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [workshops]);

    useEffect(() => {
        // Appliquer les filtres
        const applyFilters = () => {
            let filteredByDate = workshops;
            if (dateFilter) {
                filteredByDate = workshops.filter(
                    (workshop) => workshop.date === dateFilter
                );
            }

            let filteredByCity = filteredByDate;
            if (cityFilter) {
                filteredByCity = filteredByDate.filter(
                    (workshop) => workshop.city === cityFilter
                );
            }

            setFilteredWorkshops(filteredByCity);
        };

        applyFilters();
    }, [dateFilter, cityFilter, workshops]);

    return (
        <>
            <div className="container">
                <label htmlFor="dateFilter">Sélectionner une date:</label>
                <select
                    id="dateFilter"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                >
                    <option value="">Dates</option>
                    {uniqueDates.map((date) => (
                        <option key={date} value={date}>
                            {date}
                        </option>
                    ))}
                </select>

                <label htmlFor="cityFilter">Sélectionner une ville</label>
                <select
                    id="cityFilter"
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                >
                    <option value="">Ville</option>
                    {uniqueCities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
            <div className="workshop_card">
                {filteredWorkshops.length > 0 ? (
                    filteredWorkshops.map((workshop) => (
                        <div key={workshop.id} className="workshop_item">
                            <h2>{workshop.title}</h2>
                            <p>{workshop.description}</p>
                            <p>{workshop.date}</p>
                            <p>{workshop.hour}</p>
                            <p>{workshop.duration}</p>
                            <p>{workshop.city}</p>
                            <p>{workshop.price}</p>
                            <p>{workshop.required_dance_level}</p>
                            <p>{workshop.person_max}</p>
                        </div>
                    ))
                ) : (
                    <p>No workshops match the filters.</p>
                )}
            </div>
        </>
    );
};

export default WorkshopFilter;