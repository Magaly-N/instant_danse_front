import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import "./form_register.css";

const Form_register = () => {
    //const { first_name, last_name, email, phone_number }
    // const {dancer_workshop}
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone_Number] = useState("");
    const [dancer_workshop, setDancer_workshop] = useState("");

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { first_name, last_name, email, phone_number, dancer_workshop }
        data = JSON.stringify(data);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/dancer_workshop',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Response succeeded!");
                    setFirst_Name("");
                    setLast_Name("");
                    setEmail("");
                    setPhone_Number("");
                    setDancer_workshop("");
                    toast.success("Inscription validée");
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
            <h2>Formulaire d&apos;inscription à un stage ou un atelier</h2>

            <form className="main" onSubmit={handleSubmit}>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="first_name" htmlFor="first_name">Nom</label>
                    <input
                        className="inputField"
                        type="text"
                        name="first_name"
                        placeholder="Entrez votre nom"
                        onChange={(e) => {
                            setFirst_Name(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="last_name" htmlFor="last_name">Prénom</label>
                    <input
                        className="inputField"
                        type="text"
                        name="last_name"
                        placeholder="Entrez votre prénom"
                        onChange={(e) => {
                            setLast_Name(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="email" htmlFor="email">Email</label>
                    <input
                        className="inputField"
                        type="email"
                        name="email"
                        placeholder="Entrez votre adresse email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="phone_number" htmlFor="phone_number">Numéro de téléphone</label>
                    <input
                        className="inputField"
                        type="tel"
                        name="phone_number"
                        placeholder="Entrez votre numéro de téléphone"
                        pattern="^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$"
                        onChange={(e) => {
                            setPhone_Number(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" htmlFor="workshopSelect">Sélectionner un stage ou un atelier</label>
                    {/* <select id="workshopSelect">
                        {dancer_workshop.map(workshop => (
                            <option key={workshop.id} value={workshop.title}>
                                {workshop.title} - {workshop.date} {workshop.hour}
                            </option>
                        ))}
                    </select>*/}
                </formGroup>
                <formGroup className="inputGroup">
                    <input className="submitButton" type="submit" />
                </formGroup>
            </form>
        </div >
    );
};

export default Form_register;