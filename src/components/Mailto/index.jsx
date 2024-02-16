import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Mailto = ({ mailto, label }) => {
    const handleClick = (e) => {
        window.location.href = `mailto:${mailto}`;
        e.preventDefault();
    };

    return (
        <Link to="#" onClick={handleClick}>
            {label}
        </Link>
    );
};

Mailto.propTypes = {
    mailto: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Mailto;
