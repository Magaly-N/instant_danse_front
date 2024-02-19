
const Workshop_detail = ({ workshop }) => {
    const { title, city, hour, date } = workshop;

    return (
        <div className="atelier">
            <p>{title + " à" + city + " à" + hour + " à" + date}</p>
            <button className="button" target="_blank">Plus de détails</button>
        </div>
    )
}

export default Workshop_detail