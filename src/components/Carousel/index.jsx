import { useState } from 'react';
import ArrowForward from "./arrow_forward.png";
import ArrowBack from "./arrow_back.png";


export default function Caroussel ({pictures, title,})  {
    const pictureLenght = pictures.length;

    const [currentPictureIndex, setCurrentPictureIndex] = useState (0);

    const pictureCounter = `${currentPictureIndex +1 } / ${pictureLenght}`

    const previousPicture = () => {
        const previousIndex = currentPictureIndex -1
        setCurrentPictureIndex (previousIndex <0 ? pictureLenght -1 : previousIndex);
    };

    const nextPicture = () => {
        const nextIndex = currentPictureIndex +1
        setCurrentPictureIndex (nextIndex >= pictureLenght ? 0 : nextIndex)
    };

//No display for the directions arrow and the counter if porperty has only one image

    const currentPicture = pictures[currentPictureIndex]
    if (pictureLenght === 1) {
        return (
            <section className='carousel'>
                <img
                  src={currentPicture}
                  alt={title}
                  className='carousel-picture'/>
            </section>
        );
    }

    return (
        <section className="carousel">
            <img src={currentPicture} alt={title} className="carouselPicture" />
            <img src={ArrowBack} alt="Flèche gauche " onClick={previousPicture} className="carouselArrow carouselArrowLeft "></img>
            <img src={ArrowForward} alt='Flèche droite' onClick={nextPicture} className="carouselArrow carouselArrowRight"></img>
            <div className="carouselCounter"> {pictureCounter}</div>
        </section>
    )
}
