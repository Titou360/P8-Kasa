import PropertyCard from "../components/PropertyCard/PropertyCard";
import propertyData from "../logements.json";
import Banner from "../components/Banner/Banner";

export default function Home() {
    return (
        <div>

        <Banner
        text="🙂Chez vous, partout et ailleurs 🙂"
        background="../../assets/background/falaise.webp"
        />

        <ul className="card-container">
            {propertyData.map(( property, index) => (
            <PropertyCard key={index} property={property} />
            ))}
        </ul>
          
        </div>
    );
}