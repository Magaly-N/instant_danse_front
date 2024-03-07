import { useState, useEffect } from 'react';
import axios from "axios";
//import UploadImage from "./components/Upload_image";
import "./userProfile.css";

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [isEditing, setEditing] = useState(false);
    let actualUser = JSON.parse(localStorage.getItem("user"));
    const id = actualUser.userId;
    useEffect(() => {
        let data;

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `http://localhost:3000/users/readOneUser?id=${id}`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(response);
                setUser(response.data.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(user);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Updated User Data:', user.data);
        setEditing(false);
    };

    return (
        <div className="main">

            <h2>Mes informations personnelles</h2>

            {/*<Upload_image/>*/}

            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label className="inputLabel" id="address" htmlFor="address">Adresse</label>
                    <input
                        className="inputField"
                        type="text"
                        name="address"
                        value={user && user.address}
                        onChange={handleInputChange}

                    />
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" id="postCode" htmlFor="postCode">CP</label>
                    <input
                        className="inputField"
                        type="text"
                        name="postCode"
                        value={user && user.postCode}
                        onChange={handleInputChange}

                    />
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" id="city" htmlFor="city">Ville</label>
                    <input
                        className="inputField"
                        type="text"
                        name="city"
                        value={user && user.city}
                        onChange={handleInputChange}

                    />
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" id="phoneNumber" htmlFor="phoneNumber">Numéro de téléphone</label>
                    <input
                        className="inputField"
                        type="tel"
                        name="phoneNumber"
                        value={user && user.phoneNumber}
                        onChange={handleInputChange}

                    />
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" id="danceLevel" htmlFor="danceLevel">Niveau de danse</label>
                    <select
                        className="inputField"
                        type="text"
                        name="danceLevel"
                        onChange={handleInputChange}
                        required>
                        <option value={user && user.danceLevel} >{user && user.danceLevel}</option>
                        <option value="débutant" >Débutant</option>
                        <option value="intermédiaire" >Intermédiaire</option>
                        <option value="avancé" >Avancé</option>
                    </select>
                </div>
                <div className="inputGroup">
                    <label className="inputLabel" id="email" htmlFor="email">Email</label>
                    <input
                        className="inputField"
                        type="email"
                        name="email"
                        value={user && user.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {isEditing ? (
                    <button type="submit">Save Changes</button>
                ) : (
                    <button type="button" onClick={() => setEditing(true)}>
                        Edit Profile
                    </button>
                )}
            </form>
        </div >
    );
};

export default UserProfile;
