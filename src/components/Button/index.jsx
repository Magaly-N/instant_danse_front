import "./button.css";
import { useEffect } from "react";
import "./button.scss";

const Button = (props) => {
    const { onClick, text, type, color } = props;

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
        //style={{ [`--btn-bg`]: color }}
        >
            {text}
        </button>
    );
};

export default Button
