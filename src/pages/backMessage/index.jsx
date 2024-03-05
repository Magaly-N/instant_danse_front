import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./backMessage.css";

const BackMessage = () => {
    const [messages, setMessages] = useState(null);
    useEffect(() => {
        let data;

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "http://localhost:3000/message/read",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(response);
                setMessages(response.data.messages);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th style={{ width: "10%" }}>Id</th>
                    <th style={{ width: "10%" }}>Expéditeur</th>
                    <th style={{ width: "10%" }}>Destinataire</th>
                    <th style={{ width: "50%" }}>Contenu</th>
                    <th style={{ width: "5%" }}>Date</th>
                </tr>
            </thead>
            <tbody>
                {messages &&
                    messages.map((message) => (
                        <tr key={message.message_id}>
                            <td>{message.sender}</td>
                            <td>{message.receiver}</td>
                            <td>{message.content}</td>
                            <td>{message.date}</td>
                            <td style={{ whiteSpace: "nowrap" }}>
                                <Link to={`/editMessage/${message.message_id}`} className="submitButton">
                                    Editer
                                </Link>
                            </td>
                        </tr>
                    ))}

                {messages && !messages.length && (
                    <tr>
                        <td colSpan="4" className="text-center">
                            <div className="p-2">Pas de message à afficher</div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table >
    );
};

export default BackMessage;