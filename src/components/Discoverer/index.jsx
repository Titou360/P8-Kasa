import { useState } from "react";
import arrow from "../Discoverer/arrow_back.png";

export default function Discoverer({ title, content, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); // Nouvel état

  const toggleDiscoverer = () => {
    if (isOpen) {
      setIsFadingOut(true); // Active the fade effect
      setTimeout(() => {
        setIsOpen(false); // Close the Discoverer after the fade effect
      }, 500); // Wait 500 ms (0.5s) for the fade effect finishing
    } else {
      setIsOpen(true);
      setIsFadingOut(false); // Desactivate the fade effect
    }
  };

  const arrowStyle = {
    transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)",
    transition: "transform 0.5s ease",
  };

  const contentStyle = {
    opacity: isFadingOut ? 0 : 1, // Utilisez l'état isFadingOut pour gérer l'opacité
    transition: "opacity 0.5s ease",
  };

  return (
    <div className={`discoverer ${isOpen ? "open" : "closed"}`}>
      <div className="discoverer--header" onClick={toggleDiscoverer}>
        <h3>{title}</h3>
        <img src={arrow} alt="Icône" style={arrowStyle} className="arrow-icon" />
      </div>
      <div className="discoverer--content" style={contentStyle}>
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