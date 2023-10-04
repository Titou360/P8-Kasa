import { useState } from 'react';
import ArrowForward from "../../assets/image/arrow/arrow_forward.png";
import ArrowBack from "../../assets/image/arrow/arrow_back.png";
import PropTypes from 'prop-types';


export default function Slideshow({ pictures, title }) {
    const pictureLength = pictures.length;

    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

    const pictureCounter = `${currentPictureIndex + 1} / ${pictureLength}`;

    const previousPicture = () => {
        const previousIndex = currentPictureIndex - 1;
        setCurrentPictureIndex(previousIndex < 0 ? pictureLength - 1 : previousIndex);
    };

    const nextPicture = () => {
        if (currentPictureIndex === pictureLength - 1) {
            // If we are on the last picture
            let currentIndex = currentPictureIndex;
            const interval = setInterval(() => {
                currentIndex = currentIndex === 0 ? pictureLength - 1 : currentIndex - 1;
                setCurrentPictureIndex(currentIndex);
                if (currentIndex === 0) {
                    // Arrêtez le défilement rapide une fois que nous sommes revenus à la première image
                    clearInterval(interval);
                }
            }, 50); // Changez d'image toutes les 100 millisecondes
        } else {
            // Sinon, passez simplement à l'image suivante
            setCurrentPictureIndex(currentPictureIndex + 1);
        }
    }

    const currentPicture = pictures[currentPictureIndex];
    if (pictureLength === 1) {
        return (
            <section className='slideshow'>
                <img
                    src={currentPicture}
                    alt={title}
                    className='slideshow-picture-alone' />
            </section>
        );
    }

    return (
        <section className="slideshow">
            <img src={currentPicture} alt={title} className="slideshowPicture" />
            <img src={ArrowBack} alt="Flèche gauche " onClick={previousPicture} className="slideshowArrow slideshowArrowLeft "></img>
            <img src={ArrowForward} alt='Flèche droite' onClick={nextPicture} className="slideshowArrow slideshowArrowRight"></img>
            <div className="slideshowCounter"> {pictureCounter}</div>
        </section>
    );
}


Slideshow.propTypes = {
      title: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};