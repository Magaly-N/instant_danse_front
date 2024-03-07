import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./backCategory.css";

const BackCategory = () => {
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        let data;

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "http://localhost:3000/category_workshop/read",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                setCategories(response.data.categoryWorkshops);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="main" >

            <table className="table">
                <thead>
                    <tr>
                        <th style={{ width: "5%" }}>Id</th>
                        <th style={{ width: "15%" }}>Nom</th>
                        <th style={{ width: "50%" }}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {categories &&
                        categories.map((category) => (
                            <tr key={category.category_workshop_id}>
                                <td>{category.category_workshop_id}</td>
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                                <td style={{ whiteSpace: "nowrap" }}>
                                    <Link to={`/editCategory/${category.category_workshop_id}`} className="submitButton">
                                        Editer
                                    </Link>
                                </td>
                            </tr>
                        ))}

                    {categories && !categories.length && (
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">Pas de catégories à afficher</div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table >
        </div >
    );
};

export default BackCategory;