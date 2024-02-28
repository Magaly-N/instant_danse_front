import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import "./form_workshop.css";

const Form_workshop = () => {
    //const { title, description, date, hour, duration, city, price, requiredDanceLevel, personMax } = req.body;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [duration, setDuration] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [requiredDanceLevel, setRequiredDanceLevel] = useState("");
    const [personMax, setPersonMax] = useState("");
    const role = "admin";

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = { title, description, date, hour, duration, city, price, requiredDanceLevel, personMax, role }
        data = JSON.stringify(data);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/dancer_workshop/create',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Response succeeded!");
                    setTitle("");
                    setDescription("");
                    setDate("");
                    setHour("");
                    setDuration("");
                    setCity("");
                    setPrice("");
                    setRequiredDanceLevel("");
                    setPersonMax("");
                    toast.success("Stage/atelier crée");
                    setTimeout(() => {
                        navigate("/");
                    }, 3000);
                }
            })
            .catch((error) => {
                const errorMessage = error.response?.data?.message || 'An error occurred';
                toast.error(errorMessage);
            }
            )
    }
    return (
        <div className="container_formul">
            <h2>Formulaire de création de stage ou d&apo;atelier</h2>

            <form className="main" onSubmit={handleSubmit}>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="title" htmlFor="title">Titre du stage ou de l&apo;atelier</label>
                    <input
                        className="inputField"
                        type="text"
                        name="title"
                        placeholder="Précisez s'il s'agit d'un stage ou un atelier et le style de danse"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="description" htmlFor="description">Description du stage ou de l&apo;atelier</label>
                    <textarea
                        className="textarea"
                        type="text"
                        name="description"
                        placeholder="Décrivez brièvement le contenu du stage ou de l'atelier"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="date" htmlFor="date">Date</label>
                    <input
                        className="inputField"
                        type="text"
                        name="date"
                        placeholder="Entrez la date"
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="hour" htmlFor="hour">Heure du stage ou de l&apo;atelier</label>
                    <input
                        className="inputField"
                        type="text"
                        name="hour"
                        placeholder="Entrer l'heure du stage ou de l'atelier"
                        onChange={(e) => {
                            setHour(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="duration" htmlFor="duration">Durée du stage ou de l&apo;atelier</label>
                    <input
                        className="inputField"
                        type="text"
                        name="duration"
                        placeholder="Indiquez la durée du stage ou de l'atelier"
                        onChange={(e) => {
                            setDuration(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="city" htmlFor="city">Ville</label>
                    <input
                        className="inputField"
                        type="text"
                        name="city"
                        placeholder="Indiquez le lieu du stage ou de l'atelier"
                        onChange={(e) => {
                            setCity(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="price" htmlFor="price">Prix</label>
                    <input
                        className="inputField"
                        type="text"
                        name="price"
                        placeholder="Indiquez le coût du stage ou de l'atelier"
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="requiredDanceLevel" htmlFor="requiredDanceLevel">Niveau de danse</label>
                    <select
                        className="inputField"
                        type="text"
                        name="requiredDanceLevel"
                        onChange={(e) => {
                            setRequiredDanceLevel(e.target.value);
                        }}
                        required>
                        <option value="defaultValue">Choisissez un niveau</option>
                        <option value="débutant">Débutant</option>
                        <option value="intermédiaire">Intermédiaire</option>
                        <option value="avancé">Avancé</option>
                    </select>
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="personMax" htmlFor="personMax">Nombre de personnes maximum</label>
                    <input
                        className="inputField"
                        type="text"
                        name="text"
                        placeholder="Indiquez le nombre maximum de participants au stage ou à l'atelier"
                        onChange={(e) => {
                            setPersonMax(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <input className="submitButton" type="submit" />
                </formGroup>
            </form>
        </div >

    )
}

export default Form_workshop;