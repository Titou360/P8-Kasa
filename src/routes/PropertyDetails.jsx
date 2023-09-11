import { useParams, Navigate } from "react-router-dom";
import propertyData from "../logements.json";
import Carousel from "../components/Carousel";
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
              <Carousel
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
              alt="Photo de profil de l'hôte">
              </img>

            </div>

            </div>

            <div className="notes">
              <span className="notes--tags">{property.tags}</span>
              <span className="notes--rating">
                <Stars
              starRating={property.rating}
              /></span>
              
            </div>

            <div className="discoverer-container">
              <Discoverer
              title ="Description"
              content={property.description}
              className="discovererer-descritpion"
              />

              <Discoverer
              title ="Équipements"
              content={property.equipments}
              className="discovererer-equipments"
              />
            </div>

            </div>

      )}
    </div>
  );
}
