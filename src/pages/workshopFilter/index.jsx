import { useState, useEffect } from "react";
import convertDate from "../../utils/convertDate";
import WorkshopDetail from "../../components/WorkshopDetail";
import useWorkshops from "../../hooks/useWorkshops";

const WorkshopFilter = () => {
    // Utilisation du hook useWorkshops pour obtenir les ateliers et les informations de filtrage
    const { workshops, uniqueDates, uniqueCities } = useWorkshops();

    const [dateFilter, setDateFilter] = useState("");
    const [cityFilter, setCityFilter] = useState("");
    const [filteredWorkshops, setFilteredWorkshops] = useState([]);

    // Applique les filtres lorsque les filtres ou les ateliers changent
    useEffect(() => {
        if (workshops) {
            let filteredByDate = workshops;
            // Filtre les ateliers par date si une date est sélectionnée
            if (dateFilter) {
                filteredByDate = workshops.filter(
                    (workshop) => workshop.date <= dateFilter
                );
            }
            let filteredByCity = filteredByDate;
            // Filtre les ateliers par ville si une ville est sélectionnée
            if (cityFilter) {
                filteredByCity = filteredByDate.filter(
                    (workshop) => workshop.city === cityFilter
                );
            }

            // Mise à jour des ateliers filtrés
            setFilteredWorkshops(filteredByCity);
        }
    }, [dateFilter, cityFilter]);

    return (
        <div>
            <div>
                <div className="cardsFilter">
                    <div className="card cardFilter">
                        <label className="inputLabel" htmlFor="dateFilter">
                            Recherche par date
                        </label>
                        <select
                            className="inputSelect"
                            id="dateFilter"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                        >
                            <option value="">Dates</option>
                            {uniqueDates.map((date) => {
                                const formattedDate = convertDate(date);
                                return (
                                    <option key={date} value={date}>
                                        {`${formattedDate.day}/${formattedDate.month}/${formattedDate.year}`}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="card cardFilter">
                        <label className="inputLabel" htmlFor="cityFilter">
                            Recherche par ville
                        </label>
                        <select
                            className="inputSelect"
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
                </div>
                <div className="listWorkshop" aria-live="polite">
                    {" "}
                    {/*indique à un lecteur d'écran que les mises à jour du contenu dynamique sur la page sont importantes, mais qu'elles ne nécessitent pas une interruption immédiate de ce que l'utilisateur est en train de faire*/}
                    {filteredWorkshops && filteredWorkshops.length > 0 ? (
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
    );
};

export default WorkshopFilter;