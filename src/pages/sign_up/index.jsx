import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./sign_up.css";

const sign_up = () => {
    //first_name, last_name, birthday, address, postcode, city, phone_number, dance_level, email, password, role
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");
    const [post_Code, setPost_Code] = useState("");
    const [city, setCity] = useState("");
    const [phone_Number, setPhone_Number] = useState("");
    const [dance_Level, setDance_Level] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const role = "user";

    const [submited, setSubmited] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { first_name, last_name, birthday, address, post_Code, city, phone_Number, dance_Level, email, password, role }
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
                    setSubmited(true);
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
                    toast.success("Message envoyé");
                    setTimeout(() => {
                        router.push("/");
                    }, 3000);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className={container_formul}>
            <form className={main} onSubmit={handleSubmit}>
                <formGroup className={inputGroup}>
                    <label className={inputLabel} htmlFor="first_name">Nom</label>
                    <input
                        className={inputField}
                        type="text"
                        name="first_name"
                        onChange={(e) => {
                            setFirst_Name(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className={inputGroup}>
                    <label className={inputLabel} htmlFor="last_name">Prénom</label>
                    <input
                        className={inputField}
                        type="text"
                        name="last_name"
                        onChange={(e) => {
                            setLast_Name(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className={inputGroup}>
                    <label className={inputLabel} htmlFor="birthday">Date d'anniversaire</label>
                    <input
                        className={inputField}
                        type="date"
                        value=""
                        name="birthday"
                        onChange={(e) => {
                            setBirthday(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className={inputGroup}>
                    <label className={inputLabel} htmlFor="address">Adresse</label>
                    <input
                        className={inputField}
                        type="text"
                        name="address"
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className={inputGroup}>
                    <label className={inputLabel} htmlFor="postCode">CP</label>
                    <input
                        className={inputField}
                        type="text"
                        name="postCode"
                        onChange={(e) => {
                            setPost_Code(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className={inputGroup}>
                    <label className={inputLabel} htmlFor="city">Ville</label>
                    <input
                        className={inputField}
                        type="text"
                        name="city"
                        onChange={(e) => {
                            setCity(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className={inputGroup}>
                    <label className={inputLabel} htmlFor="phoneNumber">Numéro de téléphone</label>
                    <input
                        className={inputField}
                        type="tel"
                        name="phoneNumber"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        onChange={(e) => {
                            setPhone_Number(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className={inputGroup}>
                    <label className={inputLabel} htmlFor="danceLevel">Niveau de danse</label>
                    <input
                        className={inputField}
                        type="text"
                        name="danceLevel"
                        onChange={(e) => {
                            setDance_Level(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className={inputGroup}>
                    <label className={inputLabel} htmlFor="email">Email</label>
                    <input
                        className={inputField}
                        type="email"
                        name="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className={inputGroup}>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        className={inputField}
                        type="password"
                        name="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required="required"
                    />
                </formGroup>
                <formGroup className={inputGroup}>
                    <input type="submit" className={submitButton} />
                </formGroup>
            </form>
        </div>

    )
}

export default sign_up;
