import { useState } from "react";
import arrow from "../Discoverer/arrow_back.png";

export default function Discoverer({ title, content}) {
  const [isOpen, setIsOpen] = useState(false);

  const arrowIconClass = isOpen ? "arrow-icon" : "arrow-icon";

  const contentLineDown = `discoverer--content ${isOpen ? "open" : "closed"} ${isOpen ? "lineDown" : ""}`;

 

  const toggleDiscoverer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`discoverer ${isOpen ? "open" : "closed"}`}>

      <div className="discoverer--header" onClick={toggleDiscoverer}>
        <h3>{title}</h3>
        <img src={arrow} alt="Icône" className={arrowIconClass} />
      </div>
      <div className={contentLineDown}>

        {title === "Équipements" ? (
          <div className="property--equipments">
            {content.map((equipment, index) => (
              <span key={index}>
                {equipment}
                {index < content.length - 1 && <br />}
              </span>
            ))}
          </div>
        ) : (
          content
        )}
      </div>
    </div>
  );
}