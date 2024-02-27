import convertDate from "../../utils/convertDate";
import "./workshop_detail.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const Workshop_detail = ({ workshop }) => {
    const { title, city, hour, date, dancer_workshop_id } = workshop;
    console.log(date);
    const extractedDate = convertDate(date);
    const { day, month, year } = extractedDate;
    return (
        <div className="workshop_card">
            <p>{title + " à " + city + " à " + hour + " le " + day + "/" + month + "/" + year}</p>
            <Link to={`/workshop/${dancer_workshop_id}`}><button className="button">Plus de détails</button></Link>
        </div >
    )
};


export default Workshop_detail

Workshop_detail.propTypes = {
    workshop: PropTypes.string.isRequired,
};