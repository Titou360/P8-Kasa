import PropertyCard from "../PropertyCard/PropertyCard";
import propertyData from "../../logements.json";

export default function Home() {
    return (
        <div>
            <h1>Bienvenue à toi 😅</h1>

            <ul className="card-container">
                {propertyData.map(( property, index) => (
                <PropertyCard key={index} property={property} />
                ))}
          </ul>
          
        </div>
    );
}