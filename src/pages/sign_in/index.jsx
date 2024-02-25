import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";


const Sign_in = () => {
    //const { email, password }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { email, password }
        data = JSON.stringify(data);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/users/sign-in',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Response succeeded!");
                    localStorage.setItem('role', response.data.role);
                    localStorage.setItem('token', response.data.token);
                    setEmail("");
                    setPassword("");
                    toast.success("Connecté");
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
            <h3>Formulaire de connexion</h3>
            <form className="main" onSubmit={handleSubmit}>
                <formGroup className="inputGroup">
                    <label className="inputLabel" id="email" htmlFor="email">Email</label>
                    <input
                        className="inputField"
                        type="email"
                        name="email"
                        placeholder="Veuillez entrez votre adresse email"
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
                        placeholder="Veuillez entrez votre mot de passe"
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
        </div>

    )
}

export default Sign_in;
