import "./home.css";
import Gallery from "../../components/Gallery";
import Workshop from "../../components/Workshop";
import Listing_workshop from "../../components/Listing_workshop";

const Home = () => {
    return (
        <div className="container">
            <Gallery />
            <Workshop />
            <Listing_workshop />
        </div>
    );
}

export default Home;