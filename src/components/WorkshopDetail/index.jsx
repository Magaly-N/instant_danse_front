import convertDate from "../../utils/convertDate";
import "./workshopDetail.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const WorkshopDetail = ({ workshop }) => {
    const { title, city, hour, date, dancer_workshop_id } = workshop;
    console.log(date);

    const extractedDate = convertDate(date);
    const { day, month, year } = extractedDate;

    return (
        <div className="workshopCard">
            <p>{title + " à " + city + " à " + hour + " le " + day + "/" + month + "/" + year}</p>
            <Link to={`/workshop/${dancer_workshop_id}`}><button className="button">Plus de détails</button></Link>
        </div>

    )
};

WorkshopDetail.propTypes = {
    workshop: PropTypes.object.isRequired,
};

export default WorkshopDetail;

