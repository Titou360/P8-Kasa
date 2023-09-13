import { useState } from "react";
import Arrow from "../Slideshow/arrow_back.png"

export default function Discoverer({ title, content })  {
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
      <div>
        <p 
        className={contentContainerClass}
        >
           {content}
       </p>
      </div>
      )}


    </div>
  );
}
