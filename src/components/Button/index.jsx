import "./button.css";
import { useEffect } from "react";
import "./button.scss";

const Button = (props) => {
    const { onClick, text, type } = props;

    useEffect(() => {
        return () => {
            console.log("MOUNT AND UNMOUNT BUTTON");
        };
    }, []);

    return (
        <button
            type={type || "button"}
            className="button"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button
