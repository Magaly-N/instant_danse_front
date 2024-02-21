import convertDate from "../../utils/convertDate";
import "./workshop_detail.css";

const Workshop_detail = ({ workshop }) => {
    const { title, city, hour, date } = workshop;
    console.log(date);
    const extractedDate = convertDate(date);
    const { day, month, year } = extractedDate;
    return (
        <div className="workshop_card">
            <p>{title + " à " + city + " à " + hour + " le " + day + "/" + month + "/" + year}</p>
            <button className="button">Plus de détails</button>
        </div>
    )
}

export default Workshop_detail