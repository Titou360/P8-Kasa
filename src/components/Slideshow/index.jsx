import { useState } from 'react';
import ArrowForward from "./arrow_forward.png";
import ArrowBack from "./arrow_back.png";


export default function Slideshow ({pictures, title,})  {
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
            <section className='slideshow'>
                <img
                  src={currentPicture}
                  alt={title}
                  className='slideshow-picture'/>
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
    )
}
