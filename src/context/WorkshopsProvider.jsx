import { useState, useEffect, createContext } from "react";
import axios from "axios";

// Création d'un contexte React pour stocker les données des ateliers
const WorkshopsContext = createContext();

// Déclaration du fournisseur de contexte WorkshopsProvider
const WorkshopsProvider = ({ children }) => {
    const [workshops, setWorkshops] = useState([]); // Tous les ateliers
    const [threeWorkshops, setThreeWorkshops] = useState([]); // Trois premiers ateliers
    const [uniqueDates, setUniqueDates] = useState([]); // Dates uniques
    const [uniqueCities, setUniqueCities] = useState([]); // Villes uniques

    const VITE_URL_API = import.meta.env.VITE_URL_API;

    // Fonction asynchrone pour récupérer les données des ateliers, des dates et des villes depuis l'API
    const fetchWorkshops = async () => {
        try {
            // Récupération des ateliers
            const workshopsResponse = await axios.get(
                `${VITE_URL_API}/dancer_workshop/read`
            );
            setWorkshops(workshopsResponse.data.dancerWorkshops);

            // Récupération des trois premiers ateliers
            const threeResponse = await axios.get(
                `${VITE_URL_API}/dancer_workshop/readThree`
            );
            setThreeWorkshops(threeResponse.data.dancerWorkshops);

            // Récupération des dates uniques des ateliers
            const datesResponse = await axios.get(
                `${VITE_URL_API}/dancer_workshop/readDates`
            );
            setUniqueDates(datesResponse.data.dates);

            // Récupération des villes uniques des ateliers
            const citiesResponse = await axios.get(
                `${VITE_URL_API}/dancer_workshop/readCities`
            );
            setUniqueCities(citiesResponse.data.cities);
        } catch (error) {
            console.log(error);
        }
    };

    // Utilisation de useEffect pour exécuter la fonction fetchWorkshops une seule fois après le montage du composant
    useEffect(() => {
        fetchWorkshops();
    }, []);

    // Retourne le fournisseur de contexte WorkshopsContext, en fournissant les valeurs des états et la fonction fetchWorkshops aux composants enfants
    return (
        <WorkshopsContext.Provider
            value={{
                threeWorkshops,
                workshops,
                uniqueDates,
                uniqueCities,
                fetchWorkshops,
            }}
        >
            {children}
        </WorkshopsContext.Provider>
    );
};

export { WorkshopsProvider };

export default WorkshopsContext;