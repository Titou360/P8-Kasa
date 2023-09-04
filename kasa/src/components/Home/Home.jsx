import PropertyCard from "../PropertyCard/PropertyCard";
import propertyData from "../../logements.json";

export default function Home() {
    return (
        <div>
            <h1>
              Chercher partout et ailleurs
            </h1>

            <div className="home-background">
            </div>


            <ul className="card-container">
                {propertyData.map(( property, index) => (
                <PropertyCard key={index} property={property} />
                ))}
          </ul>
          
        </div>
    );
}