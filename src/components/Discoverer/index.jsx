import { useState } from "react";
import Arrow from "../../assets/image/arrow/arrow_back.png";
import PropTypes from 'prop-types';

export default function Discoverer({title, content, key})  {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  };


  const contentContainerClass = `discoverer--content ${
    isContentVisible ? "lineDown" : ""
  }`;

  const arrowIconClass = `arrow-icon ${isContentVisible ? "open" : ""}`;

  return (
    <div className="discoverer">
      <button
        key={key}
        className="discoverer--header"
        onClick={toggleContent}
      >

        {title}

          <img
           src={Arrow}
           className={arrowIconClass}
           alt="Icône">
          </img>
      </button>

      {isContentVisible && (
      <div
        id="contentContainer"
        className={contentContainerClass}>
           {content}
      </div>
      )}


    </div>
  );
}


Discoverer.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};