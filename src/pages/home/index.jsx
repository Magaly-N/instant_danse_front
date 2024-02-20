import "./home.css";
import Gallery from "../../components/Gallery";
import Search_create_workshop from "../../components/Search_create_workshop";
import Listing_workshop from "../../components/Listing_workshop";


const Home = () => {
    return (
        <div className="container">
            <Gallery />
            <Search_create_workshop />
            <Listing_workshop />
        </div>
    );
}

export default Home;