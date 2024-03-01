import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
//import UploadImage from "./components/Upload_image";
import { toast } from "react-toastify";
import "./sign_up.css";

const Sign_up = () => {
    //const { first_name, last_name, birthday, address, postcode, city, phone_number, dance_level, email, password, role }
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");
    const [postcode, setPost_Code] = useState("");
    const [city, setCity] = useState("");
    const [phone_number, setPhone_Number] = useState("");
    const [dance_level, setDance_Level] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const role = "user";

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { first_name, last_name, birthday, address, postcode, city, phone_number, dance_level, email, password, role }
        data = JSON.stringify(data);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/users/sign-up',
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
                    setBirthday("");
                    setAddress("");
                    setPost_Code("");
                    setCity("");
                    setPhone_Number("");
                    setDance_Level("");
                    setEmail("");
                    setPassword("");
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
        <div className="container">
            <h2>Formulaire d&apos;inscription</h2>

            {/*<Upload_image/>*/}

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
                    <label className="inputLabel" id="birthday" htmlFor="birthday">Date de naissance</label>
                    <input
                        className="inputField"
                        type="text"
                        /*value=""*/
                        name="birthday"
                        placeholder="Entrez votre date de naissance au format 0000-00-00"
                        onChange={(e) => {
                            setBirthday(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="address" htmlFor="address">Adresse</label>
                    <input
                        className="inputField"
                        type="text"
                        name="address"
                        placeholder="Entrez votre adresse"
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="postcode" htmlFor="postcode">CP</label>
                    <input
                        className="inputField"
                        type="text"
                        name="postcode"
                        placeholder="Entrez votre code postal"
                        onChange={(e) => {
                            setPost_Code(e.target.value);
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
                        placeholder="Entrez votre ville"
                        onChange={(e) => {
                            setCity(e.target.value);
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
                    <label className="inputLabel" id="dance_level" htmlFor="dance_level">Niveau de danse</label>
                    <select
                        className="inputField"
                        type="text"
                        name="dance_level"
                        onChange={(e) => {
                            setDance_Level(e.target.value);
                        }}
                        required>
                        <option value="defaultValue">Choisissez un niveau</option>
                        <option value="débutant">Débutant</option>
                        <option value="intermédiaire">Intermédiaire</option>
                        <option value="avancé">Avancé</option>
                    </select>
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
                    <label className="inputLabel" id="password" htmlFor="password">Mot de passe</label>
                    <input
                        className="inputField"
                        type="password"
                        name="password"
                        placeholder="Entrez un mot de passe"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className="inputGroup">
                    <input className="submitButton" type="submit" />
                </formGroup>
            </form>
        </div >

    );
};

export default Sign_up;
