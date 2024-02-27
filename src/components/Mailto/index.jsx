import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./mailto.scss"

const Mailto = ({ mailto, label }) => {
    const handleClick = (e) => {
        window.location.href = `mailto:${mailto}`;
        e.preventDefault();
    };

    return (
        <Link to="#" className="mailto-link" onClick={handleClick}>
            {label}
        </Link>
    );
};

export default Mailto;

Mailto.propTypes = {
    mailto: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
