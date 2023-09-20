import { useState } from "react";
import Arrow from "../../assets/image/arrow/arrow_back.png";
import PropTypes from 'prop-types';

export default function Discoverer({ title, content }) {
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
      <button className="discoverer--header" onClick={toggleContent}>
        {title}
        <img src={Arrow} className={arrowIconClass} alt="Icône" />
      </button>

      {isContentVisible && (
        <div id="contentContainer" className={contentContainerClass}>
          {content}
        </div>
      )}
    </div>
  );
}



Discoverer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
