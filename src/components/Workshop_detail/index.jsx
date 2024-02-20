import convertDate from "../../utils/convertDate";

const Workshop_detail = (workshop) => {
    const { title, city, hour, date } = workshop;

    const extractedDate = convertDate(date);
    const { day, month, year } = extractedDate;
    return (
        <div className="atelier">
            <p>{title + " à" + city + " à" + hour + " le" + day + "/" + month + "/" + year}</p>
            <button className="button" target="_blank">Plus de détails</button>
        </div>
    )
}

export default Workshop_detail