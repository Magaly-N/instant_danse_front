import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./slideshow.scss";

const slideImages = [
    {
        url: '/img/img1.jpg',
        alt: 'Quatre femmes qui dansent dans un studio de danse'
    },
    {
        url: '/img/img2.jpg',
        alt: 'Un homme et une femme qui dansent dans la rue'
    },
    {
        url: '/img/img3.jpg',
        alt: 'Six femmes prenant la pose sur un canapé'
    }
];

const Slideshow = () => {
    return (
        <div className="slide-container" role="group" aria-label="Carrousel d'images">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index} className="each-slide">
                        <div
                            className="slide"
                            style={{ backgroundImage: `url(${slideImage.url})` }}
                            role="img"
                            aria-label={slideImage.alt}
                        >
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
}

export default Slideshow;
