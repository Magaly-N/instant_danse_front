import { useState, useEffect } from 'react';
import axios from "axios";
import DarkMode from '../../components/DarkMode';

const User_profile = () => {
    const [user, setUser] = useState(null);
    console.log(user);
    const [isEditing, setEditing] = useState(false);



    useEffect(() => {
        let data;
        let user = JSON.parse(localStorage.getItem("user"));
        const id = user.userId;
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
                setUser(response.data);
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated User Data:', user.data);
        setEditing(false);
    };

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">Nom</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={user && user.firstName}
                        onChange={handleInputChange}

                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Prénom</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={user && user.lastName}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">Date de naissance</label>
                    <input
                        type="text"
                        id="birthday"
                        name="birthday"
                        value={user && user.birthday}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Adresse postale</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={user && user.address}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postCode">Code Postal</label>
                    <input
                        type="text"
                        id="postCode"
                        name="postCode"
                        value={user && user.postCode}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">Ville</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={user && user.city}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Numéro de téléphone</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={user && user.phoneNumber}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={user && user.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
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
            <DarkMode />
        </div>
    );
};

export default User_profile;
