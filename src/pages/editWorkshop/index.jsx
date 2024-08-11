import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import convertDate from "../../utils/convertDate";
import axios from "axios";
import { toast } from "react-toastify";
import useWorkshops from "../../hooks/useWorkshops";
import "../formWorkshop/formWorkshop.css";

const EditWorkshop = () => {
    const { dancer_workshop_id } = useParams();
    //const { title, description, date, hour, duration, city, price, requiredDanceLevel, personMax } = req.body;
    const [listCategory, setListcategory] = useState("");
    const [workshop, setWorkshop] = useState(null);

    const VITE_URL_API = import.meta.env.VITE_URL_API;

    const { fetchWorkshops } = useWorkshops();

    let navigate = useNavigate();

    // Fonction pour récupérer les données du workshop à éditer
    const fetchWorkshopCat = async () => {
        try {

            const workshopResponse = await axios.get(
                `${VITE_URL_API}/dancer_workshop/readOne?id=${dancer_workshop_id}`
            );
            setWorkshop(workshopResponse.data.dancerWorkshop);

            // Récupération de la liste des catégories de workshop
            const catResponse = await axios.get(
                `${VITE_URL_API}/category_workshop/read`
            );
            setListcategory(catResponse.data.categoryWorkshops);
        } catch (error) {
            console.log(error);
        }
    };

    // UseEffect pour charger les données du workshop lors du montage du composant
    useEffect(() => {
        fetchWorkshopCat();
    }, []);

    // Fonction pour gérer les changements dans les champs de saisie
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWorkshop((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Fonction pour soumettre le formulaire de modification du workshop
    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            workshop,
        };

        data = JSON.stringify(data);
        let user = JSON.parse(localStorage.getItem("user"));
        const token = user.token;

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${VITE_URL_API}/dancer_workshop/update?id=${dancer_workshop_id}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                if (response.status === 201) {
                    console.log("Response succeeded!");
                    fetchWorkshops(); // Recharge la liste des workshops après modification
                    setWorkshop(null); // Réinitialiser les données du workshop
                    toast.success("Stage/atelier modifié");
                    setTimeout(() => {
                        navigate("/");
                    }, 3000); //Redirige vers la page d'accueil après 3 secondes
                }
            })
            .catch((error) => {
                const errorMessage =
                    error.response?.data?.message || "An error occurred";
                toast.error(errorMessage);
            });
    };
    return (
        <div className="main">
            <h2>Formulaire de modification de stage ou d&apos;atelier</h2>

            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label className="inputLabel" htmlFor="title">
                        Titre du stage ou de l&apos;atelier
                    </label>
                    <input
                        id="title"
                        aria-label="Titre de l'atelier"
                        className="inputField"
                        type="text"
                        name="title"
                        value={workshop && workshop.title}
                        placeholder="Précisez s'il s'agit d'un stage ou un atelier"
                        onChange={handleInputChange}
                        required="required"
                    />
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" htmlFor="workshopSelect">
                        Sélectionner une catégorie de danse
                    </label>
                    <select
                        name="category_workshop_id"
                        aria-label="Sélectionner une catégorie de danse"
                        className="inputSelect"
                        id="workshopSelect"
                        onChange={handleInputChange}
                    >
                        {listCategory && listCategory.length > 0 ? (
                            <>
                                {" "}
                                <option value={workshop && workshop.category_workshop_id}>
                                    {workshop && workshop.name}
                                </option>
                                {listCategory.map((category) => (
                                    <option
                                        key={category.category_workshop_id}
                                        value={category.category_workshop_id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </>
                        ) : (
                            <option value="">Aucune catégorie disponible</option>
                        )}
                    </select>
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" htmlFor="description">
                        Description du stage ou de l&apos;atelier
                    </label>
                    <textarea
                        aria-label="Description de l'atelier"
                        className="inputTextarea"
                        type="text"
                        id="description"
                        value={workshop && workshop.description}
                        name="description"
                        placeholder="Décrivez brièvement le contenu du stage ou de l'atelier"
                        onChange={handleInputChange}
                        required="required"
                    />
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" htmlFor="date">
                        Date
                    </label>
                    <input
                        id="date"
                        aria-label="Date de l'atelier"
                        className="inputField"
                        type="date"
                        name="date"
                        value={workshop && workshop.date}
                        placeholder="Entrez la date"
                        onChange={handleInputChange}
                        required="required"
                    />
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" htmlFor="hour">
                        Heure du stage ou de l&apos;atelier
                    </label>
                    <input
                        id="hour"
                        aria-label="Heure de l'atelier"
                        className="inputField"
                        type="time"
                        name="hour"
                        value={workshop && workshop.hour}
                        placeholder="Entrer l'heure du stage ou de l'atelier"
                        onChange={handleInputChange}
                        required="required"
                    />
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" htmlFor="duration">
                        Durée du stage ou de l&apos;atelier
                    </label>
                    <input
                        id="duration"
                        aria-label="Durée de l'atelier"
                        className="inputField"
                        type="number"
                        value={workshop && workshop.duration}
                        name="duration"
                        placeholder="Indiquez la durée du stage ou de l'atelier"
                        onChange={handleInputChange}
                        required="required"
                    />
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" htmlFor="city">
                        Ville
                    </label>
                    <input
                        id="city"
                        aria-label="Lieu de l'atelier"
                        className="inputField"
                        type="text"
                        name="city"
                        value={workshop && workshop.city}
                        placeholder="Indiquez le lieu du stage ou de l'atelier"
                        onChange={handleInputChange}
                        required="required"
                    />
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" htmlFor="price">
                        Prix
                    </label>
                    <input
                        id="price"
                        aria-label="Prix de l'atelier"
                        className="inputField"
                        type="number"
                        step="any"
                        name="price"
                        value={workshop && workshop.price}
                        placeholder="Indiquez le coût du stage ou de l'atelier"
                        onChange={handleInputChange}
                        required="required"
                    />
                </div>
                <div className="inputGroup">
                    <label
                        className="inputLabel"
                        id="requiredDanceLevel"
                        htmlFor="requiredDanceLevel"
                    >
                        Niveau de danse
                    </label>
                    <select
                        aria-label="Niveau de danse demandé pour l'atelier"
                        className="inputSelect"
                        type="text"
                        name="required_dance_level"
                        onChange={handleInputChange}
                        required
                    >
                        <option value={workshop.requiredDanceLevel}>
                            {workshop && workshop.requiredDanceLevel}
                        </option>
                        <option value="débutant">Débutant</option>
                        <option value="intermédiaire">Intermédiaire</option>
                        <option value="avancé">Avancé</option>
                    </select>
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" htmlFor="personMax">
                        Nombre de personnes maximum
                    </label>
                    <input
                        id="personMax"
                        aria-label="Nombre de personnes maximum pour l'atelier"
                        className="inputField"
                        type="number"
                        name="text"
                        value={workshop && workshop.personMax}
                        placeholder="Indiquez le nombre maximum de participants au stage ou à l'atelier"
                        onChange={handleInputChange}
                        required="required"
                    />
                </div>
                <div className="inputGroup">
                    <input
                        className="submitButton"
                        type="submit"
                        aria-label="Soumettre le formulaire"
                    />
                </div>
            </form>
        </div>
    );
};

export default EditWorkshop;