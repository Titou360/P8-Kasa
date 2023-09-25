import { useParams, Navigate } from "react-router-dom";
import propertyData from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Stars from "../components/Stars";
import Discoverer from "../components/Discoverer";


export default function PropertyDetail() {

  const { id } = useParams();
  const property = propertyData.find((item) => item.id === id)



  return (
    <div>
      { !property && (<Navigate to='Page404' replace= { true } />)}
      { property && (


            <div className="main-container">
              <Slideshow
                pictures={property.pictures}
                title={property.title}
            />

            <div className="details-container">

            <div className="property-titleandlocation">
              <span className="property-title">{property.title}</span>
              <span className="property-location">{property.location}</span>
            </div>

            <div className="property-ownerdetails">

              <span
               className="property-ownerdetails__name">
               {property.host.name}
              </span>

              <img
              className="property-ownerdetails__profilpic"
              src={property.host.picture}
              alt={property.host.name}>
              </img>


            </div>

            </div>

            <div className="property-notes">
              <span className="property-notes--tags">
              {property.tags.map((tag, index) => (
                <span key={index} className="tag">
                {tag}
              </span>
              ))}
              </span>

              <span className="property-notes--rating">
                <Stars
              starRating={property.rating}
              />
              </span>
              
            </div>

            <div className="discoverer-container">
              <Discoverer
              key={`discoverer-${property.title}-description`}
              title ="Description"
              content={property.description} 
              className="discoverer-descritpion"
              />

              <Discoverer
              key={`discoverer-${property.title}-equipments`}
              title ="Équipements"
              content={property.equipments.map((equipment) => (
                <span key={equipment.id}>{equipment}</span>
              ))}
              className="discoverer-equipments"
              />
            </div>

            </div>
      )}
    </div>
  );

  
}
