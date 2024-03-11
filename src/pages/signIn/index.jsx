import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { userService } from "../../utils/userService";
import ReCaptcha from '../../components/Recaptcha';
import "./signIn.scss";


const SignIn = () => {
    //const { email, password }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState('');
    const [submitEnabled, setsubmitEnabled] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        if (token.length) {
            setsubmitEnabled([true])
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { email, password }
        data = JSON.stringify(data);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/users/signIn',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Response succeeded!");
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

    const handleToken = (token) => {
        setToken(token)
    }


    return (
        <div className="main">
            <h2>Formulaire de connexion</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label className="inputLabel" id="email" htmlFor="email">Email</label>
                    <input
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
                    <label className="inputLabel" id="password" htmlFor="password">Mot de passe</label>
                    <input
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

                <div><ReCaptcha siteKey={'6LfWUpQpAAAAAMoVodDRgNjKpsNj5PNtaD2PN04h'} callback={handleToken} /></div>

                <div className="inputGroup">
                    <input
                        disabled={!submitEnabled}
                        className="submitButton"
                        type="submit"
                        aria-label="Se connecter" />
                </div>
            </form>
        </div>

    )
}

export default SignIn;
