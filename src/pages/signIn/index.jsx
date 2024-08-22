import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { userService } from "../../utils/userService";
import ReCaptcha from '../../components/Recaptcha';

const SignIn = () => {
    //const { email, password }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState('');
    const [submitEnabled, setsubmitEnabled] = useState(false);

    const VITE_URL_API = import.meta.env.VITE_URL_API;

    let navigate = useNavigate();

    // UseEffect pour vérifier si un token a été reçu du captcha et autoriser la soumission du formulaire
    useEffect(() => {
        if (token.length) {
            setsubmitEnabled(true)
        }
    }, [token])

    // Fonction appelé lors de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { email, password }
        data = JSON.stringify(data);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${VITE_URL_API}/users/signIn`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                // Si la requête réussit (statut 200), effectue les actions suivantes
                if (response.status === 200) {
                    console.log("Response succeeded!");
                    // Appelle la fonction de service userService.login pour connecter l'utilisateur avec les données reçues
                    userService.login(response.data.user);
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

    // Fonction handleToken appelée lorsqu'un token est obtenu à partir du captcha
    const handleToken = (token) => {
        setToken(token)
    }

    return (
        <div>
            <h2>Formulaire de connexion</h2>
            <form className="formGroup" onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label className="inputLabel" htmlFor="email">Email</label>
                    <input
                        id="email"
                        aria-label="Entrez votre adresse email"
                        className="inputField"
                        type="email"
                        name="email"
                        placeholder="Veuillez entrez votre adresse email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required="required"
                    />
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" htmlFor="password">Mot de passe</label>
                    <input
                        id="password"
                        aria-label="Entrez votre mot de passe"
                        className="inputField"
                        type="password"
                        name="password"
                        placeholder="Veuillez entrez votre mot de passe"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required="required"
                    />
                </div>
                <div>
                    <input
                        disabled={!submitEnabled}
                        className="submitButton"
                        type="submit"
                        aria-label="Se connecter" />
                </div>
            </form >
            <div className="captcha"><ReCaptcha siteKey={'6LfWUpQpAAAAAMoVodDRgNjKpsNj5PNtaD2PN04h'} callback={handleToken} />
            </div>
        </div>

    )
}

export default SignIn;
