import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./backUser.css";

const BackUser = () => {
    const [users, setUsers] = useState(null);
    console.log(users);
    useEffect(() => {
        let data;

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "http://localhost:3000/users/read",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                setUsers(response.data.users);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="main">
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ width: "5%" }}>Id</th>
                        <th style={{ width: "15%" }}>Prenom</th>
                        <th style={{ width: "15%" }}>Nom</th>
                        <th style={{ width: "15%" }}>Email</th>
                        <th style={{ width: "15%" }}>Niveau</th>
                        <th style={{ width: "25%" }}>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((user) => (
                            <tr key={user.user_id}>
                                <td>{user.user_id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.dance_level}</td>
                                <td style={{ whiteSpace: "nowrap" }}>
                                    <Link to={`/editUser/${user.user_id}`} className="submitButton">
                                        Editer
                                    </Link>
                                </td>
                            </tr>
                        ))}

                    {users && !users.length && (
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">Pas de membres à afficher</div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table >
        </div>
    );
};

export default BackUser;