import { useState, useEffect } from "react";
import axios from "axios";
import convertDate from "../../utils/convertDate";
import WorkshopDetail from "../../components/WorkshopDetail";
import "./workshopFilter.scss";

const WorkshopFilter = () => {
    const [workshops, setWorkshops] = useState([]);
    const [filteredWorkshops, setFilteredWorkshops] = useState([]);
    const [dateFilter, setDateFilter] = useState("");
    const [cityFilter, setCityFilter] = useState("");
    const [uniqueDates, setUniqueDates] = useState();
    const [uniqueCities, setUniqueCities] = useState();

    const createOptionDates = () => {
        const dates = [
            ...new Set(workshops.map((workshop) => workshop.date)),
        ];
        return dates
    }

    const createOptionCities = () => {
        const cities = [
            ...new Set(workshops.map((workshop) => workshop.city)),
        ];

        return cities
    }


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
                setWorkshops(response.data.dancerWorkshops);
                if (workshops && workshops.length > 0) {
                    setUniqueDates(createOptionDates())
                    setUniqueCities(createOptionCities())
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);



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
            <div className="main">
                <div className="card">
                    <label className="inputLabel" htmlFor="dateFilter">
                        Sélectionner une date:
                    </label>
                    <select
                        className="inputSelect"
                        id="dateFilter"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                    >
                        <option value="">Date</option>
                        {uniqueDates && uniqueDates.map((date) => {
                            const formattedDate = convertDate(date);
                            return (
                                <option key={date} value={date}>
                                    {`${formattedDate.day}/${formattedDate.month}/${formattedDate.year}`}
                                </option>
                            );
                        })}
                    </select>
                    <div className="card">
                        <label className="inputLabel" htmlFor="cityFilter">
                            Sélectionner une ville:
                        </label>
                        <select
                            className="inputSelect"
                            id="cityFilter"
                            value={cityFilter}
                            onChange={(e) => setCityFilter(e.target.value)}
                        >
                            <option value="">Ville</option>
                            {uniqueCities && uniqueCities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="inputGroup">
                    <div aria-live="polite"> {/*indique à un lecteur d'écran que les mises à jour du contenu dynamique sur la page sont importantes, mais qu'elles ne nécessitent pas une interruption immédiate de ce que l'utilisateur est en train de faire*/}

                        {filteredWorkshops.length > 0 ? (
                            filteredWorkshops.map((item) => (
                                <WorkshopDetail
                                    className="workshopCard"
                                    key={item.dancer_workshop_id}
                                    workshop={item}
                                    aria-label="Détail de l'atelier"
                                />
                            ))
                        ) : (
                            <p>Workshops loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkshopFilter;