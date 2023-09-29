import { useParams, Navigate } from "react-router-dom";
import propertyData from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Stars from "../components/Stars";
import Discoverer from "../components/Discoverer";


export default function PropertyDetail() {

  const { id } = useParams();
  const property = propertyData.find((item) => item.id === id)



  return (
    <div className="container-site">
      { !property && (<Navigate to='Page404' replace= { true } />)}
      { property && (


            <>
              <Slideshow
                pictures={property.pictures}
                title={property.title}
              />

            <div id="details-container">

              <div className="property-titleandlocation">
              <div className="property-title">{property.title}</div>
              <div className="property-location">{property.location}</div>
              </div>

              <div className="property-ownerdetails">

              <div className="property-ownerdetailsandnotation">

                <div
                 className="property-ownerdetails__name">
                 {property.host.name}
                </div>

                <img
                className="property-ownerdetails__profilpic"
                src={property.host.picture}
                alt={property.host.name}>
                </img>
              </div>
              

              <div className="property-tags--rating">
                <Stars
              starRating={property.rating}
              />
              </div>


            </div>

            <div className="property-tags">
              <div className="property-tags--tags">
              {property.tags.map((tag, index) => (
                <div key={index} className="tag">
                {tag}
              </div>
              ))}
              </div>
              
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
            </>
      )}
    </div>
  );

  
}
